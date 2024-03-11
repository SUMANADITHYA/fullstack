// src/components/SideBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/SideBar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/profile">Profile</Link>
      <Link to="/courses">CoursesPage</Link>
      <Link to="/logout">Logout</Link>
    </div>
  );
}

export default Sidebar;