import './temp2.css'
import Navbar from './navbar';
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import brandimg9 from './img/brandimg9.png';
import brandimg10 from './img/brandimg10.png';
import brandimg11 from './img/brandimg11.png';
import brandimg12 from './img/brandimg12.png';
import brandimg13 from './img/brandimg13.png';
import brandimg14 from './img/brandimg14.png';

const Temp2_4_1 = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
        const togglePopup = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    
        const boxData = [
            { img: brandimg9, popupImg: brandimg9, title: "Oreo", desc: "This is Oreo." },
            { img: brandimg10, popupImg: brandimg10, title: "Oreo", desc: "This is Oreo." },
            { img: brandimg11, popupImg: brandimg11, title: "Oreo", desc: "This is Oreo." },
            { img: brandimg12, popupImg: brandimg12, title: "Oreo", desc: "This is Oreo." },
            { img: brandimg13, popupImg: brandimg13, title: "Oreo", desc: "This is Oreo." },
            { img: brandimg14, popupImg: brandimg14, title: "Oreo", desc: "This is Oreo." },
           
        ];
        const boxDataTop = boxData.slice(0, 3);
        const boxDataBottom = boxData.length > 3 ? boxData.slice(3) : [];
    
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
            <Link className="temppreviousPage" to={{ pathname : `/catagory4`,}}>
                <div className="tempprevioustext">&lt;</div>
            </Link>
            <div className='temp2-top'>
                {renderBoxSection(boxDataTop, 0)}
                {renderBoxSection(boxDataBottom, 3)}
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
export default Temp2_4_1