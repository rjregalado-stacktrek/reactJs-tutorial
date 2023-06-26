/*
import React from 'react';

function App() {
  return (
    <>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl 0 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
      <div>
        <div class="columns-3 ...">
          <div class="columns-2">
            <p>Well, let me tell you something, ...</p>
            <p class="break-after-column">Sure, go ahead, laugh...</p>
            <p>Maybe we can live without...</p>
            <p>Look. If you think this is...</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;
*/

import React from 'react';

import product1Image from './assets/product1.jpg';
import product2Image from './assets/product2.png';
import product3Image from './assets/product3.jpeg';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-8">
          <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product cards */}
          <div className="bg-white p-4 shadow-md">
            <img src={product1Image} alt="Product" className="w-full mb-4" />
            <h2 className="text-lg font-medium text-gray-800">Product 1</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-4 shadow-md">
            <img src={product2Image} alt="Product" className="w-full mb-4" />
            <h2 className="text-lg font-medium text-gray-800">Product 2</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-4 shadow-md">
            <img src={product3Image} alt="Product" className="w-full mb-4" />
            <h2 className="text-lg font-medium text-gray-800">Product 3</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 py-4 px-8 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">&copy; 2023 Shopping Cart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
