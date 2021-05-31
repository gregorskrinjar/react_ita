const express = require("express");
const User = require('../models/Users');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const userWithEmail = await User.findOne({ where: { email } }).catch((err) => {
        console.log("Error: ", err);
    });

    if(!userWithEmail) {
        return res.status(202).json({ message: "Email ali geslo se ne ujema!" });
    }

    if(userWithEmail.password !== password) {
        return res.status(202).json({ message: "Email ali geslo se ne ujema!" });
    }

    // pošilanje payloada
    const jwtToken = jwt.sign(
        { id: userWithEmail.id, email: userWithEmail.email },  
        "jwt$%&%&=)(#1234535ert");
    
    res.status(200).json({ message: "Dobrodošli nazaj", token: jwtToken, email: userWithEmail.email });
});

module.exports = router;