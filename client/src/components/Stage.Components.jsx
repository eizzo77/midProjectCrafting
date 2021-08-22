import react from "react";
import { Link } from "react-router-dom";
import "./Stage.Components.css";

export const Stage = ({character}) => {

    const startBattle = () => {

    }

    return(
       
            <Link to="/battle">
                 <div id="stage-1" className="stage"></div>
            </Link>   
    );
}