import Navbar from './navbar';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import React, { useState } from 'react';
import { Link,useParams} from "react-router-dom"
import hallvdo1 from './vdo/Hall1.mp4'
import sky from './vdo/sky.jpg'
import './temp1.css'
import oreovdo1 from './vdo/oreovdo1.mp4';
import hallimg1 from './img/hallimg1.png';
import hallimg2 from './img/hallimg2.png';
import hallimg3 from './img/hallimg3.png';
import hallimg4 from './img/hallimg4.png';
import hallimg5 from './img/hallimg5.png';
import hallimg6 from './img/hallimg6.png';
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Temp1_1_4 = ()=>{
    const [openIndex, setOpenIndex] = useState(null);
    
        const togglePopup = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    
        const boxData = [
            { img: hallimg1, popupImg: hallimg1, title: "Oreo", desc: "This is Oreo." },
            { img: hallimg2, popupImg: hallimg2, title: "Oreo", desc: "This is Oreo." },
            { img: hallimg3, popupImg: hallimg3, title: "Oreo", desc: "This is Oreo." },
            { img: hallimg4, popupImg: hallimg4, title: "Oreo", desc: "This is Oreo." },
            { img: hallimg5, popupImg: hallimg5, title: "Oreo", desc: "This is Oreo." },
            { img: hallimg6, popupImg: hallimg6, title: "Oreo", desc: "This is Oreo." },
    
        ];
        const boxDataTop = boxData.slice(0, 6);
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
            <Link className="temppreviousPage" to={{ pathname : `/catagory1`,}}>
                <div className="tempprevioustext">&lt;</div>
            </Link>
            <Link className="tempnextPage" to={{ pathname : `/temp1_2_1`,}}>
                <div className="tempnexttext">&gt;</div>
            </Link>
            <div className='temp1-top-container'>\
                <div className='temp1-top-left'>
                    <div className="temp1-vdo-box">
                        <video className="temp1-vdo" loop muted controls playsInline poster={sky}>
                            <source src={hallvdo1}></source>
                        </video>
                    </div>
                </div>
                <div className='temp1-top-right'>
                    <div className='temp1-top-right-left'>
                        <h1>Halls XS with<br></br>Jeff Satur</h1>
                        <br></br>
                        <h2>Halls XS welcomes Jeff Satur as its new presenter, bringing fresh energy to connect with Gen Z and their lifestyle..</h2>
                    </div>
                    <div className='temp1-top-right-right'>
                        <h3>What we do :</h3>
                        <p>- &nbsp; 3D OOH (adapt from TVC)</p>
                        <p>- &nbsp; Online Ecom </p>
                        <p>- &nbsp; POSM</p>
                    </div>
                </div>
            </div>
            <div className='temp1-bottom-container'>
                {renderBoxSection(boxDataTop, 0)}
            </div>
        </div>
        
    )
}

export default Temp1_1_4;