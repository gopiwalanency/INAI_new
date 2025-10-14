import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SEO from './components/SEO';
import Home from "./components/HomePage/Home";
import About from './components/aboutpage/About.jsx';
import Services from './pages/Services';
import Portfolio from './components/portfoliopage/Portfolio';
import Team from './components/teampage/Team';
import Contact from './components/contactpage/Contact';
import Blog from './components/blogsection/Blog';
// import WebScrapping from './pages/Web-scraping';
import DataCollection from './pages/Data_Collection.jsx'
import Data_manipulation from './pages/Data_manipulation';
import Model_training from './pages/Model_training';
import INAIWorldsBestAICompany1 from './pages/INAIWorldsBestAICompany1';
import INAIWorldsBestAICompany2 from './pages/INAIWorldsBestAICompany2';
import INAIWorldsBestAICompany3 from './pages/INAIWorldsBestAICompany3';
import What_is_AI from './pages/What_is_AI';
import What_is_ML from './pages/What_is_ML';
import What_is_web_scraping from './pages/What_is_web_scraping';
import Real_life_AI_ML_use from './pages/Real_life_AI_ML_use';
import Blog5 from './components/blogsection/Blog5';
import Inai_life from './pages/Inai_life';
import Influwket from './pages/Influwket';
import Veedket from './pages/Veedket';
import Offiket from './pages/Offiket';
import './App.css';
import Terms_and_conditions from './pages/Policy/Terms_and_conditions';
import Privacy_policy from './pages/Policy/Privacy_policy';
import NotFound from './components/NotFound';
import AIMLInternshipInSurat from './pages/AIMLInternshipInSurat';
import Blog6 from './components/blogsection/Blog6';
import Blog7 from './components/blogsection/Blog7';
import Blog8 from './components/blogsection/Blog8';
import Blog9 from './components/blogsection/Blog9';
import Blog10 from './components/blogsection/Blog10';
import Blog11 from './components/blogsection/Blog11';
import Blog12 from './components/blogsection/Blog12';
import Token from './pages/Token';
import InaiVerse from './components/products/inai_verse';
import Career from './components/careerpage/Career';
// Import meta configuration
import { metaConfig } from './config/metaConfig';

