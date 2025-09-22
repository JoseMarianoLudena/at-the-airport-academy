import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: "🎯",
      title: "Experiencia Práctica y Real",
      description: "<strong>Lo que te ofrezco:</strong> Un aprendizaje enfocado en situaciones reales del día a día en un aeropuerto. Desde el primer día, aplicarás tus conocimientos para sentirte seguro en cualquier interacción.<br><strong>Beneficios Clave:</strong>",
      features: [
        "Escenarios cotidianos: Prepara tu comunicación para cualquier situación común en el aeropuerto.",
        "Casos prácticos: Aprende resolviendo desafíos que enfrentarás en tu trabajo.",
        "Rol-playing dinámico: Practica conversaciones esenciales conmigo, ganando confianza."
      ]
    },
    {
      icon: "👨‍🏫",
      title: "Profesional Especializado",
      description: "<strong>Lo que te ofrezco:</strong> Aprenderás directamente de un profesional que vive la aviación. No solo domino el inglés, sino que tengo experiencia real en la industria, garantizando una enseñanza relevante y actualizada.<br><strong>Beneficios Clave:</strong>",
      features: [
        "Experiencia comprobada: Recibe guía de alguien que conoce el sector desde dentro.",
        "Metodología efectiva: Un método de enseñanza probado, diseñado para tu éxito.",
        "Actualización constante: Contenido relevante y adaptado a las últimas tendencias aeroportuarias."
      ]
    },
    {
      icon: "🌐",
      title: "Flexibilidad Total",
      description: "<strong>Lo que te ofrezco:</strong> Tus tiempos importan, por eso las clases online se adaptan a tu ritmo. Con opciones en horarios diurnos o nocturnos, podrás avanzar sin interrupciones y diseñar tu propio camino hacia el dominio del inglés aeronáutico.<br><strong>Beneficios Clave:</strong>",
      features: [
        "Clases online: Aprende desde donde estés, con toda la comodidad.",
        "Horarios adaptables: Opciones diurnas o nocturnas según tu disponibilidad.",
        "Material exclusivo: Recursos especializados del sector aeronáutico, diseñados para tu progreso."
      ]
    },
    {
      icon: "🏆",
      title: "Certificado de Finalización",
      description: "<strong>Lo que te ofrezco:</strong> Al completar el curso, recibirás un certificado de finalización que reconoce tu esfuerzo y dedicación en el aprendizaje del inglés aeronáutico.",
      features: [
        "Reconocimiento de tu progreso: Un logro tangible para tu trayectoria.",
        "Motivación adicional: Celebra tus avances con un diploma personal.",
        "Valor curricular: Un respaldo para tu perfil académico y profesional."
      ]
    },
    {
      icon: "💼",
      title: "Orientación Laboral",
      description: "<strong>Lo que te ofrezco:</strong> No solo aprenderás inglés, también te prepararé para dar el siguiente paso en tu carrera. Obtendrás herramientas y estrategias para destacar en el competitivo mercado aeroportuario.<br><strong>Beneficios Clave:</strong>",
      features: [
        "Asesoramiento profesional: Guía personalizada para tu búsqueda de empleo.",
        "Preparación de entrevistas: Simulaciones y consejos para aumentar tu confianza.",
        "Seguimiento y apoyo: Te acompaño hasta que alcances tu meta laboral."
      ]
    },
    {
      icon: "🚀",
      title: "Aprendizaje Personalizado Innovador",
      description: "<strong>Lo que te ofrezco:</strong> Una experiencia educativa enfocada en ti, con clases reducidas de 2 a 3 alumnos. Avanza a tu propio ritmo, mejora tu nivel de inglés y gana confianza al comunicarte en un ambiente cómodo y motivador.<br><strong>Beneficios Clave:</strong>",
      features: [
        "Clases reducidas: Atención personalizada en grupos pequeños (2 o 3 alumnos por clase).",
        "Adaptabilidad a tu nivel: Contenido ajustado a tu conocimiento previo.",
        "Comodidad al hablar: Pierde el miedo al inglés y gana seguridad paso a paso."
      ]
    }
  ];

  const testimonialHighlights = [
    {
      stat: "95%",
      label: "Satisfacción de nuestros alumnos",
      description: "El 95% de nuestros graduados nos recomiendan"
    },
    {
      stat: "Carreras que despegan",
      label: "Éxito en cada vuelo",
      description: "Preparamos a nuestros estudiantes para el éxito laboral en el aeropuerto"
    },
    {
      stat: "24/7",
      label: "Soporte disponible",
      description: "acceso a tutores y materiales online"
    },
    {
      stat: "Tu próximo paso",
      label: "Guía personal",
      description: "Te acompaño en cada etapa de tu formación, hasta que alcances tu meta"
    }
  ];

  return (
    <section id="beneficios" className="benefits section">
      <div className="container">
        <div className="benefits-header" data-aos="fade-up">
          <h2 className="section-title">¿Por qué elegir At The Airport?</h2>
          <p className="section-subtitle">
            Descubre las ventajas que nos convierten en la mejor opción para tu formación 
            en inglés aeronáutico
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card"
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="benefit-icon-container">
                <span className="benefit-icon">{benefit.icon}</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p 
                  className="benefit-description" 
                  dangerouslySetInnerHTML={{ __html: benefit.description }}
                ></p>
                <ul className="benefit-features">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="benefits-highlights" data-aos="fade-up" data-aos-delay="600">
          <div className="highlights-container">
            <div className="highlights-header">
              <h3>Resultados que hablan por sí solos</h3>
              <p>Nuestros números reflejan el compromiso con la excelencia educativa</p>
            </div>
            <div className="highlights-grid">
              {testimonialHighlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="highlight-item"
                  data-aos="zoom-in" 
                  data-aos-delay={700 + index * 100}
                >
                  <div className="highlight-stat">{highlight.stat}</div>
                  <div className="highlight-label">{highlight.label}</div>
                  <div className="highlight-description">{highlight.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="benefits-cta" data-aos="fade-up" data-aos-delay="900">
          <div className="cta-container">
            <div className="cta-text">
              <h3>¿Listo para comenzar tu carrera en ingles de aviación?</h3>
              <p>
                Se un profesional que vuela alto con su inglés aeronáutico. 
                Tu futuro profesional despega aquí.
              </p>
            </div>
            <div className="cta-actions">
              <button 
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary cta-primary"
              >
                Inscríbete Ahora
              </button>
              <button 
                onClick={() => document.getElementById('programas').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary cta-secondary"
              >
                Ver Programas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;