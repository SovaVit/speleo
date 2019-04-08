const get = ({ Cave }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const cave = await Cave.findOne({ _id });
    res.status(200).send({ cave });
  } catch (error) {
    next(error);
  }
};

module.exports= { get };
