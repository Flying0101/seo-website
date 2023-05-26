import React from 'react';
import '../css/CustomPlan.css'


import { FaBuromobelexperte } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";


function CustomPlan() {

    return (
        <section className="custom-plan-section">

            <section className="ss-section">
                <div className="ss-inf-div">
                    <span>
                        <FaBuromobelexperte className="intro-icons" />
                        <p>Intro <br /> Meeting</p>
                    </span>
                </div>


                <div className="ss-inf-div">
                    <span>
                        <FaChartBar className="intro-icons" />
                        <p>Reports</p>
                    </span>
                </div>

                <div className="ss-inf-div">

                    <span>
                        <FaChartLine className="intro-icons" />
                        <p>Results</p>
                    </span>
                </div>
            </section >
            <div className="custom-div">
                <p className="custom-p"> DON'T FORGET, WE ALSO MAKE <br /> CUSTOM PLANS FOR YOU</p>
                <button className="blue-button" id="custom-btn">
                    Contact Us
                </button>
            </div>
        </section>
    );


}
export default CustomPlan;