const express = require("express");
const passport = require("passport");

const router = express.Router();

router.get("/payment",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.send("Stari ti si vse zapil. Še za liziko nimaš.");
    }
  );
  
  module.exports = router;