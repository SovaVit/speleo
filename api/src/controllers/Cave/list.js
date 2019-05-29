const _ = require("lodash");

const list = ({ Cave }, { config }) => async (req, res, next) => {
  let { limit, skip, search } = req.query;

  skip = skip ? parseInt(skip, 10) : 0;
  limit = limit ? parseInt(limit, 10) : 100;

  try {
    const query = {};
    if (search) {
      _.extend(query, { name: new RegExp(`${search}`, "i") });
    }
    const cave = await Cave.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ _id: -1 });

    return res.status(200).json({ cave }).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { list };
