import React from 'react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@aeronauticalenglish.es',
      subtitle: 'Respuesta dentro de las 24 horas'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      content: '+34 635 952 231',
      subtitle: 'Disponible 9 AM - 8 PM'
    }
  ];

  const socialLinks = [
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      name: 'Facebook', 
      url: 'https://www.facebook.com/profile.php?id=61580190696923'
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#E4405F">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      name: 'Instagram', 
      url: 'https://www.instagram.com/atairportenglishacademy?igsh=MXI3Y3lxbGc3cHRwdg%3D%3D&utm_source=qr' 
    },
    { 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ), 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@WendyCfb'
    }
  ];

  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <div className="contact-header" data-aos="fade-up">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">
            ¿Listo para despegar? Ponte en contacto con nosotros y comienza tu carrera 
            en la aviación internacional
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-section" data-aos="fade-right">
            <div className="form-container">
              <div className="form-header">
                <h3>Solicita Información</h3>
                <p>Completa nuestro formulario para conocerte mejor y ofrecerte la información más relevante para tu perfil</p>
              </div>

              <div className="form-cta-content">
                <div className="form-benefits">
                  <div className="benefit-point">
                    <span className="check-icon">✓</span>
                    <p>Información personalizada según tu nivel</p>
                  </div>
                  <div className="benefit-point">
                    <span className="check-icon">✓</span>
                    <p>Respuesta en menos de 24 horas</p>
                  </div>
                  <div className="benefit-point">
                    <span className="check-icon">✓</span>
                    <p>Consulta gratuita con nuestros expertos</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSePZZkEFkB8n6AkMx-hkI6ZBx8Vpw9kEj-kR_GsO714VnNlbg/viewform?usp=header', '_blank')}
                  className="btn-google-forms"
                >
                  <span className="btn-icon">📝</span>
                  Ir al Formulario
                </button>
              </div>
            </div>
          </div>

          <div className="contact-info-section" data-aos="fade-left" data-aos-delay="200">
            <div className="contact-info">
              <h3>Información de Contacto</h3>
              <p>Estamos aquí para ayudarte a alcanzar tus metas profesionales</p>

              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <span>{item.icon}</span>
                    </div>
                    <div className="contact-details">
                      <h4>{item.title}</h4>
                      <p className="contact-main">{item.content}</p>
                      <p className="contact-sub">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4>Síguenos</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={social.name}
                    >
                      <span>{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="office-hours">
                <h4>Horarios de Atención</h4>
                <div className="hours-grid">
                  <div className="hour-item">
                    <span className="day">Lunes - Viernes</span>
                    <span className="time">9:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta" data-aos="fade-up" data-aos-delay="400">
          <div className="cta-content">
            <h3>¿Prefieres hablar directamente?</h3>
            <p>Agenda una llamada gratuita de 15 minutos para resolver todas tus dudas</p>
            <button 
              className="btn-secondary schedule-call"
              onClick={() => window.open('https://calendly.com/wendycfb/llamada-at-the-airport-by-wendy-camargo', '_blank')}
            >
              <span className="btn-icon">📞</span>
              Agendar Llamada Gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;