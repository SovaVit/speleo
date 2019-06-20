const remove = ({ Cave }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const cave = await Cave.findOne({ _id });
    await Cave.deleteOne({ _id });
    const countRecords = await Cave.find({}).countDocuments();
    res.status(200).json({ cave, countRecords }).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
