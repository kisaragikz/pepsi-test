import Navbar from './navbar';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import vdo from './vdo/Hall.mp4';
import sky from './vdo/sky.jpg';
import './temp1.css';
import pepsibr from './img/pepsi.png';
import spritebr from './img/sprite.png';
import fantabr from './img/fanta.png';
import danone from './img/danone.png';
import mondelez from './img/mondelez.png';
import oreo2 from './img/oreo2.jpg';

const Temp1_1_1 = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const togglePopup = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const boxData = [
        { img: danone, popupImg: oreo2, title: "Danone", desc: "This is Danone." },
        { img: mondelez, popupImg: "https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8", title: "Mondelez", desc: "This is Mondelez." },
        { img: pepsibr, popupImg: "https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8", title: "Pepsi", desc: "This is Pepsi." },
        { img: spritebr, popupImg: "https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8", title: "Sprite", desc: "This is Sprite." },
        { img: fantabr, popupImg: "https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8", title: "Fanta", desc: "This is Fanta." },
    ];

    const renderBoxSection = (offset = 0) => (
        <div className='temp1-bottom-upper'>
            {boxData.map((box, index) => {
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
                                    <div className="popup__text">
                                        <h1>{box.title}</h1>
                                        <p>{box.desc}</p>
                                    </div>
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
                            <video className="temp1-vdo" loop muted controls playsInline poster={sky}>
                                <source src={vdo}></source>
                            </video>
                        </div>
                    </div>
                    <div className='temp1-top-right'>
                        <div className='temp1-top-right-left'>
                            <h1>The Epic OREO<br />Space Dunk</h1>
                            <br />
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
                    {renderBoxSection(0)}
                    {renderBoxSection(5)}
                </div>
            </div>
        </div>
    );
};

export default Temp1_1_1;
