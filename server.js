require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require("path");
const jobsRouter = require('./routes/jobs');
const usersRouter = require('./routes/users');
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;



const app = express();

passport.use(new GoogleStrategy());


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/jobs', jobsRouter);
app.use('/users', usersRouter);


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
  .catch(error => handleError(error));


const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB database connection established successfully"));
connection.on('error', err => logError(err));


// Serve static content for the app from the "public" directory in the application directory.
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });
}


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

