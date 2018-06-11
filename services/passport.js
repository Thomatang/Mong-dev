const passport = require ('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // from ../models/User file

passport.serializeUser((user, done) => {
  done(null, user.id);// user.id gets access to id generated by MongoDB
});

passport.deserializeUser((id, done)=> {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: "/auth/google/callback",
  proxy: true
},
(accessToken, refreshToken, profile, done) => {
  User.findOne({googleID: profile.id})
    .then((existingUser) => {
      if(existingUser) {
        done(null, existingUser);
      } else {
        new User ({googleID: profile.id, name: profile.name.familyName})
          .save()
          .then(user => done(null, user));
      }
    })
  }
)
);

passport.use(new FacebookStrategy({
  clientID: keys.facebookClientID,
  clientSecret: keys.facebookClientSecret,
  callbackURL: "/auth/facebook/callback",
  proxy: true
},
(accessToken, refreshToken, profile, done) => {
  User.findOne({facebookID:profile.id})
    .then((existingUser) => {
      if(existingUser) {
        done(null, existingUser);
      }else {
        new User({facebookID: profile.id,name: profile.displayName})
          .save()
          .then(user => done(null, user));
      }
    })

    // console.log('access Token', accessToken);
    // console.log('refresh Token', refreshToken);
    // console.log('profile', profile);
  })
);
