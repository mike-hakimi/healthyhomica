import React from 'react';
import { Element } from 'react-scroll';
import Home from './Home';
import Services from './Services';
import GoogleMap from './GoogleMap';
import Contact from './Contact';
import Footer from './Footer';

function ScrollToTop() {
  return (
    <div>
      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="google-map">
        <GoogleMap />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default ScrollToTop;
