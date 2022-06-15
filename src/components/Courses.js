import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import viosalogo from '../icons/viosa-logo.png'
import Home from './Home'
import text5 from '../icons/text5.png'
import smallcloud from '../icons/smallcloud.png'
import bigcloud from  '../icons/bigcloud.png'
import vector7 from '../icons/vector7.png'
import placeholder2 from '../icons/placeholder2.png'

const Courses = () => {
  return (
    <div className='courses'>
        <div className='header'>
            <img className='text' src={text5}></img>
            <img className='smallcloud' src={smallcloud}></img>
            <img className='bigcloud' src={bigcloud}></img>
            <img className='vector7' src={vector7}></img>
        </div>
        <div className='courselist'>
            <div className='course'>
                <img src={placeholder2}></img>
                <div className='title'>
                    <h3>UI/UX Designing</h3>
                    <p>The difference between User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic elements by which people interact with a product, while UX is about the experience a user has with a product or service</p>
                </div>
                <div className='buy'>
                    <s>Rs. 1200</s>
                    <strong>Rs. 999</strong>
                    <button className='buynow'>Buy Now</button>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className='course'>
                <img src={placeholder2}></img>
                <div className='title'>
                    <h3>UI/UX Designing</h3>
                    <p>The difference between User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic elements by which people interact with a product, while UX is about the experience a user has with a product or service</p>
                </div>
                <div className='buy'>
                    <s>Rs. 1200</s>
                    <strong>Rs. 999</strong>
                    <button className='buynow'>Buy Now</button>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className='course'>
                <img src={placeholder2}></img>
                <div className='title'>
                    <h3>UI/UX Designing</h3>
                    <p>The difference between User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic elements by which people interact with a product, while UX is about the experience a user has with a product or service</p>
                </div>
                <div className='buy'>
                    <s>Rs. 1200</s>
                    <strong>Rs. 999</strong>
                    <button className='buynow'>Buy Now</button>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className='course'>
                <img src={placeholder2}></img>
                <div className='title'>
                    <h3>UI/UX Designing</h3>
                    <p>The difference between User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic elements by which people interact with a product, while UX is about the experience a user has with a product or service</p>
                </div>
                <div className='buy'>
                    <s>Rs. 1200</s>
                    <strong>Rs. 999</strong>
                    <button className='buynow'>Buy Now</button>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div className='course'>
                <img src={placeholder2}></img>
                <div className='title'>
                    <h3>UI/UX Designing</h3>
                    <p>The difference between User Interface (UI) and User Experience (UX) is that UI refers to the aesthetic elements by which people interact with a product, while UX is about the experience a user has with a product or service</p>
                </div>
                <div className='buy'>
                    <s>Rs. 1200</s>
                    <strong>Rs. 999</strong>
                    <button className='buynow'>Buy Now</button>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Courses;
