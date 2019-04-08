const _ = require('lodash');

const update = ({ Cave }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  
  try {
    const cave = await Cave.findOne({ _id });
    _.extend(post, req.body);
    await post.save();
    res.status(200).send({ cave });
  } catch (error) {
    next(error);
  }
};

module.exports= { update };
