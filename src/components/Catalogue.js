import {BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'
import placeholder2 from '../icons/placeholder2.png'
import rightscroll from '../icons/rightscroll.png'

const Catalogue = () => {
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
