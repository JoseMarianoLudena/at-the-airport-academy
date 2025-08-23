import React from 'react';
import './About.css';
// Importar la imagen
import wendyPhoto from '../../assets/images/wendy-camargo.jpg';

const About = () => {
  return (
    <section id="sobre-nosotros" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2 className="section-title">Sobre la Academia</h2>
            <p className="section-subtitle">
              Especialistas en inglés aeronáutico para la próxima generación de profesionales de la aviación
            </p>
            
            <div className="about-description">
              <p>
                <strong>At The Airport - English Aviation Academy</strong> es una institución especializada 
                en la enseñanza de inglés aeronáutico, diseñada específicamente para estudiantes jóvenes 
                aspirantes a pilotos, tripulación de cabina y profesionales del sector aéreo.
              </p>
              
              <p>
                Nuestra metodología única combina el aprendizaje del idioma inglés con terminología 
                específica de la aviación, procedimientos aeroportuarios y comunicación efectiva en 
                entornos aeronáuticos reales.
              </p>
              
              <p>
                Dirigida por <strong>Wendy Camargo</strong>, profesional con amplia experiencia en el 
                sector de la aviación y la enseñanza del inglés, nuestra academia se enfoca en preparar 
                a los estudiantes para enfrentar con confianza los desafíos del mundo aeronáutico internacional.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-icon">
                  <span>🎯</span>
                </div>
                <div className="feature-content">
                  <h4>Enfoque Especializado</h4>
                  <p>Metodología específica para el sector aeronáutico</p>
                </div>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-icon">
                  <span>👨‍🏫</span>
                </div>
                <div className="feature-content">
                  <h4>Instructores Expertos</h4>
                  <p>Profesionales con experiencia en aviación e inglés</p>
                </div>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-icon">
                  <span>🌟</span>
                </div>
                <div className="feature-content">
                  <h4>Orientado a Jóvenes</h4>
                  <p>Programas diseñados para estudiantes aspirantes</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta" data-aos="fade-up" data-aos-delay="500">
              <button 
                onClick={() => document.getElementById('programas').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Conoce Nuestros Programas
              </button>
            </div>
          </div>
          
          <div className="about-visual" data-aos="fade-left" data-aos-delay="300">
            <div className="visual-container">
              <div className="visual-elements">
                <div className="element-card element-1">
                  <span className="element-icon">🎓</span>
                  <span className="element-text">Certificación Internacional</span>
                </div>
                
                <div className="element-card element-2">
                  <span className="element-icon">💼</span>
                  <span className="element-text">Preparación Laboral</span>
                </div>
                
                <div className="element-card element-3">
                  <span className="element-icon">🌍</span>
                  <span className="element-text">Estándares Globales</span>
                </div>
              </div>
              
              <div className="founder-photo">
                <div className="photo-container">
                  {/* Usar la imagen real */}
                  <div className="photo-image">
                    <img 
                      src={wendyPhoto} 
                      alt="Wendy Camargo - Fundadora" 
                      className="founder-img"
                    />
                  </div>
                  <div className="founder-info">
                    <h4>Wendy Camargo</h4>
                    <p>Fundadora & Directora</p>
                    <span>Especialista en Inglés Aeronáutico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;