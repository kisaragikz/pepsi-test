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

const Temp1_1_3 = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(prev => !prev);
    };
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
                            <source src={vdo}></source>
                        </video>
                    </div>
                </div>
                <div className='temp1-top-right'>
                    <div className='temp1-top-right-left'>
                        <h1>Kickstart your day<br></br>with BRAND's</h1>
                        <br></br>
                        <h2>Make BRAND's the first thing they reach for smarter morning.</h2>
                    </div>
                    <div className='temp1-top-right-right'>
                        <h3>What we do :</h3>
                        <p>- &nbsp; 3D OOH (from STB to final)</p>
                        <p>- &nbsp; Static OOH</p>
                        <p>- &nbsp; KOLs VDO</p>
                        <p>- &nbsp; POSM</p>
                    </div>
                </div>
            </div>
            <div className='temp1-bottom-container'>
                <div className='temp1-bottom-upper'>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={danone} width="30%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={mondelez} width="45%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={pepsibr} width="30%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={spritebr} width="30%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={fantabr} width="30%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='temp1-bottom-lower'>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={danone} width="30%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={mondelez} width="45%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={pepsibr} width="30%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={spritebr} width="30%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='temp1-boxf'>
                        <img className='temp1-fimg' onClick={togglePopup} src={fantabr} width="30%"></img>
                        {isOpen && (    
                            <div className={`popup ${isOpen ? 'visible' : 'hidden'}`} onClick={togglePopup}>
                                <div className="popup-inner" onClick={e => e.stopPropagation()}>
                                    <div className="popup__photo">
                                    <img
                                        src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?...etc"
                                        alt=""
                                    />
                                    </div>
                                    <div className="popup__text">
                                    <h1>Lorem ipsum dolor sit amet</h1>
                                    <p>Lorem ipsum dolor sit amet...</p>
                                    </div>
                                    <a className="popup__close" onClick={togglePopup}>X</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Temp1_1_3;