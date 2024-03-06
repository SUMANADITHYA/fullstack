import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchAppBar from '../../components/UI/Navbar';
import Footer from '../../components/UI/Footer';

const Course = () => {
  const navigate = useNavigate();
  const [showDescriptions, setShowDescriptions] = useState(Array(7).fill(false));
  const [searchQuery, setSearchQuery] = useState('');
  const [showAnswers, setShowAnswers] = useState(Array(7).fill(false));

  const toggleDescription = (index) => {
    const newDescriptions = [...showDescriptions];
    newDescriptions[index] = !newDescriptions[index];
    setShowDescriptions(newDescriptions);
  };

  const handleEnroll = () => {
    // Add code to handle enrollment
    console.log("Enrolled in the course!");
    navigate("/CoursePage");
  };

  const handleEnquiry = () => {
    // Navigate to enquiry page
    navigate("/EnquiryPage");
  };

  // Filter courses based on search query
  const filteredCourses = courses.filter(course => {
    return course.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const faqs = [
    {
      question: "What is the course duration?",
      answer: "The course duration varies depending on the specific course. Please check the course details for more information."
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer: "Prerequisites may vary for each course. Please refer to the course description for details on prerequisites."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept payments via credit/debit cards, PayPal, and bank transfers."
      },
      {
        question: "Is there a refund policy?",
        answer: "Yes, we have a refund policy. Please refer to our terms and conditions page for detailed information."
      },
      {
        question: "Can I access the course materials after completing the course?",
        answer: "Yes, you will have lifetime access to the course materials once you enroll."
      },
      {
        question: "Are certificates provided upon course completion?",
        answer: "Yes, certificates are provided upon successful completion of our courses."
      },
      {
        question: "Do you offer discounts for group enrollments?",
        answer: "Yes, we offer discounts for group enrollments. Please contact our support team for more information."
      },
      {
        question: "How do I enroll in a course?",
        answer: "To enroll in a course, simply visit our website, browse the available courses, and click on the 'Enroll' button for the course you're interested in. Follow the instructions to complete the enrollment process."
      },
      {
        question: "Can I access the course materials offline?",
        answer: "Yes, you can download course materials for offline access. Most of our courses offer downloadable resources such as PDFs, videos, and exercises."
      },
      {
        question: "Is technical support available during the course?",
        answer: "Yes, we provide technical support to our students throughout the duration of the course. You can reach out to our support team via email or through our online platform."
      },
      {
        question: "Do you offer job placement assistance?",
        answer: "Yes, we provide job placement assistance to our students upon course completion. We offer resume building workshops, interview preparation sessions, and job referral services."
      },
      {
        question: "Can I switch to a different course after enrolling?",
        answer: "Yes, you can switch to a different course within a certain timeframe after enrolling. Please contact our support team for assistance with course transfers."
      },
    
    {
      question: "Have another question?",
      answer: "Feel free to ask any other questions you have!",
      action: handleEnquiry // Define action to navigate to the enquiry page
    }
  ];

  const toggleAnswer = (index) => {
    // Check if there's an action defined for the FAQ item
    if (faqs[index].action) {
      // Perform the action defined for the FAQ item
      faqs[index].action();
    } else {
      // Toggle answer visibility for regular FAQ items
      const newShowAnswers = [...showAnswers];
      newShowAnswers[index] = !newShowAnswers[index];
      setShowAnswers(newShowAnswers);
    }
  };

  return (
    <>
      <SearchAppBar />
      <h2 style={{textAlign: 'center'}}>I'm Learning</h2>
      <input
        type="text"
        placeholder="Search by course name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{marginLeft: '10px', width: '40%', padding: '10px', fontSize: '16px'}}
      />
      <br />
      <br></br>
      <div style={styles.container}>
        {/* Render filtered courses */}
        {filteredCourses.map((course, index) => (
          <div key={index} style={styles.card}>
            <h1>{course.title}</h1>
            <img src={course.imageUrl} alt={course.title} style={styles.image} /><br />
            <button onClick={() => toggleDescription(index)} style={styles.descriptionButton}>
              {showDescriptions[index] ? "Hide Description" : "Show Description"}
            </button>
            {showDescriptions[index] && (
              <div className="course-section" style={{background: 'skyblue'}}>
                <h2>Description</h2>
                <p>{course.description}</p>
              </div>
            )}
            <br /><button onClick={handleEnroll} style={styles.enrollButton}>Enroll</button>
          </div>
        ))}
      </div>
      <br />
      {/* FAQ section */}
      <div className="faq-container">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>FAQ</h2>
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              {faq.action ? null : <span className={`faq-icon ${showAnswers[index] ? 'rotate' : ''}`}>&#9660;</span>}
            </div>
            <div className={`faq-answer ${showAnswers[index] ? 'show' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Course;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow courses to wrap to the next line
    gap: '20px', // Add some space between courses
  },
  card: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Align items in the center horizontally
    textAlign: 'center', // Align text in the center horizontally
  },
  image: {
    width: '250px',
    height: '150px',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  descriptionButton: {
    marginBottom: '10px',
    backgroundColor: 'transparent', // Set background color to transparent
    color: 'black',
    border: 'none',
    cursor: 'pointer',
  },
  enrollButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
  }
};

const courses = [
  {
    title: "AI",
    imageUrl: "https://nearlearn.com/public/images/best-artificial-intelligence-course-in-bangalore.jpg",
    description: "Artificial Intelligence involves the development of computer systems that can perform tasks that typically require human intelligence. This course provides an overview of AI concepts, including machine learning, neural networks, natural language processing, and computer vision. It explores AI algorithms and applications across different domains such as healthcare, finance, and autonomous vehicles."
  },
  {
    title: "ChatGpt",
    imageUrl: "https://aveosoftware.ca/storage/app/uploads/public/642/ffc/6ad/642ffc6ad43b6377961305.jpg",
    description: "ChatGPT is a conversational AI model developed by OpenAI. This course introduces students to the concepts of natural language processing (NLP) and chatbot development using GPT (Generative Pre-trained Transformer) models. It covers topics such as text generation, dialogue systems, fine-tuning language models, and deploying chatbots in real-world scenarios."
  },

  {
    title: "Cyber Security",
    imageUrl: "https://www.igmguru.com/uploads/products/cyber-security-course-igmguru_1273766112_xl.jpg",
    description: "Cybersecurity involves protecting computer systems, networks, and data from unauthorized access, cyberattacks, and data breaches. This course covers essential cybersecurity principles, techniques, and best practices. Topics include network security, cryptography, risk management, threat detection, incident response, and ethical hacking."
  },
  {
    title: "Gen AI",
    imageUrl: "https://www.igmguru.com/uploads/products/generative-ai-training-igmguru_1738613808_xl.jpg",
    description: "Gen AI refers to the next generation of Artificial Intelligence systems that exhibit human-like cognitive abilities, such as reasoning, problem-solving, and creativity. This course explores advanced AI algorithms and methodologies, including deep learning, reinforcement learning, evolutionary algorithms, and cognitive computing. It examines cutting-edge AI research and its implications for future technologies."
  },
  {
    title: "IOT",
    imageUrl: "https://5.imimg.com/data5/IF/SH/GLADMIN-66253503/iot-training-class-500x500.png",
    description: "The Internet of Things (IoT) is a network of interconnected devices embedded with sensors, software, and other technologies to collect and exchange data over the internet. This course covers IoT architecture, protocols, communication technologies, sensor networks, data analytics, and IoT applications in smart homes, smart cities, healthcare, agriculture, and industrial automation."
  },
  {
    title: "React Js",
    imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*EVqCcmCPgpNKxU1wzcTHgw.png",
    description: "React.js is a JavaScript library for building user interfaces, particularly single-page applications. This course teaches the fundamentals of React.js, including components, state management, JSX syntax, routing, and lifecycle methods. It covers advanced topics such as React hooks, context API, server-side rendering, and building scalable and maintainable React applications."
  },
  // Add other courses similarly
];
