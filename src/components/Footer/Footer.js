import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform) => {
    const socialUrls = {
      facebook: 'https://facebook.com/attheairport',
      instagram: 'https://instagram.com/attheairport',
      twitter: 'https://twitter.com/attheairport',
      linkedin: 'https://linkedin.com/company/attheairport',
      youtube: 'https://youtube.com/@attheairport',
      whatsapp: 'https://wa.me/573012345678'
    };
    
    console.log(`Ir a ${platform}: ${socialUrls[platform]}`);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <img 
                  src="/images/logo.png" 
                  alt="At The Airport" 
                  className="footer-logo-img"
                />
                <div className="footer-logo-text">
                  <h3>AT THE AIRPORT</h3>
                  <span>English Aviation Academy</span>
                </div>
              </div>
              
              <p className="footer-description">
                Especialistas en inglés aeronáutico para la próxima generación de 
                profesionales de la aviación. Tu carrera en el cielo comienza en tierra.
              </p>
              
              <div className="footer-stats">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <p className="stat-label">Graduados</p>
                </div>
                <div className="stat-item">
                  <span className="stat-number">95%</span>
                  <p className="stat-label">Éxito Laboral</p>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <p className="stat-label">Programas</p>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><button onClick={() => scrollToSection('inicio')}>Inicio</button></li>
                <li><button onClick={() => scrollToSection('sobre-nosotros')}>Sobre Nosotros</button></li>
                <li><button onClick={() => scrollToSection('programas')}>Programas</button></li>
                <li><button onClick={() => scrollToSection('beneficios')}>Beneficios</button></li>
                <li><button onClick={() => scrollToSection('testimonios')}>Testimonios</button></li>
                <li><button onClick={() => scrollToSection('contacto')}>Contacto</button></li>
              </ul>
            </div>

            <div className="footer-programs">
              <h4>Programas</h4>
              <ul>
                <li><button onClick={() => scrollToSection('programas')}>Ready for Take-Off</button></li>
                <li><button onClick={() => scrollToSection('programas')}>In Flight</button></li>
                <li><button onClick={() => scrollToSection('programas')}>Captain Mode</button></li>
                <li><button onClick={() => scrollToSection('programas')}>Consulta Personalizada</button></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contacto</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📍</span>
                  </div>
                  <div className="contact-details">
                    <h5>Ubicación</h5>
                    <p>Bogotá, Colombia<br />Carrera 15 #93-47</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📞</span>
                  </div>
                  <div className="contact-details">
                    <h5>Teléfono</h5>
                    <p>+57 301 234 5678</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <span>✉️</span>
                  </div>
                  <div className="contact-details">
                    <h5>Email</h5>
                    <p>info@attheairport.com</p>
                  </div>
                </div>
              </div>

              <div className="footer-map">
                <div className="map-placeholder">
                  <div className="map-content">
                    <div className="map-icon">🗺️</div>
                    <h5>Nuestras Ubicaciones</h5>
                    <p>Presencia en las principales ciudades</p>
                  </div>
                  <div className="location-pins">
                    <div className="pin"></div>
                    <div className="pin"></div>
                    <div className="pin"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-social">
              <h4>Síguenos en redes sociales</h4>
              <p>Mantente al día con las últimas noticias y consejos</p>
              <div className="social-links">
                <button 
                  onClick={() => handleSocialClick('facebook')} 
                  className="social-link" 
                  aria-label="Facebook"
                >
                  <span className="social-icon">📘</span>
                  <span className="social-name">Facebook</span>
                </button>
                <button 
                  onClick={() => handleSocialClick('instagram')} 
                  className="social-link" 
                  aria-label="Instagram"
                >
                  <span className="social-icon">📷</span>
                  <span className="social-name">Instagram</span>
                </button>
                <button 
                  onClick={() => handleSocialClick('twitter')} 
                  className="social-link" 
                  aria-label="Twitter"
                >
                  <span className="social-icon">🐦</span>
                  <span className="social-name">Twitter</span>
                </button>
                <button 
                  onClick={() => handleSocialClick('linkedin')} 
                  className="social-link" 
                  aria-label="LinkedIn"
                >
                  <span className="social-icon">💼</span>
                  <span className="social-name">LinkedIn</span>
                </button>
                <button 
                  onClick={() => handleSocialClick('youtube')} 
                  className="social-link" 
                  aria-label="YouTube"
                >
                  <span className="social-icon">📺</span>
                  <span className="social-name">YouTube</span>
                </button>
                <button 
                  onClick={() => handleSocialClick('whatsapp')} 
                  className="social-link" 
                  aria-label="WhatsApp"
                >
                  <span className="social-icon">💬</span>
                  <span className="social-name">WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="footer-copyright">
              <p>
                © 2024 At The Airport English Aviation Academy<br />
                Todos los derechos reservados.<br />
                Hecho con ❤️ para futuros aviadores
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;