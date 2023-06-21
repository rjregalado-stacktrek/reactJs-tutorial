import { useEffect, useState } from "react";
import { fetchProducts } from "./api-mock/products-api";
import ProductsList from "./components/ProductsList";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

 
  useEffect(() => {
    fetchProducts().then((products) => {
      console.log("Fetched the products", products);
      setProducts(products);
    });
  });
  
  const handleAddToCart = (product) => {
    const isProductInCart = Boolean(
      cart.find((item) => item.productId === product.id)
    );
    if (isProductInCart) {
      // If product is already in the cart, increase its quantity
      setCart(
        cart.map((item) => {
          if (item.productId === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      );
    } else {
      // If product is not already in the cart, add it
      setCart([...cart, { productId: product.id, quantity: 1 }]);
    }
  };

  <ProductsList products={products} onAddToCart={handleAddToCart} />
  
  return (
    <div>
      <h1>Coffee shop</h1>
      <div style={{ display: "flex" }}>
        <div style={{ width: "70%", padding: "10px" }}>
          <ProductsList products={products} />
        </div>
        <div
          style={{
            width: "30%",
            backgroundColor: "lightskyblue",
            padding: "10px",
          }}
        >
          <ShoppingCart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default App;