
// import React, { useState } from 'react';
// import './ConstructionSite.css';
// import { Grid, Row, Col } from 'react-flexbox-grid';
// //import AddToCartButton from './components/AddToCartButton';

// function AddToCartButton(props) {
//   const [quantity, setQuantity] = useState(0);
//   let product = props.product

//   const handleQuantityChange = (quantity) => {
//     setQuantity(quantity);

//   };


// const [cart, setCart] = useState([]);

// // const handleQuantityChange = (pId, quantity) => {
// //   const updatedCart = cart.map((item) => {
// //     if (item.pId === pId) {
// //       return { ...item, quantity: Number(quantity) }; // spread array
// //     }
// //     return item;
// //   });
// //   setCart(updatedCart);
// // };

// const addToCart = (product) => {
//   const itemInCart = cart.find((item) => item.pId === product.id);
//   if (itemInCart) {
//     const updatedCart = cart.map((item) => {
//       if (item.pId === product.id) {
//         return { ...item, quantity: item.quantity + 1 };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//   } else {
//     setCart([...cart, { pId: product.id, quantity: 1 }]);
//   }
//   setQuantity(0);
// };

// const renderCartItems = () => {
//   return cart.map((item) => {
//     const product = products.find((p) => p.id === item.pId);
//     return (
//       <div key={item.pId}>
//         <h2>{product.title}</h2>
//         <p>Price: ${product.price}</p>
//         <p>Quantity: {item.quantity}</p>
//       </div>
//     );
//   });
// };

// const calculateTotalPrice = () => {
//   let total = 0;
//   cart.forEach((item) => {
//     const product = products.find((p) => p.id === item.pId);
//     total += product.price * item.quantity;
//   });
//   return total.toFixed(2);
// };
// }

// function ConstructionSite() {
//   const [products, setProducts] = useState([   // counter = 5, setCounter(counter+1), counter = 6
//     { id: 1, title: 'Iphone XS', price: 8100.00 },
//     { id: 2, title: 'Samsung 8', price: 2200.00 },
//     { id: 3, title: 'IPad', price: 1250.00 },
//     { id: 4, title: 'Iphone XL', price: 2250.00 },
//   ]);
  
  
//   const renderProducts = () => {
//     return products.map((product) => (
//       <div key={product.id} className="product-item">
//         <h4>{product.title}</h4>
//         <p>Price: ${product.price}</p>
//         <AddToCartButton product={product}/>
//       </div>
//   ));

//  };

//  return (
//   <>
//   <Row >
//     <div className='layout'>
//         <h1>My Shop</h1>

//         <h2>Products</h2>
        
//         {renderProducts()}

//         <h2>Cart</h2>
//         <p>Total Price: </p>

//     </div>
 
//   </Row>
//   </>
//   );
//   }
  
// export default ConstructionSite;


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

/*

import React, { useState } from "react";
//import AddToCartButton from './components/AddToCartButton';

const AddToCartButton = ({ product, handleQuantityChange, addToCart,  quantity })=>{

    return (
      <div>
        <label htmlFor={`quantity_${product.id}`}>Quantity:</label>
        <input
          type="number"
          name={product.id}
          id={`quantity_${product.id}`}
          min="0"
          defaultValue="0"
          onChange={(e) => handleQuantityChange(quantity)}
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


    const [quantity, setQuantity] = useState(0);
    //let product = props.product

    const handleQuantityChange = () => {
    setQuantity(quantity);

  };


    // const handleQuantityChange = (pId, quantity) => {
    // const updatedCart = cart.map((item) => { // products.map to cart.map
    //   if (item.pId === pId) {
    //     return { ...item, quantity: Number(quantity)};
    //   }
    //   return item;
    // });
    //setProducts(updatedProduct)
    // console.log(setProducts)
    //setCart(updatedCart);
    // console.log(setCart)
    //};

    const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <AddToCartButton product={product} handleQuantityChange={handleQuantityChange} addToCart={addToCart} quantity={quantity}/>       
      </div>
    ));
  };
  
  //<p>{addToCartButton({product, handleQuantityChange, addToCart})}</p> // alternatative solution

  const addToCart = (product) => {
    const itemInCart = cart.find((item) => item.pId === product.id);
    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.pId === product.id) {
          return { ...item, quantity: (item.quantity + Number(quantity)) };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { pId: product.id, quantity: 1 }]);
    }
    setQuantity(0);
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
*/

