import React from 'react';

const ProgramCard = ({ program }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`program-card ${program.color} ${program.popular ? 'popular' : ''}`}>
      {program.popular && (
        <div className="popular-badge">
          <span>Más Popular</span>
        </div>
      )}
      
      <div className="program-header">
        <div className="program-icon">
          {program.icon}
        </div>
        <div className="program-title-section">
          <h3 className="program-title">{program.title}</h3>
          <span className="program-level">{program.level}</span>
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

      <div className="program-details">
        <div className="detail-item">
          <span className="detail-label">Duración:</span>
          <span className="detail-value">{program.duration}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Precio:</span>
          <span className="detail-value">{program.price}</span>
        </div>
      </div>

      <div className="program-footer">
        <button onClick={scrollToContact} className="btn-program">
          Inscribirse
        </button>
        <button className="btn-info">
          Más Información
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;