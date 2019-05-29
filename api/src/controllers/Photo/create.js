const { NotFound } = require("rest-api-errors");
const _ = require("lodash");

const create = ({ Photo }, { config }) => async (req, res, next) => {
  try {
    const photo = new Photo();

    if (!req.file) {
      throw new NotFound(404, "There is no data");
    }

    const filePath = "/uploads/" + req.file.filename;
    _.extend(photo, { photoPath: filePath, caveId: req.body.caveId });

    await photo.save();

    return res.status(200).json({ photo }).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
