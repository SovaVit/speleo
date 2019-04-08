const { Router: router } = require("express");
const { authenticate } = require("../../middleware");
const { get } = require("./get");
const { list } = require("./list");
const { create } = require("./create");
const { update } = require("./update");
const { remove } = require("./remove");


/**
 * Provide api for posts
 *
 *
 * GET /api/posts/ - List ??
     @header
            Authorization: Bearer {token}
 **/

module.exports = (models, { config }) => {
  const api = router();

  api.get("/", list(models, { config }));
  api.get("/:_id", get(models, { config }));
  api.post("/", authenticate, create(models, { config }));
  api.patch("/:_id", authenticate, update(models, { config }));
  api.delete("/:_id", authenticate, remove(models, { config }));

  return api;
};
