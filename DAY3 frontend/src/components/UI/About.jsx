import React from 'react';
// import Footer from './Footer';
// import Navbar from '../../components/Navbar';
// import '/src/assets/css/About.css';
import SearchAppBar from '../../components/UI/Navbar';
import Footer from '../../components/UI/Footer';
function About() {
  return (
    
    <div>
      <SearchAppBar/>
    <div className="about-container">
    <div>
    <h1>About Us</h1>
    </div>
      
<p>
In the rapidly evolving landscape of online education, the process of discovering, inquiring about, and obtaining information on available courses can be cumbersome for prospective students. Current systems may lack a centralized and interactive platform that seamlessly connects students with detailed course information and provides a straightforward mechanism for submitting inquiries.</p>

<p>Prospective students face challenges in navigating through a plethora of online courses, obtaining comprehensive details, and engaging in a streamlined inquiry process. The absence of a dedicated system for submitting inquiries and providing feedback may lead to frustration and a less-than-optimal experience for both students and administrators.</p>

<p>The Online Course Inquiry and Information System aim to address these challenges by providing a robust and user-friendly platform. For prospective students, the system offers a seamless interface to create user profiles, explore courses, and submit inquiries. Detailed course information, including descriptions, instructors, duration, and pricing, is readily accessible, streamlining the decision-making process for students.

</p>
<br></br><br></br><br></br>
    </div>
      <Footer/>
      </div>
  );
}

export default About;