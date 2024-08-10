const express = require('express');
const authenticate = require('./middleware/authenticate');
const patientController = require('./controllers/patient');
const justGoingViralController = require('./controllers/justgoingviral');
const agencyController = require('./controllers/agency');
const config = require('./config');
const axios = require('axios');

const router = express.Router();

router.get('/patient', authenticate, patientController.getPatient);

router.post('/justgoingviral/patient', authenticate, justGoingViralController.createPatientInJustGoingViral);

router.post('/agency/patient', authenticate, agencyController.createPatientInAgency);

router.post('/token', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Verify the username and password
  if (username === config.credentials.username && password === config.credentials.password) {
    // Generate a JWT token
    const token = jwt.sign({ username }, config.secretKey, { expiresIn: '1h' });

    // Return the JWT token
    res.json({ token });
  } else {
    // Return an error message
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

module.exports = router;