const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
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
  numberRegion: {
    type: Number,
    required: [true]
  },
  square: {
    type: Number,
    required: [true]
  },
  volume: {
    type: Number,
    required: [true]
  },
  amplitude: {
    type: Number,
    required: [true]
  },
  coordinateX: {
    type: Number,
    required: [true]
  },
  coordinateY: {
    type: Number,
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
  depthCave: {
    type: Number,
    required: [true]
  },
  createdAt: {
    type: String,
    required: [true]
  }
});

module.exports = { schema };
