import noviceHammer from "../assets/sword.png";
import NoviceBow from "../assets/dagger.png";
import championsSword from "../assets/axe.png";

export const craftingWeapons = [
  {
    id: 1,
    name: "Sword of the black Pearl",
    imgURL: noviceHammer,
    damage: 10,
    abillity: "Fire",
    requiredMaterials: [
      {
        type: "wood",
        imgURL: "./assets/wood",
        amount: 5,
      },
      {
        type: "rock",
        imgURL: "../assets/rock",
        amount: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Hammer of the Storm",
    imgURL: NoviceBow,
    damage: 11,
    effect: "Thunder",
    requiredMaterials: [
      {
        type: "wood",
        imgURL: "",
        amount: 7,
      },
      {
        type: "wire",
        imgURL: "",
        amount: 3,
      },
    ],
  },
  {
    id: 3,
    name: "Samuel Axe's",
    imgURL: championsSword,
    damage: 15,
    effect: "Blizzard",
    requiredMaterials: [
      {
        type: "ore",
        imgURL: "",
        amount: 8,
      },
      {
        type: "crystal",
        imgURL: "",
        amount: 10,
      },
    ],
  },
];
