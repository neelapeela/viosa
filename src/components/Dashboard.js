import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='recommended'>
            <strong>Continue previous courses</strong>
            <div className='recommendedscroll'>
                <div className='panel'>
                    <img src={placeholder2}></img>
                    <strong>UI/UX Designing</strong>
                    <p>User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic element...</p>
                </div>
            </div>
        </div>

        <div className='recommended'>
            <strong>Courses for you</strong>
            <div className='recommendedscroll'>
                <div className='panel'>
                    <img src={placeholder2}></img>
                    <strong>UI/UX Designing</strong>
                    <p>User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic element...</p>
                </div>
                <div className='panel'>
                    <img src={placeholder2}></img>
                    <strong>UI/UX Designing</strong>
                    <p>User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic element...</p>
                </div>
                <div className='panel'>
                    <img src={placeholder2}></img>
                    <strong>UI/UX Designing</strong>
                    <p>User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic element...</p>
                </div>
                <div className='panel'>
                    <img src={placeholder2}></img>
                    <strong>UI/UX Designing</strong>
                    <p>User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic element...</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
