import viosalogo from '../icons/viosa-logo.png'
import catalogueicon from '../icons/catalogue-icon.png'
import Catalogue from '../components/Catalogue';
import Dashboard from '../components/Dashboard';
import search from '../icons/search.png'
import profilephoto from '../icons/profilephoto.png'
import timer from '../icons/timer.png'
import bell from '../icons/bell.png'
import {BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from 'react-router-dom'
import CoursePage from '../components/CoursePage';
import Landing from '../components/Landing';
import { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('Not logged in')
  
  return (
      <div className="App">
        <div className='navpanel'>
          <img src={viosalogo}></img>
          <div className='menuItems'>
            <div className='menuItem'>
              <img src={catalogueicon}></img>
              <button><p>Catalogue</p></button>
            </div>
            <div className='menuItem'>
              <img src={catalogueicon}></img>
              <button><p>Dashboard</p></button>
            </div>
            <div className='menuItem'>
              <img src={catalogueicon}></img>
              <button><p>Cart</p></button>
            </div>
            <div className='menuItem'>
              <img src={catalogueicon}></img>
              <button><p>Subscriptions</p></button>
            </div>
            <div className='menuItem'>
              <img src={catalogueicon}></img>
              <button><p>Achievements</p></button>
            </div>
            <div className='menuItem'>
              <img src={catalogueicon}></img>
              <button><p>Webinars</p></button>
            </div>
          </div>
        </div>
        <div className='quickactions'>
          <img src={search}></img>
          <img src={bell}></img>
          <img src={timer}></img>
          <strong>{name}</strong>
          <img src={profilephoto}></img>
  </div>
  
        <div className='pageContent'>
        <Routes>
          <Route path='landing/*' element={<Landing/>}/>
          <Route path='catalogue' element={<Catalogue/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='course' element={<CoursePage/>}/>
        </Routes>
        </div>
      </div>
  );
}

export default Profile;
