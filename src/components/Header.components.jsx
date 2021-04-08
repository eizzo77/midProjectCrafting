import {Link} from "react-router-dom";
import "./Header.components.css";

export const Header = () => {
    return(
        <div className="header">
        <Link to="/inventory"> <button className="inv-button  menu-1"><p className="button-text">Inventory</p></button> </Link>
        <Link to="/crafting"> <button className="inv-button menu-2"><p className="button-text">Crafting</p></button> </Link>
        </div>
    );
}