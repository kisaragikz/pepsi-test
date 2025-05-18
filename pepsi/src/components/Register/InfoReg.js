import './InfoReg.css'

import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
const InfoReg = () => {
    const [username, setUsername] = useState("")
    const [pass1, setPass1]= useState("")
    const [pass2, setPass2]= useState("")
    const [check, setCheck] = useState(false)
    const [locaPass, setLocalPass] = useState([])

    const getID = data =>{
        setUsername(data.target.value);
    }
    const getPass1 = data =>{
        setPass1(data.target.value);
    }
    const getPass2 = data =>{
        setPass2(data.target.value);
    }
    const checkPass =()=>{
        if(pass1 !== pass2){
            Swal.fire({
                title: 'password ต้องตรงกันนะ',
                text: '',
                icon: 'error',
            })
         
        }
        else {
            Swal.fire({
                title: 'คุณได้สมัครเรียบร้อย',
                text: 'ยินดีตอนรับ!',
                icon: 'success',
            })
            setCheck(true)
        }
     
    }
   
    useEffect(()=>{
        if(check){ 
           const idAndPass ={
                id: username,
                passWord : pass1
            }
            setLocalPass(preName=>{
                return [...preName, idAndPass]
            })
            setCheck(false)
        }
       
    }, [check])

    useEffect(()=>{

        localStorage.setItem('IDPASSWORD', JSON.stringify(locaPass));
    },[locaPass])
    return(
        <div className="username">
            <h1>Register</h1>
            <div className='username-input setm'>
                <p className='text'>Username</p>
                <input type="text"onChange={getID}  value={username}/>
            </div>
            <div className='password-input setm'>
                <p className='text'>Password</p>
                <input type="password"  onChange={getPass1} value={pass1}/>
            </div>
            <div className='password-input setm'>
                <p className='text'>Confirm Password</p>
                <input type="password" onChange={getPass2 }value={pass2}/>
            </div>
            <a className='a-reg' onClick={checkPass} type="submit">Lets go!!</a>
        </div>
    );
}

export default InfoReg