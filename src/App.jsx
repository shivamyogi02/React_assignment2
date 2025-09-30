import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch laptops from DummyJSON API
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Notice .products
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  return (
    <div className="app-container">
      <h1>Laptops</h1>
      <div className="cards-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
