
import React, { useEffect } from 'react';


import Navbar from '../components/Navbar';
import Landing from '../components/Landing';



function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="Home">
            <Navbar />
            <Landing />
        </div>
    );
}

export default Home;