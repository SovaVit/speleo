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

    return res.status(200).send({ expedition });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
