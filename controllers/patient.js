const axios = require('axios');
const config = require('../config');

module.exports = {
  getPatient: async (req, res) => {
    try {
      const response = await axios.get(`${config.nexCloudApiUrl}/Patient`);
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting patient data' });
    }
  },
};