
// After 

import React, { useState } from 'react';
import AddToCartButton from '../components/AddToCartButton';
//import AddToCartButton from './components/AddToCartButton';

function ConstructionSite() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100.00},
    { id: 2, title: 'Product 2', price: 200.00},
    { id: 3, title: 'Product 3', price: 250.00},
    { id: 4, title: 'Product 4', price: 250.00},
  ]);

    const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <AddToCartButton product={product} handleQuantityChange={handleQuantityChange} addToCart={addToCart} />
      </div>
    ));
  };

  const [myCart, setMyCart] = useState([]);

    const handleQuantityChange = (productId, quantity) => {
    const updatedCart = myCart.map((item) => {
      if (item.productId === productId) {
        return { ...item, quantity: Number(quantity) };
      }
      return item;
    });
    
   //console.log(updatedCart.length)
    setMyCart(updatedCart);
  };

  const addToCart = (product) => { 
    //const selectedProduct = products.find((product) => product.id === product);
    const existingCartItem = myCart.find((item) => item.productId === product.id); // from item.id === product to `item.productId === product.id`
  
    if (existingCartItem) {
      // Increase the quantity
      const updatedCart = myCart.map((item) =>
        item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setMyCart(updatedCart);
    } else {
      // Add the selected new product to 1
      const updatedCart = [...myCart, { productId: product.id, quantity: 1 }]; // from { ...selectedProduct, quantity: 1 } to { productId: product.id, quantity: 1 }
      setMyCart(updatedCart);
    }
  };

    const renderCartItems = () => {
    return myCart.map((item) => {
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
    myCart.forEach((item) => {
      const product = products.find((p) => p.id === item.productId);
      total += product.price * item.quantity;
    });
    return total.toFixed(2); //2 decimal point
  };

  return (
    <div>
      <h1>My Shop</h1>
      <div>
        <h2>Products</h2>
        {renderProducts()}
      </div>
      <div>
        <h2>My Cart</h2>
        {renderCartItems()}
        <p>Total Price: {calculateTotalPrice()}</p>
      </div>
    </div>
  );
}

export default ConstructionSite;
