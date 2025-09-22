import React, { useState, useEffect } from 'react';
import { useSiteConfig, useContentConfig } from '../../hooks/useConfig';
import { getImageSrc } from '../../utils/configUtils';
import './Header.css';

const Header = () => {
  const siteConfig = useSiteConfig();
  const contentConfig = useContentConfig();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🔍 DEBUG
  console.log('🔍 DEBUG Header:');
  console.log('- contentConfig.navigation:', contentConfig?.navigation);

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

  // Items del menú - con fallback si no hay configuración
  const menuItems = contentConfig?.navigation?.menuItems || [
    { id: "inicio", label: "Inicio" },
    { id: "sobre-nosotros", label: "Sobre Nosotros" },
    { id: "programas", label: "Programas" },
    { id: "beneficios", label: "Beneficios" },
    { id: "testimonios", label: "Testimonios" },
    { id: "contacto", label: "Contacto" }
  ];

  // Mantener los valores actuales si no hay configuración cargada
  if (!siteConfig || !contentConfig) {
    console.log('⚠️ USANDO FALLBACK - No hay configuración');
    return (
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={process.env.PUBLIC_URL + "assets/images/logo.png"} alt="At The Airport" className="logo-img" />
              <div className="logo-text">
                <h2>AT THE AIRPORT</h2>
                <span>English Aviation Academy</span>
              </div>
            </div>

            <div className="nav-and-actions">
              <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
                <ul className="nav-list">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button onClick={() => scrollToSection(item.id)} className="nav-button">
                        {item.label}
                      </button>
                    </li>
                  ))}
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
  }

  console.log('✅ USANDO CONFIGURACIÓN');
  console.log('- Logo desde config:', siteConfig.assets.logo);
  console.log('- Menu items:', menuItems);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img 
              src={getImageSrc(siteConfig.assets.logo)} 
              alt={siteConfig.general.siteName} 
              className="logo-img" 
            />
            <div className="logo-text">
              <h2>{siteConfig.general.siteName}</h2>
              <span>{siteConfig.general.tagline}</span>
            </div>
          </div>

          <div className="nav-and-actions">
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <ul className="nav-list">
                {menuItems.map((item) => (                   
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)} className="nav-button">
                      {item.label}                            
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <button onClick={scrollToContact} className="cta-button">
                {contentConfig.hero?.buttons?.primary || 'Inscríbete Ahora'}
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