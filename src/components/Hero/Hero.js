import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrograms = () => {
    const element = document.getElementById('programas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Tu inglés de vuelo</span>
              <span className="title-line highlight">comienza aquí</span>
            </h1>
            
            <p className="hero-description">
              Especialízate en inglés aeronáutico con la metodología más práctica y 
              orientada al mundo real. Prepárate para trabajar en aeropuertos, 
              ser piloto o formar parte de la tripulación.
            </p>
            
            <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Estudiantes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Éxito Laboral</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Niveles</span>
              </div>
            </div>
            
            <div className="hero-buttons" data-aos="fade-up" data-aos-delay="600">
              <button onClick={scrollToContact} className="btn-primary hero-cta">
                Inscríbete Ahora
              </button>
              <button onClick={scrollToPrograms} className="btn-secondary hero-secondary">
                Ver Programas
              </button>
            </div>
          </div>
          
          <div className="hero-visual" data-aos="fade-left" data-aos-delay="400">
            <div className="floating-elements">
              <div className="floating-plane">
                ✈️
              </div>
              <div className="floating-badge">
                🎓
              </div>
              <div className="floating-tower">
                🏢
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-scroll-indicator" data-aos="fade-up" data-aos-delay="800">
          <div className="scroll-arrow">
            <span>Descubre más</span>
            <div className="arrow-down"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;