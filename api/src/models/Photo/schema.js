const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  photoPath: {
    type: String,
    required: [true]
  },
  caveId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cave",
   // required: [true]
  },
  expeditionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expedition"
  }
});

module.exports = { schema };
