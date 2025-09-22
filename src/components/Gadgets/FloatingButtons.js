import React, { useState } from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showTooltips, setShowTooltips] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [currentStep, setCurrentStep] = useState('main');
  const [chatHistory, setChatHistory] = useState([]);

  const openWhatsApp = () => {
    window.open('https://wa.me/34635952231/?text=Estoy+interesado+en+aprender+inglés+aeronáutico', '_blank');
  };

  const openChatbot = () => {
    setShowChatbot(true);
    if (chatHistory.length === 0) {
      setChatHistory([{
        type: 'bot',
        message: '¡Hola! Soy AeroBot, el asistente virtual de AT THE AIRPORT English Aviation Academy. ¿En qué te puedo ayudar?',
        timestamp: new Date()
      }]);
    }
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  const processMessageWithLinks = (message) => {
    // Reemplazar enlaces de formulario
    message = message.replace(
        /\[Ir al formulario\]\([^)]+\)/g,
        '<a href="https://docs.google.com/forms/d/e/1FAIpQLSePZZkEFkB8n6AkMx-hkI6ZBx8Vpw9kEj-kR_GsO714VnNlbg/viewform" target="_blank" rel="noopener noreferrer" class="chat-link">Ir al formulario</a>'
    );
    
    // Reemplazar números de WhatsApp
    message = message.replace(
        /\+34 635 952 231/g,
        '<a href="https://wa.me/34635952231/?text=Estoy+interesado+en+aprender+inglés+aeronáutico" target="_blank" rel="noopener noreferrer" class="chat-link whatsapp-link">+34 635 952 231</a>'
    );
    
    return message;
    };

  const handleBotResponse = (option) => {
    // Agregar pregunta del usuario
    setChatHistory(prev => [...prev, {
        type: 'user',
        message: option.label,
        timestamp: new Date()
    }]);

    // Agregar respuesta del bot después de un breve delay
    setTimeout(() => {
        setChatHistory(prev => [...prev, {
        type: 'bot',
        message: option.response,
        processedMessage: processMessageWithLinks(option.response), // ✅ AGREGAR ESTA LÍNEA
        timestamp: new Date()
        }]);
        setCurrentStep(option.nextStep || 'main');
    }, 500);
    };

  const chatOptions = {
    main: [
      {
        label: "Información sobre programas",
        response: "Ofrecemos 3 programas de inglés aeronáutico:\n\n🛫  Tu Carrera Despega con Nosotros  (Básico)\n📅 Duración: 12 meses\n💰 Pago único: €990\n💳 Pago mensual: €90/mes\nPerfecto para comenzar tu carrera aeroportuaria\n\n✈️  Inglés para Profesionales del Aeropuerto  (Intermedio)\n📅 Duración: 3 meses\n💰 Pago único: €270 (¡ahorra €30!)\n💳 Pago mensual: €100/mes\nPara profesionales que buscan avanzar\n\n👨‍✈️  Expertos que te Llevan al Éxito  (Avanzado)\n📅 Duración: 6 meses\n💰 Pago único: €490\n💳 Pago mensual: €90/mes\nFormación personalizada one-to-one\n\n¿Te interesa algún programa en particular?",
        nextStep: 'programs'
        },
      {
        label: "Precios y formas de pago",
        response: "Nuestros precios y modalidades de pago:\n\n💰  PAGO ÚNICO  (con descuento):\n• Tu Carrera Despega: €990\n• Profesionales del Aeropuerto: €270\n• Expertos Avanzado: €490\n\n💳  PAGO MENSUAL :\n• Tu Carrera Despega: €90/mes (12 meses)\n• Profesionales del Aeropuerto: €100/mes (3 meses)\n• Expertos Avanzado: €90/mes (6 meses)\n\n✅  Incluye siempre: \n• Certificado de finalización\n• Material exclusivo\n• Acceso 24/7 a plataforma\n• Soporte personalizado\n\n¿Prefieres pago único o mensual?",
        nextStep: 'programs'
        },
      {
        label: "Sobre la academia",
        response: "At The Airport - English Aviation Academy es una institución líder especializada en inglés aeronáutico.\n\nNuestra directora  Wendy Camargo  tiene más de 11 años de experiencia con formación en Estados Unidos y España.\n\nOfrecemos:\n✓ Metodología práctica y real\n✓ Clases online flexibles\n✓ Orientación laboral\n✓ 95% de satisfacción\n\n¿Qué más te gustaría saber?",
        nextStep: 'main'
      },
      {
        label: "Contacto y horarios",
        response: "Puedes contactarnos:\n\n📧  Email:  info@aeronauticalenglish.es\n📱  WhatsApp:  +34 635 952 231\n\n🕒  Horarios de atención: \nLunes a Viernes: 9:00 AM - 8:00 PM\n\n¡También puedes seguirnos en nuestras redes sociales!\n\n¿Te gustaría que te envíe más información?",
        nextStep: 'contact'
      }
    ],
    programs: [
      {
        label: "Tu Carrera Despega con Nosotros (Básico)",
        response: " Tu Carrera Despega con Nosotros  - Tu entrada al mundo aeroportuario\n\n⏱️  Duración:  12 meses\n💰  Pago único:  €990 (¡Ahorra €90!)\n💳  Pago mensual:  €90/mes x 12 meses\n🎯  Nivel:  Básico\n\n Incluye: \n✓ Vocabulario aeroportuario esencial\n✓ Comunicación con pasajeros\n✓ Procedimientos de seguridad\n✓ Simulaciones reales\n✓ Certificado de finalización\n✓ Acceso de por vida al material\n\n¿Te interesa inscribirte o necesitas más información?",
        nextStep: 'contact'
        },
      {
        label: "Inglés para Profesionales del Aeropuerto (Intermedio)",
        response: " Inglés para Profesionales del Aeropuerto  - ¡El más popular!\n\n⏱️  Duración:  3 meses\n💰  Pago único:  €270 (¡Ahorra €30!)\n💳  Pago mensual:  €100/mes x 3 meses\n🎯  Nivel:  Intermedio\n\n Incluye: \n✓ Comunicación avanzada\n✓ Manejo de emergencias\n✓ Servicio al cliente especializado\n✓ Interacción internacional\n✓ Simulacros de incidentes\n✓ Certificación profesional\n\n¿Te gustaría más detalles o prefieres contactar directamente?",
        nextStep: 'contact'
        },
      {
        label: "Expertos que te Llevan al Éxito (Avanzado)",
        response: " Expertos que te Llevan al Éxito  - Formación exclusiva one-to-one\n\n⏱️  Duración:  6 meses\n💰  Pago único:  €490 (¡Ahorra €50!)\n💳  Pago mensual:  €90/mes x 6 meses\n🎯  Nivel:  Avanzado personalizado\n\n Incluye: \n✓ Inglés aeronáutico profesional\n✓ Comunicación con torre de control\n✓ Liderazgo y toma de decisiones\n✓ Gestión de crisis\n✓ Habilidades de presentación\n✓ Mentoría personalizada\n\n¿Te interesa esta formación personalizada?",
        nextStep: 'contact'
        },
      {
        label: "Volver al menú principal",
        response: "¿En qué más puedo ayudarte?",
        nextStep: 'main'
      }
    ],
    contact: [
      {
        label: "Quiero inscribirme",
        response: "¡Excelente decisión! Para inscribirte puedes:\n\n1.  Completar nuestro formulario:  [Ir al formulario](https://docs.google.com/forms/d/e/1FAIpQLSePZZkEFkB8n6AkMx-hkI6ZBx8Vpw9kEj-kR_GsO714VnNlbg/viewform)\n\n2.  Contactarnos por WhatsApp:  +34 635 952 231\n\n3.  Enviar email:  info@aeronauticalenglish.es\n\nTe responderemos en menos de 24 horas con toda la información para comenzar.\n\n¿Prefieres que te contactemos o tienes alguna pregunta específica?",
        nextStep: 'main'
      },
      {
        label: "Solicitar más información",
        response: "Te puedo ayudar a solicitar información personalizada:\n\n📝  Formulario completo:  Recibirás información detallada según tu nivel\n📱  WhatsApp directo:  Respuesta inmediata\n📧  Email:  Información completa en 24 horas\n\n¿Qué método prefieres? ¡También puedo resolver dudas específicas ahora mismo!",
        nextStep: 'main'
      },
      {
        label: "Volver al menú principal",
        response: "¿En qué más puedo ayudarte?",
        nextStep: 'main'
      }
    ]
  };

  return (
    <>
      <div className="floating-buttons-container">
        {/* Botón de Chatbot */}
        <div 
          className="floating-button chatbot-button"
          onClick={openChatbot}
          onMouseEnter={() => setShowTooltips(true)}
          onMouseLeave={() => setShowTooltips(false)}
        >
          <div className="button-icon">
            {/* ✅ TEMPLATE PARA IMAGEN PERSONALIZADA */}
            {/* <img src="/path/to/your/icon.png" alt="Chatbot" className="custom-icon" /> */}
            
            {/* ✅ O USA ESTE ÍCONO SVG MEJORADO */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.39L2 22l5.61-1.05C8.96 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              <path d="M12 4c-4.41 0-8 3.59-8 8 0 1.2.26 2.34.74 3.37L4 18l2.63-.74C7.66 17.74 8.8 18 10 18h2c4.41 0 8-3.59 8-8s-3.59-8-8-8z"/>
            </svg>
          </div>
          {showTooltips && (
            <div className="tooltip">
              <span>🤖 AeroBot</span>
            </div>
          )}
        </div>

        {/* Botón de WhatsApp */}
        <div 
          className="floating-button whatsapp-button"
          onClick={openWhatsApp}
          onMouseEnter={() => setShowTooltips(true)}
          onMouseLeave={() => setShowTooltips(false)}
        >
          <div className="button-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </div>
          {showTooltips && (
            <div className="tooltip">
              <span>📱 WhatsApp Directo</span>
            </div>
          )}
        </div>
      </div>

      {/* Chatbot Window */}
      {showChatbot && (
        <div className="chatbot-overlay">
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-title">
                <div className="bot-avatar">🤖</div>
                <div>
                  <h4>AeroBot</h4>
                  <span>Asistente Virtual</span>
                </div>
              </div>
              <button className="close-chatbot" onClick={closeChatbot}>×</button>
            </div>
            
           <div className="chatbot-messages">
                {chatHistory.map((msg, index) => (
                  <div key={index} className={`message ${msg.type}`}>
                    <div className="message-content">
                        {msg.processedMessage ? (
                            <div dangerouslySetInnerHTML={{ __html: msg.processedMessage }} />
                        ) : (
                           msg.message.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))
                        )}
                    </div>
                  <div className="message-time">
                    {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </div>
                </div>
              ))}
            </div>

            <div className="chatbot-options">
              {chatOptions[currentStep]?.map((option, index) => (
                <button
                  key={index}
                  className="chat-option"
                  onClick={() => handleBotResponse(option)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;