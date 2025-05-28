import './temp2.css'
import Navbar from './navbar';
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import icecreaming1 from './img/icecreaming1.png';
import icecreaming2 from './img/icecreaming2.png';

const Temp2_4_2 = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
        const togglePopup = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    
        const boxData = [
            { img: icecreaming1, popupImg: icecreaming1, title: "Oreo", desc: "This is Oreo." },
            { img: icecreaming2, popupImg: icecreaming2, title: "Oreo", desc: "This is Oreo." },
           
        ];
        const boxDataTop = boxData.slice(0, 5);
        // const boxDataBottom = boxData.length > 3 ? boxData.slice(3) : [];
    
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
export default Temp2_4_2