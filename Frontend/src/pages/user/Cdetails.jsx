import React from 'react';
import Navbar from '../../components/Navbar';


const Cdetails = () => {
  return (
    <>
      <Navbar />
      <div className="course-details">
        <h1>Python Programming</h1>
        <div className="details">
          <img src="https://tse4.mm.bing.net/th?id=OIP.4oYd36YtjReF0xuo5fDqCQHaFW&pid=Api&P=0&w=300&h=300.jpg" alt="Python Programming" />
          <p>Description: This course covers the fundamentals of Python programming language.</p>
          <p>Instructor: John Doe</p>
          <p>Duration: 8 weeks</p>
          <p>Price: $99</p>
        </div>
        <div className="payment">
          <h2>Payment Details</h2>
          <form>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" />
            <label htmlFor="expiry">Expiry Date:</label>
            <input type="text" id="expiry" name="expiry" />
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" />
            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cdetails;
