import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToContact = () => {
    scrollToSection('contacto');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="At The Airport" className="logo-img" />
            <div className="logo-text">
              <h2>AT THE AIRPORT</h2>
              <span>English Aviation Academy</span>
            </div>
          </div>

          <div className="nav-and-actions">
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                <li><button onClick={() => scrollToSection('inicio')} className="nav-button">Inicio</button></li>
                <li><button onClick={() => scrollToSection('sobre-nosotros')} className="nav-button">Sobre Nosotros</button></li>
                <li><button onClick={() => scrollToSection('programas')} className="nav-button">Programas</button></li>
                <li><button onClick={() => scrollToSection('beneficios')} className="nav-button">Beneficios</button></li>
                <li><button onClick={() => scrollToSection('testimonios')} className="nav-button">Testimonios</button></li>
                <li><button onClick={() => scrollToSection('contacto')} className="nav-button">Contacto</button></li>
              </ul>
            </nav>

            <div className="header-actions">
              <button onClick={scrollToContact} className="cta-button">
                Inscríbete Ahora
              </button>
            </div>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;