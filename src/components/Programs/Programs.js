import React, { useState } from 'react';
import { useContentConfig } from '../../hooks/useConfig';
import ProgramCard from './ProgramCard';
import './Programs.css';

const Programs = () => {
  const contentConfig = useContentConfig();
  const programsConfig = contentConfig?.programs || {};
  const [showMonthlyPrice, setShowMonthlyPrice] = useState(false);

  const {
    title,
    subtitle,
    cta,
    pricingToggle,
    levels = []
  } = programsConfig;

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
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
          
          {/* SWITCH PARA CAMBIAR PRECIOS */}
          <div className="pricing-toggle" data-aos="fade-up" data-aos-delay="200">
            <span className={`toggle-label ${!showMonthlyPrice ? 'active' : ''}`}>
              {pricingToggle?.unique || "Pago Único"}
            </span>
            <div className="toggle-switch">
              <input
                type="checkbox"
                id="priceToggle"
                checked={showMonthlyPrice}
                onChange={() => setShowMonthlyPrice(!showMonthlyPrice)}
              />
              <label htmlFor="priceToggle" className="toggle-slider">
                <span className="toggle-button"></span>
              </label>
            </div>
            <span className={`toggle-label ${showMonthlyPrice ? 'active' : ''}`}>
              {pricingToggle?.monthly || "Pago Mensual"}
            </span>
          </div>
        </div>

        <div className="programs-grid">
          {levels.map((program, index) => (
            <div key={program.id} data-aos="fade-up" data-aos-delay={index * 200}>
              <ProgramCard 
                program={program} 
                showMonthlyPrice={showMonthlyPrice}
              />
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="programs-cta" data-aos="fade-up" data-aos-delay="800">
          <div className="cta-content">
            <h3>{cta?.title}</h3>
            <p>{cta?.description}</p>
            <button onClick={scrollToContact} className="btn-primary cta-button">
              {cta?.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;