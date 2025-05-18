import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import './navbar.css'
import { CiUser, CiLogout} from "react-icons/ci";
const Navul = styled.ul`
    display: flex;
    @media (max-width: 768px) {
        position: fixed;
        flex-flow: column nowrap;
        background-color: #1e1e1e;
        top: 55px;
        right: 0;
        width: 220px;
        height: 100vh;
        padding-top: 3.5rem;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.0s ease-in-out;
    }
`
const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: none;
    z-index: 20;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => open ? '#fff' : '#eee'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0deg)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0deg)'};
        }
    }
`
const CheckLogin = (props)=>{
    return
}
const Navbar = () => {
    const [Logined, setLogined] = useState(JSON.parse(localStorage.getItem('login')))
    console.log(Logined)
    const loging = ()=>{
        {window.location.reload();}
        localStorage.setItem('login', 0);
    }
    const [open, setOpen] = useState(false)
    return (
        <div className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <div className="navbar-item" id="navbarhead">
                        Kumi Shop
                    </div>
                </Link>
            </div>

            {/* <div className="navbar-center">
                
                <div className='navbar-item'>what's new</div>
                <div className='navbar-item'>newsletter</div>
                
            </div> */}
            {/* <input type="checkbox" id="checkbox"/>
            <a className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a> */}
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div ></div>
                <div ></div>
                <div ></div>
            </StyledBurger>
            <div className="navbar-right" open={open}>
                <Navul open={open}>
                    <li><Link to="/product"><div className='navbar-item gradient'>view product</div></Link></li>
                    {/* <li><Link to="/contact"><div className='navbar-item gradient'>contact us</div></Link></li> */}
                    <li><Link to="/purches"><a><div className='navbar-item gradient' id='buy'>buy products</div></a></Link></li>
                    {Logined === 0 ?<li><Link to="/login"><a><CiUser className='uiPeple'
                        style={{width:'40px', color: '#f86c2c', height:'50px', marginLeft:'1.5vw', marginRight:'2vw'}}
                    ></CiUser></a></Link></li>: Logined == null ?<li><Link to="/login"><a
                    onClick={()=>loging()}><CiUser className='uiPeple'
                    style={{width:'40px', color: '#f86c2c', height:'50px', marginLeft:'1.5vw', marginRight:'2vw'}}
                    ></CiUser></a></Link></li>:
                    <li><Link to="/">
                        <a onClick={()=>loging()}>
                        <CiLogout className='uiPeple'
                        style={{width:'40px', color: '#f86c2c', height:'50px', marginLeft:'1.5vw', marginRight:'2vw'}}
                    ></CiLogout></a></Link></li>}
                </Navul>
            </div>
        </div>
    )
}
export default Navbar