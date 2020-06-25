const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const users = require("./routes/api/users");
const router = require("./routes/api/routes");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

app.use("/", router);

// Routes
app.use("/api/users", users);

//MongoDB setup
const db = require('./config/keys').mongoURI
mongoose.connect(db);

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

module.exports = app;