import './catagory2.css'
import schweppesbr from './img/schweppes.png'
import pepsibr from './img/pepsi.png'
import spritebr from './img/sprite.png'
import fantabr from './img/fanta.png'
import { Link } from "react-router-dom";
import Navbar from './navbar';
import {React,useState,useEffect} from "react"
import catagory_img from './img/Catagory3.jpg'
const Catagory1 = ()=>{
    window.scroll(0,0);
    // let {page} = useParams();
    const [translate, setTranslate] = useState(1);
    const [shouldTransition, setShouldTransition] = useState(true);
    function handleClick() {
        setShouldTransition(false); 
        setTranslate(0); 
    }
    return(
        <div className='catagory2-container'>
            <Navbar/>
            <Link className="previousPage2" to='/#catagory-section' onClick={handleClick}>
                <div className="previoustext2">Return</div>
            </Link>
            <div className="catagory2-upper">
                <div>Production</div>
            </div>
            <div className='catagory2-box'>
                <Link to={{ pathname : `/temp1_1_1`,}}>
                    <div className="promo2 promo-first" >
                        <div className="image-wrapper2">
                            <img src={catagory_img}/>
                        </div>
                        <h2 className="title2" >Oreo</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/temp1_1_2`,}}>
                    <div className="promo2 promo-second" >
                        <div className="image-wrapper2">
                            <img src={catagory_img}/>
                        </div>
                        <h2 className="title2" >Hi-Q</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/temp1_1_3`,}}>
                    <div className="promo2 promo-third" >
                        <div className="image-wrapper2">
                            <img src={catagory_img}/>
                        </div>
                        <h2 className="title2" >Brand</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/temp1_1_4`,}}>
                    <div className="promo2 promo-forth" >
                        <div className="image-wrapper2">
                            <img src={catagory_img}/>
                        </div>
                        <h2 className="title2" >Halls</h2>
                    </div>
                </Link>
            </div>
        </div>  
    )
}
export default Catagory1