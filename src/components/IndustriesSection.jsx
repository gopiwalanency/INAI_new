import React from "react";
import "../components/IndustriesSection.css";
import {
  Banknote,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Factory,
  Building2,
  FileText,
  Clapperboard,
  Megaphone,
  Truck,
} from "lucide-react";

const industries = [
  { icon: <Banknote className="text-purple-300 w-7 h-7" />, title: "Finance" },
  { icon: <ShoppingCart className="text-purple-300 w-7 h-7" />, title: "Ecommerce" },
  { icon: <HeartPulse className="text-purple-300 w-7 h-7" />, title: "Healthcare" },
  { icon: <GraduationCap className="text-purple-300 w-7 h-7" />, title: "Education" },
  { icon: <Building2 className="text-purple-300 w-7 h-7" />, title: "Retail" },
  { icon: <Factory className="text-purple-300 w-7 h-7" />, title: "Manufacturing" },
  { icon: <FileText className="text-purple-300 w-7 h-7" />, title: "Content" },
  { icon: <Clapperboard className="text-purple-300 w-7 h-7" />, title: "Entertainment" },
  { icon: <Megaphone className="text-purple-300 w-7 h-7" />, title: "Marketing" },
  { icon: <Truck className="text-purple-300 w-7 h-7" />, title: "Logistics" },
];

const IndustriesSection = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <h2 className="industries-title">Industries We Cover</h2>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-box">
              <div className="industry-icon-title">
                {industry.icon}
                <h4 className="industry-title">{industry.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
