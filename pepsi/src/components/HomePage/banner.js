import './banner.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import pepsi from "./img_product/PEPSI.png";
import fantaOrange from "./img_product/FANTA ORANGE.png";
import SCHWEPPE_STONIC_WATER from "./img_product/SCHWEPPES TONIC WATER.png";
import sprite from "./img_product/SPRITE.png";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const Banner = ()=>{
    return(
        <div className='banner-container'>
            <div className='left-container'>
                <div className='top-quote'>KUMI SHOP</div>
                <div className='mid-quote'>
                    <div>NEED</div>
                    <div>SOME</div>
                    <div>DRINK?</div>
                </div>
                <div className='bot-quote'>
                    <div className='left-quote'>Fast delivery</div>
                    <div className='center-quote'>Agent prices</div>
                    <div className='right-quote'>Many products</div>
                </div>
            </div>
            <div className='right-container'>
                <Swiper className='banner-swiper'
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation={true}
                    pagination={{clickable: true}}
                    scrollbar={{ dragable: false }}
                    loop={true}
                    style={{
                        "--swiper-pagination-color": "#f86c2c",
                        "--swiper-pagination-bullet-inactive-color": "white",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px"
                      }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 0,
                        },
                        350: {
                            slidesPerView: 1,

                        },
                        540: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1080: {
                            slidesPerView: 1,
                        },
                        1440: {
                            slidesPerView: 1,
                        },
                    }}
                >
                <SwiperSlide>
                    <div className='b-item-box'>
                        <img className='b-item-img' src={pepsi} alt=""></img>
                        <h2 className='b-item-text'>PEPSI</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-item-box'>
                        <img src={fantaOrange} className='b-item-img'  alt=""></img>
                        <h2 className='b-item-text'>FANTA ORANGE</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-item-box'>
                        <img src={SCHWEPPE_STONIC_WATER} className='b-item-img'  alt=""></img>
                        <h2 className='b-item-text'>SCHWEPPES TONIC WATER</h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='b-item-box'>
                        <img src={sprite} className='b-item-img'  alt=""></img>
                        <h2 className='b-item-text'>SPRITE</h2>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </div>
        
    )
}

export default Banner