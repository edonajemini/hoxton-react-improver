import { useState } from 'react'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import {HomePage } from "./pages/HomePage";
import {Header} from "./components/Header"
import { AddProducts } from "./pages/AddProducts";
import { Cart } from "./pages/Cart";
import { AboutUs } from './pages/AboutUs';
import { Products } from './components/Products';
function App() {


return (
  <div>
  <Header />
  <Routes>
  <Route index element={<Navigate to="/home" />} />
  <Route path="home" element= {<HomePage />} />
  <Route path="addproducts" element={<AddProducts />} />
  <Route path="cart" element={<Cart/>} />
  <Route path="aboutus" element={<AboutUs />} />
  </Routes>
  </div>
)
}

export default App
