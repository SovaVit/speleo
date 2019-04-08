const { Router: router } = require("express");
const { list } = require("./list");
const { create } = require("./create");
const { upload } = require("../../middleware");

module.exports = (models, { config }) => {
  const api = router();

  api.get("/", list(models, { config }));
  api.post("/", upload.single("file"), create(models, { config }));

  return api;
};
