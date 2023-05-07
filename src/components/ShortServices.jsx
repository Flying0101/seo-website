import React from 'react';
import '../css/ShortServices.css'

import { FaBuromobelexperte } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";




function ShortServices() {


    return (
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

    );
}

export default ShortServices;