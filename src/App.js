import React, { useState } from "react";
import "./App.css";

const productsData = [
  {
    id: 1,
    name: "Gaming Laptop",
    category: "Laptop",
    price: 1899,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    category: "Audio",
    price: 299,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 3,
    name: "Smartphone Pro",
    category: "Mobile",
    price: 999,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Wearable",
    price: 399,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 199,
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    id: 6,
    name: "4K Monitor",
    category: "Accessories",
    price: 549,
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item, index) => index !== id));
  };

  const filteredProducts = productsData.filter((product) => {
    const matchCategory =
      filter === "All" || product.category === filter;
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">ElectroMax</h1>

        <input
          type="text"
          placeholder="Search electronics..."
          className="search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="cart-icon">
          🛒 <span>{cart.length}</span>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h2>Next-Gen Electronics</h2>
          <p>
            Premium gadgets. Ultra performance. Future-ready technology.
          </p>
          <button className="primary-btn">Explore Store</button>
        </div>
      </section>

      {/* FILTERS */}
      <section className="filters">
        {["All", "Laptop", "Mobile", "Audio", "Wearable", "Accessories"].map(
          (cat) => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          )
        )}
      </section>

      {/* PRODUCTS */}
      <section className="products">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="image-wrapper">
              <img src={product.image} alt={product.name} />
              <span className="rating">⭐ {product.rating}</span>
            </div>

            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">${product.price}</p>

            <button
              className="add-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>

      {/* CART */}
      <aside className="cart-panel">
        <h2>Your Cart</h2>

        {cart.length === 0 && <p>No items added</p>}

        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(index)}>✖</button>
          </div>
        ))}

        <div className="cart-total">
          <strong>Total:</strong> ${totalPrice}
        </div>

        <button className="checkout-btn">Checkout</button>
      </aside>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 ElectroMax. Designed for performance.</p>
      </footer>
    </div>
  );
}
