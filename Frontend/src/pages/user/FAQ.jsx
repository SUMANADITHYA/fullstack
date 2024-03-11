import React, { useState } from 'react';
import Navbar from '../../components/Navbar';


const FAQ= () => {
   
  const [userQuestion, setUserQuestion] = useState('');
  const [faqList, setFaqList] = useState([
    {
      question: 'What programming languages are taught in the course?',
      answer: 'We teach Python, Java, JavaScript, and more.'
    },
    {
      question: 'How long is the course?',
      answer: 'The course duration varies depending on the topic, but most are 8-12 weeks long.'
    },
    {
      question: 'Is there any prerequisite knowledge required?',
      answer: 'No, our courses are suitable for beginners with no prior programming experience.'
    }
  ]);

  const handleUserQuestionSubmit = () => {
    // Add user question to FAQ list
    setFaqList(prevList => [...prevList, { question: userQuestion, answer: 'Answer pending' }]);
    setUserQuestion(''); // Clear user input
  };

  return (
    <div className="faq-page">
        <Navbar/>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqList.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="user-question">
        <h2>Ask a Question</h2>
        <input type="text" value={userQuestion} onChange={(e) => setUserQuestion(e.target.value)} placeholder="Your question" />
        <button onClick={handleUserQuestionSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default FAQ;
