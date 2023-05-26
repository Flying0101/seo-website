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

                    We believe in creating websites that are both visually appealing and search engine friendly. We understand that every business is unique. That's why we tailor our SEO strategies to your specific goals. Our experienced team stays up to date with the latest trends and best practices, ensuring your website stays ahead of the competition.  We'll also improve its speed and mobile-friendliness, ensuring it's a top contender in the online race.
                    </p>

                    <button className="global-button">EXPLORE</button>
                </div>

                <div className="s-div">
                    <Lottie animationData={WebDevelopment} loop={true} className="service-lottie" />

                    <h2 className="service-type">Web development</h2>

                    <p className="service-inf">
                    We don't do cookie-cutter websites, We craft digital solutions that align with your unique goals and requirements. Whether you need an e-commerce platform, a content management system, or a custom web application, we have the expertise to deliver solutions that drive results and elevate your online presence.
                    We're always one step ahead, harnessing the power of the newest frameworks to build modern and dynamic websites. One more thing.. slow-loading websites are a snooze-fest. That's why we turbocharge your site's performance. 
                    </p>
                    <button className="global-button">EXPLORE</button>

                </div>
            </div>


        </section >

    );
}

export default Services;