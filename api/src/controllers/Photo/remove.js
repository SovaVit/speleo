const fs = require("fs");
const { BadRequest } = require("rest-api-errors");

const remove = ({ Photo }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  const url = __basedir + "/public";
  try {
    const photo = await Photo.findOne({ _id });
    const path = url + photo.photoPath;
    await fs.unlink(path, err => {
      if (err) {
        throw new BadRequest(400, "File not found");
      }
    });
    await Photo.deleteOne({ _id });

    res.status(200).send({ photo });
  } catch (error) {
    next(error);
  }
};

module.exports = { remove };
