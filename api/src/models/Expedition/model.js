const mongoose = require("mongoose");
const { schema } = require("./schema");
const Expedition = mongoose.model("Expedition", schema);


module.exports = {Expedition};
