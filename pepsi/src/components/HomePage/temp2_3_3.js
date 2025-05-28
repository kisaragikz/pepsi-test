import './temp2.css'
import Navbar from './navbar';
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import hiqimg7 from './img/hiqimg7.png';
import hiqimg8 from './img/hiqimg8.png';
import hiqimg9 from './img/hiqimg9.png';
import hiqimg10 from './img/hiqimg10.png';
import hiqimg11 from './img/hiqimg11.png';
import hiqimg12 from './img/hiqimg12.png';
import hiqimg13 from './img/hiqimg13.png';
import hiqimg14 from './img/hiqimg13.png';

const Temp2_3_3 = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
        const togglePopup = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    
        const boxData = [
            { img: hiqimg7, popupImg: hiqimg7, title: "Oreo", desc: "This is Oreo." },
                        { img: hiqimg8, popupImg: hiqimg8, title: "Oreo", desc: "This is Oreo." },
                        { img: hiqimg9, popupImg: hiqimg9, title: "Oreo", desc: "This is Oreo." },
                        { img: hiqimg10, popupImg: hiqimg10, title: "Oreo", desc: "This is Oreo." },
                        { img: hiqimg11, popupImg: hiqimg11, title: "Oreo", desc: "This is Oreo." },
                        { img: hiqimg12, popupImg: hiqimg12, title: "Oreo", desc: "This is Oreo." },
                        { img: hiqimg13, popupImg: hiqimg13, title: "Oreo", desc: "This is Oreo." },
                        { img: hiqimg14, popupImg: hiqimg14, title: "Oreo", desc: "This is Oreo." },
           
        ];
        const boxDataTop = boxData.slice(0, 4);
        const boxDataBottom = boxData.length > 4 ? boxData.slice(4) : [];
    
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
                {renderBoxSection(boxDataBottom, 4)}
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
export default Temp2_3_3