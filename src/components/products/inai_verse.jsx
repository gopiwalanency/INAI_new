import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Smile,
  BookOpen,
  Info,
  ShieldCheck,
  Languages,
  Zap,
  MessageCircle,
  Mic,
  Headphones,
  Sparkles,
} from "lucide-react";
import "./inai_verse.css";
import inai_logo from "../../assets/inai_verse_logo.jpg";
import inai1 from "../../assets/Chart_boad_info_mode.jpg";
import inai2 from "../../assets/Friend_Mode.jpg";
import inai3 from "../../assets/Love_Mode.jpg";
import inai4 from "../../assets/Elder_Mode.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const heroImages = [inai1, inai2, inai3, inai4];

export default function InaiVerse() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 antialiased">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/30 via-violet-500/20 to-sky-400/20 blur-3xl" />
        <div className="absolute bottom-40 left-40 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-40 right-40 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-4 py-8">
        

        {/* APK Download Section */}
        <section id="downloads" className="apk-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-title mb-12">📲 Get the INAI App</h2>
            <p className="section-title-con mb-12">
              Download the official INAI APK and explore the future of AI
              companionship.
            </p>

            <div className="apk-grid">
              <div className="apk-card apk1">
                <div className="icon-box">
                  <img src={inai_logo} alt="logo" />
                </div>
                <h3>High-Performance Version</h3>
                <p>
                  Optimized for high-end devices with advanced system support.
                </p>
                <a
                  href="/inai-avatar.apk" // ✅ file must be in /public folder
                  className="apk-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download APK
                </a>
              </div>

              <div className="apk-card apk2">
                <div className="icon-box">
                  <img src={inai_logo} alt="logo" />
                </div>
                <h3>Universal Version</h3>
                <p>Runs smoothly on all devices, including low-spec phones.</p>
                <a
                  href="/inai.apk" // ✅ file must be in /public folder
                  className="apk-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download APK
                </a>
              </div>
            </div>

            <div className="visit-box">
              <h3>✨ Visit Our INAI Verse</h3>
              <p>
                Step into the world of INAI — connect, explore, and experience AI
                like never before.
              </p>
              <a
                href="https://inaiverse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit Website →
              </a>
            </div>
          </div>
        </section>

        

        {/* Hero Images */}
        <section className="hero-images">
          {[
            {
              src: heroImages[0],
              title: "INFO Mode",
              description: "Your 24/7 virtual friend",
            },
            {
              src: heroImages[1],
              title: "Friend Mode",
              description: "Learn and grow together",
            },
            {
              src: heroImages[2],
              title: "Love Mode",
              description: "Always here to cheer you up",
            },
            {
              src: heroImages[3],
              title: "Elder Mode",
              description: "Answers at your fingertips",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="image-container group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="image-card"
                loading="lazy"
              />
              <div className="image-overlay">
                <span className="image-title">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <h2 className="section-title mb-12">✨ Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <Mic className="feature-icon text-fuchsia-400" />
              <h3>Voice & Emotion Recognition</h3>
              <p>Understand and respond naturally to human emotions.</p>
            </div>

            <div className="feature-card">
              <Languages className="feature-icon text-sky-400" />
              <h3>Multilingual Support</h3>
              <p>Communicate across different languages worldwide.</p>
            </div>

            <div className="feature-card">
              <ShieldCheck className="feature-icon text-emerald-400" />
              <h3>Privacy First</h3>
              <p>Your conversations stay secure with full protection.</p>
            </div>

            <div className="feature-card">
              <Zap className="feature-icon text-yellow-400" />
              <h3>Real-Time Adaptability</h3>
              <p>Adapts instantly to your mood and conversation flow.</p>
            </div>

            <div className="feature-card">
              <MessageCircle className="feature-icon text-indigo-400" />
              <h3>Non-Judgmental Interaction</h3>
              <p>
                Express yourself freely with an empathetic, unbiased companion.
              </p>
            </div>

            <div className="feature-card">
              <Headphones className="feature-icon text-pink-400" />
              <h3>Emotion-Aware Guidance</h3>
              <p>Receive thoughtful advice tailored to your needs.</p>
            </div>
          </div>
        </section>

        {/* Modes Section */}
        <section id="modes" className="modes-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="section-title mb-12">🌐 Functionalities of INAI</h2>
            <p className="section-title-con mb-12">
              INAI is built to suit every mood with four unique modes:
            </p>

            <div className="modes-grid">
              <div className="mode-card love">
                <div className="icon-box">
                  <Heart className="w-8 h-8" />
                </div>
                <h3>Love Mode</h3>
                <p>
                  A caring partner who listens and understands. Perfect for when
                  you need emotional support and a listening ear.
                </p>
              </div>

              <div className="mode-card friend">
                <div className="icon-box">
                  <Smile className="w-8 h-8" />
                </div>
                <h3>Friend Mode</h3>
                <p>
                  A fun, non-judgmental companion for casual chats, jokes, and
                  light-hearted conversations.
                </p>
              </div>

              <div className="mode-card elder">
                <div className="icon-box">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3>Elder Mode</h3>
                <p>
                  Wise advice like an elder sibling, offering guidance and
                  perspective when you need it most.
                </p>
              </div>

              <div className="mode-card info">
                <div className="icon-box">
                  <Info className="w-8 h-8" />
                </div>
                <h3>Info Mode</h3>
                <p>
                  A smart assistant for study, research, and finding solutions
                  to your questions.
                </p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Purpose Section */}
        <section id="purpose" className="purpose-section">
          <div className="purpose-card">
            <h2 className="purpose-title">🌟 Purpose of INAI</h2>
            <p className="purpose-text">
              INAI is India’s first AI virtual model, designed to feel like a
              real human connection. It combines artificial intelligence with
              emotional intelligence to create conversations that feel real,
              empathetic, and supportive.
            </p>
            <p className="purpose-text">
              In today’s fast-paced world, people face stress, loneliness, and
              digital fatigue. INAI’s purpose is to bring comfort, guidance, and
              companionship through human-like interactions. Whether you need a
              friend, mentor, or assistant, INAI adapts to your mood and is
              always by your side.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
