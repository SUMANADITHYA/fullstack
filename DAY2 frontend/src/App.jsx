// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route,Navigate, Routes} from 'react-router-dom';
// import Login from './pages/auth/Login';
// import Signup from './pages/auth/SignUp';
// import Home from './pages/user/Home';
// function App() {
//   return (
//    <Routes>
//     <Route  path='/' element={<Login/>}/>
//     <Route path='/signup' element={<Signup/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/home' element={<Home/>}/>

//    </Routes>
//   // <Login/>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { lazy } from 'react'
import LazyLayout from './components/LazyLayout'
const LazyLogin = lazy(()=> import("./pages/auth/Login"))
const LazySignup = lazy(()=> import("./pages/auth/SignUp"))
const LazyHome = lazy(() => import("./pages/user/Home"))
const LazyProfile = lazy(() => import("./pages/user/Profile"))
const LazyAdminUser= lazy(() => import('./pages/admin/AdminUser'));
import UserLayout from './pages/user/UserLayout'
import Course from './pages/user/Course';
import ContactForm from './pages/user/Enquiry'
import About from './components/UI/About'

const UserRoutes = () => {
  return(
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
      </Routes>
    </UserLayout>
  )
}
function App() {
  // const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
    <div className='App'>
      <Routes>
        <Route path="/" element={<LazyLayout component={LazyLogin}/>}/>
        <Route path="/signup" element={<LazyLayout component={LazySignup}/>}/>
        <Route path="/user/*" element={<UserRoutes/>}/>
        <Route path='/login' element={<LazyLayout component={LazyLogin}/>}/>
        <Route path='/profile' element={<LazyProfile component={LazyProfile}/>}/>
        <Route path='/courses' element={<Course/>}/>
        <Route path='/EnquiryPage' element={<ContactForm/>}/>
        <Route path='aboutus' element={<About/>}/>
        <Route path='/admin' element={<LazyAdminUser component={LazyAdminUser}/>}/>
      </Routes>
    </div>
    
    // </BrowserRouter>
   
  )
}

export default App