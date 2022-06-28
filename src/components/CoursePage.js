import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'
import clock from '../icons/clock.png'
import courseplaceholder from '../icons/courseplaceholder.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

const CoursePage = ({courseId}) => {
    const [course, setCourse] = useState([])
    useEffect(()=>{
        const getCourseById = async () =>{
            try{
                const response = await axios.get(
                    `http://localhost:3000/course/getCoursebyId/${courseId}`,
                    {
                      headers: { "Content-Type": "application/json" }
                    }
                  );
                  console.log(response.data.data)
                    setCourse(response.data.data)
            } catch (e){
                console.log(e)
            }
        }
        getCourseById()
    }, [])

  return (
    <div className='coursepage'>
        <div className='courseheader'>
            <div className='shortinfo'>
                <h1>{course.name}</h1>
                <p>{course.description}</p>
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
            <p>{course.about}</p>
        </div>
    </div>
  );
}

export default CoursePage;
