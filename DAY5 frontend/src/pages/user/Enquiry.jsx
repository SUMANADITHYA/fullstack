import React, { useState } from 'react';
import SearchAppBar from '../../components/UI/Navbar';
import Footer from '../../components/UI/Footer';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending data to backend)
    console.log("Form submitted:", { name, email, message });
    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
    // Set submitted to true
    setSubmitted(true);
  };

  return (
    <>
      <div>
        <SearchAppBar/>
      </div>
      <br/>
      <h2 style={{textAlign:'center',fontSize:'40px'}}>Query form</h2> <br/> <br/>
      <div className="formm">
        <form onSubmit={handleFormSubmit} >
          <div>
            <label htmlFor="name">Course Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      {submitted && <p style={{ textAlign: 'center', color: 'green' }}>Form submitted successfully!</p>}
      <br/>
      <br/>
      <Footer/>
    </>
  );
}

export default ContactForm;
