const { Unauthorized } = require("rest-api-errors");


const localAuth = ({ User }) => async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
    });

    if (!user) {
      throw new Unauthorized(401, "Incorrect username or password.");
    }
    req.user = user || {};
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = { localAuth };
