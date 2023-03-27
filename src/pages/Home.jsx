
import React, { useEffect } from 'react';


import Navbar from '../components/Navbar';



function Home() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="Home">
            <Navbar />
        </div>
    );
}

export default Home;