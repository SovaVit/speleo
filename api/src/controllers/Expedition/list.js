const _ = require("lodash");

const list = ({ Expedition }, { config }) => async (req, res, next) => {
  let { caveId } = req.query;

  try {
    const query = {};
    if (caveId) {
      _.extend(query, { caveId: `${caveId}` });
    }
    const expedition = await Expedition.find(query).sort({ _id: -1 });

    res.status(200).send({ expedition });
  } catch (error) {
    next(error);
  }
};

module.exports = { list };
