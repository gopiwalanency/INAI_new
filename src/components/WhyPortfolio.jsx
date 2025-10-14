import React from 'react'
import "../components/WhyChooseINAISection.css";
import { CheckCircle } from "lucide-react";

const points = [
    "100% In-House Innovation",
    "Built with actual industry challenges in mind",
    "Interns and experts Built AI together",
    "Tested in Real-Time",
    "Continuously Evolving",
  ];

const WhyPortfolio = () => {
  return (
    <>
    <section className="why-choose-section port_sec">
          <div className="container">
            <h2 className="section-title">Why Our Portfolio Stands Out</h2>
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
    </>
  )
}

export default WhyPortfolio