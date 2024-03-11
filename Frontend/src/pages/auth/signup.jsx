// EntryPage.jsx

// import React, { Component } from 'react';
// import '/src/assets/css/signup.css'


// class signup extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       currentView: "signUp"
//     }
//   }
  

//   changeView = (view) => {
//     this.setState({
//       currentView: view
//     })
//   }


//   currentView = () => {
//     switch(this.state.currentView) {
//       case "signUp":
//         return (
//           <form>
//             <h2>Sign Up!</h2>
//             <fieldset>
//               <legend>Create Account</legend>
//               <ul>
//                 <li>
//                   <label htmlFor="username">Username:</label>
//                   <input type="text" id="username" required/>
//                 </li>
//                 <li>
//                   <label htmlFor="email">Email:</label>
//                   <input type="email" id="email" required/>
//                 </li>
//                 <li>
//                   <label htmlFor="password">Password:</label>
//                   <input type="password" id="password" required/>
//                 </li>
//               </ul>
//             </fieldset>
//             <button>Submit</button>
//             <button type="button" onClick={ () => this.changeView("Login")}>Have an Account? <a href="/">Sign in</a></button>
//           </form>
//         )
//       default:
//         break
//     }
//   }

//   render() {
//     return (
//       <section id="entry-page">
//         {this.currentView()}
//       </section>
//     )
//   }
// }

// export default signup;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter your email.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Add your signup logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Clear form fields and error message
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div
      style={{
        backgroundImage: "url('src/assets/images/i4.jpg')",
        backgroundColor:'black',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        className="card1"
        style={{
          width: '90%',
          maxWidth: '400px',
          // backgroundColor: 'white',
          backgroundColor: 'rgba(248, 245, 245,0.8)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          borderRadius: '20px',
        }}
      >
        <h2>Signup Form</h2>

        {/* LOGIN / REGISTER LINKS */}
        <div
          className="login_register1"
          style={{
            display: 'flex',
            width: '100%',
            border: '1px solid rgba(221, 221, 221, 1)',
            borderRadius: '15px',
            margin: '20px 0',
          }}
        >
          <Link
            to="/login"
            className="login"
            style={{
              fontSize: '1em',
              padding: '10px 55px',
              borderRadius: '15px',
              backgroundColor: 'transparent',
              color: 'black',
              width: '50%',
              textDecoration: 'none',
            }}
          >
            Login
          </Link>
          <Link
            to=""
            className="link2"
            style={{
              fontSize: '1em',
              padding: '10px 55px',
              borderRadius: '15px',
              background: 'linear-gradient(0deg, #003A74, #006AD5)',
              color: 'white',
              width: '50%',
              textDecoration: 'none',
            }}
          >
            Register
          </Link>
        </div>

        {/* FORM */}
        <form
          className="form1"
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <input
            type="email"
            placeholder="Email Address"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #DDDDDD',
              color: '#A0A6A3',
              fontFamily: 'Roboto Mono, sans-serif',
              boxShadow: '1px 5px 9px rgba(211, 211, 211, .7)',
              marginBottom: '15px',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #DDDDDD',
              color: '#A0A6A3',
              fontFamily: 'Roboto Mono, sans-serif',
              boxShadow: '1px 5px 9px rgba(211, 211, 211, .7)',
              marginBottom: '15px',
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="confirm_pass"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #DDDDDD',
              color: '#A0A6A3',
              fontFamily: 'Roboto Mono, sans-serif',
              boxShadow: '1px 5px 9px rgba(211, 211, 211, .7)',
              marginBottom: '15px',
            }}
          />
          <button
            type="submit"
            className="login_btn"
            style={{
              fontSize: '20px',
              color: 'white',
              borderRadius: '15px',
              border: 'none',
              backgroundColor: '#003A74',
              width: '100%',
              padding: '10px',
              marginTop: '15px',
              marginBottom: '15px',
              background: 'linear-gradient(0deg, #003A74, #006AD5)',
              boxShadow: '1px 5px 9px rgba(211, 211, 211, .9)',
            }}
          >
            Signup
          </button>
        </form>

        {error && (
          <div className="error" style={{ color: 'red', marginBottom: '15px' }}>
            {error}
          </div>
        )}

      </div>
    </div>
  );
};

export default signup;