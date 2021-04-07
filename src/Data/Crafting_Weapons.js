// Weapons
import championsSword from "../assets/sword.png";
import dagger from "../assets/dagger.png";
import axe from "../assets/axe.png";
import noviceSword from "../assets/novice_sword.png";
import thunderHammer from "../assets/novice_hammer.png";
import eagleBow from "../assets/bow.png";
// Materials
import wood from "../assets/wood.png";
import ore from "../assets/ore.png";
import rock from "../assets/rock.png";
import blueCrystal from "../assets/blue_crystal.png";
import redCrystal from "../assets/red_crystal.png";
import yellowCrystal from "../assets/yellow_crystal.png";
import greenCrystal from "../assets/green_crystal.png";

export const craftingWeapons = [
  {
    id: 1,
    name: "Novice Sword",
    imgURL: noviceSword,
    damage: 10,
    abillity: "Rapid Slash",
    requiredMaterials: [
      {
        type: "wood",
        imgURL: wood,
        amount: 5,
      },
      {
        type: "rock",
        imgURL: rock,
        amount: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Bow of The Eagle Eyed",
    imgURL: eagleBow,
    damage: 12,
    abillity: "Triple Strike",
    requiredMaterials: [
      {
        type: "wood",
        imgURL: wood,
        amount: 10,
      },
      {
        type: "ore",
        imgURL: ore,
        amount: 5,
      },
    ],
  },
  {
    id: 3,
    name: "Novice Dagger",
    imgURL: dagger,
    damage: 15,
    abillity: "Quick Hit",
    requiredMaterials: [
      {
        type: "wood",
        imgURL: wood,
        amount: 15,
      },
      {
        type: "blue crystal",
        imgURL: blueCrystal,
        amount: 10,
      },
    ],
  },
  {
    id: 4,
    name: "Sword of the black Pearl",
    imgURL: championsSword,
    damage: 20,
    abillity: "Fire",
    requiredMaterials: [
      {
        type: "red crystal",
        imgURL: redCrystal,
        amount: 20,
      },
      {
        type: "yellow crystal",
        imgURL: yellowCrystal,
        amount: 18,
      },
    ],
  },
  {
    id: 5,
    name: "Hammer of the Storm",
    imgURL: thunderHammer,
    damage: 25,
    abillity: "Thunder",
    requiredMaterials: [
      {
        type: "green crystal",
        imgURL: greenCrystal,
        amount: 22,
      },
      {
        type: "yellow crystal",
        imgURL: yellowCrystal,
        amount: 18,
      },
    ],
  },
  {
    id: 6,
    name: "Samuel's Axe",
    imgURL: axe,
    damage: 26,
    abillity: "Blizzard",
    requiredMaterials: [
      {
        type: "blue crystal",
        imgURL: blueCrystal,
        amount: 25,
      },
      {
        type: "ore",
        imgURL: ore,
        amount: 20,
      },
    ],
  },
];
