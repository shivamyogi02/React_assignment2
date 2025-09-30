import React from "react";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.brand}</p>
    </div>
  );
};

export default ProductCard;
