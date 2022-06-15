import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'
import viosalogo from '../icons/viosa-logo.png'
import Home from './Home'
import Courses from './Courses'

const Landing = () => {
  return (
    <div className='landing'>
        <div className='navbar'>
            <img src={viosalogo}></img>
            <div className='button'><p>Home</p></div>
            <div className='button'><p>Career Assessment</p></div>
            <div className='button'><p>Courses</p></div>
            <div className='button'><p>Combo Pack</p></div>
            <div className='button'><p>Collaborations</p></div>
            <div className='button'><p>About Us</p></div>
            <div className='button'><p>Blogs</p></div>
            <div className='button'><p>Contact Us</p></div>
            <button>Login</button>
        </div>
        <div className='homecontent'>
            <Routes>
                <Route path='home' element={<Home/>}/>
                <Route path='courses' element={<Courses/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default Landing;
