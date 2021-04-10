const bcrypt = require("bcryptjs");
const UserSchema = require("../models/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  UserSchema.findById(id, (err, user) => {
    done(err, user);
  });
});

// Calling passport API
passport.use(
  //tell it to use LocalStrategy to find a form field named email. It should expect an
  //email, password, and callback (something to do when finished).
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    // Mongoose will try to match a User Schema (User.js) with the same email.
    UserSchema.findOne({ email: email })
      //after this promise, Mongoose will return either a matched User schema or "null"
      .then((user) => {
        // if no user is matched with that email, create new user from the Mongoose User Schema.
        if (!user) {
          const newUser = new UserSchema({ email, password });
          // Hash(encrypt) password before saving in database
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, encryptedPassword) => {
              if (err) throw err;
              newUser.password = encryptedPassword;
              //Mongoose saves the new user to MongoDB
              newUser
                .save()
                .then((user) => {
                  return done(null, user);
                })
                .catch((err) => {
                  return done(null, false, { message: err });
                });
            });
          });
          // Return other user
        } else {
          // Mongoose finds a User with same email. Compare passwords.
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;

            if (isMatch) {
              //if password matchm return user info.
              return done(null, user);
            } else {
              //otherwise return Wrong password message.
              return done(null, false, { message: "Wrong password" });
            }
          });
        }
      })
      .catch((err) => {
        return done(null, false, { message: err });
      });
  })
);

module.exports = passport;
