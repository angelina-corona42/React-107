import { useContext } from 'react';
import { Link } from 'react-router';
import GlobalContext from '../state/globalContext';

import "./Navbar.css";

function Navbar(){
    const userName = useContext(GlobalContext).user;
    return(
        <nav className="navbar">

            <h2>Cozy Cart</h2>

            <div className="nav-links">
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/admin">Admin</Link>
                
            </div>
            <div>
                <h1>{userName.name}</h1>
            </div>
        </nav>
        
    );
}

export default Navbar;