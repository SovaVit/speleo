const remove = ({ Expedition }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const expedition = await Expedition.findOne({ _id });
    await Expedition.deleteOne({ _id });

    res
      .status(200)
      .json({ expedition })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
