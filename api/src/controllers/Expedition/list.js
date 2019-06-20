const _ = require("lodash");

const list = ({ Expedition }, { config }) => async (req, res, next) => {
  let { caveName, skip } = req.query;

  skip = skip ? parseInt(skip, 10) : 0;
  try {
    const query = {};
    if (caveName === null) {
      _.extend(query, { caveName: `${caveName}` });
    }
    
    const countRecords = await Expedition.find({}).countDocuments();
    const expedition = await Expedition.find(query)
      .skip(skip)
      .limit(40)
      .sort({ _id: -1 });
    res
      .status(200)
      .json({ expedition, countRecords })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { list };
