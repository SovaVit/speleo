const signIn = (req, res) => {
  const { token, exp } = req;
  return res
    .status(200)
    .send({ token, exp })
    .end();
};

module.exports = signIn;
