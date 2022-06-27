import {BrowserRouter as Router, Route, Routes, HashRouter, useNavigate} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'
import viosalogo from '../icons/viosa-logo.png'
import Home from './Home'
import Courses from './Courses'
import Collaborations from './Collaborations'
import About from './About'
import Login from './Login'
import { useState } from 'react'
import Signup from './Signup'

const Landing = () => {
  let navigate = useNavigate();

  const homeRedirect = (e) =>{
    navigate('home')
  }

  const coursesRedirect = (e) =>{
    navigate('courses')
  }

  const collabRedirect = (e) =>{
    navigate('collaborations')
  }

  const aboutRedirect = (e) =>{
    navigate('about')
  }

  const [renderSignup, setRenderSignup] = useState(false);
  const [renderLogin, setRenderLogin] = useState(false);
  const setRenderHandler = (e) =>{
    setRenderSignup(true)
  }

  return (
    <div className='landing'>
        <div className='navbar'>
            <img src={viosalogo}></img>
            <div className='button' onClick={homeRedirect}><p>Home</p></div>
            <div className='button'><p>Career Assessment</p></div>
            <div className='button' onClick={coursesRedirect}><p>Courses</p></div>
            <div className='button' onClick={collabRedirect}><p>Collaborations</p></div>
            <div className='button' onClick={aboutRedirect}><p>About Us</p></div>
            <button onClick={setRenderHandler}>Login</button>
        </div>
        {renderSignup?<Signup setRenderSignup={setRenderSignup} setRenderLogin={setRenderLogin}></Signup>:null}
        {renderLogin?<Login setRenderSignup={setRenderSignup} setRenderLogin={setRenderLogin}></Login>:null}
        <div className='homecontent'>
            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path='courses' element={<Courses/>}/>
                <Route path='collaborations' element={<Collaborations/>}/>
                <Route path='about' element={<About/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default Landing;