/*
import React, { useState } from "react";
import AddToCartButton from "./components/AddtoCartButtonAlex";

function ConstructionSite() {   
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100.00 },
    { id: 2, title: 'Product 2', price: 200.00 },
    { id: 3, title: 'Product 3', price: 250.00 },
    { id: 4, title: 'Product 4', price: 250.00 },
  ]);


const renderProducts = () => {
  
  return products.map((product) => (
    <div key={product.id} className="product-item">
      <h4>{product.title}</h4>
      <p>Price: ${product.price}</p>
      <AddToCartButton product={product}/>
    </div>
));

};

const [cart, setCart] = useState([]);

// const handleQuantityChange = (productId, quantity) => {
// const updatedCart = cart.map((item) => {
//   if (item.productId === productId) {
//     return { ...item, quantity: Number(quantity) };
//   }
//   return item;
// });
// setCart(updatedCart);
// };

// const addToCart = (product) => {
// const itemInCart = cart.find((item) => item.productId === product.id);
// if (itemInCart) {
//   const updatedCart = cart.map((item) => {
//     if (item.productId === product.id) {
//       return { ...item, quantity: item.quantity + 1 };
//     }
//     return item;
//   });
//   setCart(updatedCart);
// } else {
//   setCart([...cart, { productId: product.id, quantity: 1 }]);
// }
// };



const calculateTotalPrice = () => {
let total = 0;
cart.forEach((item) => {
  const product = products.find((p) => p.id === item.productId);
  total += product.price * item.quantity;
    });
return total.toFixed(2);
  };

  return (


    <div>
      <h1>My Shop</h1>

      <h2>Products</h2>
      
      {renderProducts()}
      <h1>----------------</h1>
      <h2>Cart</h2>
      <p>Total Price: ${calculateTotalPrice}</p>
      

    </div>

  );
};
export default ConstructionSite;

*/

import React, { useState } from 'react';

const ConstructionSite = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100.0, quantity: 0 },
    { id: 2, title: 'Product 2', price: 200.0, quantity: 0 },
    { id: 3, title: 'Product 3', price: 250.0, quantity: 0 },
    { id: 4, title: 'Product 4', price: 250.0, quantity: 0 },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // const handleAddToCart = (product) => {
  //   const updatedProducts = products.map((p) => {
  //     if (p.id === product.id) {
  //       return { ...p, quantity: p.quantity + product.quantity };
  //     }
  //     return p;
  //   });

  //   setProducts(updatedProducts);

  //   const itemInCart = cartItems.find((item) => item.id === product.id);

  //   if (itemInCart) {
  //     const updatedCartItems = cartItems.map((item) => {
  //       if (item.id === product.id) {
  //         return { ...item, quantity: item.quantity + product.quantity };
  //       }
  //       return item;
  //     });

  //     setCartItems(updatedCartItems);
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }

  //   setTotalPrice(calculateTotalPrice());
  // };

  const handleAddToCart = (product) => {
  const updatedProducts = products.map((p) => {
    if (p.id === product.id) {
      return { ...p, quantity: p.quantity + product.quantity };
    }
    return p;
  });

  setProducts(updatedProducts);

  const itemInCart = cartItems.find((item) => item.id === product.id);

  if (itemInCart) {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + product.quantity };
      }
      return item;
    });

    setCartItems(updatedCartItems);
    setTotalPrice(calculateTotalPrice(updatedCartItems))
    console.log("Updated Cart Items", updatedCartItems);
  } else {
    setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    //setTotalPrice(calculateTotalPrice(updatedProducts))
  }

  //setTotalPrice(calculateTotalPrice(cartItems));
  //resetQuantityInput(product.id);
  
};
// const resetQuantityInput = (productId) => {
//   const inputElement = document.getElementById(`quantity-${productId}`);
//   if (inputElement) {
//     inputElement.value = 0;
//   }
// };



  const handleRemoveFromCart = (product) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id && p.quantity > 0) {
        return { ...p, quantity: p.quantity - product.quantity };
      }
      return p;
    });

    setProducts(updatedProducts);

    const itemInCart = cartItems.find((item) => item.id === product.id);

    if (itemInCart && itemInCart.quantity > 0) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity - product.quantity };
        }
        return item;
      });

    setCartItems(updatedCartItems);
    setTotalPrice(calculateTotalPrice(updatedCartItems));

    }

    //setTotalPrice(calculateTotalPrice(updatedProducts));
  };

  const handleQuantityChange = (product, newQuantity) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: newQuantity };
      }
      return p;
    });

    setProducts(updatedProducts);
    //setTotalPrice(calculateTotalPrice(updatedProducts))
  };

  const calculateTotalPrice = (updatedProducts) => {
    return updatedProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>Quantity: <input type="number" min="0" defaultValue="0" onChange={(e) => handleQuantityChange(product, parseInt(e.target.value || 0))} /></p>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        <button onClick={() => handleRemoveFromCart(product)}>
          Remove from Cart
        </button>
      </div>
    ));
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    ));
  };

  return (
    <div>
      <h1>Construction Shop</h1>
      <div>
        <h2>Products</h2>
        {renderProducts()}
      </div>
      <div>
        <h2>Cart</h2>
        {renderCartItems()}
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default ConstructionSite;

