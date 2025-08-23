import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Metodología Práctica",
      description: "Aprendizaje orientado al mundo real con simulaciones de situaciones aeroportuarias y de vuelo reales.",
      features: [
        "Simulaciones de emergencias",
        "Práctica con equipos reales",
        "Casos de estudio actuales"
      ]
    },
    {
      icon: "👨‍🏫",
      title: "Profesores Especializados",
      description: "Instructores con experiencia real en la industria aeronáutica y certificaciones internacionales.",
      features: [
        "Experiencia en aviación",
        "Certificaciones ICAO",
        "Metodología especializada"
      ]
    },
    {
      icon: "🌐",
      title: "Flexibilidad Total",
      description: "Clases online y presenciales adaptadas a tu horario y necesidades de aprendizaje.",
      features: [
        "Horarios flexibles",
        "Modalidad híbrida",
        "Acceso 24/7 a materiales"
      ]
    },
    {
      icon: "🏆",
      title: "Certificación Internacional",
      description: "Diplomas reconocidos por la industria aeronáutica mundial y organizaciones internacionales.",
      features: [
        "Estándares ICAO",
        "Reconocimiento global",
        "Validez internacional"
      ]
    },
    {
      icon: "💼",
      title: "Orientación Laboral",
      description: "Preparación específica para el mercado laboral con conexiones directas a empresas del sector.",
      features: [
        "Bolsa de trabajo",
        "Conexiones empresariales",
        "Seguimiento profesional"
      ]
    },
    {
      icon: "🚀",
      title: "Tecnología Avanzada",
      description: "Plataforma de aprendizaje moderna con realidad virtual y simuladores de última generación.",
      features: [
        "Simuladores VR",
        "Plataforma interactiva",
        "Tecnología inmersiva"
      ]
    }
  ];

  const testimonialHighlights = [
    {
      stat: "95%",
      label: "Satisfacción del estudiante",
      description: "de nuestros graduados recomiendan la academia"
    },
    {
      stat: "500+",
      label: "Estudiantes graduados",
      description: "trabajando en aeropuertos internacionales"
    },
    {
      stat: "24/7",
      label: "Soporte disponible",
      description: "acceso a tutores y materiales online"
    },
    {
      stat: "3",
      label: "Modalidades de estudio",
      description: "presencial, online y modalidad híbrida"
    }
  ];

  return (
    <section id="beneficios" className="benefits section">
      <div className="container">
        <div className="benefits-header" data-aos="fade-up">
          <h2 className="section-title">¿Por qué elegir At The Airport?</h2>
          <p className="section-subtitle">
            Descubre las ventajas que nos convierten en la mejor opción para tu formación 
            en inglés aeronáutico
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="benefit-icon-container">
                <span className="benefit-icon">{benefit.icon}</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
                <ul className="benefit-features">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-highlights" data-aos="fade-up" data-aos-delay="600">
          <div className="highlights-container">
            <div className="highlights-header">
              <h3>Resultados que hablan por sí solos</h3>
              <p>Nuestros números reflejan el compromiso con la excelencia educativa</p>
            </div>
            <div className="highlights-grid">
              {testimonialHighlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="highlight-item"
                  data-aos="zoom-in" 
                  data-aos-delay={700 + index * 100}
                >
                  <div className="highlight-stat">{highlight.stat}</div>
                  <div className="highlight-label">{highlight.label}</div>
                  <div className="highlight-description">{highlight.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="benefits-cta" data-aos="fade-up" data-aos-delay="900">
          <div className="cta-container">
            <div className="cta-text">
              <h3>¿Listo para comenzar tu carrera en aviación?</h3>
              <p>
                Únete a cientos de estudiantes que ya están volando alto con su inglés aeronáutico. 
                Tu futuro profesional despega aquí.
              </p>
            </div>
            <div className="cta-actions">
              <button 
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary cta-primary"
              >
                Inscríbete Ahora
              </button>
              <button 
                onClick={() => document.getElementById('programas').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary cta-secondary"
              >
                Ver Programas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;