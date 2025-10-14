import { Link } from 'react-router-dom';
import './Hero.css';


const Hero = ({ tagline, title, subtitle, buttons, backgroundImage, isShort }) => {
  const heroStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundColor: 'transparent' }
    : {};
  const sectionClassName = isShort ? 'hero-section hero-section-short' : 'hero-section';

  return (
    <>
      <section className={sectionClassName} style={heroStyle}>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            {tagline && (
              <div className="hero-tag">
                <span role="img" aria-label="sparkles">✨</span> {tagline}
              </div>
            )}
            <h1 className="hero-main-title">{title}</h1>
            <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
            <div className="hero-buttons">
              {buttons && buttons.map((button, index) => (
                <Link key={index} to={button.link} className={`btn ${button.className}`}>
                  {button.text}
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 