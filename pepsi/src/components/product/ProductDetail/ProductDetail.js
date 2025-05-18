import Navbar from "../../HomePage/navbar"
import "./ProductStyle.css"
import { Link,useParams} from "react-router-dom"
import Item from "../products.json"
import {React,useState,useEffect} from "react"
const ProductDetail = () =>{
    window.scroll(0,0);
    let {page} = useParams();
    const [isHover, setIsHover] = useState(false);
    // eslint-disable-next-line
    const firstCond = (Number(page) == 0);
    // eslint-disable-next-line
    const secCond = (Number(page) == 38);
    const colorStyle = () => ({
        color: isHover ? Item[page].background_color: `white`,
        border: isHover ? `2px solid ${Item[page].background_color}` : `2px solid white` 
    });
    const handleMouseEnter = () => {
        setIsHover(true);
     };
  
    const handleMouseLeave = () => {
    setIsHover(false);
    };
    let [translate, setTranslate] = useState(0);
    let [shouldTransition, setShouldTransition] = useState(true);

    function handleClick() {
        setShouldTransition(false);
        setTranslate(0);
    }

    useEffect(() => {
        if (translate === 0) {
        setShouldTransition(true);
        setTranslate(1);
        }
    }, [translate]);
    return(
            <div className="detail-body" >
                <div className="detail-background" style={{backgroundColor:Item[page].background_color}}></div>
                <Navbar />
                {firstCond ? (
                    <>
                        <Link className="previousPage" to={{
                        pathname : `/product/${parseInt(page)+38}`,
                        }} onClick={handleClick}>
                        </Link>
                    </>
                ):(<>
                        <Link className="previousPage" to={{
                        pathname : `/product/${parseInt(page)-1}`,
                        }} onClick={handleClick}>
                        </Link>
                </>)}
                {secCond ?(
                    <>
                        <Link className="nextPage" to={{
                        pathname : `/product/${parseInt(page)-38}`,
                        }} onClick={handleClick}>
                        </Link>
                    </>
                ):(<>
                        <Link className="nextPage" to={{
                        pathname : `/product/${parseInt(page)+1}`,
                        }} onClick={handleClick}>
                        </Link>
                </>)}
                    
                <div className="detail-container" style={{transition: shouldTransition ? "all 0.75s" : "",opacity: `${translate}`}}>
                    <div className="detail-left">
                        <h1>{Item[page].name}</h1>
                        <h4>NUTRITION FACTS</h4>
                        <div style={{display:"flex"}}>
                            <div className="detail-item-box">
                                <p>Amount <br/>per Serving</p>
                                <h2>{Item[page].nutrition_facts.calories} cl</h2>
                                <div className="detail-item-footer">

                                </div>
                            </div>
                            <div className="detail-item-box">
                                <p>Total Fat</p>
                                <h2>{Item[page].nutrition_facts.daily_value.fat[0]}</h2>
                                <div className="detail-item-footer">

                                </div>
                            </div>
                            <div className="detail-item-box">
                                <p>Sodium</p>
                                <h2>{Item[page].nutrition_facts.daily_value.sodium[0]}</h2>
                                <div className="detail-item-footer">

                                </div>
                            </div>
                            <div className="detail-item-box">
                                <p>Total Carbohydrate</p> 
                                <h2>{Item[page].nutrition_facts.daily_value.carbohydrate[0]}</h2>
                                <div className="detail-item-footer">

                                </div>
                            </div>
                            <div className="detail-item-box">
                                <p>Protein</p> 
                                <h2>{Item[page].nutrition_facts.daily_value.protein}</h2>
                                <div className="detail-item-footer">

                                </div>
                            </div>
                        </div>
                        <div className="detail-left-footer">
                            <p>Not a significant source of other nutrients.</p>
                            <p>*Percent Daily Values are based on a 2,000 calorie diet.</p>
                        </div>
                        <Link to="/purches" className="detail-navbar" style={colorStyle()} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <div className="detail-nav-item">BUY NOW</div>
                        </Link>
                    </div>
                    <div className="detail-right">
                        <img className="detail-img" src={`${Item[page].img_product}`} alt=""/>
                    </div>
                </div>
            </div>
    )
}
export default ProductDetail