import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/About';
import Pricing from './landing_page/pricing/Pricing';
import Support from './landing_page/support/Support';
import Navbar from './landing_page/Navbar';
import Footer from './Footer';
import NotFound from './landing_page/NotFound';
import Products from './landing_page/products/Products';
import 'react-toastify/dist/ReactToastify.css'
import Login from './landing_page/signup/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes >
    <Route path="/" element={<Homepage/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/pricing" element={<Pricing/>}/>
    <Route path="/product" element={<Products/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
  
  </BrowserRouter>
);


