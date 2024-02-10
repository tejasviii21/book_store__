const jwt = require('jsonwebtoken');

const authTokenGenerator = userId => {
  return jwt.sign({ id: userId }, "tejasvi", {
    expiresIn: '30d',
  });
};

module.exports = authTokenGenerator; 
