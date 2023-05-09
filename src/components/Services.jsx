import React from 'react';
import '../css/Services.css'
import Lottie from "lottie-react";
import SeoAnimation from '../lotties/seo-service-animation.json'
import WebDevelopment from '../lotties/web-development.json'


function Services() {

    return (
        <section className="service-section">

            <h1 className="s-h1"><span className='black-wrap'>OUR</span> SERVICES</h1>

            <div className="s-container">
                <div className="s-div">
                    <Lottie animationData={SeoAnimation} loop={true} className="service-lottie" />
                    <h2 className="service-type">SEO optimization</h2>
                    <p className="service-inf">

                        saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd asaddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd asaddsa asd as gfadsfasdf saddsa asd a
                    </p>

                    <button className="global-button">LEARN MORE</button>
                </div>

                <div className="s-div">
                    <Lottie animationData={WebDevelopment} loop={true} className="service-lottie" />

                    <h2 className="service-type">Web development</h2>

                    <p className="service-inf">

                        saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd asaddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd asaddsa asd as gfadsfasdf saddsa asd a
                    </p>
                    <button className="global-button">LEARN MORE</button>

                </div>
            </div>


        </section >

    );
}

export default Services;