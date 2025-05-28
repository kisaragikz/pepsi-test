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
                    <h1>PENZILLA</h1>
                    <h2>We are PENZILLA, the creative design and advertising agency trusted by leading FMCG brands since 2014. We craft visuals that sell, move, and stick — from bold branding to scroll-stopping motion and immersive 3D. 
With over a decade of experience, we partner with FMCG brands  to deliver standout visuals across 
instore, digital, social, and OOH.
</h2>
                    {/* <h3>CHECK OUT THE LATEST DROP</h3> */}
                </div>
            </div>
        </div>
    )
}

export default Penzillabanner