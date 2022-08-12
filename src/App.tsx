import { useState } from 'react'
import { Link, Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import {HomePage } from "./pages/HomePage";
import {Header} from "./components/Header"
import { Categories } from "./pages/Categories";
import { Cart } from "./pages/Cart";
import { AboutUs } from './pages/AboutUs';
function App() {


return (
  <div>
  <Header />
  <Routes>
  <Route index element={<Navigate to="/home" />} />
  <Route path="home" element= {<HomePage />} />
  <Route path="categories" element={<Categories />} />
  <Route path="cart" element={<Cart />} />
  <Route path="aboutus" element={<AboutUs />} />
  </Routes>
  </div>
)
}

export default App
