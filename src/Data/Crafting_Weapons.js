import noviceHammer from "../assets/novice_hammer.png";
import NoviceBow from "../assets/novice_bow.png";
import championsSword from "../assets/champions_sword.png";

export const craftingWeapons = [
  {
    id: 1,
    name: "Novice Hammer",
    imgURL: noviceHammer,
    damage: 10,
    effect: "Nothing",
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
    name: "Novice Bow",
    imgURL: NoviceBow,
    damage: 11,
    effect: "7% chance of Critical Hit",
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
    name: "Champions Sword",
    imgURL: championsSword,
    damage: 15,
    effect: "15% chance of causing Burn",
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
