import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import './FAQ.css';
import faqImage from '../../assets/FAQ.png';

const faqData = [
    {
        question: '1.What is data collection for AI & ML?',
        answer: "It is the process of gathering and organizing structured and unstructured data to train AIand machine learning models effectively..",
    },
    {
        question: '2. Why is machine learning data collection important?',
        answer: 'It forms the foundation for all AI projects, reducing errors, improving algorithm performance, and enabling models to handle real-world scenarios accurately..',
    },
    {
        question: '3. Which tools and datasets are used in machine learning data collection?',
        answer: (
            <>
                <p>Common sources include:</p>
                <ul>
                    <li>
                        <strong>Public datasets:</strong> Kaggle (MNIST, CIFAR-10), UCI ML Repository, Open Images.
                    </li>
                    <li>
                        <strong>APIs:</strong> Twitter API, Reddit API, Google Dataset Search.
                    </li>
                    <li>
                        <strong>Tools:</strong> Pandas, Apache Spark, data cleaning and annotation software.
                    </li>
                </ul>
            </>
        ),
    },
    {
        question: '4. How do you ensure data diversity and quality?',
        answer: 'We include samples from multiple sources, languages, and formats, and perform rigorous quality checks to remove duplicates, errors, and inconsistencies..',
    },
    {
        question:'5. How is ethical compliance maintained in data collection?',
        answer:'By following privacy laws, copyright regulations, and anonymization techniques, weensure data is legally and ethically sourced.'
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
                    {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                </div>
            )}
        </div>
    );
};

const FAQ_Service = () => {
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

export default FAQ_Service; 