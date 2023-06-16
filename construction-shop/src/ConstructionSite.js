import React, { useState } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AddToCartButton from './AddToCartButton';



function ConstructionSite() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Iphone XS', price: 8100.00 },
    { id: 2, title: 'Samsung 8', price: 2200.00 },
    { id: 3, title: 'IPad', price: 1250.00 },
    { id: 4, title: 'Iphone XL', price: 2250.00 },
  ]);

  const renderProducts = () => {
    /*
    return products.map((product) => (
      <div key={product.id} className="product-item">
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>
      <label htmlFor={`quantity_${product.id}`} style={{marginLeft:100, marginRight:10}}>Quantity:</label>
      <input
        type="number"
        id={`quantity_${product.id}`}
        min="0"
        defaultValue="0"
        onChange={(e) => handleQuantityChange(product.id, e.target.value)}
        style={{width:40, marginRight:5}}
      />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    ));
  */
    return products.map((product) => (
      <div key={product.id} className="product-item">
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <AddToCartButton product={product} handleQuantityChange={handleQuantityChange} addToCart={addToCart} />
      </div>
  ));

 };

const [cart, setCart] = useState([]);

const handleQuantityChange = (productId, quantity) => {
  const updatedCart = cart.map((item) => {
    if (item.productId === productId) {
      return { ...item, quantity: Number(quantity) };
    }
    return item;
  });
  setCart(updatedCart);
};

const addToCart = (product) => {
  const itemInCart = cart.find((item) => item.productId === product.id);
  if (itemInCart) {
    const updatedCart = cart.map((item) => {
      if (item.productId === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  } else {
    setCart([...cart, { productId: product.id, quantity: 1 }]);
  }
};

const renderCartItems = () => {
  return cart.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return (
      <div key={item.productId}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    );
  });
};

const calculateTotalPrice = () => {
  let total = 0;
  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    total += product.price * item.quantity;
  });
  return total.toFixed(2);
};

  return (
  <>
  <Row >
    <div className='layout'>
        <h1>My Shop</h1>

        <h2>Products</h2>
        
        {renderProducts()}

        <h2>Cart</h2>
         {renderCartItems()}
        <p>Total Price: ${calculateTotalPrice()}</p>


    </div>
 

  </Row>
  </>
  );
  }
  
export default ConstructionSite;

//{renderCartItems()}


/*

import React from 'react';
import ProductGrid from './ProductGrid';

const App = () => {
  // Assume you have an array of products
  const products = [
    { id: 1, name: 'Product 1', image: 'product1.jpeg', price: '$10' },
    { id: 2, name: 'Product 2', image: 'product2.jpeg', price: '$20' },
    { id: 3, name: 'Product 3', image: 'product3.jpeg', price: '$30' },
    // ...add more products as needed
  ];

  return (
    <div>
      <h1>Product Grid</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default App;
*/