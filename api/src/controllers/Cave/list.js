const _ = require("lodash");

const list = ({ Cave }, { config }) => async (req, res, next) => {
  let { skip, search } = req.query;

  skip = skip ? parseInt(skip, 10) : 0;

  try {
    const query = {};
    if (search) {
      _.extend(query, { name: new RegExp(`${search}`, "i") });
    }
    const countRecords = await Cave.find({}).countDocuments();
    const cave = await Cave.find(query)

      .skip(skip)
      .limit(40)
      .sort({ name: 1 });

    return res
      .status(200)
      .json({ cave, countRecords })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { list };
