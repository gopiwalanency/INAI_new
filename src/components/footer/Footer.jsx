import { Link } from 'react-router-dom';
import './Footer.css';
import INAILogo from '../../assets/INAI.png';
// Import social media icons
import instagramIcon from '../../assets/footer/instagram.png';
import youtubeIcon from '../../assets/footer/Youtube.png';
import pinterestIcon from '../../assets/footer/pinterest.png';
import threadsIcon from '../../assets/footer/threads.png';
import linkedinIcon from '../../assets/footer/Linkedin.png';
import twitterIcon from '../../assets/footer/x.png';

const Footer = () => {
  return (
    <>
      <footer className="footer-container-main">

        <div className="footer-content-main">
          <div className="footer-grid">
            {/* Column 1: INAI WORLS Info */}
            <div className="footer-column">
              <img src={INAILogo} alt="INAI WORLDS Logo" className="footer-logo" />
              {/* <h3 className="footer-heading">INAI WORLDS</h3> */}
              <p className="footer-text">
                <strong>Head Office :</strong><br />
                520, MBH - 1, Sarthana Jakat Naka, <br />
                 Surat, Gujarat 395006
              </p>
              <p className="footer-text">
                <strong>Branch 1 :</strong><br />
                C2,1114, IT park , Mota varachha
                surat, Gujarat 394101
              </p>
              <p className="footer-text">
                <strong>Email:</strong> info@inaiworlds.com
              </p>
              {/* <p className="footer-text">
                <strong>Phone:</strong> +91 70164 88265
              </p> */}
            </div>

            {/* Column 2: Useful Links */}
            <div className="footer-column">
              <h3 className="footer-heading">Useful Link</h3>
              <ul className="footer-links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About US</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-column">
              <h3 className="footer-heading">Our Process</h3>
              <ul className="footer-links-list">
                <li><Link to="/data-collection">Data Collection</Link></li>
                <li><Link to="/data-structuring">Data Structuring</Link></li>
                <li><Link to="/model-training">Model Training</Link></li>
              </ul>
            </div>

            {/* Column 4: Follow Us */}
            <div className="footer-column">
              <h3 className="footer-heading">Follow Us</h3>
              <p className="footer-text">
                We're glad you're here! If you'd like to stay connected and get the latest updates, feel free to follow us on these platforms.

              </p>
              <div className="footer-social-buttons">
                <a href="https://www.instagram.com/inai_worlds/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
                  <img src={instagramIcon} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/company/inai-worlds-pvt-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
                  <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://x.com/Inai_Worlds" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="footer-social-btn">
                  <img src={twitterIcon} alt="X (Twitter)" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@INAIWorldsPVTLTD" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer-social-btn">
                  <img src={youtubeIcon} alt="YouTube" className="social-icon" />
                </a>
                <a href="https://www.threads.com/@inai_worlds" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="footer-social-btn">
                  <img src={threadsIcon} alt="Threads" className="social-icon" />
                </a>
                <a href="https://pin.it/3XwGP5W6I" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="footer-social-btn">
                  <img src={pinterestIcon} alt="Pinterest" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </footer>
      <div className="footer-bottom">
      <div className="footer-copyright">
          <p> All Rights Reserved © {new Date().getFullYear()} by INAI Worlds Pvt. Ltd.</p>
        </div>
        <div className="footer-legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="divider">|</span>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </>
  );
};

export default Footer; 