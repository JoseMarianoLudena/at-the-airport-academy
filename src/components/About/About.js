import React from 'react';
import { useSiteConfig, useContentConfig } from '../../hooks/useConfig';
import { getImageSrc } from '../../utils/configUtils';
import './About.css';

const About = () => {
  const siteConfig = useSiteConfig();
  const contentConfig = useContentConfig();

  const about = contentConfig?.about || {};
  const founder = about.founder || {};
  const features = about.features || [];
  const aboutImage = siteConfig?.assets?.aboutImage;

  return (
    <section id="sobre-nosotros" className="about section">
      <div className="container">
        {/* PRIMERA FILA: TEXTO + IMAGEN */}
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h2 className="section-title">{about.title}</h2>
            <p className="section-subtitle">{about.subtitle}</p>
            <div className="about-description">
              {Array.isArray(about.description)
                ? about.description.map((parr, idx) => (
                    <p key={idx} dangerouslySetInnerHTML={{ __html: parr }} />
                  ))
                : <p>{about.description}</p>
              }
            </div>
          </div>
          {/* IMAGEN Y DATOS FUNDADORA */}
          <div className="about-visual" data-aos="fade-left" data-aos-delay="300">
            <div className="founder-photo">
              <div className="photo-container">
                <div className="photo-image">
                  <img
                    src={getImageSrc(aboutImage, '/assets/images/wendy-camargo.jpg')}
                    alt={`${founder.name} - Fundadora`}
                    className="founder-img"
                  />
                </div>
                <div className="founder-info">
                  <h4>{founder.name}</h4>
                  <p>{founder.title}</p>
                  <span>{founder.experience}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FEATURES */}
        <div className="about-features-section" data-aos="fade-up" data-aos-delay="500">
          <div className="about-features">
            {features.map((feature, idx) => (
              <div className="feature-item" key={idx} data-aos="fade-up" data-aos-delay={200 + idx * 100}>
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* BOTÓN CENTRADO */}
          <div className="about-cta-centered" data-aos="fade-up" data-aos-delay="600">
            <button
              onClick={() => document.getElementById('programas').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              {about.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;