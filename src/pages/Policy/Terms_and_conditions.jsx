import React, { useState } from 'react';
import './Terms_and_conditions.css';

const Terms_and_conditions = () => {
  return (
    <div className="blog-layout">

      {/* Main Blog Content */}
      <div className="blog-detail-page" style={{ marginBottom: '100px' }}>
        <div className="blog-detail-header">
          <h1 className="blog-detail-title">Terms and Conditions</h1>
        </div>
        <div className='blog-detail-image'>
          {/* <img src={image1} alt="" /> */}
        </div>
        <div className="blog-detail-content">
          <p>Welcome to INAI Worlds. By accessing or using our website <a href="https://inaiworlds.com">https://inaiworlds.com</a> <b>("Website")</b>, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree to these terms, please do not use our Website.</p>


          <h2 id="what-is-ai">1. Use of the Website</h2>
          <p>This Website provides information and services related to digital innovation, AI solutions, marketing, and creative technologies. You must be at least 18 years old to use our Website. No account registration is required.</p>


          <h2 id="how-ai-works">2. Intellectual Property</h2>
          <p>All content on this Website—including text, images, graphics, logos, and videos—is the property of INAI Worlds and protected by copyright and intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.</p>

          <h2 id="benefits">3. Prohibited Activities</h2>
          <p>You agree not to: Use the Website for any unlawful purpose. Interfere with or disrupt the Website or servers. Attempt unauthorized access to any part of the Website.</p>


          <h2 id="terms">4. Third-Party Links</h2>


          <p>Our Website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites.</p>

          <h2>5. Limitation of Liability</h2>
          <p>INAI Worlds shall not be liable for any indirect, incidental, or consequential damages resulting from your use of or inability to use the Website.</p>

          <h2>6. Changes to the Terms</h2>
          <p>We may update these Terms and Conditions at any time. Changes will be posted on this page with the updated effective date.</p>


        </div>





      </div>
    </div>
  );
};

export default Terms_and_conditions;
