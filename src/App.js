import logo from './logo.svg';
import './App.css';
import viosalogo from './icons/viosa-logo.png'
import catalogueicon from './icons/catalogue-icon.png'
import Catalogue from './components/Catalogue';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from 'react-router-dom'

const App = () => {
  
  return (
    <Router>
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
        <div className='pageContent'>
        <Routes>
          <Route path='/catalogue' element={<Catalogue/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
