import Product from "./Product"
import products from "./products.json"
import Navbar from "../HomePage/navbar";
import PEPSI from "./ProductDetail/img_products/Pepsi-Logo.png"
import FANTA from "./ProductDetail/img_products/Fanta-Logo.png"
import SPRITE from "./ProductDetail/img_products/Sprite-Logo.png"
import SCHWEPPES from "./ProductDetail/img_products/Schweppes-Logo.png"
import PepsiIcon from "./ProductDetail/img_products/Pepsi-Icon.png";
import FantaIcon from "./ProductDetail/img_products/Fanta-Icon.png";
import SchweppesIcon from "./ProductDetail/img_products/schweppes.png";
import SpriteIcon from "./ProductDetail/img_products/Sprite-Icon.png";
import "./ProductPage.css"
import { useState,useEffect} from "react";
import Footer from "../HomePage/footer";
const ProductPage = () =>{
  let [opacity, setOpacity] = useState(0);
  let [shouldTransition, setShouldTransition] = useState(true);

  function handleClick() {
    setShouldTransition(false);
    setOpacity(0);
  }

  useEffect(() => {
    if (opacity === 0) {
      setShouldTransition(true);
      setOpacity(1);
    }
  }, [opacity]);

  const wraperFunction = (name,img) =>{
    setProd(name);
    setImg(img);
    handleClick();
    if(name === "PEPSI"){
      document.getElementById("product-nav").style.background = "#005CB4";
    }else if(name === "FANTA"){
      document.getElementById("product-nav").style.background = "#F7941E";
    }else if(name === "SCHWEPPES"){
      document.getElementById("product-nav").style.background = "#F8CD24";
    }else if(name === "SPRITE"){
      document.getElementById("product-nav").style.background = "#008B47";
    }
  }
  window.scroll(0,0);
  const [prods,setProd] = useState("PEPSI");
  const [img,setImg] = useState(PEPSI);
  return (
    <div style={{background:"#fff"}}>
          <Navbar />
          <div className="product-navbar" id="product-nav">
            <img src={PepsiIcon} style={{width:"4%"}} alt="" onClick={() => wraperFunction("PEPSI",PEPSI)} className="product-icon p-active"/>
            <img src={FantaIcon} style={{width:"5%"}} alt="" onClick={() => wraperFunction("FANTA",FANTA)} className="product-icon"/>
            <img src={SchweppesIcon} style={{width:"4%"}} alt="" onClick={() => wraperFunction("SCHWEPPES",SCHWEPPES)} className="product-icon"/>
            <img src={SpriteIcon} style={{width:"4%"}} alt="" onClick={() => wraperFunction("SPRITE",SPRITE)} className="product-icon"/>
          </div>
          <div className="product-container" style={{transition: shouldTransition ? "all 0.5s" : "",opacity:`${opacity}`}}>
            <div className="product-header" >
              <img src={img} style={{width:"20%"}} alt=""/>
            </div>
            <div className="product-body" id="product-pepsi">
              {products.filter(prod => prod.name.includes(prods)).map(filteredName => (
                <Product {...filteredName} key={filteredName.id}/>
              ))}
            </div>

            
          </div>
          <Footer/>
    </div>
    
  )
  
}

export default ProductPage;
