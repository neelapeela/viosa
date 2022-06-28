import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import viosalogo from '../icons/viosa-logo.png'
import Home from './Home'
import text5 from '../icons/text5.png'
import smallcloud from '../icons/smallcloud.png'
import bigcloud from  '../icons/bigcloud.png'
import vector7 from '../icons/vector7.png'
import placeholder2 from '../icons/placeholder2.png'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        const getCourses = async () =>{
            try{
                const response = await axios.get(
                    `http://localhost:3000/course/getcourses`,
                    {
                      headers: { "Content-Type": "application/json" }
                    }
                  );
                  console.log(response.data.data);
                  setCourses(response.data.data)
                  
            } catch (e){
                console.log(e)
            }
        }
        getCourses()
    }, [])

  return (
    <div className='courses'>
        <div className='header'>
            <img className='text' src={text5}></img>
            <img className='smallcloud' src={smallcloud}></img>
            <img className='bigcloud' src={bigcloud}></img>
            <img className='vector7' src={vector7}></img>
        </div>
        <div className='courselist'>
            {courses.map((x)=>
                <div className='course'>
                <div className='left'>
                    <img src={placeholder2}></img>
                    <div className='title'>
                            <h3>{x.name}</h3>
                            <p>{x.description}</p>
                    </div>
                </div>
                <div className='buy'>
                    <s>Rs. 1200</s>
                    <strong>Rs. 999</strong>
                    <button className='buynow'>Buy Now</button>
                    <button>Add To Cart</button>
                </div>
            </div>
            )}
        </div>
    </div>
  );
}

export default Courses;
