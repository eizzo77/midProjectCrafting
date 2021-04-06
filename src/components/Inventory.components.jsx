import React from "react";
import {craftingWeapons} from "../Data/Crafting_Weapons";
import {Slot} from "./Slot.components";
import "./Inventory.components.css";

const INVENTORY_CAPACITY = 12;

export const Inventory = ({onItemClick}) => {
    
    const renderedList = () => Array.from({length:INVENTORY_CAPACITY}).map((_,index) => {
        return (
            index < craftingWeapons.length ?
            <div className="item" key={craftingWeapons[index].id} onClick={() => onItemClick(craftingWeapons[index])} >
                    <Slot key={craftingWeapons[index].id} image={craftingWeapons[index].imgURL}/>
            </div> : <div className="item" key={index+1}></div>
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