import {useRouteMatch, useLocation} from "react-router-dom";
import "./WeaponAvatar.components.css";

export const WeaponAvatar = ({character, currentWeapon}) => {
    console.log(currentWeapon);
    const renderRequiredMaterials = () => {
        return currentWeapon["requiredMaterials"].map(material => {
            const charMaterialAmount = character.materials[material.type].amount;
            const requiredMaterialAmount = material.amount;
            return <span key={material.id}>
                <img alt={material.type}/>
                <label style={{color:charMaterialAmount >= requiredMaterialAmount ? "green" : "red"}}>
                    {charMaterialAmount}/{requiredMaterialAmount}
                </label>
                </span>
        })
    }

    return (
        <div className="avatar-container">
            <div className="avatar-logo">
                <img src={currentWeapon.imgURL} />
            </div>
            <div className="avatar-desc">
                <div className="required-materials">
                    <label>Required Materials</label>
                    <div className="materials-amount">
                    {currentWeapon.hasOwnProperty("requiredMaterials") && renderRequiredMaterials()}
                    </div>
                </div>
            </div>
        </div>
    );
}