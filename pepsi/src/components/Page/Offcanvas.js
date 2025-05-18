import Button from 'react-bootstrap/esm/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './OffCanvas.css'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {CiLogin,CiDollar} from "react-icons/ci";
const MyOffcanvas = (props)=>{
    const DelData = (data)=>{
        props.Deldata(data)
    }
    const AddData= (data)=>{
        props.addData(data)
    }
    const [data, setData] = useState([])
    const [usePrice, setUsePrice] = useState(0)
    let arPrice = []
    let arrPrice = []
    let price = 0
    useEffect(()=>{
        if(props.data){
            setData(props.data)
            arPrice  = props.data.map(data=> data.price)
            arrPrice = arPrice.map(data =>data)
            for(let i = 0; i<arrPrice.length ; i++){
                price += arrPrice[i]
            }
            setUsePrice(price)
        }else{
            
        }
    },[props.data])
    const [Logined, setLogined] = useState(JSON.parse(localStorage.getItem('login')))
    return(
        <Offcanvas show={props.show} onHide={props.onHide} placement='end' className="offCanvas-body">
        <Offcanvas.Header>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <h4><strong>ตะกร้าสินค้า</strong></h4>
                <h4>ราคารวม {usePrice} บาท</h4>
            </div>
            {Logined === 1?<Link to="/payment"> <CiDollar className="offcanvas-icon"/> </Link>:<Link to="/login"><CiLogin className="offcanvas-icon"/></Link>}
        </Offcanvas.Header>
        <Offcanvas.Body>
            {data.map(data=>(
                <div key={data.id}>
                    <hr></hr>
                    <div className='box-offCanvas'>
                        <div className='left-offCanvas'>
                        
                            <img src={data.pic}></img>
        
                        </div>
                        <div className='right-offCanvas'>
                            <h5>{data.name}</h5>
                            <p>{data.price} Baht</p>
                            <p>{data.count} Item</p>
                            <div className='button-pack'>
                                <a type="button" className="btn btn-primary btn-xs btn-block bg-dark" onClick={()=>AddData(data)}>+</a>
                                <a type="button" className="btn btn-primary btn-xs btn-block bg-dark" onClick={()=>DelData(data)}>-</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
      
    )
}
export default MyOffcanvas