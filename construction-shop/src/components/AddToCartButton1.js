import React, {useState} from 'react';

const AddToCartButton = (props) => {
  const [quantity, setQuantity] = useState(0);
  let product = props.product;

  const handleQuantityChange = (quantity) => {
    setQuantity(quantity);
  };

  return (
    <>
      <div>
      <label htmlFor={`${product.id}`} style={{ marginLeft: 100, marginRight: 10 }}>
        Quantity: </label>
      <input
        type="number"
        id={`${product.id}`}
        min="0"
        defaultValue="0"
        value={quantity}
        onChange={(e) => handleQuantityChange(e.target.value)}
        style={{ width: 40, marginRight: 5 }}
      />
      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
    </>
  );
};

export default AddToCartButton;