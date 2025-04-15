// // import Counter from "./comp/Counter";
// // import Form from "./comp/Form";
// // import LearnUse from "./comp/LearnUse";
// // import UseState from "./comp/UseState";
// // import { useEffect, useState } from "react";
// // import Effect from "./comp/Effect";
// // import Todo from "./todo/Todo";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Homepage from "./Website/Homepage";
// // import About from "./Website/About";
// // import Navbar from "./Website/Navbar";
// // import Footer from "./Website/Footer";
// // import Contact from "./Website/Contact";
// // import Data from "./Website/Data";
// // import SinglePage from "./Website/SinglePage";
// // import Tailwind from "./Tailwind/Tailwind";

// function App() {
//   // let firstName = "Devanshu";

//   // let lastName = "Sharma";

//   // function add(a, b) {
//   //   return a + b;
//   // }

//   // let userName_1 = "Devanshu";
//   // let userName_2 = "Manny";
//   // let userName_3 = "Kizie";

//   // const userData = [
//   //   {
//   //     userName: "Devanshu",
//   //     age: 34,
//   //   },
//   //   {
//   //     userName: "Manny",
//   //     age: 45,
//   //   },
//   //   {
//   //     userName: "Shivam",
//   //     age: 26,
//   //   },
//   //   {
//   //     userName: "Devanshu",
//   //     age: 34,
//   //   },
//   //   {
//   //     userName: "Manny",
//   //     age: 45,
//   //   },
//   //   {
//   //     userName: "Shivam",
//   //     age: 26,
//   //   },
//   // ];

//   // const [count, setCount] = useState(0);
//   // const [value, setValue] = useState("Devanshu");

//   // useEffect(() => {
//   //   console.log("Comp Render");
//   // }, [value]);

//   return (
//     <>
//       {/* <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact/:someValue" element={<Contact />} />
//           <Route path="/data" element={<Data />} />
//           <Route path="/single/:id" element={<SinglePage />} />
//           <Route path="/tailwind" element={<Tailwind />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter> */}

//       {/* <Cards name={userName_2} />
//       <Cards name={userName_1} />
//       <Cards name={userName_3} /> */}
//       {/* <Data allUser={userData} /> */}
//       {/* <UseState /> */}
//       {/* <Counter /> */}
//       {/* <LearnUse /> */}
//       {/* <Form /> */}
//       {/* <Todo /> */}
//       {/* <Effect></Effect> */}
//       {/* <h1>Count :- {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//       <h2>{value}</h2>
//       <button
//         onClick={() => {
//           setValue("Aman");
//         }}
//       >
//         Update
//       </button> */}
//     </>
//   );
// }

// export default App;

// import React, { createContext } from "react";
// import ChildA from "./context/ChildA";
// // import Child_1 from "./propdrill/Child_1";

// //create provider consumer

// const data = createContext();
// const userAge = createContext();

// const App = () => {
//   let userName = "Devanshu";
//   let age = 45;

//   // const userData = [{}, {}, {}];

//   return (
//     <div className="text-8xl">
//       <data.Provider value={userName}>
//         <userAge.Provider value={age}>
//           <ChildA />
//         </userAge.Provider>
//       </data.Provider>
//     </div>
//   );
// };

// export default App;
// export { data, userAge };

import React from "react";
import Mui from "./MUI/Mui";
import Signin from "./MUI/Signin";
import Navbar from "./MUI/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Homepage from "../src/Website/Homepage";
import About from "../src/Website/About";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

      <Mui />
      {/* <Signin /> */}
    </div>
  );
};

export default App;
