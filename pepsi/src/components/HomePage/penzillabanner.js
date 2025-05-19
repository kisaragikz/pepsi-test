import './penzillabanner.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import penzilla_logo from './img/penzilla-logo.png'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const Penzillabanner = ()=>{
    return(
        <div className='penzilla-banner-container'>
            <div className='penzilla-left-container'>
                {/* <div className='penzilla-left-top-quote'>Penzilla</div> */}
                <div className='penzilla-left-mid-quote'>
                    <div className='logo-box'>
                        <img className='logo-img' src={penzilla_logo} alt=''></img>
                    </div>
                </div>
            </div>
            <div className='penzilla-right-container'>
                <div className='penzilla-right-mid-quote'>
                    <h1>WELCOME</h1>
                    <h2>LET'S GET STARTED</h2>
                    <h3>CHECK OUT THE LATEST DROP</h3>
                </div>
            </div>
        </div>
        
    )
}

export default Penzillabanner