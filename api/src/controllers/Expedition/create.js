const { MethodNotAllowed } = require("rest-api-errors");

const _ = require("lodash");

const create = ({ Expedition }, { config }) => async (req, res, next) => {
  try {
    const expedition = new Expedition();
    if (!req.body) {
      throw new MethodNotAllowed(405, "Should by body");
    }
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

module.exports = { create };
