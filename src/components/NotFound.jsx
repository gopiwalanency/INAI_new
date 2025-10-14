import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-subtitle">Page Not Found</p>
      <p className="not-found-text">Sorry, the page you are looking for doesn't exist.</p>
      <button className="not-found-button" onClick={handleGoHome}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
