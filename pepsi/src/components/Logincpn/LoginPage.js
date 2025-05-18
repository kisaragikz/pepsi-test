import '../Logincpn/LoginPage.css';
import FormPage from './FormPage'
import InfoPage from './InfoPage';
import Navbar from "../HomePage/navbar";

const LoginPage = () => {
    return (
        <div className='page-login'>
            <Navbar></Navbar>
            <div className="card-login">
                <InfoPage/>
                <FormPage/>
            </div>
        </div>
    );
}

export default LoginPage;