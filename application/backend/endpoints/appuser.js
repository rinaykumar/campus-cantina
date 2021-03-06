/* Endpoints needed for app users */

const express = require('express');
const database = require('../db');
const router = express.Router();
const validator = require('validator'); // Used for input validation

router.use(express.json());

// Holds the current app user info
let appUser = new Object();

// Set initial app user to guest
appUser.name = 'Guest';
appUser.email = 'guest';
appUser.type = 'guest';

// Customer log in
router.get('/customer-login', (req, res) => {
  console.log('Called customer-login endpoint');
  appUser.type = req.query.appUserType;

  // Validate email
  if (validator.isEmail(req.query.appUserEmail)) {
    // Generate SQL query
    let query =
      `SELECT * FROM SFSU_Customers WHERE Email = "` +
      req.query.appUserEmail +
      `"`;

    // Get customer info from db
    database.query(query, (err, result) => {
      appUser.email = result[0].Email;
      appUser.name = result[0].Name;
      res.send(appUser);
    });
  } else {
    // Invalid email
    res.send('Invalid customer email');
  }
});

// Owner log in
router.get('/owner-login', (req, res) => {
  console.log('Called owner-login endpoint');
  appUser.type = req.query.appUserType;

  // Validate email
  if (validator.isEmail(req.query.appUserEmail)) {
    // Generate SQL query
    let query =
      `SELECT * FROM Restaurant_Owners WHERE Email = "` +
      req.query.appUserEmail +
      `"`;

    // Get owner info from db
    database.query(query, (err, result) => {
      appUser.email = result[0].Email;
      appUser.name = result[0].Name;
      res.send(appUser);
    });
  } else {
    // Invalid email
    res.send('Invalid owner email');
  }
});

// Driver log in
router.get('/driver-login', (req, res) => {
  console.log('Called driver-login endpoint');
  appUser.type = req.query.appUserType;

  // Validate email
  if (validator.isEmail(req.query.appUserEmail)) {
    // Generate SQL query
    let query =
      `SELECT * FROM Drivers WHERE Email = "` + req.query.appUserEmail + `"`;

    // Send driver info from db
    database.query(query, (err, result) => {
      appUser.email = result[0].Email;
      appUser.name = result[0].Name;
      res.send(appUser);
    });
  } else {
    // Invalid email
    res.send('Invalid driver email');
  }
});

// Get app user
router.get('/get-appuser', (req, res) => {
  console.log('Called get-appuser endpoint');
  res.send(appUser);
});

// Sign out
router.get('/signout', (req, res) => {
  console.log('Called signout endpoint');
  appUser.email = 'guest';
  appUser.name = 'Guest';
  appUser.type = 'guest';
  res.send(appUser);
});

module.exports = router;
