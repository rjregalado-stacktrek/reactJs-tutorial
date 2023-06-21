/*
import React, { useState } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AddToCartButton from './components/AddToCartButton';

function ConstructionSite() {
  const [products, setProducts] = useState([   // counter = 5, setCounter(counter+1), counter = 6
    { id: 1, title: 'Iphone XS', price: 8100.00 },
    { id: 2, title: 'Samsung 8', price: 2200.00 },
    { id: 3, title: 'IPad', price: 1250.00 },
    { id: 4, title: 'Iphone XL', price: 2250.00 },
  ]);
  
  
  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id} className="product-item">
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <AddToCartButton product={product} handleQuantityChange={handleQuantityChange} addToCart={addToCart} />
      </div>
  ));

 };

const [cart, setCart] = useState([]);

const handleQuantityChange = (pId, quantity) => {
  const updatedCart = cart.map((item) => {
    if (item.pId === pId) {
      return { ...item, quantity: Number(quantity) }; // spread array
    }
    return item;
  });
  setCart(updatedCart);
};

const addToCart = (product) => {
  const itemInCart = cart.find((item) => item.pId === product.id);
  if (itemInCart) {
    const updatedCart = cart.map((item) => {
      if (item.pId === product.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  } else {
    setCart([...cart, { pId: product.id, quantity: 1 }]);
  }
};

const renderCartItems = () => {
  return cart.map((item) => {
    const product = products.find((p) => p.id === item.pId);
    return (
      <div key={item.pId}>
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
    const product = products.find((p) => p.id === item.pId);
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

*/
/*
import React, { useState } from 'react';
//import AddToCartButton from '../components/AddToCartButton';
import AddToCartButton from './components/AddToCartButton';

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

    const handleQuantityChange = (pId, quantity) => {
    const updatedCart = myCart.map((item) => {
      if (item.pId === pId) { // change item.pId to item.id
        return { ...item, quantity: Number(quantity) };
      }
      return item;
    });
    
   //console.log(updatedCart.length)
    setMyCart(updatedCart);
  };

  const addToCart = (product) => { 
    //const selectedProduct = products.find((product) => product.id === product);
    const existingCartItem = myCart.find((item) => item.pId === product.id);
  
    if (existingCartItem) {
      // Increase the quantity
      const updatedCart = myCart.map((item) =>
        item.pId === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setMyCart(updatedCart);
    } else {
      // Add the selected new product to 1
      const updatedCart = [...myCart, { pId: product.id, quantity: 1 }]; // from { ...selectedProduct, quantity: 1 } to { pId: product.id, quantity: 1 }
      setMyCart(updatedCart);
    }
  };

    const renderCartItems = () => {
    return myCart.map((item) => {
      const product = products.find((p) => p.id === item.pId);
      return (
        <div key={item.pId}>
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
      const product = products.find((p) => p.id === item.pId);
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
*/

// Melissa


import React, { useState } from "react";
//import AddToCartButton from './components/AddToCartButton';

const AddToCartButton = ({ product, handleQuantityChange, addToCart })=>{
    return (
      <div>
        <label htmlFor={`quantity_${product.id}`}>Quantity:</label>
        <input
          type="number"
          name={product.id}
          id={`quantity_${product.id}`}
          min="0"
          defaultValue="0"
          onChange={(e) => handleQuantityChange(product.id, e.target.value)}
        />
    
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );

  };

function ConstructionSite() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Smart Compact-Fingerprint Keyless Entry Latch Lock",
      price: 520.0,
      quantity: 0,
    },
    {
      id: 2,
      title: "Smart Medium-Fingerprint and Keyless Entry Mortise Lock",
      price: 480.0,
      quantity: 0,
    },
    {
      id: 3,
      title: "Slim-Fingerprint Keyless Entry and Mortise Lock",
      price: 450.0,
      quantity: 0,
    },
    {
      id: 4,
      title: "Super Slim-Fingerprint Keyless Entry Smart Mortise Lock",
      price: 550.0,
      quantity: 0,
    },
  ]);

  
    const [cart, setCart] = useState([]);

    const handleQuantityChange = (pId, quantity) => {
    const updatedCart = cart.map((item) => { // products.map to cart.map
      if (item.pId === pId) {
        return { ...item, quantity: Number(quantity)};
      }
      return item;
    });
    //setProducts(updatedProduct)
    // console.log(setProducts)
    setCart(updatedCart);
    // console.log(setCart)
  };

    const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <AddToCartButton product={product} handleQuantityChange={handleQuantityChange} addToCart={addToCart}/>       
      </div>
    ));
  };
  
  //<p>{addToCartButton({product, handleQuantityChange, addToCart})}</p> // alternatative solution

  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.pId === product.id);
    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.pId === product.id) {
          return { ...item, quantity: Number(item.quantity + 1) };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { pId: product.id, quantity: 1 }]);
    }
  };

  const renderCartItems = () => {
    return cart.map((item) => {
      const product = products.find((p) => p.id === item.pId);
      return (
        <div key={item.pId}>
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
      const product = products.find((p) => p.id === item.pId);
      total += product.price * item.quantity;
    });
    return total.toFixed(2);
  };
  
  return (
    <>
      <div>
        <h1>My Shop</h1>
        
        <div>
          <h2>Products</h2>
          {renderProducts()}
        </div>
        
        <div>
          <h2>Cart</h2>
          {renderCartItems()}
          <p>Total Price: ${calculateTotalPrice()}</p>
        </div> 
      
      </div>
    </>
  );

}

export default ConstructionSite;
