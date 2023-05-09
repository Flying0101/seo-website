import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Landing';
import ShortServices from '../components/ShortServices';
import Services from '../components/Services';
import About from '../components/About';
import CustomPlan from '../components/CustomPlan';

function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="Home">
            <Navbar />
            <Landing />
            <ShortServices />
            <CustomPlan />
            <Services />
            <About />
        </div>
    );
}

export default Home;