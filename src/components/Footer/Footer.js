import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showTerms, setShowTerms] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTermsClick = () => {
    setShowTerms(true);
  };

  const handleSocialClick = (platform) => {
    const socialUrls = {
      facebook: 'https://www.facebook.com/profile.php?id=61580190696923',
      instagram: 'https://www.instagram.com/atairportenglishacademy?igsh=MXI3Y3lxbGc3cHRwdg%3D%3D&utm_source=qr',
      twitter: 'https://twitter.com/attheairport',
      linkedin: 'https://linkedin.com/company/attheairport',
      youtube: 'https://www.youtube.com/@WendyCfb',
      whatsapp: 'https://wa.me/34635952231/?text=Estoy+interesado+en+aprender+inglés+aeronáutico'
    };
    
    window.open(socialUrls[platform], '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <img 
                 src={process.env.PUBLIC_URL + "assets/images/logo.png"}
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
                  <span className="stat-number">100+</span>
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
                <li><button onClick={handleTermsClick}>Términos y Condiciones</button></li>
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
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <div className="contact-icon">
                    <span>📞</span>
                  </div>
                  <div className="footer-contact-details">
                    <h5>Teléfono</h5>
                    <p>+34 635 952 231</p>
                  </div>
                </div>
                
                <div className="footer-contact-item">
                  <div className="contact-icon">
                    <span>✉️</span>
                  </div>
                  <div className="footer-contact-details">
                    <h5>Email</h5>
                    <p>info@aeronauticalenglish.es</p>
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
                  <span className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </span>
                  <span className="social-name">Facebook</span>
                </button>

                <button 
                  onClick={() => handleSocialClick('instagram')} 
                  className="social-link" 
                  aria-label="Instagram"
                >
                  <span className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </span>
                  <span className="social-name">Instagram</span>
                </button>

                <button 
                  onClick={() => handleSocialClick('youtube')} 
                  className="social-link" 
                  aria-label="YouTube"
                >
                  <span className="social-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </span>
                  <span className="social-name">YouTube</span>
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

      {/* ✅ POPUP DE TÉRMINOS Y CONDICIONES */}
      {showTerms && (
        <div className="terms-popup-overlay" onClick={() => setShowTerms(false)}>
          <div className="terms-popup" onClick={(e) => e.stopPropagation()}>
            <div className="terms-header">
              <h3>Términos y Condiciones</h3>
              <button 
                className="close-btn"
                onClick={() => setShowTerms(false)}
              >
                ×
              </button>
            </div>
            <div className="terms-content">
              <h4>1. INFORMACIÓN GENERAL</h4>
              <p>El presente documento regula el acceso y uso de los cursos de inglés aeronáutico ofrecidos a través de clases en línea (Zoom) y de los materiales complementarios (libros y recursos), puestos a disposición por At The Airport - English Aviation Academy.</p>
              <p>At The Airport - English Aviation Academy es una institución educativa especializada en la enseñanza del inglés aeronáutico. Estos términos y condiciones regulan el uso de nuestros servicios educativos.</p>
              
              <h4>2. SERVICIOS OFRECIDOS</h4>
              <p>Ofrecemos programas de inglés aeronáutico en tres niveles: Tu Carrera Despega con Nosotros (Básico), Inglés para Profesionales del Aeropuerto (Intermedio) y Expertos que te Llevan al Éxito (Avanzado). Todos nuestros programas están diseñados para profesionales de la aviación.</p>
              <p>Los contenidos de las clases, materiales y recursos pertenecen a At The Airport - English Aviation Academy. Queda prohibida su reproducción, distribución o comercialización sin autorización previa por escrito.</p>
              
              <h4>3. INSCRIPCIONES Y PAGOS</h4>
              <p>El pago de las clases debe realizarse en los plazos establecidos. Las cancelaciones o reprogramaciones deberán notificarse con al menos 24 horas de anticipación. En caso contrario, la clase se considerará dictada sin derecho a reembolso.No se realizan reembolsos una vez iniciado el programa.</p>
              
              <h4>4. COMPROMISO DEL ESTUDIANTE</h4>
              <p>El progreso y aprendizaje del idioma dependen en gran medida del compromiso personal del estudiante, incluyendo la práctica autónoma y el estudio individual fuera de clase. La asistencia a las sesiones en línea no garantiza, por sí sola, el dominio del inglés aeronáutico ni la obtención de resultados académicos o profesionales específicos.</p>
              <p>At The Airport - English Aviation Academy no se hace responsable por:

                <br/>La falta de estudio independiente por parte del alumno.

                <br/>El uso indebido de la información transmitida en clase o en los materiales.

                <br/>La no consecución de objetivos personales, exámenes, certificaciones o empleos relacionados con el inglés aeronáutico.

                <br/>Problemas técnicos derivados de la conexión a internet, dispositivos del alumno o plataformas de terceros (Zoom, Amazon, etc.).</p>
              <p>Los libros y materiales complementarios disponibles en Amazon u otras plataformas son opcionales y su adquisición corre por cuenta del alumno.</p>
              
              <h4>5. CERTIFICACIÓN</h4>
              <p>Al completar satisfactoriamente el programa, el estudiante recibirá un certificado de finalización que avala su competencia en inglés aeronáutico según el nivel cursado.</p>
              
              <h4>6. PRIVACIDAD Y PROTECCIÓN DE DATOS</h4>
              <p>Nos comprometemos a proteger la información personal de nuestros estudiantes y a utilizarla únicamente para fines educativos y de comunicación relacionados con nuestros servicios.</p>
              <p>El uso de los servicios implica la aceptación plena de los presentes Términos y Condiciones.</p>
              
              <h4>7. MODIFICACIONES</h4>
              <p>At The Airport Academy se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán comunicados a través de nuestros canales oficiales.</p>
              
              <h4>8. CONTACTO</h4>
              <p>Para cualquier consulta sobre estos términos y condiciones, puedes contactarnos en: info@aeronauticalenglish.es o al +34 635 952 231.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;