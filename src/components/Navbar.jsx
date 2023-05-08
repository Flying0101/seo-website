import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/Navbar.css';
import { FaBars } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";






function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [toggle, setToggle] = useState(false);

    function showMenu() {

        setToggle(!toggle);

    }



    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className={scrollPosition > 0 ? 'navigation-section-solid' : 'navigation-section-transparent'} id="navigation">
            <div className="nav-max-width">
                <div className="nav-logo-con">
                    <Link to="/" id="router-links">
                        <p className="nav-logo"><span id="logo-span">S</span>.M</p>
                    </Link>
                </div>


                <ul className="nav-link-con">
                    <Link to="/contact" id="router-links">
                        <li className="nav-links" id="nav-contact">About</li>
                    </Link>
                    <Link to="/packages" id="router-links">
                        <li className="nav-links" id="nav-contact">Services</li>
                    </Link>
                    <Link to="/contact" id="router-links">
                        <li className="nav-links" id="nav-contact">Contact</li>
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
                            <li className="b-nav-links">About</li>
                        </Link>
                        <Link to="/contact" id="router-links">
                            <li className="b-nav-links">Services</li>
                        </Link>

                        <li className="b-nav-links">Contact</li>
                    </ul>

                </div>
            </div>
        </nav >
    );
}

export default Navbar;