const { errorHandler } = require("./error-handler");
const { authenticate, generateAccessToken } = require("./auth");
const { localUser } = require("./local");
const {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted
} = require("./requests-helpers");
const { upload } = require("./multer");

module.exports = {
  errorHandler,
  authenticate,
  generateAccessToken,
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted,
  upload,
  localUser
};
