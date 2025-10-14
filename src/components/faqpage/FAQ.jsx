import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ.css';
import faqImage from '../../assets/FAQ.png';

const faqData = [
  {
    question: '1.What is INAI Worlds?',
    answer: "INAI Worlds is an AI development company focused on creating next-generation AI platforms and intelligent systems designed to transform industries worldwide..",
  },
  {
    question: '2. What does INAI Worlds develop?',
    answer: 'We develop scalable AI platforms such as INAI-Verse, Tokenizer, Influwket, Veedket, and Offiket built to power automation, innovation, and digital transformation across sectors.',
  },
  {
    question: '3. What is the mission of INAI Worlds?',
    answer: 'Our mission is to make artificial intelligence accessible and practical for every organization, driving a future where AI supports creativity, efficiency, and global growth.',
},
  {
    question: '4. Why is INAI Worlds recognized among the leading AI companies in India?',
    answer: 'INAI Worlds stands among the top AI companies in India for its commitment to innovation, scalable AI platforms, and real-world impact helping industries worldwide adopt intelligent automation.',
  },
  {
    question: '5. How is INAI Worlds different from other AI companies?',
    answer: 'INAI Worlds builds AI platforms designed for global scalability and practical performance combining deep research, innovation, and adaptability.',
  },
  {
    question: '6. Does INAI Worlds collaborate with organizations?',
    answer: 'Yes. INAI Worlds partners with startups, enterprises, and institutions to co-develop or integrate AI platforms that enhance growth and efficiency.',
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="faq-item">
      <div className="faq-question-wrapper" onClick={onClick}>
        <h3 className="faq-question-text">{item.question}</h3>
        <div className="faq-icon">{isOpen ? <FiMinus /> : <FiPlus />}</div>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* LEFT SIDE - IMAGE */}
        <div className="faq-left">
          <img src={faqImage} alt="FAQ Illustration" className="faq-image" />
        </div>

        {/* RIGHT SIDE - FEATURE BLOCKS */}
        <div className="faq-right">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-feature-list">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 