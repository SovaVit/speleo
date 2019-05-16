const _ = require("lodash");

const update = ({ Cave }, { config }) => async (req, res, next) => {
  const { _id } = req.params;

  try {
    const cave = await Cave.findOne({ _id });
    _.extend(cave, req.body);
    await cave.save();
    res.status(200).send({ cave }).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { update };
