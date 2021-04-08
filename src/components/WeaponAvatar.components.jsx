import "./WeaponAvatar.components.css";

export const WeaponAvatar = ({currentData,renderRequiredMaterials}) => {

    return (
        <div className="avatar-container">
            <div className="avatar-logo">
                <img src={currentData.imgURL? currentData.imgURL : currentData.sprite} />
            </div>
            <div className="avatar-desc">
                {currentData.hasOwnProperty("name") && <div className="wrapper">
                    <div className="data-name">{currentData.name}</div>
                {currentData.hasOwnProperty("requiredMaterials") ? <div>
                    <div>Damage: {currentData.damage}</div>
                    <div>Special Abillity: {currentData.abillity}</div>
                </div> : <div>
                    <div>Hp: {currentData.status.hp}</div>
                    <div>Mp: {currentData.status.mp}</div>
                    <div>Damage: {currentData.status.damage}</div>
                    </div>}
                {currentData.hasOwnProperty("requiredMaterials") && <div className="required-materials">
                    <label>Required Materials</label>
                    {console.log(currentData)}
                    <div className="materials-amount">
                    {currentData.hasOwnProperty("requiredMaterials") && renderRequiredMaterials()}
                    </div>
                </div>}
                </div>}
            </div>
        </div>
    );
}