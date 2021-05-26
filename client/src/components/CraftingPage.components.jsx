import {useEffect, useState} from "react";
import axios from "axios";
import {craftingWeapons} from "../Data/Crafting_Weapons";
import {Inventory} from "./Inventory.components";
import {WeaponAvatar} from "./WeaponAvatar.components";
import {Link} from "react-router-dom";
import CraftEffectURL from "../sounds/craft.mp3";
import "./CraftingPage.components.css";

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
            setShopperText("Nice pick. that's my fav' one")
            const addWeapon = [...character.weapons,currentWeapon];
            const res = await axios.put(`https://605cf2c16d85de00170db556.mockapi.io/Character/${character.id}`,{...character,weapons:addWeapon});
            console.log(res);
            const copiedChar = res.data;
            currentWeapon.requiredMaterials.forEach(material => copiedChar.materials[material.type].amount -= material.amount);
            setCharacter(copiedChar);

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