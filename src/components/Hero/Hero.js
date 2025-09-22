import React from 'react';
import { useSiteConfig, useContentConfig } from '../../hooks/useConfig';
import { getImageSrc, buildWhatsAppUrl } from '../../utils/configUtils';
import './Hero.css';
import heroMainImage from '../../assets/images/hero-main-image.jpg';

const Hero = () => {
  const siteConfig = useSiteConfig();
  const contentConfig = useContentConfig();

  // 🔍 DEBUG
  console.log('🔍 DEBUG Hero:');
  console.log('- siteConfig:', !!siteConfig);
  console.log('- contentConfig:', !!contentConfig);
  console.log('- hero config:', contentConfig?.hero);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    if (siteConfig?.contact?.whatsapp) {
      const url = buildWhatsAppUrl(
        siteConfig.contact.whatsapp.number,
        siteConfig.contact.whatsapp.defaultMessage
      );
      window.open(url, '_blank');
    } else {
      // Fallback con valores hardcodeados
      const message = "¡Hola! Estoy interesado en aprender inglés aeronáutico con At The Airport Academy. ¿Podrían darme más información?";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/34635952231/?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  // Fallback - EXACTAMENTE igual a tu diseño actual
  if (!siteConfig || !contentConfig?.hero) {
    console.log('⚠️ USANDO FALLBACK Hero');
    return (
      <section id="inicio" className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-text" data-aos="fade-right">
              <h1 className="hero-title">
                <span className="title-line">Tu inglés de vuelo</span>
                <span className="title-line highlight">comienza aquí</span>
              </h1>
              
              <p className="hero-description">
                Especialízate en inglés aeronáutico con la metodología más práctica y 
                orientada al mundo real. Prepárate para trabajar en el aeropuerto,
                con confianza y fluidez.
              </p>
              
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">+100</span>
                  <span className="stat-label">Profesionales formados</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <span className="stat-label">Tasa de empleabilidad</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Programas certificados</span>
                </div>
              </div>
              
              <div className="hero-buttons">
                <div className="hero-buttons-row">
                  <button 
                    onClick={() => scrollToSection('contacto')}
                    className="hero-cta"
                  >
                    Inscríbete Ahora
                  </button>
                  <button 
                    onClick={() => scrollToSection('programas')}
                    className="hero-secondary"
                  >
                    Ver Programas
                  </button>
                </div>
                <button 
                  onClick={openWhatsApp}
                  className="hero-whatsapp"
                >
                  <svg className="whatsapp-icon" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Mas Información
                </button>
              </div>
            </div>
            
            <div className="hero-visual" data-aos="fade-left" data-aos-delay="300">
              <div className="hero-image-container">
                <img 
                  src={heroMainImage}
                  alt="Profesionales de aviación en el aeropuerto" 
                  className="hero-main-image"
                />
                <div className="hero-image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow" onClick={() => scrollToSection('sobre-nosotros')}>
            <span>Descubre más</span>
            <div className="arrow-down"></div>
          </div>
        </div>
      </section>
    );
  }

  // ✅ USANDO CONFIGURACIÓN - MISMO DISEÑO
  const { hero } = contentConfig;
  console.log('✅ USANDO CONFIGURACIÓN HERO');
  console.log('- Título línea 1:', hero.title.line1);
  console.log('- Título línea 2:', hero.title.line2);
  console.log('- Stats:', hero.stats);

  return (
    <section id="inicio" className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right">
            <h1 className="hero-title">
              <span className="title-line">{hero.title.line1}</span>
              <span className="title-line highlight">{hero.title.line2}</span>
            </h1>
            
            <p className="hero-description">
              {hero.description}
            </p>
            
            <div className="hero-stats">
              {hero.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="hero-buttons">
              <div className="hero-buttons-row">
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="hero-cta"
                >
                  {hero.buttons.primary}
                </button>
                <button 
                  onClick={() => scrollToSection('programas')}
                  className="hero-secondary"
                >
                  {hero.buttons.secondary}
                </button>
              </div>
              <button 
                onClick={openWhatsApp}
                className="hero-whatsapp"
              >
                <svg className="whatsapp-icon" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {hero.buttons.whatsapp}
              </button>
            </div>
          </div>
          
          <div className="hero-visual" data-aos="fade-left" data-aos-delay="300">
            <div className="hero-image-container">
              <img 
                src={getImageSrc(siteConfig?.assets?.heroImage, heroMainImage)}
                alt="Profesionales de aviación en el aeropuerto" 
                className="hero-main-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow" onClick={() => scrollToSection('sobre-nosotros')}>
          <span>Descubre más</span>
          <div className="arrow-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;