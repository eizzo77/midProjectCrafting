const character = require("../model/character");

const postCharacter = async (req, res) => {
  try {
    const createdCharacter = await character.create({ ...req.body });
    console.log(createdCharacter);
    res.status(200).send(createdCharacter);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const getCharacter = async (req, res) => {
  try {
    console.log("HERE");
    const characterData = await character.find({ name: req.body.name });
    console.log(characterData);
    res.status(200).send(characterData);
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = {
  getCharacter,
  postCharacter,
};
