import React from 'react';
import '../css/Services.css'
import { FaSearchDollar } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";




function Services() {


    return (
        <section className="service-section">

            <h1 className="s-h1">Our Services</h1>

            <div className="s-container">
                <div className="s-div">
                    <FaSearchDollar className="service-icon" />
                    <h2 className="service-type">SEO optimization</h2>
                    <p className="service-inf">

                        saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd asaddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd a saddsa asd as gfadsfasdf saddsa asd asaddsa asd as gfadsfasdf saddsa asd a
                    </p>

                    <button className="global-button">LEARN MORE</button>
                </div>

                <div className="s-div">
                    <FaLaptopCode className="service-icon" />
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