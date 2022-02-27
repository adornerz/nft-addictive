import React, { useRef, useState } from 'react';
// import sections
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Testimonial from '../components/sections/Testimonial';
import Gallery from '../components/sections/Gallery';
import Cta
 from '../components/sections/Cta';
const Home = () => {
  let galleryRef = useRef(null);
  return (
    <>
    <Header navPosition="right" className="reveal-from-bottom"  galleryRef={galleryRef} />
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Testimonial topDivider />
      <Gallery ref={galleryRef}/>
      <Cta />
    <Footer />
    </>
  );
}

export default Home;