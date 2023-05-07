
import React, { useEffect } from 'react';


import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import ShortServices from '../components/ShortServices';
import Services from '../components/Services';

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="Home">
            <Navbar />
            <Landing />
            <ShortServices />
            <Services />
        </div>
    );
}

export default Home;