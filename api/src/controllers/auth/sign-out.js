const { sendOne } = require("../../middleware");

const signOut = (req, res) => {
  sendOne(res, { success: true });
};

module.exports = signOut;
