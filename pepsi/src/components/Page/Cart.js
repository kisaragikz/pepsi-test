import Button from 'react-bootstrap/Button'
import './Cart.css'
import MyOffcanvas from './Offcanvas';
import { useState, useEffect} from 'react';
const Cart = (props) =>{
    const getDelFormOffcanvas =(data)=>{
        props.delData(data)
    }
    const getAddFormofocanvas = (data) =>{
        props.addData(data)
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [showCount, setShowCount] = useState(false)
    let arCount = []
    let arrCount = []
    let sum = 0
  
    const [count, setCount] = useState(0)

    if( props.data != null){
        arCount = props.data.map(data=>data);
        arrCount = arCount.map(data=>data.count)
        for (let i = 0; i < arrCount.length; i+=1){
            sum += arrCount[i]
        }
       
    } 
    useEffect(()=>{
        if(props.data){
            setShowCount(true)
        }
        setCount(sum)
    },[props.data])
    
    return( 
        <>
            <Button className='button-market'
                    style={{ width: "4rem", height: "4rem", position: "relative" , right: '1.5vw', backgroundColor: 'white', border: '1px solid'}}
                    onClick={handleShow}
                    >
                    <svg
                        viewBox="0 0 576 512"
                        fill="currentColor"
                        style={{ color: "#EB6440"}}
                        >
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                        </svg>
                        {showCount &&<div
                            className="rounded-circle bg-dark d-flex justify-content-center align-items-center"
                            style={{
                            color: "white",
                            width: "1.5rem",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",   
                            }}>
                                {count}
                        </div>}
                </Button>
                <MyOffcanvas show={show} onHide={handleClose} data={props.data} Deldata={getDelFormOffcanvas} addData={getAddFormofocanvas} > </MyOffcanvas>
        </>
    )
}
export default Cart