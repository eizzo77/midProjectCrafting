import React from "react";
import {Slot} from "./Slot.components";
import "./Inventory.components.css";

export const Inventory = ({onItemClick, inventoryCapacity,itemsList,enhance}) => {
    
    const renderedList = () => Array.from({length:inventoryCapacity}).map((_,index) => {
        return (
            index < itemsList.length ?
            <div className="item" key={itemsList[index].id} onClick={onItemClick ? () => onItemClick(itemsList[index]):null} >
                    <Slot key={itemsList[index].id} element={itemsList[index]}/>
                    {enhance && <i class="fas fa-angle-double-up"></i>}
            </div> : <div className="item" key={index+1}></div>
        );
    })
    
    return(
        <>
        <div className="inventory-list">
            {console.log(itemsList)}
            {renderedList()}
        </div>
        </>
    );
}