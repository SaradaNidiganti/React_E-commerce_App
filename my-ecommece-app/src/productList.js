import React from "react";

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
  { id: 3, name: "Headphones", price: 150 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>📦 Products</h2>
      {products.map((product) => (
        <div key={product.id} className="cart">
          <h3>{product.name}</h3>
          <p>💲 {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
