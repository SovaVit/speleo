const { Unauthorized } = require("rest-api-errors");
const { username, password } = require("../../config");

const localUser = (req, res, next) => {
  if (req.body.username !== username) {
    throw new Unauthorized(401, "Incorrect username or password.");
  }
  if (req.body.password !== password) {
    throw new Unauthorized(401, "Incorrect username or password.");
  }
  return next();
};

module.exports = { localUser };

// app.use(jwt({
//    secret: 'hello world !',
//    credentialsRequired: false,
//    getToken: function fromHeaderOrQuerystring (req) {
//      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//          return req.headers.authorization.split(' ')[1];
//      }
//      return null;
//    }
//  }));
