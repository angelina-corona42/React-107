import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  // contst [state, setState] = useState(initialValue)
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "Angie", id: 71 });

  function addProductToCart() {
    // Logic to add product to Cart
  }

  function clearCart() {
    setCart([]);
  }

  function removeProductFromCart() {}

  return (
    <GlobalContext.Provider
      value={{
        cart: cart,
        user: user,
        addProductToCart: addProductToCart,
        clearCart: clearCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children} {/*Render any child components inside the provider*/}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
