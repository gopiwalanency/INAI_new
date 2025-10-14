import ethicalAI from '../../assets/shild.png';
import modelDev from '../../assets/Setting.png';
import integration from '../../assets/layer.png';
import humanAI from '../../assets/person.png';

const whyFeatures = [
  {
    icon: ethicalAI,
    title: 'Ethical & Scalable AI',
    desc: 'Strong focus on ethical and scalable AI systems',
  },
  {
    icon: modelDev,
    title: 'Model Development',
    desc: 'Advanced model development using structured & scraped data',
  },
  {
    icon: integration,
    title: 'Seamless Integration',
    desc: 'Seamless product integration for business and social use',
  },
  {
    icon: humanAI,
    title: 'Human-Centric AI',
    desc: 'Making AI accessible, useful, and human-centric',
  },
];

const CoreFeatures = () => {
  return (
    <section className="core-features-section">
      <div className="container">
        <div className="features-content">
          <div className="hero-tag" style={{ marginBottom: '1.5rem' }}>
            ✨  WHY INAI WORLDS
          </div>
          <h2 className="main-heading">
          Why INAI Worlds -<span className="highlight-text1"> Best AI Company</span>
          </h2>
          <p className="features-description">
          As a leading best AI development company, INAI Worlds is dedicated to building <br />
              future-ready AI solutions that drive digital transformation. Our in-house innovations<br />
                deliver intelligent, scalable, and ethical solutions that empower businesses, industries,<br />
                   and communities to thrive in the AI-driven era.
          </p>
        </div>
        <div className="features-cards why-features-grid">
          {whyFeatures.map((feature, index) => (
            <div
              className="why-feature-card grid-hover-effect rounded-xl shadow-md p-4 bg-white"
              key={index}
            >
              <div className="feature-icon">
                <img src={feature.icon} alt={feature.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              </div>
              <h3 className="why-feature-title text-lg font-semibold mb-1">
                {feature.title}
              </h3>
              <p className="why-feature-desc text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures; 