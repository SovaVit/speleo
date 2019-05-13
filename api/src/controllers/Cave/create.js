const { NotAcceptable } = require("rest-api-errors");
const _ = require("lodash");

const create = ({ Cave }, { config }) => async (req, res, next) => {
  try {
    const cave = new Cave();

    if (!req.body) {
      throw new NotAcceptable(405, "There is no data");
    }
    _.extend(cave, req.body);

    await cave.save();

    return res.status(200).send({ cave });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
