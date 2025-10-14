import React from "react";
import "../components/WhyChooseINAISection.css";
import { CheckCircle } from "lucide-react";

const points = [
  "In-House First – All modules are developed internally",
  "Intern-Led Innovation – Our interns build real features",
  "Live Projects, Not Simulations – Everything is real-world",
  "From Raw Data to Deployment – Full pipeline experience",
  "Transparent Process – Real-time AI Module tracking",
];

const WhyChooseINAISection = () => {
  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-title">Why Choose INAI Worlds?</h2>
        <div className="points-wrapper">
          {points.map((point, index) => (
            <div key={index} className="point-item">
              <CheckCircle className="check-icon" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseINAISection;
