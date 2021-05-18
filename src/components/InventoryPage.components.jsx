import {Inventory} from "./Inventory.components";
import {WeaponAvatar} from "./WeaponAvatar.components";
import {Link} from "react-router-dom";
import "./InventoryPage.components.css";
export const InventoryPage = ({character}) => {

    return(
        <>
            <div className="inventory-container slide-in-top">
            <Link to="/"><div className="exit"><i class="fas fa-times-circle"></i></div></Link>
                <div className="inv-wrapper">
                    <div className="inventory-wrapper">
                        <Inventory itemsList={Object.values(character.materials)} inventoryCapacity={12}/>  
                        <Inventory itemsList={Object.values(character.weapons)} inventoryCapacity={12} enhance={true}/>
                        <WeaponAvatar currentData={character} />
                    </div>
                </div>
            </div>
        </>
    );
} 