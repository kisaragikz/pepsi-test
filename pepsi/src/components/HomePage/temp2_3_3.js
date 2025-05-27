import './temp2.css'
import Navbar from './navbar';
import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import schweppesbr from './img/schweppes.png'
import pepsibr from './img/pepsi.png'
import spritebr from './img/sprite.png'
import fantabr from './img/fanta.png'
import danone from './img/danone.png'
import mondelez from './img/mondelez.png'

const Temp2_3_3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(prev => !prev);
    };
    return (
        <div className='temp2-container'>
            <Navbar />
            <Link className="temppreviousPage" to={{ pathname : `/catagory3`,}}>
                <div className="tempprevioustext">&lt;</div>
            </Link>
            <div className='temp2-top'>
                <div className='temp2-bottom-upper'>
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={danone} width="30%"></img>
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
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={mondelez} width="45%"></img>
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
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={pepsibr} width="30%"></img>
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
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={spritebr} width="30%"></img>
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
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={fantabr} width="30%"></img>
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
                <div className='temp2-bottom-lower'>
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={danone} width="30%"></img>
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
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={mondelez} width="45%"></img>
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
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={pepsibr} width="30%"></img>
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
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={spritebr} width="30%"></img>
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
                    <div className='temp2-boxf'>
                        <img className='temp2-fimg' onClick={togglePopup} src={fantabr} width="30%"></img>
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