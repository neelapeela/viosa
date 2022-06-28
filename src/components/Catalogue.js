import axios from 'axios'
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Route, Routes, HashRouter, useNavigate} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'

const Catalogue = ({setCourseId}) => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        const getCourses = async () =>{
            try{
                const response = await axios.get(
                    `http://localhost:3000/course/getcourses`,
                    {
                      headers: { "Content-Type": "application/json" }
                    }
                  );
                  setCourses(response.data.data)
                  
            } catch (e){
                console.log(e)
            }
        }
        getCourses()
    }, [])

    const courseHandler= (e) =>{
        setCourseId(e.target.id)
        navigate('../course')
    }


  return (
    <div className='catalogue'>
        <div className='spotlight'>
            <strong>Spotlight</strong>
            <div className='spotlightscroll'>
                <div className='panel'>
                    <div className='left'><strong>Career Assessment AI-Powered</strong><p>Career Assessment is a 5-Dimensional Career Analysis for school/college students, courses  graduates, post-graduates....</p></div>
                    <div className='right'><strong>Rs.999/-</strong><button>View Detail</button> </div>
                </div>
                <div className='panel'>
                    <div className='left'><strong>Career Assessment AI-Powered</strong><p>Career Assessment is a 5-Dimensional Career Analysis for school/college students, courses  graduates, post-graduates....</p></div>
                    <div className='right'><strong>Rs.999/-</strong><button>View Detail</button> </div>
                </div>
                <div className='panel'>
                    <div className='left'><strong>Career Assessment AI-Powered</strong><p>Career Assessment is a 5-Dimensional Career Analysis for school/college students, courses  graduates, post-graduates....</p></div>
                    <div className='right'><strong>Rs.999/-</strong><button>View Detail</button> </div>
                </div>
                <div className='panel'>
                    <div className='left'><strong>Career Assessment AI-Powered</strong><p>Career Assessment is a 5-Dimensional Career Analysis for school/college students, courses  graduates, post-graduates....</p></div>
                    <div className='right'><strong>Rs.999/-</strong><button>View Detail</button> </div>
                </div>
            </div>
        </div>

        <div className='recommended'>
            <strong>Courses for you</strong>
            <div className='recommendedscroll'>
                {courses.map((x)=>
                <div className='panel' onClick={courseHandler} id={x._id}>
                    <img src={placeholder2} id={x._id}></img>
                    <strong id={x._id}>{x.name}</strong>
                    <p id={x._id}>{x.description}</p>
                </div>)}
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

export default Catalogue;
