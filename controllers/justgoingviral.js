const axios = require('axios');
const config = require('../config');

module.exports = {
  createPatientInJustGoingViral: async (req, res) => {
    try {
      const patientData = req.body;
      const response = await axios.post(`${config.justGoingViralApiUrl}/patient`, patientData);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating patient in Just Going Viral' });
    }
  },
};