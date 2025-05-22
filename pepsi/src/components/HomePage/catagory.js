import './catagory.css'
import schweppesbr from './img/schweppes.png'
import pepsibr from './img/pepsi.png'
import spritebr from './img/sprite.png'
import fantabr from './img/fanta.png'
import { Link } from "react-router-dom";
const Catagory = ()=>{
    return(
        <div className='catagory-container' id='catagory-section'>
            <div className="catagory-upper">
                <div>CATAGORIES</div>
            </div>
            <div className='catagory-box'>
                <Link to={{ pathname : `/product/${0}`,}}>
                    <div className="promo promo-first" >
                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1554620121-59e7f3f6e3a4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                        </div>
                        <h2 className="title" >Oreo</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/product/${1}`,}}>
                    <div className="promo promo-second" >
                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1523806762236-1d3a6b7eb3fd?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                        </div>
                        <h2 className="title" >Scott</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/product/${2}`,}}>
                    <div className="promo promo-third" >
                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1548008116-bcfec1f4c812?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                        </div>
                        <h2 className="title" >Hi-Q</h2>
                    </div>
                </Link>
                <Link to={{ pathname : `/product/${3}`,}}>
                    <div className="promo promo-forth" >
                        <div className="image-wrapper">
                            <img src="https://images.unsplash.com/photo-1569335048491-5fb94951e885?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                        </div>
                        <h2 className="title" >Brand</h2>
                    </div>
                </Link>
            </div>
        </div>  
    )
}
export default Catagory