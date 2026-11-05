import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  // const [state, setState] = useState(initialValue)

  // CART STATE
  const [cart, setCart] = useState([]);

  // USER STATE
  const [user, setUser] = useState({
    name: "Angie",
    id: 71,
  });

  // ADD PRODUCT TO CART
  function addProductToCart(product, quantity) {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    // If the product is already in the cart,
    // update its quantity instead of adding it again
    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });

      setCart(updatedCart);
    } else {
      // If the product is NOT in the cart,
      // create a new cart product with quantity
      const newProduct = {
        ...product,
        quantity: quantity,
      };

      // ... = spread operator
      // Takes all items already in the cart
      // and adds the new product to the end
      setCart([...cart, newProduct]);
    }
  }

  // UPDATE PRODUCT QUANTITY
  function updateCartQuantity(productId, newQuantity) {
    // Do not allow the quantity to go below 1
    if (newQuantity < 1) {
      return;
    }

    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }

      return item;
    });

    setCart(updatedCart);
  }

  // REMOVE PRODUCT FROM CART
  function removeProductFromCart(productId) {
    // Keep every product except the one
    // with the matching product ID
    const updatedCart = cart.filter((item) => item.id !== productId);

    setCart(updatedCart);
  }

  // CLEAR CART
  function clearCart() {
    setCart([]);
  }

  return (
    <GlobalContext.Provider
      value={{
        cart: cart,
        user: user,

        addProductToCart: addProductToCart,

        clearCart: clearCart,

        removeProductFromCart: removeProductFromCart,

        updateCartQuantity: updateCartQuantity,
      }}
    >
      {props.children}

      {/* Render any child components inside the provider */}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
