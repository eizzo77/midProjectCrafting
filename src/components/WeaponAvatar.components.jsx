import "./WeaponAvatar.components.css";

export const WeaponAvatar = ({character, currentWeapon,renderRequiredMaterials}) => {

    return (
        <div className="avatar-container">
            <div className="avatar-logo">
                <img src={currentWeapon.imgURL} />
            </div>
            <div className="avatar-desc">
                {currentWeapon.hasOwnProperty("name") && <div className="wrapper">
                <div>
                    <div>{currentWeapon.name}</div>
                    <div>Damage: {currentWeapon.damage}</div>
                    <div>Special Abillity: {currentWeapon.abillity}</div>
                </div>
                <div className="required-materials">
                    <label>Required Materials</label>
                    {console.log(currentWeapon)}
                    <div className="materials-amount">
                    {currentWeapon.hasOwnProperty("requiredMaterials") && renderRequiredMaterials()}
                    </div>
                </div>
                </div>}
            </div>
        </div>
    );
}