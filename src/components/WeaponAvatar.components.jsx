import {useRouteMatch, useLocation} from "react-router-dom";
import "./WeaponAvatar.components.css";

export const WeaponAvatar = () => {
    const params = useRouteMatch();
    return (
        <div className="avatar-container">
            {console.log(params)}
            <div className="avatar-logo"></div>
            <div className="avatar-desc">
                <div className="required-materials">
                    <label>Required Materials</label>
                    <div className="materials-amount">
                        <span><img alt="material"/> 0/6 </span> 
                        <span><img alt="material"/> 0/5 </span>
                    </div>
                </div>
            </div>
        </div>
    );
}