const _ = require("lodash");
const { sendOne } = require("../../middleware");

const update = ({ Expedition }, { config }) => async (req, res, next) => {
  const { _id } = req.params;

  try {
    const expedition = await Expedition.findOne({ _id });
    _.extend(expedition, req.body);
    await expedition.save();
    return res
      .status(200)
      .send({ expedition })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
