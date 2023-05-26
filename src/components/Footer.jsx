import React from 'react';
import '../css/Footer.css'


function Services() {




    function scrollTop() {
        window.scrollTo(0, 0)
    }

    return (
        <footer className="footer-section">

            <div className="f-links-container">
                <div className="f-l-div">
                    <h3 className="f-l-header">About us</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">Established since 2022. <br /> <br />"We Strive to Deliver Exceptional Service."</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">Contact</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis"> Response Guaranteed: <br /><br /> We'll Get Back to You Within 24 Hours (Excluding Holidays).</li>
                    </ul>
                </div>
                <div className="f-l-div">
                    <h3 className="f-l-header">Project Offers</h3>
                    <ul className="f-l-ul">
                        <li className="f-l-lis">Explore Our Exciting On The House Offers – Just Say Hello!</li>
                    </ul>
                </div>


            </div>

            <div className="f-bottom-container">
                <div className="f-b-wraper">
                    <p className="f-b-text">2023 Terms privacy</p>
                    <button className="f-b-btn" onClick={() => scrollTop()}>BACK TO TOP</button>
                </div>
            </div>
        </footer>
    );
}

export default Services;