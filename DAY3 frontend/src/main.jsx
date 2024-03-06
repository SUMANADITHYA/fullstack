import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css';
import { BrowserRouter }from 'react-router-dom';
import './assets/css/Login.css';
import './assets/css/Signup.css';
import './assets/css/navbar.css';
import './assets/css/home.css';
import './assets/css/footer.css'; 
import './assets/css/profile.css';
import './assets/css/course.css';
import './assets/css/sidebar.css';
import './assets/css/Admin.css';
import './assets/css/enquiry.css';
import './assets/css/about.css';
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
