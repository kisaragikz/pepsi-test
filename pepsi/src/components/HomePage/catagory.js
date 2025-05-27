import './catagory.css'
import schweppesbr from './img/schweppes.png'
import pepsibr from './img/pepsi.png'
import spritebr from './img/sprite.png'
import fantabr from './img/fanta.png'
import { Link } from "react-router-dom";
import catagory_img from './img/Catagory3.jpg'
const Catagory = ()=>{
    return(
        <div className='catagory-container' id='catagory-section'>
            <div className="catagory-upper">
                <div>CATAGORIES</div>
            </div>
            <div className='catagory-box'>
                <Link to={{ pathname : `/catagory1`,}}>
                    <div className="promo promo-first" >
                        <div className="image-wrapper">
                            <img src={catagory_img}/>
                        </div>
                        <h2 className="title" >Production</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/catagory2`,}}>
                    <div className="promo promo-second" >
                        <div className="image-wrapper">
                            <img src={catagory_img}/>
                        </div>
                        <h2 className="title" >Campaign</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/catagory3`,}}>
                    <div className="promo promo-third" >
                        <div className="image-wrapper">
                            <img src={catagory_img}/>
                        </div>
                        <h2 className="title" >Packaging</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/catagory4`,}}>
                    <div className="promo promo-forth" >
                        <div className="image-wrapper">
                            <img src={catagory_img}/>
                        </div>
                        <h2 className="title" >Key Visual</h2>
                    </div>
                </Link>
            </div>
        </div>  
    )
}
export default Catagory