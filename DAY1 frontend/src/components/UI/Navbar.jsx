
import React, { useState } from 'react';
// import './styles.css'; // Import your CSS file

export default function SearchAppBar() {
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
            <a href="/user/home" className="navbar-link">Home</a>&nbsp;
            <a href="/contact" className="navbar-link">Contact</a>
            <a href="/aboutus" className="navbar-link">About Us</a>
            <a href="/courses" className="navbar-link">Courses</a>
          </div>
          <div className="navbar-search">
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

          <img src="https://i.pinimg.com/736x/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.jpg" alt="dropdown" className="navbar-dropdown-icon" style={{width:"35px", height:"35px",borderRadius:"50px"}}/>
            {dropdownOpen && (
              <div className="dropdown-content">
                <a href="/profile" className="dropdown-item">Profile</a>
                <a href="/login" className="dropdown-item">Logout</a>
                <a href="/settings" className="dropdown-item">Settings</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
