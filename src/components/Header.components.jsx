import {Link} from "react-router-dom";
// import "./Header.components.css";

export const Header = () => {
    return(
        <>
        <Link to="/inventory"> <button type="button">Inventory</button> </Link>
        </>
    );
}