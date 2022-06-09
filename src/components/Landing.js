import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'
import viosalogo from '../icons/viosa-logo.png'

const Landing = () => {
  return (
    <div className='landing'>
        <div className='navbar'>
            <img src={viosalogo}></img>
            <p>Home</p>
            <p>Career Assessment</p>
            <p>Courses</p>
            <p>Combo Pack</p>
            <p>Collaborations</p>
            <p>About Us</p>
            <p>Blogs</p>
            <p>Contact Us</p>
            <button>Login</button>
        </div>
    </div>
  );
}

export default Landing;
