import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.sidebar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar} className="sidebar-toggle">=</button>
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <a href="#welcome-section" onClick={toggleSidebar}>Home</a>
        </li>
        <li>
          <a href="#course-section" onClick={toggleSidebar}>Courses</a>
        </li>
        <li>
          <a href="#student-section" onClick={toggleSidebar}>Student</a>
        </li>
        <li>
          <a href="#enquiry-sections" onClick={toggleSidebar}>Enquiry</a>
        </li>
        <li>
          <a href="#report-sections" onClick={toggleSidebar}>Report</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
