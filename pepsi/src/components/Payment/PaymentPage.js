import FormPayPage from '../Payment/FormPayPage';
import PathPay from './PathPay';
import Swal from 'sweetalert2';
import '../Payment/PaymentPage.css'
import Navbar from '../HomePage/navbar';
const Payment = () => {
    return(
        <>
            <Navbar></Navbar>
            <div className="payment-bg">
                <div className="payment-card">
                    <h1>Payment</h1>
                    <div style={{display:"flex"}}>
                        <PathPay/>
                        <FormPayPage/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Payment;