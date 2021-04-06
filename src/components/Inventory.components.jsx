import React from "react";
import {Link} from "react-router-dom";
import {craftingWeapons} from "../Data/Crafting_Weapons";
import {Slot} from "./Slot.components";
import "./Inventory.components.css";

export const Inventory = () => {
    
    const renderedList = () => craftingWeapons.map(item => {
        return (
            <div className="item" key={item.id}>
                <Link key={item.id} to={`/crafting/${item.id}`}><Slot key={item.id} image={item.imgURL}/></Link>
            </div>
        );
    })
    
    return(
        <>
        <div className="inventory-list">
            {renderedList()}
        </div>
        </>
    );
}