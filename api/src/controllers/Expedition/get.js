const get = ({ Expedition }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const expedition = await Expedition.findOne({ _id });
    res.status(200).send({ expedition });
  } catch (error) {
    
    next(error);
  }
};

module.exports = { get };
