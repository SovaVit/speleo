const { errorHandler } = require("./error-handler");
const { authenticate, generateAccessToken } = require("./auth");

const {
  sendOne,
  sendList,
  sendCreated,
  sendUpdated,
  sendDeleted,
  sendAccepted
} = require("./requests-helpers");
const { upload } = require("./multer");
const { localAuth } = require("./localAuth");
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
  localAuth
};
