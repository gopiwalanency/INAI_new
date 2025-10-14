import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ_Ser2.css';
import faqImage from '../../assets/FAQ.png';

const faqData = [
    {
        question: '1. Why is INAI Worlds considered the best AI/ML internship provider in Surat?',
        answer: "Because we offer hands-on experience building real AI products not mock assignments under direct mentorship from engineers working on NLP, CV, and GenAI systems.",
    },
    {
        question: '2. Is this internship remote or in-person?',
        answer: 'We offer an offline internship where you can work from our Surat office.',
    },
    {
        question: '3. Do I need to know deep learning to apply?',
        answer: 'Not at all. If you know Python and are passionate about building, you’re welcome. We’ll guide you as you gain real-world machine learning experience.',
    },
    {
        question: '4. Can this lead to a full-time job?',
        answer: 'Absolutely. Many of our interns move into full-time roles at our company, INAI Worlds.',
    },
    {
        question: '5. How is this internship different from training institutes or online courses?',
        answer: 'You work inside an actual AI company, contribute to live modules, and learn how scalable AI systems are developed and deployed going beyond traditional theory-based learning.',
    },
    {
        question: '6. Will I get exposure to the full AI product lifecycle?',
        answer: 'Yes, from model design to deployment, interns see how AI products are planned, developed, tested, and launched in real industry environments.',
    }
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

const FAQ_AIML_SURAT = () => {
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

export default FAQ_AIML_SURAT; 