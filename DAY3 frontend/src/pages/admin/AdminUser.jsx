// AdminUser.js

import React, { useState } from 'react';
import Sidebar from '../../components/UI/Sidebar';
import AppBar from '../../components/UI/NavAdmin';
// import './adminuser.css'; // Import CSS file

const AdminUser = () => {
  const [courses, setCourses] = useState([
    {
      title: "AI",
      description: "Artificial Intelligence Course",
      image: "https://nearlearn.com/public/images/best-artificial-intelligence-course-in-bangalore.jpg"
    },
    {
      title: "ChatGPT",
      description: "Chatbot Development with GPT",
      image: "https://aveosoftware.ca/storage/app/uploads/public/642/ffc/6ad/642ffc6ad43b6377961305.jpg"
    },
    {
      title: "Cybersecurity",
      description: "Cybersecurity Fundamentals",
      image: "https://www.igmguru.com/uploads/products/cyber-security-course-igmguru_1273766112_xl.jpg"
    },
    {
      title: "IoT",
      description: "Internet of Things (IoT) Basics",
      image: "https://5.imimg.com/data5/IF/SH/GLADMIN-66253503/iot-training-class-500x500.png"
    },
    {
      title: "React.js",
      description: "React.js Frontend Development",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*EVqCcmCPgpNKxU1wzcTHgw.png"
    },
    {
      title: "Gen AI",
      description: "General Artificial Intelligence Overview",
      image: "https://www.igmguru.com/uploads/products/generative-ai-training-igmguru_1738613808_xl.jpg"
    }
  ]);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      course: "AI"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      course: "React.js"
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      course: "Cybersecurity"
    },
    {
      id: 4,
      name: "Alice Johnson",
      email: "alice@example.com",
      course: "Python"
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael@example.com",
      course: "JavaScript"
    },
    {
      id: 6,
      name: "Emily Davis",
      email: "emily.d@example.com",
      course: "HTML & CSS"
    },
    {
      id: 7,
      name: "Christopher Lee",
      email: "chris@example.com",
      course: "Java"
    },
    {
      id: 8,
      name: "Jessica Martinez",
      email: "jessica@example.com",
      course: "SQL"
    },
    {
      id: 9,
      name: "David Wilson",
      email: "david@example.com",
      course: "Angular"
    },
    {
      id: 10,
      name: "Sarah Thompson",
      email: "sarah@example.com",
      course: "C#, python"
    },
    {
      id: 11,
      name: "Ryan Garcia",
      email: "ryan@example.com",
      course: "Ruby on Rails"
    },
    {
      id: 12,
      name: "Olivia Wright",
      email: "olivia@example.com",
      course: "PHP"
    }
    
        
    
    
    
        
        
  ]);

  const addCourse = (course) => {
    setCourses([...courses, course]);
  };

  const removeCourse = (index) => {
    const updatedCourses = [...courses];
    updatedCourses.splice(index, 1);
    setCourses(updatedCourses);
  };

  return (
    <>
    <div className="admin-page-container">
    <AppBar/>
       <Sidebar />
      <div className="admin-page">
        
        <section className="welcome-section" id='welcome-section'>
          <h1>Welcome to Admin Dashboard</h1>
        </section>
        <section className="courses-section" id='course-section'>
          <h2>Courses Enrolled by Students</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td><img src={course.image} alt={course.title} /></td>
                  <td>
                    <button onClick={() => removeCourse(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2>Add Course for Student</h2>
          <CourseForm addCourse={addCourse} />
        </section>
        
        <section className="students-section" id='student-section'>
          <h2>Students</h2>
          <table className="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.course}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        
      </div>
    </div>
    </>
  );
};

const CourseForm = ({ addCourse }) => {
  const [course, setCourse] = useState({ title: '', description: '', image: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (course.title.trim() && course.description.trim() && course.image.trim()) {
      addCourse(course);
      setCourse({ title: '', description: '', image: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={course.title}
        onChange={handleChange}
        placeholder="Enter course title"
      />
      <input
        type="text"
        name="description"
        value={course.description}
        onChange={handleChange}
        placeholder="Enter course description"
      />
      <input
        type="text"
        name="image"
        value={course.image}
        onChange={handleChange}
        placeholder="Enter image URL"
      />
      <button type="submit">Add Course</button>
    </form>
    
  );
};

export default AdminUser;
