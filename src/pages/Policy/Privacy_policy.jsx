import React, { useState } from 'react';
import './Terms_and_conditions.css';

const Privacy_policy = () => {
  return (
    <div className="blog-layout">

      {/* Main Blog Content */}
      <div className="blog-detail-page" style={{ marginBottom: '100px' }}>
        <div className="blog-detail-header">
          <h1 className="blog-detail-title">Privacy Policy</h1>
        </div>
        <div className='blog-detail-image'>
          {/* <img src={image1} alt="" /> */}
        </div>
        <div className="blog-detail-content">
          <p>INAI Worlds <b>("we," "our," or "us")</b> is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website.</p>


          <h2 id="what-is-ai">1. Introduction</h2>
          <p>Your privacy matters to us. This policy is designed to help you understand what data we collect, why we collect it, and how we use it responsibly.</p>


          <h2 id="how-ai-works">2. Information We Collect</h2>
          <p>We collect the following personal information: Your name, email address, or phone number submitted via contact forms. Non-personal information such as browser type, pages visited, and time spent on the site.</p>

          <h2 id="benefits">3. Use of Collected Information</h2>
          <p>We use your information to: Offer personalized experiences and improve overall user satisfaction. Your privacy matters to us — we handle your data responsibly and only use it as described in this policy. If any other use is required, we ensure to seek your permission first.</p>


          <h2 id="terms">4. Sharing of Personal Information</h2>
          <p>We do not sell, rent, or trade your personal data. Your information may be shared only with trusted third-party service providers to help us operate the Website, provided they follow strict confidentiality agreements.</p>

          <h2>5. Cookies and Tracking Technologies</h2>
          <p>We use cookies to enhance your browsing experience and analyze website traffic. You can choose to disable cookies through your browser settings.</p>

          <h2>6. Data Retention</h2>
          <p>We retain your personal data only as long as necessary for the purposes described in this policy or as required by law.</p>

          <h2>7. Security Measures</h2>
          <p>We implement appropriate security measures (SSL, firewalls, data encryption) to protect your information from unauthorized access or misuse.</p>

          <h2>8. Your Privacy Rights</h2>
          <p>You might have specific rights over your personal data such as viewing, updating, or deleting the data we hold about you. In some cases, you may also request to transfer your data or limit how it’s used. We’ll review and respond to any such request based on the data protection laws that apply in your area.</p>

          <h2>9. Consent</h2>
          <p>By using this website and sharing your personal details, you agree that we can collect and use your information as explained in this Privacy Policy.</p>

          <h2>10. Changes to this Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.</p>


        </div>





      </div>
    </div>
  );
};

export default Privacy_policy;
