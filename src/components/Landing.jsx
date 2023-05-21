import React from 'react';
import '../css/Landing.css';
import Lottie from "lottie-react";
import seoHomeVideo from '../videos/seo-landing-background.mp4'
import { FaSearchengin } from 'react-icons/fa';
import { FaCopy } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import seolaptop from '../lotties/seo-laptop-animation.json';

function Landing() {

    return (
        <section className="landing-section">
            <video autoPlay playsInline loop={true} muted id="home-video" className="landing-image">
                <source src={seoHomeVideo} type='video/mp4' />
            </video>
            <section className="intro-section">
                <div className="intro-first-div">
                    <h1 className="intro-h1"><span className="green-text">SEO/Webb</span> <br /> Solutions</h1>
                    <p className="intro-p">Reach your goals no matter if its SEO or webb development.</p>
                    <div className="intro-div">
                        <div className="intro-mini-content">
                            <FaSearchengin className="intro-mini-icon" />
                            <p className="intro-mini-p">seo<br />optimization</p>
                        </div>
                        <div className="intro-mini-content">
                            <FaCopy className="intro-mini-icon" />
                            <p className="intro-mini-p">seo <br /> keywords</p>
                        </div>
                        <div className="intro-mini-content">
                            <FaDev className="intro-mini-icon" />
                            <p className="intro-mini-p">Web<br /> development</p>
                        </div>
                    </div>

                    <div className="intro-btn-div">
                        <button className="intro-btn">READ MORE</button>
                        <button className="intro-btn-c">CONTACT</button>

                    </div>
                </div>
                <Lottie animationData={seolaptop} loop={true} className="intro-animation" />

            </section>

            <div class="custom-shape-divider-bottom-1680041389">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
        </section >

    );
}

export default Landing;