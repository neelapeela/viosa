import viosalogo from '../icons/viosa-logo.png'
import { Link } from 'react-router-dom';
import cancel from '../icons/cancel.png'
import { useState } from 'react';
import axios from 'axios';

const Signup = ({setRenderSignup, setRenderLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')

    const signUpHandler = async (e) =>{
        try{
            const response = await axios.post(
                `http://localhost:3000/auth/user/signup`,
                {email: email, password: password, name: name, number:0},
                {
                  headers: { "Content-Type": "application/json" }
                }
            );
            if(response.data.message=='User already exists!'){
              setMessage('User already exists!')
              setShowMessage(true)
            }
            else{
              setMessage('')
              setShowMessage(false)
              setLoginHandler()
            }
            console.log(response)
        } catch (e){
          if(email=='' || password=='' || name==''){
            setMessage('One or more fields are empty')
          }
          else{
            setMessage('Uknown error occurred')
          }
          setShowMessage(true)
        }
    }

    const setRenderHandler = (e) =>{
        setRenderSignup(false)
    }

    const setLoginHandler = (e) =>{
      setRenderLogin(true);
      setRenderSignup(false);
    }

  return (
    <div className='login'>
        <div className='container'>
            <img src={viosalogo}></img>
            <h3>Create your new account</h3>
            {showMessage?<h4>{message}</h4>:null}
            <form>
            <input placeholder='Enter your name' onChange={(e)=> setName(e.target.value)}/>
            <input placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)}/>
            <input type='password' placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
            <input type='password' placeholder='Confirm password'/>
            <button onClick={signUpHandler}>Submit</button>
            <u onClick={setLoginHandler}>Already a user? Login</u>
            </form>
            <img className='cancel' onClick={setRenderHandler} src={cancel}></img>
        </div>
    </div>
  );
}

export default Signup;
