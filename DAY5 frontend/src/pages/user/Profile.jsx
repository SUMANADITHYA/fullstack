import React, { useState } from 'react';
import SearchAppBar from '../../components/UI/Navbar';
import Footer from '../../components/UI/Footer';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState('John Doe'); // Initial name
  const [tempEmail, setTempEmail] = useState('john@example.com'); // Initial email
  const [tempPhoneNumber, setTempPhoneNumber] = useState('1234567890'); // Initial phone number
  const [tempDOB, setTempDOB] = useState('1990-01-01'); // Initial date of birth
  const [tempBio, setTempBio] = useState('Computer Science'); // Initial bio

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset temporary values to the original values
    setTempName('John Doe');
    setTempEmail('john@example.com');
    setTempPhoneNumber('1234567890');
    setTempDOB('1990-01-01');
    setTempBio('Computer Science Engineer');
  };

  const handleSave = () => {
    // Handle saving the changes (Not included in this example)
    setIsEditing(false);
    // Save tempName, tempEmail, tempPhoneNumber, tempDOB, and tempBio to the database or wherever you are managing the state
  };

  return (
    <>
      <SearchAppBar />
      <div className="profile-page">
        <div className="profile-header">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-370-456322.png?f=webp&w=256" alt="Profile" />
          {isEditing ? (
            <>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                value={tempEmail}
                onChange={(e) => setTempEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="tel"
                value={tempPhoneNumber}
                onChange={(e) => setTempPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
              <input
                type="date"
                value={tempDOB}
                onChange={(e) => setTempDOB(e.target.value)}
                placeholder="Date of Birth"
              />
              <textarea
                value={tempBio}
                onChange={(e) => setTempBio(e.target.value)}
                placeholder="Bio"
              />
            </>
          ) : (
            <>
              <h2>{tempName}</h2>
              <p>Email: {tempEmail}</p>
              <p>Phone Number: {tempPhoneNumber}</p>
              <p>Date of Birth: {tempDOB}</p>
              <p>Bio: {tempBio}</p>
            </>
          )}
          {isEditing ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Profile;
