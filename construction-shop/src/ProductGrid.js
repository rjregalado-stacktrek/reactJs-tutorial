import React from 'react';
import './ProductGrid.css'; // Import the CSS file for styling

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product" key={product.id}>
          {/* Render product information */}
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
