import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    level: '',
    preferredSchedule: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    { value: 'ready-for-takeoff', label: 'Ready for Take-Off (Básico)' },
    { value: 'in-flight', label: 'In Flight (Intermedio)' },
    { value: 'captain-mode', label: 'Captain Mode (Avanzado)' },
    { value: 'consulta-general', label: 'Consulta General' }
  ];

  const levels = [
    { value: 'principiante', label: 'Principiante' },
    { value: 'basico', label: 'Básico' },
    { value: 'intermedio', label: 'Intermedio' },
    { value: 'avanzado', label: 'Avanzado' },
    { value: 'no-seguro', label: 'No estoy seguro' }
  ];

  const schedules = [
    { value: 'manana', label: 'Mañana (8:00 AM - 12:00 PM)' },
    { value: 'tarde', label: 'Tarde (2:00 PM - 6:00 PM)' },
    { value: 'noche', label: 'Noche (6:00 PM - 10:00 PM)' },
    { value: 'fin-semana', label: 'Fines de Semana' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Simulación de envío de formulario
    try {
      // Aquí iría la lógica real de envío
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        level: '',
        preferredSchedule: '',
        message: ''
      });
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@attheairport.edu',
      subtitle: 'Respuesta en 24 horas'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      content: '+57 300 123 4567',
      subtitle: 'Disponible 9 AM - 8 PM'
    },
    {
      icon: '📞',
      title: 'Teléfono',
      content: '+57 (1) 234 5678',
      subtitle: 'Lunes a Viernes'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      content: 'Bogotá, Colombia',
      subtitle: 'Clases presenciales y online'
    }
  ];

  const socialLinks = [
    { icon: '📘', name: 'Facebook', url: '#' },
    { icon: '📷', name: 'Instagram', url: '#' },
    { icon: '🐦', name: 'Twitter', url: '#' },
    { icon: '💼', name: 'LinkedIn', url: '#' },
    { icon: '📺', name: 'YouTube', url: '#' }
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
                <p>Completa el formulario y te contactaremos en menos de 24 horas</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Nombre *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Apellido *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Teléfono *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="program">Programa de Interés *</label>
                    <select
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un programa</option>
                      {programs.map(program => (
                        <option key={program.value} value={program.value}>
                          {program.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="level">Nivel de Inglés Actual</label>
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona tu nivel</option>
                      {levels.map(level => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredSchedule">Horario Preferido</label>
                  <select
                    id="preferredSchedule"
                    name="preferredSchedule"
                    value={formData.preferredSchedule}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona un horario</option>
                    {schedules.map(schedule => (
                      <option key={schedule.value} value={schedule.value}>
                        {schedule.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Cuéntanos más sobre tus objetivos y expectativas..."
                  />
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="btn-content">
                      <span className="spinner"></span>
                      Enviando...
                    </span>
                  ) : (
                    <span className="btn-content">
                      <span className="btn-icon">🚀</span>
                      Enviar Solicitud
                    </span>
                  )}
                </button>

                {formStatus === 'success' && (
                  <div className="form-message success">
                    <span className="message-icon">✅</span>
                    <div>
                      <strong>¡Solicitud enviada exitosamente!</strong>
                      <p>Te contactaremos en menos de 24 horas.</p>
                    </div>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="form-message error">
                    <span className="message-icon">❌</span>
                    <div>
                      <strong>Error al enviar la solicitud</strong>
                      <p>Por favor, intenta nuevamente o contáctanos directamente.</p>
                    </div>
                  </div>
                )}
              </form>
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
                    <span className="time">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span className="day">Sábados</span>
                    <span className="time">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span className="day">Domingos</span>
                    <span className="time">Cerrado</span>
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
            <button className="btn-secondary schedule-call">
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