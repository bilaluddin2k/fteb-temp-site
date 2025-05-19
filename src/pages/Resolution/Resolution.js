import React from 'react';
import HeroSection from '../../components/Hero/HeroSection';
import About from '../../components/About/About';
import Features from '../../components/Features/Features';
import CaseStudies from '../../components/CaseStudies/CaseStudies';
import Testimonials from '../../components/Testimonials/Testimonials';
import CounterSection from '../../components/CounterSection/CounterSection';
import Contact from '../../components/Contact/Contact';
import ServicesSection from '../../components/ServicesSection/ServicesSection';

const Resolution = () => {
  return (
    <div className="resolution-page">
      <HeroSection />
      <About />
      <CaseStudies />
      <Features />
<ServicesSection/>
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Resolution;
