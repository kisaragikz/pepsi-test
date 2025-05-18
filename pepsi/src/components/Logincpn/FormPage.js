import '../Logincpn/FormPage.css'
import { Link,  useNavigate, Navigate} from "react-router-dom";
import { useState, useEffect} from 'react'
import Swal from 'sweetalert2';
const FormPage = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    const [loginState, setLoginState] = useState(0);
    
    // const handleInput = event => {
    //     setUsername(event.target.value);
    // };
    // const handleInput2 = event => {
    //     setPassword(event.target.value);
    // };
    const [one , setOne] = useState(false)
    const submition = () => {
        if (!one) {
            Swal.fire({
                title: 'Your Username or Password incorrect',
                text: '',
                icon: 'error',
            })
        }
        if(one) {
            Swal.fire({
                title: 'Login Success!\nEnjoy Your Shopping!',
                text: '',
                icon: `success`,
            })
            setOne(false);
            setLoginState(1)
        }
    }
  
    useEffect(() => {
        localStorage.setItem('login', JSON.stringify(loginState));
    }, [loginState]);
   
    console.log(loginState)

    const [data, setData] = useState({
        username: '',
        password: ''
      });
    const database = JSON.parse(localStorage.getItem('IDPASSWORD'));
    const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
      }
      const checkUser = () => {
        if (database !== null) {

            const usercheck = database.find(user => (user.id === data.username && user.passWord === data.password));
            
            if(usercheck) {
              console.log("Login successful");
              setOne(true);
            }else {
              console.log("Wrong password or username");
            }
            // console.log(uname);
            console.log(usercheck);
        }
      }
      useEffect(() => {
        checkUser(database)
     }, [data.username, data.password])

        return (
            <div className='box-login'>
                <form className='form-page'>
                    <h1>Who wants <span>Drinks?</span></h1>
                    <div className='input-box'>
                        <p>Username</p>
                        <input className='un' type='text' onChange={changeHandler}  name="username"/>
                    </div>
                    <div className='input-box'>
                        <p>Password</p>
                        <input type='password' onChange={changeHandler} name="password" />
                    </div>
                    <div className='buttbox'>
                        <Link to="/register"  className="to-reg">Register</Link>
                        {setOne ?<Link paht="/" className='a' onClick={submition }>login</Link>:<a className='a' onClick={submition }>Login</a>}
                    </div>
                </form>
            </div>
        );
}

export default FormPage;