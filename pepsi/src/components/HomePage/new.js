import './new.css'
import { Link } from "react-router-dom";
import schweppesimg1 from './img_product/SCHWEPPES RASPBERRY GINGER ALE.png'
const New = () => {
    return (
        <div className='new-container'>
            <div className='new-left'>
                <div>N</div>
                <div>E</div>
                <div>W</div>
            </div>
            <div className='new-right'>
                <div className='new-img'>
                    <img className='newimg' src={schweppesimg1}></img>
                    <div className='new-price'>19 Baht</div>
                </div>
                <div className='new-text'>
                    <div className='new-text-header'>SCHWEPPES RASPBERRY GINGER ALE</div>
                    <div className='new-text-detail'>For over 200 years, Schweppes has 
                    produced classic carbonated beverages. Schweppes Raspberry Ginger Ale 
                    combines the mild taste of real ginger with sweet raspberry flavor and is caffeine free. 
                    Enjoy it as a refreshing soft drink or the perfect companion for your favorite spirits. 
                    Make any beverage the perfect taste with Schweppes Raspberry Ginger Ale.</div>
                    <div className='new-buynow'>
                        <Link to="/purches"><div className='new new-white'>Buy Now</div></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New