import ProductPage from './components/product/ProductPage'
import Homepage from './components/HomePage/homePage';
import React from 'react';
import {HashRouter, Router, Routes, Route} from "react-router-dom";
import MainPage from './components/Page/Mainpage.js'
import ProductDetail from './components/product/ProductDetail/ProductDetail'
import LoginPage from './components/Logincpn/LoginPage'
import Payment from './components/Payment/PaymentPage';
import ContactPage from './components/Contact/contact';
import RegisPage from './components/Register/RegisPage'
function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/purches" element={<MainPage/>}></Route>
          <Route path="/product" element={<ProductPage/>}></Route>
          <Route path="contact" element={<ContactPage/>}></Route>
          <Route path="/product/:page" element={<ProductDetail/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/payment" element={<Payment/>}></Route>
          <Route path="/register" element={<RegisPage/>}></Route>
        </Routes>
    </HashRouter>
  );
}

export default App;
