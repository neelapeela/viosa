import viosalogo from '../icons/viosa-logo.png'
import { Link, useNavigate } from 'react-router-dom';
import cancel from '../icons/cancel.png'
import { useState } from 'react';
import axios from 'axios';

const Login = ({setRenderLogin, setRenderSignup}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const signUpHandler = async (e) =>{
        try{
            const response = await axios.post(
                `http://localhost:3000/auth/user/login`,
                {email: email, password: password},
                {
                  headers: { "Content-Type": "application/json" }
                }
              );
              if(response.data.message=='Invalid Credentials'){
                setMessage('Invalid credentials')
                setShowMessage(true)
              }
              else if(response.data.message=='User does not exists'){
                setMessage('An account with the provided email does not exist')
                setShowMessage(true)
              }
              else{
                navigate('../../profile/catalogue')
              }
        } catch (e){
            console.log(e)
        }
    }

    const setRenderHandler = (e) =>{
        setRenderLogin(false)
    }
    const setSignupHandler = (e) =>{
      setRenderLogin(false);
      setRenderSignup(true);
    }

  return (
    <div className='login'>
        <div className='container'>
            <img src={viosalogo}></img>
            <h3>Log in to your VIOSA account</h3>
            {showMessage?<h4>{message}</h4>:null}
            <form>
            <input placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}/>
            <input type='password' placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={signUpHandler}>Submit</button>
            <u onClick={setSignupHandler}>New user? Signup</u>
            </form>
            <img className='cancel' onClick={setRenderHandler} src={cancel}></img>
        </div>
    </div>
  );
}

export default Login;
