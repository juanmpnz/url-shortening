const express = require("express");
const bp = require('body-parser')
const cookieParser = require("cookie-parser");
const path = require("path")
const db = require("./db");
const routes = require("./routes");
const User = require("./models/User")
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const { route } = require("./routes");
const app = express();

 
// Passport
app.use(cookieParser());
app.use(session({ secret: "urlshort" }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// Routes
app.use("/api", routes)
app.use("/images", express.static(path.join(__dirname, "images")))

// Local Strategy

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      console.log(email);
      User.findOne({ where: { email } })
        .then((user) => { 
          if (!user) {
            return  ()=>{
              done(null, false); // user not found
            }
          }
          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              console.log("pass error")
              return done(null, false); // invalid password
            }
            done(null, user); // success :D
          });
        })
        .catch(done);
    }
  )
);

// How we save the user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
// How we look for the user
passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});


//Server & data base setting
db.sync({ force: false })
  .then(() =>
    app.listen(8000, () => {
      console.log("Server listening on port 8000");
    })
  )
  .catch((err) => console.log("e",err));
