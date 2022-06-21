import text6 from '../icons/text6.png'
import vector8 from '../icons/vector8.png'
import vector9 from '../icons/vector9.png'
import vector10 from '../icons/vector10.png'
import vector11 from '../icons/vector11.png'
import vector12 from '../icons/vector12.png'
import vector13 from '../icons/vector13.png'

const Collaborations = () => {
  return (
    <div className='collaborations'>
        <div className='section1'>
          <div className='left'>
            <img src={text6}></img>
            <h1>Empowering your students to kickstart their professional career</h1>
          </div>
          <div className='right'>
            <img src={vector8} className='vector8'></img>
          </div>
        </div>
        <div className='section2'>
          <img src={vector9}></img>
          <p>Corporate Mentorship is a <strong>FREE</strong> collaborative program with colleges assisting the placement division in coaching students. We focus on developing sectoral competencies, mentoring them to build their professional profiles & guiding them to achieve their aspirational placement through our corporate linkages. </p>
        </div>
        <div className='section3'>
          <p>Our <strong>Corporate</strong> Linkages</p>
          <div className='container'>
            <div className='sub'>
              <u>Health Insurance</u>
              <img src={vector10}></img>
            </div>
            <div className='sub'>
              <u>Life Insurance</u>
              <img src={vector11}></img>
            </div>
          </div>
          <div className='section4'>
            <p>Free <strong>Collaboration</strong> benefits</p>
            <div className='container'>
              <img className='left' src={vector12}></img>
              <img className='right' src={vector13}></img>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Collaborations;
