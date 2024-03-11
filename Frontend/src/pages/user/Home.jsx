import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/assets/css/Home.css'
import Footer from './Footer';
import Navbar from '../../components/Navbar';
function Home() {
    // const [isNavActive, setIsNavActive] = useState(false);

    // useEffect(() => {
    //     function fixNav() {
    //         if (window.scrollY > nav.offsetHeight + 150) {
    //             setIsNavActive(true);
    //         } else {
    //             setIsNavActive(false);
    //         }
    //     }

    //     window.addEventListener('scroll', fixNav);
    //     return () => window.removeEventListener('scroll', fixNav);
    // }, []);
    

    return (
        <>
           
           
            {/* <nav className={isNavActive ? 'nav active' : 'nav'}>

  



                <div className="container">
                    <h1 className="logo"><a href="#">Student Enquiry</a></h1>
                    <ul>
                        <li><a href="#current">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>

                        <div className='icoon'>

                        <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                        </div>
                    </ul>
                </div>
            </nav> */}
        <Navbar/>

            <div className="hero">
                <div className="container">
                    <h1>Welcome to our website</h1>
                    <p>Enquire your Career doubt with us.</p>
                
              
                
                    
                </div>
            </div>
                 <center>
                     <Link to="/Course" className="enquire-button" style={{textDecoration:"none"}}>Explore Courses</Link>

                    </center>  

           

           <Footer/>
        </>
    );
}

export default Home;
