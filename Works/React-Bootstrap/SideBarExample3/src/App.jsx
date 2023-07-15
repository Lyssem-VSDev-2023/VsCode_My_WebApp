import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/reports" element={<Reports></Reports>} />
          <Route path="/products" element={<Products></Products>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
