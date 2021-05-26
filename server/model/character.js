const mongoose = require("mongoose");

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sprite: {
    type: String,
    required: true,
  },
  weapons: {
    type: Array,
  },
  materials: {
    type: Object,
  },
  status: {
    type: Object,
    required: true,
  },
});

const Character = new mongoose.model("character", characterSchema, "character");
module.exports = Character;
