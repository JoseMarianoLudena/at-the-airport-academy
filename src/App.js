import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importar el ConfigProvider
import { ConfigProvider } from './context/ConfigContext';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Benefits from './components/Benefits/Benefits';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';
import BookAds from './components/Ads/BookAds';
import Gadgets from './components/Gadgets/FloatingButtons';
import Certification from './components/Certification/Certification';

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
    <ConfigProvider>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Programs />
        <Certification />
        <Benefits />
        <Testimonials />
        <Contact />
        <Footer />
        <CookieBanner />
        <BookAds />
        <Gadgets />
      </div>
    </ConfigProvider>
  );
}

export default App;