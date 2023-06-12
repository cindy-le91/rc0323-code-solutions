import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import Header from "./components/Header"
import About from "./pages/About"
import Catalog from "./pages/Catalog"
import ProductDetails from "./pages/ProductDetails"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index  element={<Catalog />} />
          <Route path="/details/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
