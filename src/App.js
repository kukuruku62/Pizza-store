import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { NotFound } from "./pages/NotFoundPage/NotFound";
import Cart from "./pages/Cart/Cart";

import "./scss/app.scss";
import Home from "./pages/Home/Home";

function App() {
  // const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <Header  />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
