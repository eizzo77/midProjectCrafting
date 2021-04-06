import {Link} from "react-router-dom";

export const Header = () => {
    return(
        <>
            <Link to={{pathname:"/"}}><button>Link</button></Link>
        </>
    );
}