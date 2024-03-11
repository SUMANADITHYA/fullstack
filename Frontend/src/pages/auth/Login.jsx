// import React from 'react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '/src/assets/css/Login.css';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Perform your login logic here
//     // For example, you can send a request to your backend to authenticate the user

//     // Assuming login is successful, navigate to the home page
//     navigate('/Home');
//   };

//   return (
//     <div className="box">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="inputBox">
//           <input
//             type="email"
//             name="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label>Email</label>
//         </div>
//         <div className="inputBox">
//           <input
//             type="password"
//             name="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//             title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
//           />
//           <label>Password</label>
//         </div>
//         <center>
//           <input type="submit" name="sign-in" value="Sign In" />
//         </center>
//       </form>
//       <br />
//       <center>
//         <div className='womp'>
//           <button type="button" onClick={() => navigate('/signup')}>
            
//             Don't have an account? Signup
//           </button>
//         </div>
//       </center>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = () => {
    if (!email.trim()) {
      setEmailError('Please enter your email.');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const validatePassword = () => {
    if (!password.trim()) {
      setPasswordError('Please enter your password.');
      return false;
    } else {
      setPasswordError('');
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Submit logic goes here
    if (isEmailValid && isPasswordValid) {
      // Proceed with form submission
      console.log('Form submitted:', email, password);
      navigate('/Home'); // Navigate to '/home' upon successful login
    }
  };

  return (
    <>
      <div
        className='logb'
        style={{
          // backgroundImage: "url('src/assets/images/i4.jpg')",
          // backfaceVisibilit
          
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          className="card"
          style={{
            width: '90%',
            maxWidth: '400px',
            backgroundColor: 'rgba(248, 245, 245,0.8)',
            border: '1px solid rgba(221, 221, 221, 1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            borderRadius: '20px',
            margin: '20px',
          }}
        >
          <h2>Login Form</h2>

          {/* LOGIN / REGISTER LINKS */}
          <div
            className="login_register"
            style={{
              display: 'flex',
              width: '100%',
              border: '1px solid rgba(221, 221, 221, 1)',
              borderRadius: '15px',
              margin: '20px 0',
            }}
          >
            <Link
              className="link1"
              to="/Login"
              style={{
                fontSize: '1em',
                padding: '10px 55px',
                borderRadius: '15px',
                background: 'linear-gradient(0deg, #003a74, #006ad5)',
                // background:'lblue',
                color: 'white',
                flex: '1',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="register"
              style={{
                fontSize: '1em',
                padding: '10px 55px',
                borderRadius: '15px',
                backgroundColor: 'transparent',
                color: 'black',
                flex: '1',
                textAlign: 'center',
                textDecoration: 'none',
              }}
            >
              Register
            </Link>
          </div>

          {/* FORM */}
          <form
            className="form"
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Email Address"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #dddddd',
                color: '#a0a6a3',
                fontFamily: 'Roboto Mono, sans-serif',
                boxShadow: '1px 5px 9px rgba(211, 211, 211, 0.7)',
                marginBottom: '15px',
              }}
            />
            {emailError && <div className="error">{emailError}</div>}
            <input
              type="password"
              placeholder="Password"
              className="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={validatePassword}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #dddddd',
                color: '#a0a6a3',
                fontFamily: 'Roboto Mono, sans-serif',
                boxShadow: '1px 5px 9px rgba(211, 211, 211, 0.7)',
                marginBottom: '15px',
              }}
            />
            {passwordError && <div className="error">{passwordError}</div>}

            <button
              type="submit"
              className="login_btn"
              style={{
                fontSize: '20px',
                color: 'white',
                borderRadius: '15px',
                border: 'none',
                backgroundColor: '#003a74',
                width: '100%',
                padding: '10px',
                marginTop: '15px',
                marginBottom: '15px',
                background: 'linear-gradient(0deg, #003a74, #006ad5)',
                // background:'blue',
                boxShadow: '1px 5px 9px rgba(211, 211, 211, 0.9)',
              }}
            >
              Login
            </button>
          </form>

          {/* FORGOT PASSWORD LINK */}
          <a href="#" className="fp" style={{ color: '#5881d0' }}>
            Forgot password?
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;