import React from "react";

import Sidebar from "./pages/Sidebar";
import LeagueForm from "./components/LeagueForm"
import LeagueForm1 from "./components/LeagueForm1";

const App = () => {
  return (
    <>
      <Sidebar />
    </>
  )
}

export default App

// import { useState } from "react";

// import { RiDashboardFill } from "react-icons/ri";

// import {
//   BsArrowLeftShort,
//   BsSearch,
//   BsChevronDown,
//   BsFillImageFill,
//   BsReverseLayoutSidebarInsetReverse,
//   BsPerson,
// } from "react-icons/bs";

// import {
//   AiFillHome,
//   AiOutlineBarChart,
//   AiOutlineFileText,
//   AiOutlineMail,
//   AiOutlineSetting,
//   AiOutlineLogout,
// } from "react-icons/ai"

// const App = () => {
//   const [open, setOpen] = useState(true);
//   const [submenuOpen, setSubMenuOpen] = useState(false);

//   const Menus = [
//     { title: "Dashboard" },
//     { title: "Pages", icon: <AiOutlineFileText /> },
//     { title: "Media", spacing: true,icon: <BsFillImageFill /> },
//     {
//       title: "Projects",
//       icon: <BsReverseLayoutSidebarInsetReverse />,
//       submenu: true,
//       submenuItems: [
//         { title: "Submenu 1" },
//         { title: "Submenu 2" },
//         { title: "Submenu 3" },
//       ],
//     },
//     { title: "Analytics", icon: <AiOutlineBarChart /> },
//     { title: "Inbox",icon: <AiOutlineMail /> },
//     { title: "Profile", spacing: true, icon: <BsPerson /> },
//     { title: "Settings", icon: <AiOutlineSetting /> },
//     { title: "Logout", icon: <AiOutlineLogout /> },
//   ];

//   return (
//     <div className="flex">
//       <div 
//       className={`bg-sea-green h-screen p-5 pt-8 ${open ? "w-72":"w-20"} duration-300 relative`}>
//       <BsArrowLeftShort 
//       className={`bg-white text-sea-green
//        text-3xl rounded-full absolute -right-3 top-9 border 
//        border-sea-green cursor-pointer ${!open && "rotate-180"}`} onClick={()=>setOpen(!open)}/>
//         <div className="inline-flex">
//           <AiFillHome className={`bg-amber-300 text-4xl rounded
//           cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`}/>
//           <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>
//             Home
//           </h1> 
//         </div>
//         <div className={`flex items-center rounded-md bg-light-white
//         mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          
//           <BsSearch className={`text-white text-lg block
//           float-left cursor-pointer ${open && "mr-2"}`}/>
          
//           <input 
//           type={"search"} 
//           placeholder="Search" 
//           className={`text-base bg-teal-50 w-full text-white rounded-md
//           focus:outline-none ${!open && "hidden"}`}/>
//           <h1 className=""></h1>
//         </div>
//         <ul className="pt-2">
//           {Menus.map((menu, index)=>(
//           <>
//             <li key={index} className={`text-gray-300 text-sm flex 
//             items-center gap-x-4 cursor-pointer p-1 hover:bg-light-white 
//             rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
//               <span className="text-2xl block float-left">
//                 {menu.icon ? menu.icon : <RiDashboardFill />}
//               </span>
//               <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}
//               >
//                 {menu.title}
//               </span>

//               {menu.submenu && open && (
//                 <BsChevronDown className={`${submenuOpen &&
//                 "rotate-180"}`} onClick={()=>
//                   setSubMenuOpen(!submenuOpen)} />
//             )}
//             </li>
//             {menu.submenu && submenuOpen && open && (
//               <ul>
//                 {menu.submenuItems.map((submenuItem,index)=>(
//                   <li key={index} className="text-gray-300 text-sm flex 
//             items-center gap-x-4 cursor-pointer p-1 px-5 hover:bg-light-white 
//             rounded-md">
//                     {submenuItem.title}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </>))}
//         </ul>
//       </div>
      
//       <div className="p-7">
//         <h1 className="text-2xl font-semibold">Home Page</h1>
//       </div>
//     </div>
//   )
// }

// export default App

/*
import React from 'react';

function App() {
  return (
  
    <>
      <div className="container mx-auto bg-gray-400 rounded-xl shadow border p-8 m-10"> 
        <p className="text-3xl 0 font-bold mb-2">
          Welcome!
        </p>
        <p className="text-blue-500 text-lg">
          React and Tailwind CSS in action
        </p>
        <div>
          <div className="columns-6">
            <div className="columns-3">
              <p>Well, let me tell you something, ...</p>
              <p className="break-after-column">Sure, go ahead, laugh...</p>
              <p>Maybe we can live without...</p>
              <p>Look. If you think this is...</p>
            </div>
          </div>
        </div>
      </div>
    <div>Bottom Line</div>
    <div>Bottom Line</div>
    <div>Bottom Line</div>
    <div>Bottom Line</div>
    <div>Bottom Line</div>
    </>
  );
}
export default App;
*/

// import React from 'react';

// import product1Image from './assets/product1.jpg';
// import product2Image from './assets/product2.png';
// import product3Image from './assets/product3.jpeg';
// import product4Image from './assets/watch1.jpg';
// import product5Image from './assets/watch2.jpeg';

// const App = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <header className="bg-white shadow">
//         <div className="container mx-auto py-4 px-8">
//           <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
//         </div>
//       </header>

//       <main className="container mx-auto mt-8 px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Product cards */}
//           <div className="bg-white p-4 shadow-md">
//             <img src={product1Image} alt="Product" className="w-full mb-4" />
//             <h2 className="text-lg font-medium text-gray-800">Product 1</h2>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
//               Add to Cart
//             </button>
//           </div>

//           <div className="bg-white p-4 shadow-md">
//             <img src={product2Image} alt="Product" className="w-full mb-4" />
//             <h2 className="text-lg font-medium text-gray-800">Product 2</h2>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
//               Add to Cart
//             </button>
//           </div>

//           <div className="bg-white p-4 shadow-md">
//             <img src={product3Image} alt="Product" className="w-full mb-4" />
//             <h2 className="text-lg font-medium text-gray-800">Prouct 3</h2>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
//               Add to Cart
//             </button>
//           </div>
            
//           <div className="bg-white p-4 shadow-md">
//             <img src={product4Image} alt="Product" className="w-full mb-4" />
//             <h2 className="text-lg font-medium text-gray-800">Product 4</h2>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
//               Add to Cart
//             </button>
//           </div>

//           <div className="bg-white p-4 shadow-md">
//             <img src={product5Image} alt="Product" className="w-full mb-4" />
//             <h2 className="text-lg font-medium text-gray-800">Product 5</h2>
//             <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             <button className="bg-blue-500 hover:bg-green-600 text-white py-2 px-4 mt-4 rounded">
//               Add to Cart
//             </button>
//           </div>

//         </div>
//       </main>

//       <footer className="bg-gray-200 py-4 px-8 mt-8">
//         <div className="container mx-auto text-center">
//           <p className="text-gray-600">&copy; 2023 Shopping Cart. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
