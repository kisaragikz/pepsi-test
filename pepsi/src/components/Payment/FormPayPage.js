import '../Payment/FormPayPage.css'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const FormPayPage = () => {
    return(
        <form className='pay-form'>
            <div className="name">
                <div className='name-input'>
                    <p>Firstname</p>
                    <input type="text"/>
                </div>
                <div className='name-input'>
                    <p>Lastname</p>
                    <input type="text"/>
                </div>
            </div>
            <div className="email">
                <p>Email</p>
                <input type="email"/>
            </div>
            <div className="phone">
                <p>Phone number</p>
                <input type='text'/>
            </div>
            <div className="address">
                <p>Address</p>
                <textarea rows='5' cols='55'/>
            </div>
            <div className="slip">
                <p>หลักฐานการชำระเงิน</p>
                <input id="flie-up" type="file" />
            </div>
            <Link to="/payment" onClick={() => Swal.fire({
                                title: 'คุณได้สั่งซื้อเรียบร้อยแล้ว',
                                text: 'เราจะรีบนำพัสดุไปส่ง!',
                                icon: 'success',
                            })}>
                <div className='butt'>
                    Submit
                </div>
            </Link>
        </form>
    );
}

export default FormPayPage;