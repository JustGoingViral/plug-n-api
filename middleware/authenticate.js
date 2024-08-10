const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, config.secretKey);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};