const character = require("../model/character");

const postCharacter = async (req, res) => {
  try {
    const createdCharacter = await character.create({ ...req.body });
    // console.log(createdCharacter);
    res.status(200).send(createdCharacter);
  } catch (e) {
    res.status(404).send(e.message);
  }
};

const getCharacter = async (req, res) => {
  try {
    const characterData = await character.find({});
    // console.log(characterData);
    res.status(200).send(characterData);
  } catch (e) {
    res.status(404).send(e);
  }
};

const updateCharacter = async (req, res) => {
  const id = req.body._id;
  try {
    const updatedCharacterData = await character.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(200).send(updatedCharacterData);
  } catch (e) {
    res.status(404).send(e);
  }
};

module.exports = {
  getCharacter,
  postCharacter,
  updateCharacter,
};
