import React from 'react';
import './Certification.css';
import certificationImage from '../../assets/images/certificado-ejemplo.png';

const Certification = () => {
  return (
    <section id="certificacion" className="certification section">
      <div className="container">
        {/* ✅ TÍTULO CENTRADO ARRIBA DE TODO */}
        <div className="certification-header">
          <div className="section-badge">
            <span className="badge-icon">🏆</span>
            <span>Diploma</span>
          </div>
        </div>

        {/* ✅ CONTENIDO EN DOS COLUMNAS */}
        <div className="certification-content">
          <div className="certification-text" data-aos="fade-right">
            <h2 className="section-title">
                Obtén tu <span className="highlight">Certificado</span> 
                <br/>en Inglés Aeronáutico
            </h2>
            <p className="section-subtitle">
              Al completar cualquiera de nuestros programas, recibirás una certificación 
              que validará tus competencias en inglés aeronáutico y te abrirá 
              las puertas del sector aeroportuario internacional.
            </p>
          </div>

          <div className="certification-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="certificate-container">
              <div className="certificate-frame">
                <img 
                  src={certificationImage} 
                  alt="Certificado Oficial de Inglés Aeronáutico - At The Airport Academy"
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <div className="certificate-badge">
                    <span className="badge-text">Certificado</span>
                  </div>
                </div>
              </div>
              
              <div className="certificate-info">
                <div className="info-item">
                  <span className="info-label">Duración:</span>
                  <span className="info-value">3-12 meses</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Modalidad:</span>
                  <span className="info-value">100% Online</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Entrega:</span>
                  <span className="info-value">Digital + Físico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ BOTÓN CENTRADO ABAJO DE TODO */}
        <div className="certification-cta">
          <button 
            className="btn-primary"
            onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSePZZkEFkB8n6AkMx-hkI6ZBx8Vpw9kEj-kR_GsO714VnNlbg/viewform?usp=header', '_blank')}
          >
            <span className="btn-icon">🎓</span>
            Comenzar Mi Certificación
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certification;