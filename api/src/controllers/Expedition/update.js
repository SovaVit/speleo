const _ = require("lodash");
const { sendOne } = require("../../middleware");

const update = ({ Expedition }, { config }) => async (req, res, next) => {
  const { _id } = req.params;

  try {
    const expedition = await Expedition.findOne({ _id });
    _.extend(expedition, req.body);
    await expedition.save();
    const countRecords = await Expedition.find({}).countDocuments();
    return res
      .status(200)
      .json({ expedition, countRecords })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
