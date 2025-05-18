import './Card.css'
import MyVerticallyCenteredModal from './ModalShow';
import { useState } from 'react';

const Cardproduct= (props) =>{
     const RecievAddData = (data) =>{
        props.getData(data)
     }
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className = "cardItem">
            <div className='imgBx'>
                <img src={props.datas.img_product}></img>
            </div>
            <div className= "contentBx">
                <h3 style={{textAlign:"center"}}>{props.datas.name}</h3>
                <p className='price'>{props.datas.price} Bath</p>
                <a className='buy' onClick={() => setModalShow(true)}>Add to cart</a>
            </div>
            <MyVerticallyCenteredModal
                items={props.datas}
                show={modalShow}
                onHide={() => setModalShow(false)}
                ReData={RecievAddData}
            >
            </MyVerticallyCenteredModal>
        </div>
    )
}
export default Cardproduct