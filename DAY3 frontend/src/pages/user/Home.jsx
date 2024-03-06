import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import SearchAppBar from '../../components/UI/Navbar';
import Footer from '../../components/UI/Footer';

function Home() {
    return (
        <>
            <SearchAppBar />
            <div className="home-hero">
                <div className="home-container">
              
                    <h1>Welcome to our website</h1>
                    <p>Your path to excellence, powered by an amazing <br /> learning experience, is just a click to Courses.</p>
                    {/* <button className='start-button'> Start</button> */}
                </div>
            </div>
            <section className="container content">
    <div className="content-section">
        <div className="content-text">
            <h2>Diverse & innovative work</h2>
            <p>We reinvent the way every job is done for our 4,000+ clients across 40 industries. We want employees to try out multiple areas of the business. Our commitment to a culture of equality combined with our belief that “together, we are greater than ever”, allows our 710,000 people in 120 countries to work as a seamless network</p>
        </div>
        <div className="content-image">
            <img src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149300643.jpg?w=740&t=st=1708606992~exp=1708607592~hmac=3416348da9d77a84ffa17dab1fd76628e77887f416e1a8f068c1328a01632273" alt="About Student Enquiry Website" />
        </div>
    </div>
</section>

<section className="container content">
    <div className="content-section">
        <div className="content-text">
            <h2>Career progression</h2>
            <p> We have an incredible technology program “Tech Expressway” for our Associate Software Engineers (ASEs) to hone their skills and become more versatile, agile and future ready. We also have curated career path for entry level professionals/graduates joining us at different roles.</p>
        </div>
        <div className="content-image">
            <img src="https://img.freepik.com/free-photo/career-employment-job-work-concept_53876-123876.jpg?w=826&t=st=1708607143~exp=1708607743~hmac=02f15800818b488eb65ad4649c7da4a2b307c77d7600482bf7a200ccd8b17b72" alt="Website Usage" />
        </div>
    </div>
</section>

<section className="container content">
    <div className="content-section">
        <div className="content-text">
            <h2>Training & development</h2>
            <p>We provide online and on-the-job training to help students transition from university to the workplace. You'll get extensive training and a dedicated careers counsellor to help you progress. Click here to know more.</p>
        </div>
        <div className="content-image">
            <img src="https://img.freepik.com/free-photo/smiling-business-lady-working-with-colleagues_1262-2153.jpg?w=740&t=st=1708607102~exp=1708607702~hmac=f4a8121403b7c623f896f8a925c864da1d9bd178e4fd94b97231789c6d9e2347" alt="Our Courses" />
        </div>
    </div>
</section>
        <Footer/>

        </>
    );
}

export default Home;
