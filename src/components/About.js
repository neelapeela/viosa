import vector14 from '../icons/vector14.png'
import text7 from '../icons/text7.png'
import vector15 from '../icons/vector15.png'
import vector16 from '../icons/vector16.png'


const About = () => {
  return (
    <div className='about'>
        <div className="section1">
          <img src={text7}></img>
          <img src={vector14}></img>
        </div>
        <div className='section2'>
          <p>Our <strong>Story</strong></p>
          <div className='container'>
            <img src={vector15}></img>
            <p>VIOSA is the outcome of various student interactions across colleges in India. During these exchanges, most student queries focused on understanding the right approach to identifying suitable corporate sectors and required readiness for the desired jobs.

<br/><br/>Graduates and freshers needed professional guidance through multi-lingual coaching on various job-related competencies to begin their meaningful professional journey.<br/><br/>

At VIOSA, we have considered all these real-time difficulties faced by Job-seeking graduates & created a robust technology platform that helps them get JOB-READY.<br/><br/>

VIOSA is the EdTech industry's first unified technology platform that coaches students in acquiring sector-based competencies, help them build their professional profiles, & guides them to achieve their aspirational employment.<br/><br/>

Professionals from the corporate sector have created this unique and meaningful technology-enabled mentoring program.<br/><br/>

A lifetime mentor for upscaling your professional care</p>
          </div>
        </div>
        <div className='section3'>
          <p>Vision <strong>and</strong> Mission</p>
          <div className='container'>
            <img src={vector16}></img>
            <p>At VIOSA, our Mission is to provide you with simplified access to Job-ready skills and coach you to begin your dream professional career!<br/><br/>

We are a group of industry experts who have identified various problems graduates and Job seekers face in finding a meaningful professional career.<br/><br/>

Our coaching programs and the technology platform assists you at every step of determining a suitable corporate sector and applying for the right job in the city of your choice.<br/><br/>

We have identified four sectors that are the fastest growing globally and provide ample opportunities to freshers and experienced graduates.<br/><br/>

Our courses are customized to help you begin your professional career!</p>
          </div>
        </div>
    </div>
  );
}

export default About;
