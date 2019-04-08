const { NotAcceptable } = require("rest-api-errors");
const { sendOne } = require("../../middleware");
const _ = require("lodash");

const create = ({ Cave }, { config }) => async (req, res, next) => {
  try {
    const cave = new Cave();
    if (!req.body) {
      throw new NotAcceptable(405, "There is no data");
    }
    _.extend(cave, req.body);
    
    await cave.save();

    return sendOne(res, { cave });
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
