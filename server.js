const dotenv = require('dotenv'); // loads the dotenv libary, allows me to use environment variables from .env file
dotenv.config(); // this activates dotenv by reading the .env file and loading the variables into process.env

const express = require('express'); // importing the express frameworkkso I can create routes and HTTP requests
const app = express(); // this line initializes the express app instance

const mongoose = require('mongoose'); // loading mongoose to connect to MongoDB and define models
const methodOverride = require('method-override'); // lets me use PUT and DELETE methods in HTML forms
const session = require('express-session'); // session middleware to manage login sessions
const morgan = require('morgan'); // logs http requests in the terminal for debugging

const authController = require('./controllers/auth'); // imports the auth controller to handle signup/login/logout
const Device = require('./models/device'); // imports the Device model to interact with the database

const port = process.env.PORT ? process.env.PORT : 3000; // use port from .env or fallback to 3000

mongoose.connect(process.env.MONGODB_URI); // connects to MongoDB using the URI from .env

mongoose.connection.on('connected', () => {
  console.log(`✅ Connected to MongoDB ${mongoose.connection.name}.`); // log when successfully connected to MongoDB
});

// middleware

// engine setup

// routes

// listening port