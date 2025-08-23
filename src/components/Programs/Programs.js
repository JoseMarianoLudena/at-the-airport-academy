import React from 'react';
import ProgramCard from './ProgramCard';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Ready for Take-Off",
      level: "Nivel Básico",
      icon: "🛫",
      description: "Frases y vocabulario esenciales para tu primer contacto en el aeropuerto.",
      features: [
        "Vocabulario básico aeroportuario",
        "Frases esenciales de check-in",
        "Comunicación básica con pasajeros",
        "Procedimientos de seguridad básicos",
        "Terminología de equipaje y documentos"
      ],
      duration: "3 meses",
      price: "Desde $150/mes",
      color: "basic"
    },
    {
      id: 2,
      title: "In Flight",
      level: "Nivel Intermedio",
      icon: "✈️",
      description: "Comunicación efectiva con pasajeros y manejo de situaciones comunes.",
      features: [
        "Comunicación avanzada en cabina",
        "Manejo de emergencias básicas",
        "Servicio al cliente especializado",
        "Procedimientos de vuelo estándar",
        "Interacción con tripulación internacional"
      ],
      duration: "4 meses",
      price: "Desde $200/mes",
      color: "intermediate",
      popular: true
    },
    {
      id: 3,
      title: "Captain Mode",
      level: "Nivel Avanzado",
      icon: "👨‍✈️",
      description: "Perfecciona tu inglés aeronáutico y prepárate para trabajos reales en aeropuertos.",
      features: [
        "Inglés aeronáutico profesional",
        "Comunicaciones con torre de control",
        "Liderazgo y toma de decisiones",
        "Procedimientos de emergencia avanzados",
        "Certificación internacional ICAO"
      ],
      duration: "6 meses",
      price: "Desde $300/mes",
      color: "advanced"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="programas" className="programs section">
      <div className="container">
        <div className="programs-header" data-aos="fade-up">
          <h2 className="section-title">Nuestros Programas</h2>
          <p className="section-subtitle">
            Tres niveles progresivos diseñados para llevarte desde principiante hasta profesional 
            certificado en inglés aeronáutico
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={program.id} data-aos="fade-up" data-aos-delay={index * 200}>
              <ProgramCard program={program} />
            </div>
          ))}
        </div>

        <div className="programs-benefits" data-aos="fade-up" data-aos-delay="600">
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">📚</div>
              <h4>Material Especializado</h4>
              <p>Recursos didácticos diseñados específicamente para el sector aeronáutico</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h4>Metodología Práctica</h4>
              <p>Simulaciones reales de situaciones aeroportuarias y de vuelo</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🌐</div>
              <h4>Modalidad Flexible</h4>
              <p>Clases presenciales y online adaptadas a tu horario</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🏆</div>
              <h4>Certificación Internacional</h4>
              <p>Diplomas reconocidos por la industria aeronáutica mundial</p>
            </div>
          </div>
        </div>

        <div className="programs-cta" data-aos="fade-up" data-aos-delay="800">
          <div className="cta-content">
            <h3>¿Listo para despegar?</h3>
            <p>Comienza tu carrera en aviación con el programa que mejor se adapte a tu nivel</p>
            <button onClick={scrollToContact} className="btn-primary cta-button">
              Solicitar Información
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;