import React from "react";
import "./products/inai_verse.css";
import inai_logo from "../assets/inai_verse_logo.jpg";



export default function Inai() {
    return (
        <>
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

            <section id="downloads" className="apk-section">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    

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

        </>
    );
}
