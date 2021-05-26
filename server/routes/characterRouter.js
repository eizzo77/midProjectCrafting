const express = require("express");
const characterRouter = express.Router();

const {
  getCharacter,
  postCharacter,
  updateCharacter,
} = require("../controller/characterController");

characterRouter.post("/", postCharacter);
characterRouter.get("/", getCharacter);
characterRouter.put("/", updateCharacter);

module.exports = characterRouter;
