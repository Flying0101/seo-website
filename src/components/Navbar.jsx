import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';
import { FaBars } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
 





function Navbar() {

    const [toggle, setToggle] = useState(false);

    function showMenu() {

        setToggle(!toggle);

    }
 

    return (
        <nav className="navigation-section">
            <div className="nav-max-width">
                <div className="nav-logo-con">
                    <Link to="/" id="router-links">
                        <p className="nav-logo"><span id="logo-span">SM</span>-Consulting</p>
                    </Link>
                </div>


                <ul className="nav-link-con">
                    <Link to="/contact" id="router-links">
                        <li className="nav-links" id="nav-contact">Om oss</li>
                    </Link>
                    <Link to="/packages" id="router-links">
                        <li className="nav-links" id="nav-contact">Tjänster</li>
                    </Link>
                    <Link to="/contact" id="router-links">
                        <li className="nav-links" id="nav-contact">Kontakt</li>
                    </Link>
                    <Link to="/contact" id="router-links">
                        <li className="nav-links" id="nav-contact">Blog</li>
                    </Link>
                </ul>

                <FaBars className={!toggle ? "responsive-menu" : "diss"} onClick={() => showMenu()} />
                <FaAlignRight className={toggle ? "responsive-menu" : "diss"} onClick={() => showMenu()} />

                <div className={toggle ? "modal-menu" : "diss"}>
                    <ul className="burger-menu">
                        <Link to="/packages" id="router-links">
                            <li className="b-nav-links">Om</li>
                        </Link>
                        <Link to="/contact" id="router-links">
                            <li className="b-nav-links">Tjänster</li>
                        </Link>

                        <li className="b-nav-links">Kontakt</li>
                    </ul>

                </div>
                </div>
        </nav >
    );
}

export default Navbar;