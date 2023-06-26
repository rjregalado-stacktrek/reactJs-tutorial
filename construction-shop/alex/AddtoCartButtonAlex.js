import React, { useState } from "react";

function AddToCartButton(props) {
  
  // const [products, setProducts] = useState([
  //   { id: 1, title: 'Product 1', price: 100.00 },
  //   { id: 2, title: 'Product 2', price: 200.00 },
  //   { id: 3, title: 'Product 3', price: 250.00 },
  //   { id: 4, title: 'Product 4', price: 250.00 },
  // ]);

  const [quantity, setQuantity] = useState(0);
  
  let product = props.product

  const handleQuantityChange = (quantity) => {
    setQuantity(quantity);

  };

const [cart, setCart] = useState([]);

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

const addToCart = (product) => {      //function (arrow function)
const itemInCart = cart.find((item) => item.productId === product.id);
if (itemInCart) {
    const updatedCart = cart.map((item) => {
    if (item.productId === product.id) {
        return { ...item, quantity: item.quantity + Number(quantity) };      // "key value pair object" it should be "quantity" react state
        
    }
    return item;
    });
    setCart(updatedCart);
    //console.log(cart)
    //console.log(setCart)

} else {
    setCart([...cart, { productId: product.id, quantity: 1 }]);
}
setQuantity(0);
};

return (
<>
    <div>
        <label htmlFor={`quantity_${product.id}`} style={{ marginLeft: 100, marginRight: 10 }} >
        Quantity:
        </label>
        <input
        type="number"
        id={`quantity_${product.id}`}
        min="0"
        defaultValue="0"
        value={quantity}
        onChange={(e) => handleQuantityChange(e.target.value)}
        style={{ width: 40, marginRight: 5 }}
        />
        <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    
</>
)
}

export default AddToCartButton;