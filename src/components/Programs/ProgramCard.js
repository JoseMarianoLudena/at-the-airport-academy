import React from 'react';
import { useContentConfig } from '../../hooks/useConfig';

const ProgramCard = ({ program, showMonthlyPrice }) => {
  const contentConfig = useContentConfig();
  const programsConfig = contentConfig?.programs || {};
  const buttons = programsConfig.buttons || {};
  const whatsapp = programsConfig.whatsapp || {};
  const popularBadge = programsConfig.popularBadge || "¡El Más Popular!";

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = `${whatsapp.prefix || "Estoy interesado en aprender inglés aeronáutico. Programa: "}${program.title}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/34635952231/?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const currentPricing = showMonthlyPrice ? program.pricing.monthly : program.pricing.unique;

  return (
    <div className={`program-card ${program.color} ${program.popular ? 'popular' : ''}`}>
      {program.popular && (
        <div className="popular-badge">
          <span>{popularBadge}</span>
        </div>
      )}
      
      <div className="program-header">
        <div className="program-icon">
          {program.icon}
        </div>
        <div className="program-title-section">
          <h3 className="program-title">{program.title}</h3>
          <p className="program-subtitle">{program.subtitle}</p>
          <span className="program-level">{program.level}</span>
        </div>
      </div>

      <div className="program-details">
        <div className="detail-item">
          <span className="detail-label">Duración:</span>
          <span className="detail-value">{program.duration}</span>
        </div>
        
        <div className="pricing-section">
          <div className="pricing-header">
            <span className="pricing-label">{currentPricing.label}:</span>
            <span className="pricing-value">{currentPricing.price}</span>
          </div>
          <div className="pricing-detail">
            {showMonthlyPrice ? (
              <span className="pricing-total">{currentPricing.total}</span>
            ) : (
              <span className="pricing-savings">{currentPricing.savings}</span>
            )}
          </div>
        </div>
      </div>

      <div className="program-description">
        <p>{program.description}</p>
      </div>

      <div className="program-features">
        <h4>Incluye:</h4>
        <ul>
          {program.features.map((feature, index) => (
            <li key={index}>
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="program-footer">
        <button onClick={scrollToContact} className="btn-program">
          {buttons.enroll || "Inscribirse"}
        </button>
        <button 
          onClick={openWhatsApp}
          className="btn-info"
        >
          {buttons.info || "Más Información"}
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;