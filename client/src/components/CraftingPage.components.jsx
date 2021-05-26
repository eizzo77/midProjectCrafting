import {useEffect, useState} from "react";
import axios from "axios";
import {craftingWeapons} from "../Data/Crafting_Weapons";
import {Inventory} from "./Inventory.components";
import {WeaponAvatar} from "./WeaponAvatar.components";
import {Link} from "react-router-dom";
import CraftEffectURL from "../sounds/craft.mp3";
import "./CraftingPage.components.css";

const endPoint = "http://localhost:5555";

export const CraftingPage = ({character,setCharacter}) => {

    const [currentWeapon,setCurrentWeapon] = useState({});
    const [shopperText,setShopperText] = useState("Welcome! Choose a Weapon you desire to craft!");
    const [craftEffect] = useState(new Audio(CraftEffectURL))


    useEffect( ()=> {
        return () => setShopperText(`So you're interested in this weapon aren't ya?`);
    },[currentWeapon])

    const onCraftClick = async () => {
        if (currentWeapon.requiredMaterials.every(material => character.materials[material.type].amount >= material.amount)) {
            craftEffect.play();
            const addWeapon = [...character.weapons,currentWeapon];
            const copiedChar = {...character,weapons:addWeapon}
            currentWeapon.requiredMaterials.forEach(material => copiedChar.materials[material.type].amount -= material.amount);
            const res = await axios.put(endPoint + "/api/character",{...copiedChar});
            setCharacter(copiedChar);
            setShopperText("Nice pick. that's my fav' one")

        } else {
            setShopperText("Seems like you don't have enough materials!");
        }
    }

    const renderRequiredMaterials = () => {
        return currentWeapon["requiredMaterials"].map(material => {
            const charMaterialAmount = character.materials.hasOwnProperty(material.type) ? character.materials[material.type].amount : 0;
            const requiredMaterialAmount = material.amount;
            return <span key={material.id}>
                <img className="material-req" src={material.imgURL}/>
                <label style={{color:charMaterialAmount >= requiredMaterialAmount ? "green" : "red"}}>
                    {charMaterialAmount}/{requiredMaterialAmount}
                </label>
                </span>
        })
    }

    return(
        <>
        <div className="dialogue-avatar"></div>
        <div className="dialogue-box">
            <p>{shopperText}</p>
        </div>
            <div className={"craft-container slide-in-top"}>
                <Link to="/"><div className="exit"><i class="fas fa-times-circle"></i></div></Link>
                <div className="craft-wrapper">
                    <Inventory onItemClick={setCurrentWeapon} itemsList={craftingWeapons} inventoryCapacity={12}/>
                    <WeaponAvatar currentData={currentWeapon} renderRequiredMaterials={renderRequiredMaterials}/>
                </div>
                <div className="btn"><button onClick={() => onCraftClick()}/></div>
            </div>
        </>
    );
}