import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Education from '../components/education/Education';
import Certifications from '../components/certifications/Certifications';
import Contact from '../components/contact/Contact';
import ScrollToTop from '../components/common/ScrollToTop';

export const Home = () => {
  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