// Wrapper component that includes SEO for each page
const PageWrapper = ({ children, pageKey }) => {
  const meta = metaConfig[pageKey] || metaConfig.home;
  return (
    <>
      <SEO 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
      />
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={
              <PageWrapper pageKey="home">
                <Home />
              </PageWrapper>
            } />
            <Route path="/about" element={
              <PageWrapper pageKey="about">
                <About />
              </PageWrapper>
            } />
            <Route path="/services" element={
              <PageWrapper pageKey="services">
                <Services />
              </PageWrapper>
            } />
            <Route path="/portfolio" element={
              <PageWrapper pageKey="portfolio">
                <Portfolio />
              </PageWrapper>
            } />
            <Route path="/blog" element={
              <PageWrapper pageKey="blog">
                <Blog />
              </PageWrapper>
            } />
            <Route path="/team" element={
              <PageWrapper pageKey="team">
                <Team />
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper pageKey="contact">
                <Contact />
              </PageWrapper>
            } />
            {/* Redirect old URL to new URL */}
            <Route path="/services/web-scraping" element={<Navigate to="/services/data-collection" replace />} />
            <Route path="/services/data-manipulation" element={<Navigate to="/services/data-structuring" replace />} />
            
            <Route path="/services/data-collection" element={
              <PageWrapper pageKey="dataCollection">
                <DataCollection />
              </PageWrapper>
            } />
            <Route path="/services/data-structuring" element={
              <PageWrapper pageKey="dataManipulation">
                <Data_manipulation />
              </PageWrapper>
            } />
            <Route path="/services/model-training" element={
              <PageWrapper pageKey="modelTraining">
                <Model_training />
              </PageWrapper>
            } />
            <Route path="/portfolio/inai-life" element={
              <PageWrapper pageKey="portfolio">
                <Inai_life />
              </PageWrapper>
            } />
            <Route path="/portfolio/veedket" element={
              <PageWrapper pageKey="portfolio">
                <Veedket />
              </PageWrapper>
            } />
            <Route path="/portfolio/offiket" element={
              <PageWrapper pageKey="portfolio">
                <Offiket />
              </PageWrapper>
            } />
            <Route path="/portfolio/influwket" element={
              <PageWrapper pageKey="portfolio">
                <Influwket />
              </PageWrapper>
            } />
            <Route path="/blog/what-is-artificial-intelligence" element={
              <PageWrapper pageKey="blog">
                <What_is_AI />
              </PageWrapper>
            } />
            <Route path="/blog/what-is-machine-learning" element={
              <PageWrapper pageKey="blog">
                <What_is_ML />
              </PageWrapper>
            } />
            <Route path="/blog/what-is-web-scraping" element={
              <PageWrapper pageKey="blog">
                <What_is_web_scraping />
              </PageWrapper>
            } />
            <Route path="/blog/ai-ml-use-in-real-life-change-the-world" element={
              <PageWrapper pageKey="blog">
                <Real_life_AI_ML_use />
              </PageWrapper>
            } />
            <Route path="/blog/how-ai-ml-internship-change-career" element={
              <PageWrapper pageKey="blog">
                <Blog5 />
              </PageWrapper>
            } />
            <Route path="/blog/inai-worlds-top-ai-company" element={
              <PageWrapper pageKey="blog">
                <Blog6 />
              </PageWrapper>
            } />
            <Route path="/blog/ai-ml-internship-benefits-product-based-ai-company" element={
              <PageWrapper pageKey="blog">
                <Blog7 />
              </PageWrapper>
            } />
            <Route path="/blog/ai-indian-top-industries" element={
              <PageWrapper pageKey="blog">
                <Blog8 />
              </PageWrapper>
            } />
            <Route path="/blog/ai-companies-transforming-businesses" element={
              <PageWrapper pageKey="blog">
                <Blog9 />
              </PageWrapper>
            } />
            <Route path="/blog/top-python-libraries-web-scraping" element={
              <PageWrapper pageKey="blog">
                <Blog10 />
              </PageWrapper>
            } />
            <Route path="/blog/data-manipulation-powers-ai-model-training" element={
              <PageWrapper pageKey="blog">
                <Blog11 />
              </PageWrapper>
            } />
            <Route path="/blog/ai-ml-internship-matter-more-than-certification" element={
              <PageWrapper pageKey="blog">
                <Blog12 />
              </PageWrapper>
            } />
            <Route path="/privacy-policy" element={
              <PageWrapper pageKey="privacy">
                <Privacy_policy />
              </PageWrapper>
            } />
            <Route path="/terms-conditions" element={
              <PageWrapper pageKey="terms">
                <Terms_and_conditions />
              </PageWrapper>
            } />
            <Route path="/best-ai-ml-internship-surat" element={
              <PageWrapper pageKey="internship">
                <AIMLInternshipInSurat />
              </PageWrapper>
            } />
            <Route path="/best-ai-company-india" element={
              <PageWrapper pageKey="company">
                <INAIWorldsBestAICompany1 />
              </PageWrapper>
            } />
            <Route path="/ai-company-surat" element={
              <PageWrapper pageKey="company">
                <INAIWorldsBestAICompany2 />
              </PageWrapper>
            } />
            <Route path="/ai-company-ahmedabad" element={
              <PageWrapper pageKey="company">
                <INAIWorldsBestAICompany3 />
              </PageWrapper>
            } />
            <Route path="/tokenizer" element={
              <PageWrapper pageKey="company">
                <Token />
              </PageWrapper>
            } />
            <Route path="/inai-verse" element={
              <PageWrapper pageKey="company">
                <InaiVerse />
              </PageWrapper>
            } />
            <Route path="/career" element={
              <PageWrapper pageKey="company">
                <Career />
              </PageWrapper>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      <ScrollToTopButton />
    </div>
  </Router>
  );
}

export default App;
