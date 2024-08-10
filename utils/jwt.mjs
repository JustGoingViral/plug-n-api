const jwt = require('jsonwebtoken');

module.exports = {
  sign: (payload, secretKey, options) => {
    return jwt.sign(payload, secretKey, options);
  },
  verify: (token, secretKey) => {
    return jwt.verify(token, secretKey);
  },
};