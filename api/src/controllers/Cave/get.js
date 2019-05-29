const { BadRequest } = require("rest-api-errors");
const get = ({ Cave }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const cave = await Cave.findOne({ _id });
    if (!cave) {
      throw new BadRequest(400, "Bad Request");
    }
    res
      .status(200)
      .json({ cave })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { get };
