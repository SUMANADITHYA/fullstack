import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+1', 
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '', 
  });

  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && !/^[A-Za-z. ]*$/.test(value)) {
      return;
    }

    if (name === 'mobile' && !/^\d{0,10}$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords don't match. Please enter the same password.");
      return;
    }

    // Clear password error if passwords match
    setPasswordError('');

    console.log('Form submitted:', formData);

    navigate('/login');
  };

  return (
    <div className="signup-container" style={{backgroundImage: `url('https://login.niit.com/auth/resources/qird6/login/niitlogin/img/banner.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <p className='p-signup'>Your path to excellence, powered by an amazing <br></br>
          learning experience, is just a click away. <br></br>
         Please signup to access your application process or enrolled programs. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    </p>
      <div className="signup-form">
        <h2 className="signup-h2">Create Account</h2>
        <form className="signup-form-container" onSubmit={handleSubmit}>
          <label className="signup-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              pattern="[A-Za-z. ]*"
              title="Only letters, dots, and spaces are allowed"
              required
              className="signup-input"
            />
          </label>

          <div className="signup-mobile-group">
            <label className="signup-mobile-label">
              Mobile:<br />
              <select
                id="dd"
                name="countryCode"
                value={formData.countryCode}
                onChange={handleInputChange}
                className="signup-input"
              >
                <option value="+1">+1 (USA)</option>
                <option value="+91">+91 (India)</option>
              </select>
            </label>

            <label className="signup-mobile-label">
              <br />
              <input
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                pattern="^\d{0,10}$"
                title="Only numbers are allowed, up to 10 digits"
                required
                className="signup-input"
              />
            </label>
          </div>

          <label className="signup-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="signup-input"
            />
          </label>

          <label className="signup-label">
            Password (at least 6 characters):
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              minLength="6"
              required
              className="signup-input"
            />
          </label>

          <label className="signup-label">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              minLength="6"
              required
              className="signup-input"
            />
          </label>

          {passwordError && <p className="signup-error">{passwordError}</p>}

          <button type="submit" className="signup-submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
