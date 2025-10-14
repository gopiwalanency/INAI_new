import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ_Ser3.css';
import faqImage from '../../assets/FAQ.png';

const faqData = [
    {
        question: '1. What is AI model training?',
        answer: "It is the process of teaching AI algorithms to learn from data and generate predictions or intelligent responses.",
    },
    {
        question: '2. What is the difference between machine learning and deep learning model training?',
        answer: '● Machine learning model training uses algorithms for structured data analysis. ● Deep learning model training uses neural networks to handle complex data like images, text, and speech.',
    },
    {
        question: '3. What is generative AI model training?',
        answer: 'It is the process of teaching AI systems to create new content such as articles, designs, code, or media using trained patterns.',
    },
    {
        question: '4. How is neural network training used in AI & ML?',
        answer: 'Neural networks are trained on large datasets with multiple layers of interconnected nodes, allowing AI to capture deep and complex patterns.',
    },
    {
        question: '5. What is the model training process in AI development?',
        answer: 'It includes algorithm selection, dataset preparation, iterative training, validation, and optimization to ensure models are production-ready',
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

const FAQ_Ser3 = () => {
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

export default FAQ_Ser3; 