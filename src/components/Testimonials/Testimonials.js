import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [videoDurations, setVideoDurations] = useState({});
  const [videoThumbnails, setVideoThumbnails] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0); // ✅ ESTADO PARA EL CARRUSEL
  const videoRefs = useRef({});

  const formatDuration = useCallback((seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, []);

  const generateVideoThumbnail = useCallback((videoId, videoSrc) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    video.src = videoSrc;
    video.currentTime = 1;
    video.crossOrigin = 'anonymous';
    
    video.onloadedmetadata = () => {
      const duration = formatDuration(video.duration);
      setVideoDurations(prev => ({
        ...prev,
        [videoId]: duration
      }));
      console.log(`Video ${videoId} duration: ${duration}`);
    };
    
    video.onseeked = () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.8);
      setVideoThumbnails(prev => ({
        ...prev,
        [videoId]: thumbnailUrl
      }));
      console.log(`Thumbnail generated for video ${videoId}`);
    };
    
    video.onerror = () => {
      console.error(`Error loading video ${videoId}`);
      setVideoDurations(prev => ({
        ...prev,
        [videoId]: "Error"
      }));
    };
  }, [formatDuration]);

  const videoTestimonials = [
    {
      id: 1,
      name: "Erika",
      role: "Estudiante",
      description: "Conoce cómo Erika logró sus metas profesionales",
      emoji: "👩‍✈️",
      duration: "0:00",
      videoSrc: "/assets/images/Erika.mp4"
    },
    {
      id: 2,
      name: "Hector",
      role: "Estudiante",
      description: "El testimonio de Hector sobre su experiencia y su proceso de aprendizaje",
      emoji: "👨‍🔧",
      duration: "0:00",
      videoSrc: "/assets/images/Hector.mp4"
    },
    {
      id: 3,
      name: "Jordan",
      role: "Estudiante",
      description: "Jordan nos cuenta sobre su proceso de aprendizaje",
      emoji: "👩‍💼",
      duration: "0:00",
      videoSrc: "/assets/images/Jordan.mp4"
    },
    {
      id: 4,
      name: "Estudiante",
      role: "Técnico de Mantenimiento",
      description: "Mariana comparte su experiencia de transformación profesional",
      emoji: "👨‍🔧",
      duration: "0:00",
      videoSrc: "/assets/images/Mariana.mp4"
    }
  ];

  // ✅ FUNCIONES DEL CARRUSEL
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % videoTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  // ✅ OBTENER LOS 3 TESTIMONIOS VISIBLES
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % videoTestimonials.length;
      visible.push(videoTestimonials[index]);
    }
    return visible;
  };

  useEffect(() => {
    videoTestimonials.forEach(video => {
      generateVideoThumbnail(video.id, video.videoSrc);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generateVideoThumbnail]);

  const handlePlayVideo = (videoId) => {
    console.log('Playing video:', videoId);
    setPlayingVideo(playingVideo === videoId ? null : videoId);
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

  return (
    <section id="testimonios" className="testimonials section">
      <div className="container">
        <div className="video-testimonials" data-aos="fade-up">
          <div className="video-section-header">
            <h2 className="section-title">Historias reales de cambios profesional</h2>
            <p className="section-subtitle">
              Escucha directamente de nuestros profesionales sobre su experiencia
            </p>
          </div>
          
          {/* ✅ CARRUSEL CON FLECHAS */}
          <div className="video-carousel-container">
            <button 
              className="carousel-arrow carousel-arrow-left" 
              onClick={prevSlide}
              aria-label="Anterior testimonio"
            >
              <span>‹</span>
            </button>
            
            <div className="video-grid">
              {getVisibleTestimonials().map((video, index) => {
                const displayDuration = videoDurations[video.id] || video.duration;
                const thumbnail = videoThumbnails[video.id];
                
                return (
                  <div key={video.id} className="video-card" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div 
                      className="video-thumbnail"
                      onClick={() => handlePlayVideo(video.id)}
                    >
                      {playingVideo === video.id ? (
                        <video 
                          ref={el => videoRefs.current[video.id] = el}
                          controls 
                          autoPlay
                          className="testimonial-video"
                          onEnded={() => setPlayingVideo(null)}
                          onError={(e) => {
                            console.error('Error loading video:', video.videoSrc);
                            console.error('Full error:', e);
                          }}
                          onLoadStart={() => console.log('Loading video:', video.videoSrc)}
                        >
                          <source src={video.videoSrc} type="video/mp4" />
                          Tu navegador no soporta este video.
                        </video>
                      ) : (
                        <div className="video-preview">
                          {thumbnail ? (
                            <img 
                              src={thumbnail} 
                              alt={`Vista previa de ${video.name}`}
                              className="video-thumbnail-image"
                            />
                          ) : (
                            <span className="video-emoji">{video.emoji}</span>
                          )}
                          <div 
                            className="video-play-icon"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayVideo(video.id);
                            }}
                          >
                            <span>▶️</span>
                          </div>
                          <div className="video-overlay"></div>
                        </div>
                      )}
                    </div>
                    <div className="video-info">
                      <h4>{video.name}</h4>
                      <p className="video-role">{video.role}</p>
                      <p className="video-description">{video.description}</p>
                      <button 
                        className="video-play-btn"
                        onClick={() => handlePlayVideo(video.id)}
                      >
                        <span className="play-icon">
                          {playingVideo === video.id ? "⏹️" : "▶️"}
                        </span>
                        {playingVideo === video.id 
                          ? "Detener" 
                          : `Ver Testimonio (${displayDuration})`}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button 
              className="carousel-arrow carousel-arrow-right" 
              onClick={nextSlide}
              aria-label="Siguiente testimonio"
            >
              <span>›</span>
            </button>
          </div>

          {/* ✅ INDICADORES DEL CARRUSEL */}
          <div className="carousel-indicators">
            {videoTestimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
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