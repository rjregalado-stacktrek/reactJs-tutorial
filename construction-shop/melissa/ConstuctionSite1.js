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

function ConstructionSite1() {
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

export default ConstructionSite1;