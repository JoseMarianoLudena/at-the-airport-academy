import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Benefits from './components/Benefits/Benefits';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './styles/variables.css';
import './styles/globals.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;