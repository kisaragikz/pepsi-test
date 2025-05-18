import {Link} from "react-router-dom";
import "./ProductPage.css"
const Product = ({name,img_product,background_color,id,page}) =>{
    return (
        <div className="product-item-body">
            <div className="product-list">
                <img src={img_product} alt="" className="product-img"/>
            </div>
            <div className="product-text">
                <p>{name}</p>
                <Link to={{
                    pathname : `/product/${id-1}`,
                }}>Read More</Link>
            </div>
        </div>
    )
}
export default Product