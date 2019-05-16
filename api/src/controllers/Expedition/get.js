const { BadRequest } = require("rest-api-errors");
const get = ({ Expedition }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const expedition = await Expedition.findOne({ _id });
    if (!expedition) {
      throw new BadRequest(400, "Bad Request");
    }
    res
      .status(200)
      .send({ expedition })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
