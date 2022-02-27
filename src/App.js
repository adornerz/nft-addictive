import ScrollReveal from './utils/ScrollReveal';

import React, { useRef, useState } from 'react';
// import sections
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import FeaturesTiles from './components/sections/FeaturesTiles';
import Testimonial from './components/sections/Testimonial';
import Gallery from './components/sections/Gallery';
import Cta from './components/sections/Cta';

const Home = () => {
    const childRef = useRef();
    return (

        <ScrollReveal
            ref={childRef}
            children={() => (
                <>
                    <Header navPosition="right" />
                    <Hero className="illustration-section-01" />
                    <FeaturesTiles />
                    <Testimonial topDivider />
                    <Gallery />
                    <Cta />
                    <Footer />
                </>
            )} />
    );
}

export default Home;