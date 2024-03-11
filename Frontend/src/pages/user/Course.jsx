import React from 'react';
import '/src/assets/css/Course.css'


import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const Course = () => {
  return (
    <>
   <Navbar/>
    <div className="page">

      <h1>Available Courses</h1>
      <div className="card-container">
      <div className="card">
          <img src="https://tse4.mm.bing.net/th?id=OIP.4oYd36YtjReF0xuo5fDqCQHaFW&pid=Api&P=0&w=300&h=300.jpg" alt="Data Analytics" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Python Programming</p>
          </center>
          <br/>
          <Link to="/Cdetails">

          <button>Enroll</button>
          </Link>
        </div><div className="card">
          <img src="https://blackflagcreative.com/wp-content/uploads/2018/11/How-UX-UI-Design-Will-Help-Your-Business-Succeed.jpg" alt="UX DESIGNING" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>UX Design</p>
          </center>
          <br/>
          <button>Enroll</button>
        </div><div className="card">
          <img src="https://wallpapercave.com/wp/wp7250087.jpg" alt="It support" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Java Programming</p>
          </center>
          <br/>
          <button>Enroll</button>
        </div>
        <div className="card">
          <img src="https://www.phoenixmedia.co.th/wp-content/uploads/2021/03/digital-marketing.jpg" alt="Digital Marketing" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Digital Marketing</p>
          </center>
          <br/>
          <button>Enroll</button>
        </div><div className="card">
          <img src="https://wallpaperaccess.com/full/1426962.jpg" alt="Machine Learning" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Machine Learning</p>
          </center>
          <br/>
          <button>Enroll</button>
        </div><div className="card">
          <img src="https://www.nic.in/wp-content/uploads/2021/11/Data-Science.jpg" alt="Data Science" />
          <br/><br/>
          <center>
          <p style={{fontSize:'25px'}}>Data Science</p>
          </center>
          <br/>
          <button>Enroll</button>
        </div>
        </div>
      </div>
  

  
    {/* <Foot/> */}
    </>
  );
};

export default Course;