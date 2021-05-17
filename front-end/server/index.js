const express = require("express");
const cors = require("cors");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const AmazonStrategy = require("passport-amazon").Strategy; 
const GithubStrategy = require("passport-github").Strategy; 
const GoogleStrategy = require("passport-google-oauth20").Strategy; 
const InstagramStrategy = require("passport-instagram").Strategy; 
const SpotifyStrategy = require("passport-spotify").Strategy; 
const TwitchStrategy = require("passport-twitch.js").Strategy; 
const keys = require("../config");
const chalk = require("chalk");
let user = {};


passport.serializeUser( fn: (user, cb) => {
  cb(null, user); 
}); 

passport.deserializeUser((user, cb) => {
  cb(null, user); 
}); 

const app = express(); 
app.use(cors()); 
app.use(passport.initialize()); 

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

app.get("/auth/facebook", passport.authenticate( strategy: "facebook")); 
app.get("/auth/facebook/callback",
  passport.authenticate(("facebook"),
    options:(req, res) => {
      res.redirect("/profile"); 
    }
  ));

  // Amazon Strategy
passport.use(
  new AmazonStrategy(
    {
      clientID: keys.AMAZON.clientID,
      clientSecret: keys.AMAZON.clientSecret,
      callbackUrl: "/auth/amazon/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(chalk.blue(JSON.stringify(profile)));
      user = { ...profile };
      return cb(null, profile); 
    }
  )
);

app.get("/auth/amazon", passport.authenticate( strategy: "amazon", options {
  scope: ["profile"]
})); 
app.get("/auth/amazon/callback",
  passport.authenticate(("amazon"),
    options:(req, res) => {
      res.redirect("/profile"); 
    }
  ));

  // Github Strategy
  passport.use(
    new GithubStrategy(
      {
        clientID: keys.GITHUB.clientID,
        clientSecret: keys.GITHUB.clientSecret,
        callbackUrl: "/auth/github/callback",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile); 
      }
    )
  );
  
  app.get("/auth/github", passport.authenticate( strategy: "github")); 
  app.get("/auth/github/callback",
    passport.authenticate(("github"),
      options:(req, res) => {
        res.redirect("/profile"); 
      }
    ));

      // Google Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: keys.GOOGLE.clientID,
        clientSecret: keys.GOOGLE.clientSecret,
        callbackUrl: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile); 
      }
    )
  );
  
  app.get("/auth/google", passport.authenticate( strategy: "google", options: {
    scope: ["profile", "email"]
  })); 
  app.get("/auth/google/callback",
    passport.authenticate(("google"),
      options:(req, res) => {
        res.redirect("/profile"); 
      }
    ));

          // Instagram Strategy
  passport.use(
    new InstagramStrategy(
      {
        clientID: keys.INSTAGRAM.clientID,
        clientSecret: keys.INSTAGRAM.clientSecret,
        callbackUrl: "/auth/instagram/callback",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile); 
      }
    )
  );
  
  app.get("/auth/instagram", passport.authenticate( strategy: "instagram")); 
  app.get("/auth/instagram/callback",
    passport.authenticate(("instagram"),
      options:(req, res) => {
        res.redirect("/profile"); 
      }
    ));

    // Spotify Strategy
  passport.use(
    new SpotifyStrategy(
      {
        clientID: keys.SPOTIFY.clientID,
        clientSecret: keys.SPOTIFY.clientSecret,
        callbackUrl: "/auth/spotify/callback",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile); 
      }
    )
  );
  
  app.get("/auth/spotify", passport.authenticate( strategy: "spotify")); 
  app.get("/auth/spotify/callback",
    passport.authenticate(("spotify"),
      options:(req, res) => {
        res.redirect("/profile"); 
      }
    ));

        // Twitch Strategy
  passport.use(
    new TwitchStrategy(
      {
        clientID: keys.TWITCH.clientID,
        clientSecret: keys.TWITCH.clientSecret,
        callbackUrl: "/auth/twitch/callback",
      },
      (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile); 
      }
    )
  );
  
  app.get("/auth/twitch", passport.authenticate( strategy: "twitch")); 
  app.get("/auth/twitch/callback",
    passport.authenticate(("twitch"),
      options:(req, res) => {
        res.redirect("/profile"); 
      }
    ));


  app.get("/user", (req, res) => {
    console.log("getting user data!"); 
    res.send(user); 
  }); 

  app.get("/auth/logout", (req, res) => {
    console.log("logging out!"); 
    user = {}; 
    res.redirect("/"); 
  }); 


  const PORT = process.env.PORT || 5000; 
  app.listen(PORT); 