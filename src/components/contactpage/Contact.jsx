import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";
import './Contact.css';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      setSubmitError('Please agree to the data collection terms');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date()
      });

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        agree: false,
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact INAI Worlds | Leading AI Company in India</title>
        <meta
          name="description"
          content="Get in touch with INAI Worlds for AI solutions, AI/ML internships, and expert AI services. Reach us via phone, email, or visit our office."
        />
        <script type="application/ld+json">{`
        {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://inaiworlds.com/contact#contactpage",
  "url": "https://inaiworlds.com/contact",
  "name": "Contact INAI Worlds | Leading AI Company in India",
  "description": "Get in touch with INAI Worlds for AI solutions, AI/ML internships, and expert AI services. Reach us via phone, email, or visit our office.",
  "isPartOf": {
    "@id": "https://inaiworlds.com/#website"
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://inaiworlds.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://inaiworlds.com/contact"
      }
    ]
  },
  "publisher": {
    "@type": "Organization",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-70164 88265",
      "contactType": "Customer Support",
      "areaServed": "IN",
      "availableLanguage": ["English"]
    }
  },
  "inLanguage": "en-US"
}
`}</script>
      </Helmet>
      <div className="contact-page-container">
        <div className="contact-section">
          <div className="contact-left">
            <span className="contact-tag">GET IN TOUCH</span>
            <h1 className="contact-title">Any Questions? Get in Touch!</h1>
            <p className="contact-description">
              We are here to assist you with any questions or concerns you may have.
              Feel free to reach out to us anytime.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <IoLocationOutline className="contact-info-icon" />
                <div className="contact-info-content">
                  <strong>Head Office</strong>
                  <p>520, MBH, Sarthana Jakat Naka, Surat, Gujarat 395006</p>
                </div>
              </div>

              <div className="contact-info-item">
                <IoLocationOutline className="contact-info-icon" />
                <div className="contact-info-content">
                  <strong>Branch 1</strong>
                  <p>C2,1114,IT park , Mota varachha
                    surat, Gujarat 394101</p>
                </div>
              </div>

              
              <div className="contact-info-item">
                <IoMailOutline className="contact-info-icon" />
                <div className="contact-info-content">
                  <strong>Email:</strong>
                  <p>info@inaiworlds.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-group-agree">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree">I agree that my submitted data is being collected and stored.</label>
              </div>

              {submitError && <div className="form-error">{submitError}</div>}
              {submitSuccess && <div className="form-success">Thank you! Your message has been sent successfully.</div>}

              <button
                type="submit"
                className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="map-section">
            <iframe
              title="INAI Worlds Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4411.555055249641!2d72.89686007584523!3d21.229006780869586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045002e6e5c2d%3A0x1307eca765c5f1aa!2sINAI%20Worlds%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1750929630146!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;