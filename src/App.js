import React from 'react';
// import sections
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FeaturesTiles from './components/sections/FeaturesTiles';
import Testimonial from './components/sections/Testimonial';
import Gallery from './components/sections/Gallery';
import Cta from './components/sections/Cta';
import { Fade } from 'react-reveal';

const Home = () => {
    return (
        <>
            <Fade>
                <Header navPosition="right" />
                <Hero className="illustration-section-01" />
                <FeaturesTiles />
                <Testimonial topDivider />
                <Gallery />
                <Cta />
                <Footer />
            </Fade>
        </>
    );
}

export default Home;