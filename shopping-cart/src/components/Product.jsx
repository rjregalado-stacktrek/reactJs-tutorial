import React from 'react'

/*
const Product = () => {
  return (
    
  );
};
*/

const Product = ({ product, onAddToCart }) => {
return (
  <>
    <div
      style={{ border: "1px solid lightgray", padding: "5px", margin: "5px" }}
    >
      <p>
        {product.name} ( price: ${product.price})
      </p>
      <img src={`images/${product.image}`} width="200px" />
    </div>
    <button onClick={() => onAddToCart(product)}>Add to cart</button>
  </>
);
};

export default Product;