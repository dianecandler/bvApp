// Express
const express = require('express');
const app = express();

require("dotenv").config();

// Routes
const routes = require('./routes');

// Define middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Connect app to Heroku

// MongoDB
const mongoose = require('mongoose');
// connect Mongoose to mongodb with db named venueapp
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.connect("mongodb://localhost/bvAppDev", { useNewUrlParser: true,  useUnifiedTopology: true });
if(process.env.NODE_ENV !== 'production'){app.use(express.static("client/build"))}

mongoose.connection.on('connected', function(){console.log("Mongo DB connected")});
mongoose.connection.on('error', function(err){console.error(err)});
mongoose.connection.on('disconnected', function(){console.log("Mongo DB disconnected")});

// Connect routes
app.use(routes);

// Port for BE
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log('backend server running on port 3001');
});
