import {useEffect, useState} from "react";
import {Inventory} from "./Inventory.components";
import {WeaponAvatar} from "./WeaponAvatar.components";
import "./CraftingPage.components.css";

export const CraftingPage = ({character,setCharacter}) => {

    const [currentWeapon,setCurrentWeapon] = useState({});
    const [shopperText,setShopperText] = useState("Welcome! Choose a Weapon you desire to craft!");

    useEffect( ()=> {
        console.log(currentWeapon);
        setShopperText(`So you're interested in this weapon dont ya?`);
    },[currentWeapon])

    return(
        <>
        <div className="dialogue-avatar"></div>
        <div className="dialogue-box">
            <p>{shopperText}</p>
        </div>
            <div className="craft-container">
                <div className="craft-wrapper">
                    <Inventory onItemClick={setCurrentWeapon}/>
                    <WeaponAvatar character={character} currentWeapon={currentWeapon}/>
                </div>
                <div className="btn"><button/></div>
            </div>
        </>
    );
}