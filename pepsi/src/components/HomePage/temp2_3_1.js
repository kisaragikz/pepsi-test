import './temp2.css'
import Navbar from './navbar';
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import doomilkimg1 from './img/doomilkimg1.png';
import doomilkimg2 from './img/doomilkimg2.png';
import doomilkimg3 from './img/doomilkimg3.png';
import doomilkimg4 from './img/doomilkimg4.png';
import doomilkimg5 from './img/doomilkimg5.png';
import doomilkimg6 from './img/doomilkimg6.png';
import doomilkimg7 from './img/doomilkimg7.png';
import doomilkimg8 from './img/doomilkimg8.png';
import doomilkimg9 from './img/doomilkimg9.png';

const Temp2_3_1 = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
        const togglePopup = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    
        const boxData = [
            { img: doomilkimg1, popupImg: doomilkimg1, title: "Oreo", desc: "This is Oreo." },
            { img: doomilkimg2, popupImg: doomilkimg2, title: "Oreo", desc: "This is Oreo." },
            { img: doomilkimg3, popupImg: doomilkimg3, title: "Oreo", desc: "This is Oreo." },
            { img: doomilkimg4, popupImg: doomilkimg4, title: "Oreo", desc: "This is Oreo." },
            { img: doomilkimg5, popupImg: doomilkimg5, title: "Oreo", desc: "This is Oreo." },
            { img: doomilkimg6, popupImg: doomilkimg6, title: "Oreo", desc: "This is Oreo." },
            { img: doomilkimg7, popupImg: doomilkimg7, title: "Oreo", desc: "This is Oreo." },
            { img: doomilkimg8, popupImg: doomilkimg8, title: "Oreo", desc: "This is Oreo." },
            { img: doomilkimg9, popupImg: doomilkimg9, title: "Oreo", desc: "This is Oreo." },
           
        ];
        const boxDataTop = boxData.slice(0, 5);
        const boxDataBottom = boxData.length > 5 ? boxData.slice(5) : [];
    
        const renderBoxSection = (data, offset = 0) => (
            <div className='temp2-bottom-upper'>
                {data.map((box, index) => {
                    const realIndex = index + offset;
                    return (
                        <div className='temp2-boxf' key={realIndex}>
                            <img
                                className='temp2-fimg'
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
        <div className='temp2-container'>
            <Navbar />
            <Link className="temppreviousPage" to={{ pathname : `/catagory3`,}}>
                <div className="tempprevioustext">&lt;</div>
            </Link>
            <div className='temp2-top'>
                {renderBoxSection(boxDataTop, 0)}
                {renderBoxSection(boxDataBottom, 5)}
            </div>
            {/* <div className='featured-bot'>
                <div className='boxf schweppes'>
                    <img className='fimg' src={danone} width="35%"></img>
                </div>
                <div className='boxf schweppes'>
                    <img className='fimg' src={mondelez} width="50%"></img>
                </div>
                <div className='boxf pepsi'>
                    <img className='fimg' src={pepsibr} width="35%"></img>
                </div>
                <div className='boxf sprite'>
                    <img className='fimg' src={spritebr} width="35%"></img>
                </div>
                <div className='boxf fanta'>
                    <img className='fimg' src={fantabr} width="35%"></img>
                </div>
            </div> */}

        </div>
    )
}
export default Temp2_3_1