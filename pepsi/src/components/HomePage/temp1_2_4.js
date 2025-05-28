import Navbar from './navbar';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import React, { useState } from 'react';
import { Link,useParams} from "react-router-dom"
import vdo from './vdo/Hall.mp4'
import sky from './vdo/sky.jpg'
import './temp1.css'
import pepsibr from './img/pepsi.png'
import spritebr from './img/sprite.png'
import fantabr from './img/fanta.png'
import danone from './img/danone.png'
import mondelez from './img/mondelez.png'
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Temp1_2_4 = ()=>{
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
    return(
        <div className='temp1-container'>
            <Navbar/>
            <Link className="temppreviousPage" to={{ pathname : `/catagory2`,}}>
                <div className="tempprevioustext">&lt;</div>
            </Link>
            <Link className="tempnextPage" to={{ pathname : `/temp1_2_1`,}}>
                <div className="tempnexttext">&gt;</div>
            </Link>
            <div className='temp1-top-container'>\
                <div className='temp1-top-left'>
                    <div className="temp1-vdo-box">
                        <video className="temp1-vdo" loop muted controls playsInline poster={sky}>
                            <source src={vdo}></source>
                        </video>
                    </div>
                </div>
                <div className='temp1-top-right'>
                    <div className='temp1-top-right-left'>
                        <h1>Drink BRAND's<br></br>Scan Code</h1>
                        <br></br>
                        <h2>The “Drink BRAND, Scan the Code” campaign aims to build daily drinking habits while boosting engagement.By scanning the unique code inside each bottle, consumers enjoy a fun, rewarding experience.
</h2>
                    </div>
                    <div className='temp1-top-right-right'>
                        <h3>What we do :</h3>
                        <p>- &nbsp; Master KV</p>
                        <p>- &nbsp; VDO opening campaign</p>
                        <p>- &nbsp; Online VDO</p>
                        <p>- &nbsp; Banner</p>
                    </div>
                </div>
            </div>
            <div className='temp1-bottom-container'>
                {renderBoxSection(boxDataTop, 0)}
            </div>
        </div>
        
    )
}

export default Temp1_2_4;