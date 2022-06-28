import logo from './logo.svg';
import './App.css';
import viosalogo from './icons/viosa-logo.png'
import catalogueicon from './icons/catalogue-icon.png'
import Catalogue from './components/Catalogue';
import Dashboard from './components/Dashboard';
import search from './icons/search.png'
import profilephoto from './icons/profilephoto.png'
import timer from './icons/timer.png'
import bell from './icons/bell.png'
import {BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from 'react-router-dom'
import { HashRouter } from 'react-router-dom';
import CoursePage from './components/CoursePage';
import Landing from './components/Landing';
import Profile from './components/Profile';
import { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('Not logged in')

  return (
    <HashRouter>
        <Routes>
          <Route path='/profile/*' element={<Profile username={username}/>}/>
          <Route path='/home/*' element={<Landing setUsername={setUsername}/>}/>
        </Routes>
    </HashRouter>
  );
}

export default App;
