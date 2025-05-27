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
import Catagory1 from './components/HomePage/catagory1.js';
import Catagory2 from './components/HomePage/catagory2.js';
import Catagory3 from './components/HomePage/catagory3.js';
import Catagory4 from './components/HomePage/catagory4.js';
import Temp1_1_1 from './components/HomePage/temp1_1_1.js';
import Temp1_1_2 from './components/HomePage/temp1_1_2.js';
import Temp1_1_3 from './components/HomePage/temp1_1_3.js';
import Temp1_1_4 from './components/HomePage/temp1_1_4.js';
import Temp1_2_1 from './components/HomePage/temp1_2_1.js';
import Temp1_2_2 from './components/HomePage/temp1_2_2.js';
import Temp1_2_3 from './components/HomePage/temp1_2_3.js';
import Temp1_2_4 from './components/HomePage/temp1_2_4.js';
import Temp2_3_1 from './components/HomePage/temp2_3_1.js';
import Temp1_3_2 from './components/HomePage/temp1_3_2.js';
import Temp2_3_3 from './components/HomePage/temp2_3_3.js';
import Temp2_3_4 from './components/HomePage/temp2_3_4.js';
import Temp2_3_5 from './components/HomePage/temp2_3_5.js';
import Temp2_4_1 from './components/HomePage/temp2_4_1.js';
import Temp2_4_2 from './components/HomePage/temp2_4_2.js';
import Temp2_4_3 from './components/HomePage/temp2_4_3.js';
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
          <Route path="/catagory1" element={<Catagory1/>}></Route>
          <Route path="/catagory2" element={<Catagory2/>}></Route>
          <Route path="/catagory3" element={<Catagory3/>}></Route>
          <Route path="/catagory4" element={<Catagory4/>}></Route>
          <Route path="/Temp1_1_1" element={<Temp1_1_1/>}></Route>
          <Route path="/Temp1_1_2" element={<Temp1_1_2/>}></Route>
          <Route path="/Temp1_1_3" element={<Temp1_1_3/>}></Route>
          <Route path="/Temp1_1_4" element={<Temp1_1_4/>}></Route>
          <Route path="/Temp1_2_1" element={<Temp1_2_1/>}></Route>
          <Route path="/Temp1_2_2" element={<Temp1_2_2/>}></Route>
          <Route path="/Temp1_2_3" element={<Temp1_2_3/>}></Route>
          <Route path="/Temp1_2_4" element={<Temp1_2_4/>}></Route>
          <Route path="/Temp2_3_1" element={<Temp2_3_1/>}></Route>
          <Route path="/Temp1_3_2" element={<Temp1_3_2/>}></Route>
          <Route path="/Temp2_3_3" element={<Temp2_3_3/>}></Route>
          <Route path="/Temp2_3_4" element={<Temp2_3_4/>}></Route>
          <Route path="/Temp2_3_5" element={<Temp2_3_5/>}></Route>
          <Route path="/Temp2_4_1" element={<Temp2_4_1/>}></Route>
          <Route path="/Temp2_4_2" element={<Temp2_4_2/>}></Route>
          <Route path="/Temp2_4_3" element={<Temp2_4_3/>}></Route>
        </Routes>
    </HashRouter>
  );
}

export default App;
