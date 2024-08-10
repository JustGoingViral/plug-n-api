const axios = require('axios');
const config = require('../config');

module.exports = {
  createPatientInAgency: async (req, res) => {
    try {
      const patientData = req.body;
      const response = await axios.post(`${config.agencyApiUrl}/patient`, patientData);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating patient in Agency' });
    }
  },
};