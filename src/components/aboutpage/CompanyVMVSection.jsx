import React from 'react';
import visionImg from '../../assets/INAI.png'; // Placeholder, replace with your vision image
import missionImg from '../../assets/bg-img-1.avif'; // Placeholder, replace with your mission image
import coreValueImg from '../../assets/logo1.png'; // Placeholder, replace with your core value image
import UpcomingProjectsSection from '../projects/UpcomingProjectsSection';

const CompanyVMVSection = () => {
  return (
    <section className="company-vmv-section">
      <div className="company-vmv-container">
        {/* Vision */}
        <div className="company-vmv-block">
          <div className="company-vmv-img-wrap">
            <img src={visionImg} alt="Company Vision" className="company-vmv-img" />
          </div>
          <div className="company-vmv-content">
            <h2 className="company-vmv-title">Company Vision</h2>
            <p className="company-vmv-desc">
              Build India's first AI Company. We are here to harness the power of artificial intelligence to solve real world problems, enhance human potential and build ethical, transparent and impactful technologies that improve lives globally and make our mother earth more beautiful.
            </p>
          </div>
        </div>
        {/* Mission */}
        <div className="company-vmv-block reverse">
          <div className="company-vmv-img-wrap">
            <img src={missionImg} alt="Company Mission" className="company-vmv-img" />
          </div>
          <div className="company-vmv-content">
            <h2 className="company-vmv-title">Company Mission</h2>
            <p className="company-vmv-desc">
              We want to develop the world's first ever super intelligent model which can give answers in every aspect. We also want to create a future where artificial intelligence empowers humanity, fosters innovation and drives sustainability progress across every aspect of life.
            </p>
          </div>
        </div>
        {/* Core Values */}
        <div className="company-vmv-block">
          <div className="company-vmv-img-wrap">
            <img src={coreValueImg} alt="Company Core Value" className="company-vmv-img" />
          </div>
          <div className="company-vmv-content">
            <h2 className="company-vmv-title">Company Core Value</h2>
            <p className="company-vmv-desc">
              Our core values are the foundation of the company – they’ve been there from the start and really are the DNA of organization.<br />
              <strong>Think Big, Challenge, Professionalism, Employee Satisfaction Commitment, Integrity, Innovation and improvement, Respect For Each Other And Share Your Knowledge.</strong>
            </p>
          </div>
        </div>
      </div>
      {/* Upcoming Projects Section at the end */}
      <UpcomingProjectsSection />
    </section>
  );
};

export default CompanyVMVSection; 