const remove = ({ Expedition }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const expedition = await Expedition.findOne({ _id });
    await Expedition.deleteOne({ _id });
    const countRecords = await Expedition.find({}).countDocuments();
    res
      .status(200)
      .json({ expedition, countRecords })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
