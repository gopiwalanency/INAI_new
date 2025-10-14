import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ_Ser2.css';
import faqImage from '../../assets/FAQ.png';

const faqData = [
    {
        question: '1. What is data structuring for AI & ML?',
        answer: "It is the process of organizing and cleaning raw data to make it usable for AI and machine learning models.",
    },
    {
        question: '2. Why is data structuring important in AI model development?',
        answer: 'Structured data ensures efficient model training, higher accuracy, and reduced bias in AI and ML models.',
    },
    {
        question: '3. How do you prepare clean datasets for AI-powered products?',
        answer: 'By removing duplicates, correcting errors, normalizing formats, labeling data, and organizing it into structured tables or files.',
    },
    {
        question: '4. Which tools are used in structuring data for AI models?',
        answer: 'Tools like Pandas, Apache Spark, SQL databases, and annotation software are commonly used for cleaning and organizing datasets.',
    },
    {
        question: '5. How does structured data improve AI model training?',
        answer: 'Properly structured data reduces inconsistencies, ensures alignment of features and labels, and allows AI algorithms to learn patterns effectively.',
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

const FAQ_Ser2 = () => {
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

export default FAQ_Ser2; 