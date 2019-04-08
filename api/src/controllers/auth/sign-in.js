const { sendOne } = require("../../middleware");

const signIn = (req, res) => {
  const { token } = req;
  return sendOne(res, { token });
};

module.exports = signIn;
