const express = require("express");
const cors = require("cors");
const { errorHandler } = require("../middleware");
// list of models here
const { Cave } = require("../models/Cave");
const { Expedition } = require("../models/Expedition");
const {Photo} = require("../models/Photo");
const {User} = require("../models/User")

// list of controllers here
const cave = require("../controllers/Cave");
const expedition = require("../controllers/Expedition");
const photo = require("../controllers/Photo");
const auth = require("../controllers/auth");
// combine models in one object
const models = { Cave, Expedition, Photo, User };

const routersInit = config => {
  const router = express();

  router.use(cors());
  router.options("*", cors());
 
  // register api points
  router.use("/cave", cave(models, { config }));
  router.use("/expedition", expedition(models, { config }));
  router.use("/photo", photo(models, { config }));
  router.use("/user", auth(models, { config }));
  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
