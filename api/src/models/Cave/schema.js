const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true]
  },
  secondName: {
    type: String,
    required: [true]
  },
  typeCave: {
    type: String,
    required: [true]
  },
  lengthCave: {
    type: Number,
    required: [true]
  },
  address: {
    type: String,
    required: [true]
  },
  typeRock: {
    type: String,
    required: [true]
  },
  cadastralNumber: {
    type: String,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  },
  createdAt: {
    type: String,
    required: [true]
  },
  depthCave: {
    type: Number,
    required: [true]
  },
  expeditionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expedition"
  },
  photoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Photo"
  },
});

module.exports = { schema };
