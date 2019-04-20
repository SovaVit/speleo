const { sendOne, authenticate } = require("../../middleware");

const signIn = (req, res) => {

  const { token, exp } = req;
  return sendOne(res, { token, exp });
};

module.exports = signIn;
