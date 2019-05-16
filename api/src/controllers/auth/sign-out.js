const signOut = (req, res) => {
  res
    .status(200)
    .send({ success: true })
    .end();
};

module.exports = signOut;
