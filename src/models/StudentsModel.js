const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String },
  roll: { type: String },
  class: { type: String }
});

const StudentsModel = mongoose.model('Students', studentsSchema);

// module.exports = StudentsModel;

// example usage in an Express route
// const express = require('express');
// const router = express.Router();
// const StudentsModel = require('./studentsModel');
// const WorksModel = require('./worksModel');
// const OTPModel = require('./otpModel');

// Your route handling code here...

module.exports = StudentsModel;

/*  "email":"abc@email.com",
    "firstName":"Samia",
    "lastName":"Akter",
    "mobile":"01707657994",
    "password":"1234",
    "address":"Rangpur",
    "roll":"12",
    "class":"1st Year"*/


