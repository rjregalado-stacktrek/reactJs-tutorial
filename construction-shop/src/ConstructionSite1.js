import React, { useState } from 'react';
import image1 from './assests/assets/product1.jpg';
import image2 from './assests/assets/product2.png';
import image3 from './assests/assets/product3.jpeg';
import image4 from './assests/assets/watch1.jpg';


const ConstructionSite1 = () => {
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100.0, quantity: 0, image: image1 },
    { id: 2, title: 'Product 2', price: 200.0, quantity: 0, image: image2 },
    { id: 3, title: 'Product 3', price: 250.0, quantity: 0, image: image3 },
    { id: 4, title: 'Product 4', price: 250.0, quantity: 0, image: image4 },
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
      setTotalPrice(calculateTotalPrice(updatedCartItems));
      console.log("Updated Cart Items", updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: product.quantity }]);
    }
  };

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
  };

  const handleQuantityChange = (product, newQuantity) => {
    const updatedProducts = products.map((p) => {
      if (p.id === product.id) {
        return { ...p, quantity: newQuantity };
      }
      return p;
    });

    setProducts(updatedProducts);
  };

  const calculateTotalPrice = (updatedProducts) => {
    return updatedProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const renderProducts = () => {
    return products.map((product) => (
      <div key={product.id} className="mb-4 p-4 border rounded grid-cols-1">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <img src={product.image} alt={product.title} className="w-full mb-4" />
        <p className="mb-2">Price: ${product.price}</p>
        <p className="mb-2">
          Quantity:{' '}
          <input
            type="number"
            min="0"
            defaultValue="0"
            onChange={(e) =>
              handleQuantityChange(product, parseInt(e.target.value || 0))
            }
            className="border border-gray-300 px-2 py-1 rounded"
          />
        </p>
        <button
          onClick={() => handleAddToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Add to Cart
        </button>
        <button
          onClick={() => handleRemoveFromCart(product)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove from Cart
        </button>
      </div>
    ));
  };

  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className="mb-4 p-4 border rounded">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="mb-2">Price: ${item.price}</p>
        <p className="mb-2">Quantity: {item.quantity}</p>
      </div>
    ));
  };

  return (
    <>
    <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-8">
          <h1 className="text-2xl font-bold text-blue-800">Construction Shop</h1>
        </div>
    </header>

    <main className="container mx-auto mt-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {renderProducts()}
        </div>
        <section>
           <h2 className="text-xl font-bold">Cart</h2>
           {renderCartItems()}
        </section>
    </main>

     </>
  );
};

export default ConstructionSite1;
