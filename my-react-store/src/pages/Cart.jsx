import { useContext } from "react";
import { Link } from "react-router-dom";

import GlobalContext from "../state/globalContext";

import "./Cart.css";

function Cart() {
  const globalContext = useContext(GlobalContext);

  const cart = globalContext.cart;

  // CART TOTAL
  const cartTotal = cart.reduce(
    (total, product) => {
      return total + product.price * product.quantity;
    },

    0,
  );

  return (
    <div className="cart-page">
      {/* CART HEADER */}
      <section className="cart-header">
        <h1>Your Cart</h1>

        <p>Review your items before checkout.</p>
      </section>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>Visit the catalog to add some products.</p>

          <Link to="/catalog">Shop Catalog</Link>
        </div>
      ) : (
        <div className="cart-container">
          {/* CART ITEMS */}
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                {/* IMAGE */}
                <img src={product.image} alt={product.title} />

                {/* PRODUCT INFO */}
                <div className="cart-product-info">
                  <h2>{product.title}</h2>

                  <p>Price: ${product.price.toFixed(2)}</p>

                  {/* QUANTITY */}
                  <div className="cart-quantity">
                    <button
                      onClick={() =>
                        globalContext.updateCartQuantity(
                          product.id,
                          product.quantity - 1,
                        )
                      }
                    >
                      -
                    </button>

                    <span>{product.quantity}</span>

                    <button
                      onClick={() =>
                        globalContext.updateCartQuantity(
                          product.id,
                          product.quantity + 1,
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  <p>
                    Item Total: ${(product.price * product.quantity).toFixed(2)}
                  </p>

                  {/* REMOVE PRODUCT */}
                  <button
                    className="remove-button"
                    onClick={() =>
                      globalContext.removeProductFromCart(product.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CHECKOUT SUMMARY */}
          <div className="checkout">
            <h2>Order Summary</h2>

            <div className="checkout-row">
              <span>Items</span>

              <span>
                {cart.reduce((total, product) => total + product.quantity, 0)}
              </span>
            </div>

            <div className="checkout-row total">
              <span>Total</span>

              <span>${cartTotal.toFixed(2)}</span>
            </div>

            <button
              className="checkout-button"
              onClick={() =>
                alert(
                  "Checkout complete! Thank you for shopping with Cozy Cart.",
                )
              }
            >
              Checkout
            </button>

            <Link to="/catalog" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
