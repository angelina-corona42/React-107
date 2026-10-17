import "./Navbar.css";

function Navbar(){

    return(
        <nav className="navbar">

            <h2>Cozy Cart</h2>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Catalog</a>
                <a href="#">About</a>
            </div>

        </nav>
    );
}

export default Navbar;