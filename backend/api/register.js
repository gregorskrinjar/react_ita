const express = require("express");
const User = require('../models/Users');

const router = express.Router();

router.post("/register", async (req, res) => {
    const { fullName, email, password } = req.body;
    console.log("PODATKI V POSTU: " + fullName + " " + email + " " + password)

    // If user already exsist
    const alreadyExistsUser = await User.findOne({ where: { email } }).catch((err) => {
        console.log("Error: ", err);
    });

    if(alreadyExistsUser) {
        return res.status(202).json({ message: "Uporabnik s tem emailom že obstaja!" });
    }

    const newUser = new User({fullName, email, password});
    const savedUser = await newUser.save().catch((err) => {
        console.log("Error: ", err);
        res.status(404).json({ error: "Trenutno se ni mogoče registrirati!" });
    });
    
    if(savedUser) {
        res.status(200).json({message: "Hvala, da ste se registrirali!"});
    }
   
});

module.exports = router;