import React from "react";
import Stuednt from "./comp/Stuednt";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./comp/Data";
import Navbar from "./comp/Navbar";
import Update from "./comp/Update";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Stuednt />} />
          <Route path="/data" element={<Data />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
