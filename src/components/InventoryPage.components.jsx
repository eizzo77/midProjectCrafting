import {Inventory} from "./Inventory.components";
import {WeaponAvatar} from "./WeaponAvatar.components";
import "./InventoryPage.components.css";
export const InventoryPage = ({character}) => {

    return(
        <>
            <div className="inventory-container">
                <div className="inv-wrapper">
                    <div className="inventory-wrapper">
                        {console.log(character)}
                        <Inventory itemsList={Object.values(character.materials)} inventoryCapacity={12} hasCounts={true}/>  
                        <Inventory itemsList={Object.values(character.weapons)} inventoryCapacity={12} hasCounts={true}/>
                        <WeaponAvatar />
                    </div>
                </div>
            </div>
        </>
    );
} 