import { useContext } from "react";
import { useState } from "react";

import GlobalContext from "../state/globalContext";

import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  const globalAdd = useContext(GlobalContext).addProductToCart;

  // QUANTITY STATE
  const [quantity, setQuantity] = useState(1);

  // Calculates total price
  const total = props.data.price * quantity;

  // ADD TO CART
  function onAddToCart() {
    // Send both product AND quantity
    globalAdd(props.data, quantity);
  }

  return (
    <div className="product">
      {/* PRODUCT IMAGE */}
      <img src={props.data.image} alt={props.data.title} />

      {/* PRODUCT TITLE */}
      <h5>{props.data.title}</h5>

      {/* PRODUCT PRICE */}
      <div className="prices">
        <label>Price:</label>

        <label>${props.data.price.toFixed(2)}</label>

        <label>Total:</label>

        <label>${total.toFixed(2)}</label>
      </div>

      {/* QUANTITY PICKER */}
      <QuantityPicker quantity={quantity} setQuantity={setQuantity} />

      {/* ADD TO CART */}
      <button className="AddToCartBtn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
