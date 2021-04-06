import React from "react";
import {Inventory} from "./Inventory.components";
import {Link, useLocation} from "react-router-dom";
import {WeaponAvatar} from "./WeaponAvatar.components";
import {craftingWeapons} from "../Data/Crafting_Weapons";
import {Slot} from "./Slot.components";
import "./CraftingPage.components.css";

export const CraftingPage = () => {

    const location = useLocation();
    const renderedList = () => craftingWeapons.map(item => {
        return (
            <div className="item" key={item.id}>
                <Link key={item.id} to={`/crafting/${item.id}`}><Slot key={item.id} image={item.imgURL}/></Link>
            </div>
        );
    })

    return(
        <>
            <div className="craft-container">
                <div className="craft-wrapper">
                    <div className="inventory-list">
                        {renderedList()}
                    </div>
                    <WeaponAvatar />
                </div>
                <div className="btn"><button>Craft</button></div>
            </div>
        </>
    );
}