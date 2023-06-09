import React from 'react';
import '../css/Contact.css'


import { FaEnvelope } from 'react-icons/fa';



function Contact() {


    return (
        <section className="contact-section">
            <div className="c-i-div">
                <h2 className="c-h2"><span className="black-wrap">Have Some</span> Question's<span className="black-wrap">?</span> </h2>
                <p className="c-i-p">Let us simplify your web development journey and unlock the true potential of your digital presence</p>
            </div>

            <div className="c-card-div">
                <div className="c-card">
                    <FaEnvelope className="c-icon"/>
                    <h3 className="c-c-h3">EMAIL US AT : Stephano@live.se</h3>
                    <p className="c-c-p"> Contact us today for a consultation, and let's embark on an exciting journey towards online success together. 😊 </p>
                </div>

            </div>


        </section>
    );
}

export default Contact;