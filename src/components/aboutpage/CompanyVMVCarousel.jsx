import React from 'react';
import { FaEye, FaBullseye, FaStar } from 'react-icons/fa';
import './CompanyVMVCarousel.css';
import Vision from "../../assets/Vision.png";
import Mission from "../../assets/Missions.png";
import CoreValue from "../../assets/Core Value.png";
import UpcomingProjectsSection from '../projects/UpcomingProjectsSection';

const vmvData = [
  {
    label: 'COMPANY VISION',
    icon: <FaEye className="vmv-carousel-icon-img" />,
    content: `Build India's first AI Company. We are here to harness the power of artificial intelligence to solve real world problems, enhance human potential and build ethical, transparent and impactful technologies that improve lives globally and make our mother earth more beautiful.`,
  },
  {
    label: 'COMPANY MISSION',
    icon: <FaBullseye className="vmv-carousel-icon-img" />,
    content: `We want to develop the world's first ever super intelligent model which can give answers in every aspect. We also want to create a future where artificial intelligence empowers humanity, fosters innovation and drives sustainability progress across every aspect of life.`,
  },
  {
    label: 'COMPANY CORE VALUE',
    icon: <FaStar className="vmv-carousel-icon-img" />,
    content: `Our core values are the foundation of the company they’ve been there from the start and really are the DNA of organization.Think Big, Challenge, Professionalism, Employee Satisfaction Commitment, Integrity, Innovation and improvement, Respect For Each Other And Share Your Knowledge.`,
  },
];

const CompanyVMVCarousel = () => {

  return (
    <>
      <section className="vmv-carousel-section">
        <div className="container mx-auto px-4 py-20 space-y-32">

          <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
            <div className="w-full md:w-1/2">
              <img
                src={Vision}
                alt="Vision"
                className="w-full h-[300px] object-cover rounded-2xl shadow-md vmc_img"
              />
            </div>

            <div className="w-full md:w-1/2 sec_con">
              <h2 className="vision-title text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow">
                🔹 Vision
              </h2><br />
              <p className="vision-content text-white leading-relaxed mb-4">
                Build India's first AI Company We are here to harness the power of artificial intelligence to solve real-world problems, enhance human potential, and build ethical, transparent, and impactful technologies that improve lives globally and make our mother earth more beautiful.
              </p><br />

            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-8 sec_com">
            <div className="w-full md:w-1/2 sec_con">
              <h2 className="mission-title text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow">
                🔹 Mission
              </h2><br />
              <p className="mission-content text-white leading-relaxed mb-4 pt-5">
                We want to develop the world's first <a href="/inai-verse" style={{ color: "skyblue"}} >virtual AI GPT model</ a> which can give answers in every aspect. We also want to create a future where artificial intelligence empowers humanity, fosters innovation and drives sustainability progress across every aspect of life.
              </p><br />

            </div>

            <div className="w-full md:w-1/2">
              <img
                src={Mission}
                alt="Mission"
                className="w-full h-[300px] object-cover rounded-2xl shadow-md vmc_img"
              />
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 sec_com">
            <div className="w-full md:w-1/2 ">
              <img
                src={CoreValue}
                alt="Core Value"
                className="w-full h-[300px] object-cover rounded-2xl shadow-md vmc_img"
              />
            </div>

            <div className="w-full md:w-1/2 sec_con">
              <h2 className="core-value-title text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white inline-block px-5 py-2 rounded-full shadow">
                🔹 Core Value
              </h2><br />
              <p className="core-value-content text-white leading-relaxed mb-4">
                Our core values are the foundation of the company they've been there from the start and really are the DNA of organization.
                Think Big, Challenge, Professionalism, Employee Satisfaction Commitment, Integrity, Innovation and improvement, Respect For Each Other And Share Your Knowledge.
              </p><br />

            </div>
          </div>
        </div>
      </section>
      <UpcomingProjectsSection />

    </>
  );
};

export default CompanyVMVCarousel; 