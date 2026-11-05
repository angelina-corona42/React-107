import { useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

// PRODUCT IMAGES
import ceramicMug from "../assets/ceramic-mug.png";
import cozyThrowBlanket from "../assets/cozy-blanket.png";
import decorativePlant from "../assets/decorative-plant.png";
import blackHeadphones from "../assets/black-headphones.png";
import mountainWaterBottle from "../assets/mountain-water-bottle.png";
import canvasToteBag from "../assets/canvas-tote-bag.png";
import oliveSweatshirt from "../assets/olive-sweatshirt.png";
import mountainCap from "../assets/mountain-cap.png";
import woodlandPineCandle from "../assets/woodland-pine-candle.png";
import wirelessMouse from "../assets/wireless-mouse.png";
import mechanicalKeyboard from "../assets/mechanical-keyboard.png";
import mountainJournal from "../assets/mountain-journal.png";

function Admin() {
  // PRODUCT STATE
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const [products, setProducts] = useState([
    {
      name: "Ceramic Coffee Mug",
      category: "Home",
      price: 18.99,
      quantity: 10,
      image: ceramicMug,
      description: "A simple ceramic mug perfect for coffee or tea.",
    },
    {
      name: "Cozy Throw Blanket",
      category: "Home",
      price: 34.99,
      quantity: 6,
      image: cozyThrowBlanket,
      description: "A soft and comfortable throw blanket for your home.",
    },
    {
      name: "Decorative Plant",
      category: "Home",
      price: 22.99,
      quantity: 8,
      image: decorativePlant,
      description: "A decorative plant that adds a natural touch to any room.",
    },
    {
      name: "Black Headphones",
      category: "Electronics",
      price: 49.99,
      quantity: 12,
      image: blackHeadphones,
      description: "Comfortable wireless headphones with a clean modern look.",
    },
    {
      name: "Mountain Water Bottle",
      category: "Accessories",
      price: 24.99,
      quantity: 15,
      image: mountainWaterBottle,
      description: "A reusable water bottle with a simple mountain design.",
    },
    {
      name: "Canvas Tote Bag",
      category: "Accessories",
      price: 16.99,
      quantity: 14,
      image: canvasToteBag,
      description: "A lightweight canvas tote bag for everyday use.",
    },
    {
      name: "Olive Sweatshirt",
      category: "Clothing",
      price: 39.99,
      quantity: 7,
      image: oliveSweatshirt,
      description: "A comfortable olive sweatshirt with a simple casual style.",
    },
    {
      name: "Mountain Cap",
      category: "Clothing",
      price: 21.99,
      quantity: 9,
      image: mountainCap,
      description: "A casual cap featuring a mountain-inspired design.",
    },
    {
      name: "Woodland Pine Candle",
      category: "Home",
      price: 17.99,
      quantity: 11,
      image: woodlandPineCandle,
      description: "A cozy pine scented candle for a warm and relaxing space.",
    },
    {
      name: "Wireless Mouse",
      category: "Electronics",
      price: 29.99,
      quantity: 13,
      image: wirelessMouse,
      description: "A simple wireless mouse for school, work, or everyday use.",
    },
    {
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: 69.99,
      quantity: 5,
      image: mechanicalKeyboard,
      description: "A mechanical keyboard with colorful backlighting.",
    },
    {
      name: "Mountain Journal",
      category: "Accessories",
      price: 14.99,
      quantity: 20,
      image: mountainJournal,
      description:
        "A simple journal with a mountain design for notes and ideas.",
    },
  ]);

  // COUPON STATE
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState("");
  const [couponExpiration, setCouponExpiration] = useState("");
  const [couponMinimum, setCouponMinimum] = useState("");
  const [coupons, setCoupons] = useState([]);

  // ADD PRODUCT
  function addProduct(event) {
    event.preventDefault();

    const newProduct = {
      name: productName,
      category: productCategory,
      price: productPrice,
      quantity: productQuantity,
      image: productImage,
      description: productDescription,
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setProductQuantity("");
    setProductImage("");
    setProductDescription("");
  }

  // ADD COUPON
  function addCoupon(event) {
    event.preventDefault();

    const newCoupon = {
      code: couponCode,
      discount: couponDiscount,
      expiration: couponExpiration,
      minimum: couponMinimum,
    };

    setCoupons([...coupons, newCoupon]);

    setCouponCode("");
    setCouponDiscount("");
    setCouponExpiration("");
    setCouponMinimum("");
  }

  return (
    <div className="admin-page">
      {/* ADMIN HEADER */}
      <section className="admin-header">
        <div>
          <p className="admin-label">STORE MANAGEMENT</p>

          <h1>Admin Dashboard</h1>

          <p>Manage products, discounts, and coupons for your store.</p>
        </div>
      </section>

      {/* DASHBOARD CARDS */}
      <section className="admin-summary">
        <div className="summary-card">
          <h3>Products</h3>
          <p>Manage your store catalog.</p>
        </div>

        <div className="summary-card">
          <h3>Discounts</h3>
          <p>Create product discounts.</p>
        </div>

        <div className="summary-card">
          <h3>Coupons</h3>
          <p>Create coupon codes.</p>
        </div>
      </section>

      {/* ADD PRODUCT */}
      <section className="admin-section">
        <div className="section-title">
          <h2>Add Product</h2>

          <p>Add a new item to your store catalog.</p>
        </div>

        <form className="admin-form" onSubmit={addProduct}>
          <div className="form-row">
            <div className="form-group">
              <label>Product Name</label>

              <input
                type="text"
                placeholder="Example: Ceramic Coffee Mug"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>

              <select
                value={productCategory}
                onChange={(event) => setProductCategory(event.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option>Home</option>
                <option>Clothing</option>
                <option>Accessories</option>
                <option>Electronics</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Price</label>

              <input
                type="number"
                placeholder="$0.00"
                value={productPrice}
                onChange={(event) => setProductPrice(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Quantity</label>

              <input
                type="number"
                placeholder="0"
                value={productQuantity}
                onChange={(event) => setProductQuantity(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Product Image URL</label>

            <input
              type="text"
              placeholder="Enter image URL"
              value={productImage}
              onChange={(event) => setProductImage(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              rows="5"
              placeholder="Enter a short product description"
              value={productDescription}
              onChange={(event) => setProductDescription(event.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="admin-button">
            Add Product
          </button>
        </form>

        {/* PRODUCT LIST */}
        <div className="admin-list">
          <h3>Products</h3>

          {products.length === 0 ? (
            <p>No products added yet.</p>
          ) : (
            products.map((product, index) => (
              <div className="admin-card" key={index}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.name}
                />

                <h4>{product.name}</h4>

                <p>Category: {product.category}</p>

                <p>Price: ${product.price}</p>

                <p>Quantity: {product.quantity}</p>

                <p>{product.description}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ADD DISCOUNT */}
      <section className="admin-section">
        <div className="section-title">
          <h2>Add Discount</h2>

          <p>Create a discount for one of your products.</p>
        </div>

        <form className="admin-form">
          <div className="form-row">
            <div className="form-group">
              <label>Product</label>

              <select>
                <option value="">Select Product</option>

                {products.map((product, index) => (
                  <option key={index}>{product.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Discount Percentage</label>

              <input type="number" placeholder="Example: 20" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>End Date</label>
              <input type="date" />
            </div>
          </div>

          <button type="button" className="admin-button">
            Add Discount
          </button>
        </form>
      </section>

      {/* CREATE COUPON */}
      <section className="admin-section">
        <div className="section-title">
          <h2>Create Coupon</h2>

          <p>Create a coupon customers can use at checkout.</p>
        </div>

        <form className="admin-form" onSubmit={addCoupon}>
          <div className="form-row">
            <div className="form-group">
              <label>Coupon Code</label>

              <input
                type="text"
                placeholder="Example: SAVE20"
                value={couponCode}
                onChange={(event) => setCouponCode(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Discount Percentage</label>

              <input
                type="number"
                placeholder="Example: 20"
                value={couponDiscount}
                onChange={(event) => setCouponDiscount(event.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Expiration Date</label>

              <input
                type="date"
                value={couponExpiration}
                onChange={(event) => setCouponExpiration(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Minimum Purchase</label>

              <input
                type="number"
                placeholder="$0.00"
                value={couponMinimum}
                onChange={(event) => setCouponMinimum(event.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="admin-button">
            Create Coupon
          </button>
        </form>

        {/* COUPON LIST */}
        <div className="admin-list">
          <h3>Coupons</h3>

          {coupons.length === 0 ? (
            <p>No coupons created yet.</p>
          ) : (
            coupons.map((coupon, index) => (
              <div className="admin-card" key={index}>
                <h4>{coupon.code}</h4>

                <p>{coupon.discount}% OFF</p>

                {coupon.expiration && <p>Expires: {coupon.expiration}</p>}

                {coupon.minimum && <p>Minimum Purchase: ${coupon.minimum}</p>}
              </div>
            ))
          )}
        </div>
      </section>

      {/* PAGE LINKS */}
      <section className="page-links">
        <Link to="/home">Back Home</Link>

        <Link to="/catalog">View Catalog</Link>
      </section>
    </div>
  );
}

export default Admin;
