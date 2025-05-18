import './bestoffer.css'
import pepsizeromango from './img_product/PEPSI ZERO SUGAR MANGO.png'
import spritewintercranberry from './img_product/SPRITE WINTER SPICED CRANBERRY ZERO SUGAR.png'
import schweppeslemon from './img_product/SCHWEPPES BITTER LEMON.png'
const Bestoffer = () => {
    return (
        <div className='offer-container'>
            <div className='offer-header'>
                <div>BEST OFFER</div>
            </div>
            <div className='offer-content'>
                <div className='offer-box'>
                    <img className='offerimg' src={pepsizeromango}></img>
                    <div className='offer-price'>19 Baht</div>
                    <div className='offer-name'>PEPSI ZERO SUGAR MANGO</div>
                </div>
                <div className='offer-box'>
                    <img className='offerimg' src={spritewintercranberry}></img>
                    <div className='offer-price'>19 Baht</div>
                    <div className='offer-name'>SPRITE WINTER SPICED CRANBERRY ZERO SUGAR</div>
                </div>
                <div className='offer-box'>
                    <img className='offerimg' src={schweppeslemon}></img>
                    <div className='offer-price'>19 Baht</div>
                    <div className='offer-name'>SCHWEPPES BITTER LEMON</div>
                </div>
            </div>
        </div>
    )
}

export default Bestoffer