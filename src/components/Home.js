import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'
import viosalogo from '../icons/viosa-logo.png'
import text1 from '../icons/text1.png'
import text2 from '../icons/text2.png'
import vector1 from '../icons/vector1.png'
import vector2 from '../icons/vector2.png'
import vector3 from '../icons/vector3.png'
import vector4 from '../icons/vector4.png'
import text3 from '../icons/text3.png'
import vector5 from '../icons/vector5.png'
import vector6 from '../icons/vector6.png'
import text4 from '../icons/text4.png'
import ashishsardesai from '../icons/ashishsardesai.png'
import msaquibmakazi from '../icons/msaquibmakazi.png'

const Home = () => {
  return (
    <div className='home'>
        <div className='section1'>
        <div className='left'>
            <img src={text1}></img>
            <img src={text2}></img>
            <h2>Get our newsletter and early access to our Webinars!</h2>
            <button>Explore courses</button>
            <p>10k+ members have already subscribed</p>
        </div>
        <div className='right'>
            <img src={vector1}></img>
        </div>
        </div>
        <div className='section2'>
            <h1>How does <strong>VIOSA</strong> help you?</h1>
            <div className='boxes'>
            <div className='box1'>
                <p>Career assessment for students and professionals</p>
                <img src={vector2}></img>
            </div>
            <div className='box2'>
                <p>Career assessment for students and professionals</p>
                <p className='desc'>The difference between User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic elements by which people interact with a product, while UX is about the experience a user has with a product or service.</p>
            </div>
            <div className='box3'>
                <p>Corporate sector coaching</p>
                <img src={vector3}></img>
            </div>
            </div>
        </div>
        <div className='section3'>
            <img className='text' src={text3}></img>
            <h1 id='t1'>Course Completetion</h1>
            <h1 id='t2'>Job Completency Coaching</h1>
            <h1 id='t3'>Video Resume Profiling</h1>
            <h1 id='t4'>Video Resume Profiling</h1>
            <h1 id='t5'>Interview Training</h1>
            <h1 id='t6'>Job Achievement</h1>
            <img src={vector4}></img>
        </div>
        <div className='section4'>
            <h1>Why choose <strong>VIOSA</strong></h1>
            <div className='content'>
                <div className='tabs'>
                    <div>Live Coaching Sessions</div>
                    <div>Self Paced Learning</div>
                    <div>AI Technology</div>
                    <div>Webinars By Industry Experts</div>
                    <div>interactive learning</div>
                </div>
                <img src={vector5}></img>
            </div>
        </div>
        <div className='section5'>
            <img src={vector6}></img>
            <img className='text' src={text4}></img>
            <div className='outline'></div>
        </div>
        <div className='section6'>
            <h1>Meet <strong>VIOSA</strong> Mentors</h1>
            <div>
                <img src={ashishsardesai}></img>
                <img src={msaquibmakazi}></img>
            </div>
        </div>
    </div>
  );
}

export default Home;
