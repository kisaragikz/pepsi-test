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
import diarymilkimg1 from './img/diarymilkimg1.png';
import diarymilkimg2 from './img/diarymilkimg2.png';
import diarymilkimg3 from './img/diarymilkimg3.png';
import diarymilkimg4 from './img/diarymilkimg4.png';
import diarymilkimg5 from './img/diarymilkimg5.png';
import diarymilkimg6 from './img/diarymilkimg6.png';
import diarymilkimg7 from './img/diarymilkimg7.png';
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Temp1_3_2 = ()=>{
    const [openIndex, setOpenIndex] = useState(null);
    
        const togglePopup = (index) => {
            setOpenIndex(openIndex === index ? null : index);
        };
    
        const boxData = [
            { img: diarymilkimg1, popupImg: diarymilkimg1, title: "Oreo", desc: "This is Oreo." },
            { img: diarymilkimg2, popupImg: diarymilkimg2, title: "Oreo", desc: "This is Oreo." },
            { img: diarymilkimg3, popupImg: diarymilkimg3, title: "Oreo", desc: "This is Oreo." },
            { img: diarymilkimg4, popupImg: diarymilkimg4, title: "Oreo", desc: "This is Oreo." },
            { img: diarymilkimg5, popupImg: diarymilkimg5, title: "Oreo", desc: "This is Oreo." },
            { img: diarymilkimg6, popupImg: diarymilkimg6, title: "Oreo", desc: "This is Oreo." },
            { img: diarymilkimg7, popupImg: diarymilkimg7, title: "Oreo", desc: "This is Oreo." },
           
        ];
        const boxDataTop = boxData.slice(0, 4);
        const boxDataBottom = boxData.length > 4 ? boxData.slice(4) : [];
    
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
            <Link className="temppreviousPage" to={{ pathname : `/catagory3`,}}>
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
                    {/* <div className='temp1-top-right-left'>
                        <h1>Halls XS<br></br>New Flavour</h1>
                        <br></br>
                        <h2>Introducing Halls Cola & Lemon Soda — a refreshingly cool new flavor that chills you to the core.</h2>
                    </div> */}
                    <div className='temp1-top-right-right'>
                        <h3>What we do :</h3>
                        <p>- &nbsp; Concept Development</p>
                        <p>- &nbsp; Design PKG AW</p>
                        <p>- &nbsp; Master KV</p>
                        <p>- &nbsp; Online VDO</p>
                    </div>
                </div>
            </div>
            <div className='temp1-bottom-container'>
                {renderBoxSection(boxDataTop, 0)}
                {renderBoxSection(boxDataBottom, 4)}
            </div>
        </div>
        
    )
}

export default Temp1_3_2;