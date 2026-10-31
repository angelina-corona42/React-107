import { createContext } from 'react';

const GlobalContext = createContext({
    cart: [], // Default cart, empty array
    user: {}, // Default user, empty object

    addProductToCart: () => {}, // Placeholder function to add a product to the cart 
    clearCart: () => {}, // Placeholder funciton to remove all items from the cart 
    removeProductFromCart: () => {} // Placeholder function to remove a specific item from the cart
})

export default GlobalContext; 

