const signIn = (req, res, next) => {
  try {
    const { token, exp } = req;
    return res
      .status(200)
      .json({ token, exp })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = signIn;
