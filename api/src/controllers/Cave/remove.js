const remove = ({ Cave }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const cave = await Cave.findOne({ _id });
    await Cave.deleteOne({ _id });
    //await Post.remove({ _id });
    res.status(200).send({ cave }).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
