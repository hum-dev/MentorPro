import Contact from '../ContactUs/Contact';
import { useState } from 'react';
import './FAQ.css'

function FaQ() {

  const faqsData = [
    {
      question: 'How much does it cost to use the mentorship platform?',
      answer: 'Our mentorship platform is completely free to use for both mentors and mentees. There are no hidden charges or fees.',
    },
    {
      question: 'Is my personal information secure?',
      answer: 'We take the privacy and security of our users seriously. We have implemented robust measures to protect your personal information and ensure confidentiality.',
    },
    {
      question: 'What communication channels are available for mentors and mentees?',
      answer: 'Our platform provides built-in messaging functionality to facilitate communication between mentors and mentees. You can exchange messages, schedule meetings, and collaborate within our secure environment.',
    },
    
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
    <div className="faq-section">
    <h2 className='title-1'>Frequently Asked Questions</h2>
     <div className="faqs-container">
      
      <div className="faqs-list">
        {faqsData.map((faq, index) => (
          <div key={index} className={`faq ${activeIndex === index ? 'active' : ''}`}>
            <h3 onClick={() => handleToggle(index)}>
              {faq.question}
              <span className="arrow-icon"></span>
            </h3>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
    </div>
    <Contact />
    </>
  );
}

export default FaQ
