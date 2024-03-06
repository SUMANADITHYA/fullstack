// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setError(''); // Clear previous errors

//     if (!username || !email || !password) {
//       setError('Please enter your username, email, and password.');
//       return;
//     }

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     // Handle login logic here
//     console.log('Logging in with username:', username, 'email:', email, 'and password:', password);

//     // Navigate to the home page upon successful login
//     navigate('/user/home');
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   return (
//     <div className="login-container">
//       <div className="login-left">
//         <div className="login-background-image"></div>
//       </div>
//       <div className="login-right">
//         <div className="login-page">
//           <h1>Login</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>Username:</label>
//               <br />
//               <input
//                 type="text"
//                 value={username}
//                 onChange={handleUsernameChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Email:</label>
//               <br />
//               <input
//                 type="text"
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//             </div>
//             <div className="form-group">
//               <label>Password:</label>
//               <br />
//               <div className="password-container">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <input
//                   type="checkbox"
//                   id="showPassword"
//                   checked={showPassword}
//                   onChange={togglePasswordVisibility}
//                 />
//                 <label htmlFor="showPassword">ShowPassword &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/forgetpassword" style={{ textDecoration:'none', color:'black' }}>Forget password</Link></label>
//               </div>
//             </div>
//             {error && <div className="error">{error}</div>}
//             <nav>
//               <button type="submit" className="login-button">
//                 Login
//               </button>
//               <p>
//                 Don't have an account?{' '}
//                 <Link to="/SignUp" style={{ textDecoration: 'none', color: 'black' }}>
//                   Sign Up
//                 </Link>
//               </p>
//               <button type="button" className="google-button">
//                 <Link to="www.google login.com" style={{ textDecoration: 'none', color:'black' }}>Login with Google</Link>
//               </button>
//               <button type="button" className="facebook-button">
//                 <Link to="www.facebook login.com" style={{ textDecoration: 'none', color:'black' }}>Login with Facebook</Link>
//               </button>
//             </nav>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(''); // Clear previous errors

    if (!username || !email || !password) {
      setError('Please enter your username, email, and password.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Check if the email is for admin
    if (email.endsWith('@admin.com')) {
      console.log('Admin logged in with email:', email, 'and password:', password);
      // Navigate to the admin dashboard
      navigate('/admin');
    } else {
      console.log('Logging in with username:', username, 'email:', email, 'and password:', password);
      // Navigate to the user dashboard
      navigate('/user/home');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-background-image"></div>
      </div>
      <div className="login-right">
        <div className="login-page">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <br />
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <br />
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <br />
              <div className="password-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="checkbox"
                  id="showPassword"
                  checked={showPassword}
                  onChange={togglePasswordVisibility}
                />
                <label htmlFor="showPassword">ShowPassword &nbsp;&nbsp;&nbsp;&nbsp;<Link to="/forgetpassword" style={{ textDecoration:'none', color:'black' }}>Forget password</Link></label>
              </div>
            </div>
            {error && <div className="error">{error}</div>}
            <nav>
              <button type="submit" className="login-button">
                Login
              </button>
              <p>
                Don't have an account?{' '}
                <Link to="/SignUp" style={{ textDecoration: 'none', color: 'black' }}>
                  Sign Up
                </Link>
              </p>
              <button type="button" className="google-button">
                <Link to="www.google login.com" style={{ textDecoration: 'none', color:'black' }}>Login with Google</Link>
              </button>
              <button type="button" className="facebook-button">
                <Link to="www.facebook login.com" style={{ textDecoration: 'none', color:'black' }}>Login with Facebook</Link>
              </button>
            </nav>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

