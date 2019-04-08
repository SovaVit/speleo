const mongoose = require("mongoose");
const { schema } = require("./schema");
const Photo = mongoose.model("Photo", schema);

module.exports = { Photo };
