const passport = require("passport");
const passportJwt = require("passport-jwt"); 
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const User = require("../models/Users");

//Strategy, s katerim se ekstrakta jwt token
passport.use(new StrategyJwt({ 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  
    secretOrKey:  "jwt$%&%&=)(#1234535ert",

    // Callback funkcija kako bomo uporabili to strategijo. dodamo payload, ki ga pričakujemo
    // Validiranje jwtja
    }, 
    function (jwtPayload, done) {
        return User.findOne({ where: { id: jwtPayload.id }})
        .then((user) => {
            return done(null, user);
        }).catch((err) => {
            return done(err);
        });
    }
    )
);

