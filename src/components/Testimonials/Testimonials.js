import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // SOLO 3 TESTIMONIOS
  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "Piloto Comercial",
      company: "Aerolíneas del Caribe",
      avatar: "👨‍✈️",
      rating: 5,
      text: "At The Airport me preparó perfectamente para mi trabajo como piloto. El inglés aeronáutico que aprendí aquí me dio la confianza necesaria para comunicarme efectivamente en vuelos internacionales.",
      program: "Captain Mode",
      hasVideo: true
    },
    {
      id: 2,
      name: "María González",
      role: "Tripulante de Cabina",
      company: "Sky Airlines",
      avatar: "👩‍✈️",
      rating: 5,
      text: "El programa In Flight me ayudó enormemente a conseguir mi trabajo actual. Los instructores son excelentes y el material está muy actualizado con los estándares internacionales.",
      program: "In Flight",
      hasVideo: true
    },
    {
      id: 3,
      name: "Diego Ramírez",
      role: "Controlador de Tráfico Aéreo",
      company: "Aerocivil Colombia",
      avatar: "👨‍💼",
      rating: 5,
      text: "Gracias a Ready for Take-Off desarrollé las bases sólidas que necesitaba. El enfoque práctico y la metodología de enseñanza son excepcionales. Totalmente recomendado.",
      program: "Ready for Take-Off",
      hasVideo: true
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Ana Sofía Herrera",
      role: "Piloto en Entrenamiento",
      description: "Conoce cómo Ana Sofía logró sus metas profesionales",
      emoji: "👩‍✈️",
      duration: "2:30"
    },
    {
      id: 2,
      name: "Roberto Silva",
      role: "Ingeniero Aeronáutico",
      description: "El testimonio de Roberto sobre su experiencia",
      emoji: "👨‍🔧",
      duration: "3:15"
    },
    {
      id: 3,
      name: "Camila Torres",
      role: "Despachadora de Vuelo",
      description: "Camila nos cuenta sobre su proceso de aprendizaje",
      emoji: "👩‍💼",
      duration: "2:45"
    }
  ];

  // Solo cambio manual al hacer clic
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPrograms = () => {
    const element = document.getElementById('programas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section id="testimonios" className="testimonials section">
      <div className="container">
        <div className="testimonials-header" data-aos="fade-up">
          <h2 className="section-title">Lo Que Dicen Nuestros Graduados</h2>
          <p className="section-subtitle">
            Historias reales de éxito de estudiantes que han transformado sus carreras 
            con nuestros programas de inglés aeronáutico
          </p>
        </div>

        <div className="testimonials-main">
          <div className="testimonials-carousel" data-aos="fade-up" data-aos-delay="200">
            <div className="carousel-container">
              {/* Mostrar solo el testimonio actual */}
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <span className="avatar-emoji">{testimonials[currentSlide].avatar}</span>
                    </div>
                    <div className="testimonial-info">
                      <h4 className="testimonial-name">{testimonials[currentSlide].name}</h4>
                      <p className="testimonial-role">{testimonials[currentSlide].role}</p>
                      <p className="testimonial-company">{testimonials[currentSlide].company}</p>
                      <div className="testimonial-rating">
                        {renderStars(testimonials[currentSlide].rating)}
                      </div>
                    </div>
                    {testimonials[currentSlide].hasVideo && (
                      <div className="video-indicator">
                        <span className="video-icon">🎥</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="testimonial-content">
                    <p className="testimonial-text">"{testimonials[currentSlide].text}"</p>
                    <div className="testimonial-program">
                      <span className="program-label">Programa:</span>
                      <span className="program-name">{testimonials[currentSlide].program}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="carousel-navigation">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="video-testimonials" data-aos="fade-up" data-aos-delay="400">
          <div className="video-section-header">
            <h3>Testimonios en Video</h3>
            <p>Escucha directamente de nuestros graduados sobre su experiencia</p>
          </div>
          
          <div className="video-grid">
            {videoTestimonials.map((video) => (
              <div key={video.id} className="video-card" data-aos="fade-up" data-aos-delay={video.id * 100}>
                <div className="video-thumbnail">
                  <span className="video-emoji">{video.emoji}</span>
                  <div className="video-play-icon">
                    <span>▶️</span>
                  </div>
                </div>
                <div className="video-info">
                  <h4>{video.name}</h4>
                  <p className="video-role">{video.role}</p>
                  <p className="video-description">{video.description}</p>
                  <button className="video-play-btn">
                    <span className="play-icon">▶️</span>
                    Ver Testimonio ({video.duration})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonials-cta" data-aos="fade-up" data-aos-delay="600">
          <div className="cta-content">
            <h3>¿Listo para Ser el Próximo Testimonio de Éxito?</h3>
            <p>
              Únete a nuestra comunidad de graduados exitosos. Comienza tu transformación 
              profesional hoy mismo con nuestros programas especializados en inglés aeronáutico.
            </p>
            <div className="cta-buttons">
              <button onClick={scrollToContact} className="cta-primary">
                Inscríbete Ahora
              </button>
              <button onClick={scrollToPrograms} className="cta-secondary">
                Ver Programas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;