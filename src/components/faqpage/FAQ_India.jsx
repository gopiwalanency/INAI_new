import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ_Ser2.css';
import faqImage from '../../assets/FAQ.png';

const faqData = [
    {
        question: '1. Why is INAI Worlds considered one of the best AI company in India?',
        answer: "INAI Worlds is a product-first AI company based in India, building intelligent, in-house AI modules rather than offering generic development services. Our focus is on creating scalable, future-ready AI products that deliver long-term business value across industries like education, healthcare, and real estate.",
    },
    {
        question: '2. Can businesses use INAI’s AI solutions?',
        answer: 'Absolutely. Once launched, our AI products will be made available to startups, corporates, and enterprises through easy API access and documentation. These tools are being designed for fast implementation, high performance, and industry-specific use cases',
    },
    {
        question: '3. Are INAI Worlds AI solutions available for global clients?',
        answer: 'Yes. While we operate from Surat, Gujarat, INAI Worlds is building solutions for a global market. Our platforms will be available internationally through scalable deployments, secure APIs, and modular design.',
    },
    {
        question: '4. What makes INAI Worlds different from other AI companies in India?',
        answer: 'At INAI Worlds, we don\'t just talk about innovation, we build it from the ground up. We focus on developing ready-to-use, in-house AI modules that are:Tested on real-world dataDesigned with long-term scalability in mindBuilt using industry-standard tools like PyTorch, Hugging Face, and FastAPIOur approach is centered on creating usable AI products, not just showcasing tech demos.',
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

const FAQ_India = () => {
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

export default FAQ_India; 