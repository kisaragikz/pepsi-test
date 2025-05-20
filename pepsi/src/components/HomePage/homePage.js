import Navbar from './navbar';
import React from 'react';
import Banner from './banner';
import Footer from './footer';
import Bestseller from './bestseller';
import New from './new';
import Bestoffer from './bestoffer'
import './homePage.css';
import Featured from './featured';
import VdoPage from './VdoPage';
import Vdotest from './vdotest';
import Penzillabanner from './penzillabanner';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Homepage () {
    window.scroll(0,0)
    const location = useLocation();

    useEffect(() => {
        if (location.hash === "#catagory-section") {
        const el = document.getElementById("catagory-section");
        if (el) {
            setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        }
        }
    }, [location]);
    return (
        <div style={{width:"100%"}}>
            <Navbar></Navbar>
            {/* <section className='product-section'>
                <div className='product-promot'></div>
                <div className='product-soda'></div>
                <div className='product-cherry'></div>
            </section> */}
            <Penzillabanner></Penzillabanner>
            {/* <Banner></Banner> */}
            <Featured></Featured>
            <Bestseller></Bestseller>
            <Vdotest></Vdotest>
            {/* <Bestoffer></Bestoffer> */}
            {/* <New></New> */}
            {/* <VdoPage></VdoPage> */}
            
            {/* <SectionCoke></SectionCoke> */}
            {/* <Pourstep></Pourstep> */}
            {/* <Footer></Footer> */}
        </div>
    )
}
export default Homepage;