import { useContext } from "react";
import GlobalContext from "../state/globalContext";
import "./Footer.css";

function Footer(){
    const userData = useContext(GlobalContext).user; 

    return(
        <footer className="footer">

            <p>
                My React Store {userData.name}, Cohort# {userData.id} © 2026
            </p>

        </footer>
    );
}

export default Footer;