const fs = require("fs");
const { BadRequest } = require("rest-api-errors");

const remove = ({ Cave, Photo }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  const url = __basedir + "/public";
  try {
    const cave = await Cave.findOne({ _id });
    await Cave.deleteOne({ _id });
    const photos = await Photo.find({ caveId: _id });
    photos.forEach(async item => {
      const path = url + item.photoPath;
      await fs.unlink(path, err => {
        if (err) {
          throw new BadRequest(400, "File not found");
        }
      });
      await Photo.deleteOne({ caveId: _id });
    });

    const countRecords = await Cave.find({}).countDocuments();
    res
      .status(200)
      .json({ cave, countRecords })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
