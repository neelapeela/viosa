import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'
import clock from '../icons/clock.png'
import courseplaceholder from '../icons/courseplaceholder.png'

const CoursePage = () => {
  return (
    <div className='coursepage'>
        <div className='courseheader'>
            <div className='shortinfo'>
                <h1>UI & UX Designing</h1>
                <p>The difference between User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic elements by which people interact with a product, while UX is about the experience a user has with a product or service</p>
                <strong>23+ Pages of detailed Career Analysis Scorecard</strong>
                <div className='time'>
                    <img src={clock}></img>
                    <p>120 minutes</p>
                </div>
            </div>
            <div className='pay'>
                <h3>One time pay only</h3>
                <s>Rs. 1200</s>
                <strong>Rs. 999</strong>
                <button>Buy Now</button>
                <button>Add To Cart</button>
            </div>
        </div>
        <div className='coursecontent'>
            <img src={courseplaceholder}></img>
            <h2>About the course</h2>
            <p>Career Assessment is a 5-Dimensional Career Analysis for school/college students, graduates, post-graduate, freshers and working professionals. This assessment is conducted in order to evaluate an individual’s skills, knowledge, abilities, personality traits, attitudes, and job / academic potential & performance. Career Assessment is a 5-Dimensional Career Analysis for school/college students, graduates, post-graduate, freshers and working professionals. This assessment is conducted in order to evaluate an individual’s skills, knowledge, abilities, personality traits, attitudes, and job / academic potential & performance.</p>
        </div>
    </div>
  );
}

export default CoursePage;
