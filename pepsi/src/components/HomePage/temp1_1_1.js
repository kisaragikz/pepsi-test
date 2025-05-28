import Navbar from './navbar';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import sky from './vdo/sky.jpg';
import './temp1.css';
import pepsibr from './img/pepsi.png';
import spritebr from './img/sprite.png';
import fantabr from './img/fanta.png';
import danone from './img/danone.png';
import mondelez from './img/mondelez.png';
import oreovdo1 from './vdo/oreovdo1.mp4';
import oreoimg1 from './img/oreoimg1.png';
import oreoimg2 from './img/oreoimg2.png';
import oreoimg3 from './img/oreoimg3.png';
import oreoimg4 from './img/oreoimg4.png';
import oreoimg5 from './img/oreoimg5.png';

const Temp1_1_1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const togglePopup = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const boxData = [
        { img: oreoimg1, popupImg: oreoimg1, title: "Oreo", desc: "This is Oreo." },
        { img: oreoimg2, popupImg: oreoimg2, title: "Oreo", desc: "This is Oreo." },
        { img: oreoimg3, popupImg: oreoimg3, title: "Oreo", desc: "This is Oreo." },
        { img: oreoimg4, popupImg: oreoimg4, title: "Oreo", desc: "This is Oreo." },
        { img: oreoimg5, popupImg: oreoimg5, title: "Oreo", desc: "This is Oreo." },
       
    ];
    const boxDataTop = boxData.slice(0, 5);
    // const boxDataBottom = boxData.length > 3 ? boxData.slice(3) : [];

    const renderBoxSection = (data, offset = 0) => (
        <div className='temp1-bottom-upper'>
            {data.map((box, index) => {
                const realIndex = index + offset;
                return (
                    <div className='temp1-boxf' key={realIndex}>
                        <img
                            className='temp1-fimg'
                            src={box.img}
                            width="30%"
                            onClick={() => togglePopup(realIndex)}
                            alt={box.title}
                        />
                        {openIndex === realIndex && (
                            <div className="popup" onClick={() => togglePopup(realIndex)}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                        <img src={box.popupImg} alt={box.title} />
                                    </div>
                                    {/* <div className="popup__text">
                                        <h1>{box.title}</h1>
                                        <p>{box.desc}</p>
                                    </div> */}
                                    <a className="popup__close" onClick={() => togglePopup(realIndex)}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className='temp1-container'>
            <Navbar />
            <Link className="temppreviousPage" to="/catagory1">
                <div className="tempprevioustext">&lt;</div>
            </Link>
            <Link className="tempnextPage" to="/temp1_2_1">
                <div className="tempnexttext">&gt;</div>
            </Link>

            <div>
                <div className='temp1-top-container'>
                    <div className='temp1-top-left'>
                        <div className="temp1-vdo-box">
                            <video className="temp1-vdo" loop muted controls playsInline >
                                <source src={oreovdo1}></source>
                            </video>
                        </div>
                    </div>
                    <div className='temp1-top-right'>
                        <div className='temp1-top-right-left'>
                            <h1>The Epic OREO<br/>Space Dunk</h1>
                            <br/>
                            <h2>Turn the Oreo dunk into the most remarkable dunk in the galaxy.</h2>
                        </div>
                        <div className='temp1-top-right-right'>
                            <h3>What we do :</h3>
                            <p>- &nbsp; KV local adaptation</p>
                            <p>- &nbsp; KV promotion</p>
                            <p>- &nbsp; Instore POSM</p>
                            <p>- &nbsp; OOH CTW (from STB to final)</p>
                        </div>
                    </div>
                </div>

                <div className='temp1-bottom-container'>
                    {renderBoxSection(boxDataTop, 0)}
                    {/* {boxDataBottom.length > 0 && renderBoxSection(boxDataBottom, boxDataTop.length)} */}
                </div>
            </div>
        </div>
    );
};

export default Temp1_1_1;
