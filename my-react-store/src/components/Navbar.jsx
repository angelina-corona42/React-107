import { useContext } from "react";
import { Link } from "react-router-dom";

import GlobalContext from "../state/globalContext";

import { IconShoppingCart } from "@tabler/icons-react";

import "./Navbar.css";

function Navbar() {
  const globalContext = useContext(GlobalContext);

  const userName = globalContext.user;

  const cart = globalContext.cart;

  // Count all quantities inside cart
  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <nav className="navbar">
      <h2>Cozy Cart</h2>

      <div className="nav-links">
        <Link to="/home">Home</Link>

        <Link to="/catalog">Catalog</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/admin">Admin</Link>

        <Link to="/cart">Cart</Link>
      </div>

      <div className="user-cart">
        <h1 className="user-name">{userName.name}</h1>

        <Link to="/cart" className="cart-link">
          <IconShoppingCart className="cart-icon" size={25} color="white" />

          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
