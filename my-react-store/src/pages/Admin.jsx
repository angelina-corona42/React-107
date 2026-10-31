import { useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

function Admin() {
  // PRODUCT STATE
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [products, setProducts] = useState([]);

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

                <option>Coffee Mug</option>
                <option>Keyboard</option>
                <option>Shirt</option>
                <option>Mouse</option>
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
