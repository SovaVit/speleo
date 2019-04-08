const { NotFound } = require("rest-api-errors");
const { sendOne } = require("../../middleware");
const _ = require("lodash");

const create = ({ Photo }, { config }) => async (req, res, next) => {
  
  try { 
    const photo = new Photo();
    
    if (!req.file) {
      throw new NotFound(404, "There is no data");
    }
    _.extend(photo, {photoPath: req.file.path});
    
    await photo.save();

    return sendOne(res, photo);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };