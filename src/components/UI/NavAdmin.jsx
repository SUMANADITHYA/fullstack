
import React, { useState } from 'react';
// import './styles.css'; // Import your CSS file

export default function AppBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar-root">
      <div className="navbar-app-bar">
        <div className="navbar-toolbar">
          <div className="navbar-menu-icon"></div>
          <div className="navbar-title">
            <span className="navbar-title-text">STUDENT ENQUIRY</span>
          </div>
          <div className="navbar-links">
            <a href="#welcome-section" className="navbar-link" >Home</a>&nbsp;
            <a href="/contact" className="navbar-link">Admin Name: Jhonny</a>
            <a href="/aboutus" className="navbar-link">Email: Admin@admin.com</a>
            <a href='/login' className='navbar-link'>Logout</a>
            {/* <a href="/courses" className="navbar-link">Courses</a>
            <a href="/courses" className="navbar-link">Enrolled</a> */}
          </div>
          {/* <div className="navbar-search">
            <div className="navbar-search-icon-wrapper">
              <span className="navbar-search-icon"></span>
            </div>
            <input
              className="navbar-search-input"
              type="text"
              placeholder="Search..."
              aria-label="search"
            />
          </div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="navbar-dropdown" onClick={toggleDropdown}>
            <div className="navbar-dropdown-icon">▼</div>
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/login" className="dropdown-item">Logout</a>
                <a href="/settings" className="dropdown-item">Settings</a>
              </div> */}
            {/* )} */}
          </div>
        </div>
      </div>
    // </div>
  );
}
// import React, { useState } from 'react';
// import Sidebar from '../../components/UI/Sidebar';
// // import './adminuser.css'; // Import CSS file

// const AdminUser = () => {
//   // State to hold the list of courses
//   const [courses, setCourses] = useState([
//     {
//       title: "AI",
//       description: "Artificial Intelligence Course",
//       image: "https://nearlearn.com/public/images/best-artificial-intelligence-course-in-bangalore.jpg"
//     },
//     {
//       title: "ChatGPT",
//       description: "Chatbot Development with GPT",
//       image: "https://aveosoftware.ca/storage/app/uploads/public/642/ffc/6ad/642ffc6ad43b6377961305.jpg"
//     },
//     {
//       title: "Cybersecurity",
//       description: "Cybersecurity Fundamentals",
//       image: "https://www.igmguru.com/uploads/products/cyber-security-course-igmguru_1273766112_xl.jpg"
//     },
//     {
//       title: "IoT",
//       description: "Internet of Things (IoT) Basics",
//       image: "https://5.imimg.com/data5/IF/SH/GLADMIN-66253503/iot-training-class-500x500.png"
//     },
//     {
//       title: "React.js",
//       description: "React.js Frontend Development",
//       image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*EVqCcmCPgpNKxU1wzcTHgw.png"
//     },
//     {
//       title: "Gen AI",
//       description: "General Artificial Intelligence Overview",
//       image: "https://www.igmguru.com/uploads/products/generative-ai-training-igmguru_1738613808_xl.jpg"
//     }
//   ]);

//   // Function to add a course
//   const addCourse = (course) => {
//     setCourses([...courses, course]);
//   };

//   // Function to remove a course
//   const removeCourse = (index) => {
//     const updatedCourses = [...courses];
//     updatedCourses.splice(index, 1);
//     setCourses(updatedCourses);
//   };

//   return (
//     <div className="admin-page-container">
//       <Sidebar />
//       <div className="admin-page">
//         <h1>WELCOME</h1>
//         <h2>Courses Enrolled by Students</h2>
//         <table className="admin-table"> {/* Apply admin-table class */}
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Image</th>
//               <th>Actions</th> {/* Add column for actions */}
//             </tr>
//           </thead>
//           <tbody>
//             {courses.map((course, index) => (
//               <tr key={index}>
//                 <td>{course.title}</td>
//                 <td>{course.description}</td>
//                 <td><img src={course.image} alt={course.title} /></td>
//                 <td>
//                   <button onClick={() => removeCourse(index)}>Remove</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <h2>Add Course for Student</h2>
//         <CourseForm addCourse={addCourse} />
//       </div>
//     </div>
//   );
// };

// const CourseForm = ({ addCourse }) => {
//   const [course, setCourse] = useState({ title: '', description: '', image: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCourse({ ...course, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (course.title.trim() && course.description.trim() && course.image.trim()) {
//       addCourse(course);
//       setCourse({ title: '', description: '', image: '' });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="title"
//         value={course.title}
//         onChange={handleChange}
//         placeholder="Enter course title"
//       />
//       <input
//         type="text"
//         name="description"
//         value={course.description}
//         onChange={handleChange}
//         placeholder="Enter course description"
//       />
//       <input
//         type="text"
//         name="image"
//         value={course.image}
//         onChange={handleChange}
//         placeholder="Enter image URL"
//       />
//       <button type="submit">Add Course</button>
//     </form>
//   );
// };

// export default AdminUser;