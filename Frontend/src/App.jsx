import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { lazy } from 'react'
import LazyLayout from './components/LazyLayout'
const LazyLogin = lazy(()=> import("./pages/auth/Login"))
const LazySignup = lazy(()=> import("./pages/auth/signup"))
const LazyHome = lazy(() => import("./pages/user/Home"))
import UserLayout from './pages/user/UserLayout'
import About from './pages/user/About'
import Contact from './pages/user/Contact'
import Profile from'./pages/user/Profile'
import Course from './pages/user/Course'
import Cdetails from './pages/user/Cdetails'
import FAQ from './pages/user/FAQ'
import Admin from './pages/user/Admin'
import AddCourse from './pages/user/AddCourse'
import Enquiry from './pages/user/Enquiry'
import AdminPay from './pages/user/AdminPay'


const UserRoutes = () => {
  return(
    <UserLayout>
      <Routes>
        <Route path="/Home" element={<LazyLayout component={LazyHome}/>}/>
        {/* <Route path="/booking" element={<LazyLayout component={LazyBooking}/>}/> */}
      </Routes>
    </UserLayout>
  )
}
function App() {
  

  return (
    <BrowserRouter>
    <div className='App'>
      <Routes>

     
        <Route path="/" element={<LazyLayout component={LazyLogin}/>}/>
        <Route path="/signup" element={<LazyLayout component={LazySignup}/>}/>
        
        <Route path="/Home" element={<LazyLayout component={LazyHome}/>}/>


        <Route path="/user/*" element={<UserRoutes/>}/>

        <Route path="/about" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Course" element={<Course/>}/>
        <Route path="/Cdetails" element={<Cdetails/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/AddCourse" element={<AddCourse/>}/>
        <Route path="/Enquiry" element={<Enquiry/>}/>
        <Route path="/AdminPay" element={<AdminPay/>}/>


      </Routes>
    </div>
    
    </BrowserRouter>
   
  )
}

export default App