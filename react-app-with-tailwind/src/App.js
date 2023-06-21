import React from 'react';

function App() {
  return (
    <>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
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