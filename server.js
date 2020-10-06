// Express
const express = require('express');
const app = express();

// to hide my key for mongodb
require("dotenv").config();

// Routes
const routes = require('./routes');

// Define middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect app to Heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// MongoDB
const mongoose = require('mongoose');
// connect Mongoose to mongodb with db named venueapp
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true,  useUnifiedTopology: true });
// to check if mongo is connected or not
mongoose.connection.on('connected', function(){console.log("Mongo DB connected")});
mongoose.connection.on('error', function(err){console.error(err)});
mongoose.connection.on('disconnected', function(){console.log("Mongo DB disconnected")});

// Connect routes using express app
app.use(routes);

// Port for BE
app.listen(process.env.PORT || 3001, function(){
    console.log("Express server listening");
  });
