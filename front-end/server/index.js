const express = require("express");
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const keys = require("../config");
const chalk = require("chalk");
let user = {};


passport.serializeUser( fn: (user, cb) => {
  cb(null, user); 
}); 

passport.deserializeUser((user, cb) => {
  cb(null, user); 
}); 

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.FACEBOOK.clientID,
      clientSecret: keys.FACEBOOK.clientSecret,
      callbackUrl: "/auth/facebook/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile); 
    }
  )
);

const app = express(); 
app.use(cors()); 
app.use(passport.initialize()); 

app.get("/auth/facebook", passport.authenticate( strategy: "facebook")); 
app.get("/auth/facebook/callback",
  passport.authenticate(("facebook"),
    options:(req, res) => {
      res.redirect("/profile"); 
    }
  ));