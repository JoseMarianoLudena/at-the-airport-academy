// import React, { useState, useEffect } from 'react';
// import './CookieBanner.css';

// const CookieBanner = () => {
//   const [showBanner, setShowBanner] = useState(false);
//   const [showSettings, setShowSettings] = useState(false);

//   useEffect(() => {
//     // Verificar si el usuario ya aceptó las cookies
//     const cookieConsent = localStorage.getItem('cookieConsent');
//     if (!cookieConsent) {
//       setShowBanner(true);
//     }
//   }, []);

//   const acceptAllCookies = () => {
//     localStorage.setItem('cookieConsent', JSON.stringify({
//       necessary: true,
//       analytics: true,
//       marketing: true,
//       timestamp: new Date().toISOString()
//     }));
//     setShowBanner(false);
//     // Aquí puedes activar Google Analytics, Facebook Pixel, etc.
//     loadAnalytics();
//   };

//   const acceptNecessaryOnly = () => {
//     localStorage.setItem('cookieConsent', JSON.stringify({
//       necessary: true,
//       analytics: false,
//       marketing: false,
//       timestamp: new Date().toISOString()
//     }));
//     setShowBanner(false);
//   };

//   const saveCustomSettings = () => {
//     const analytics = document.getElementById('analytics-cookies').checked;
//     const marketing = document.getElementById('marketing-cookies').checked;
    
//     localStorage.setItem('cookieConsent', JSON.stringify({
//       necessary: true,
//       analytics: analytics,
//       marketing: marketing,
//       timestamp: new Date().toISOString()
//     }));
    
//     setShowBanner(false);
//     setShowSettings(false);
    
//     if (analytics) {
//       loadAnalytics();
//     }
//   };

//   const loadAnalytics = () => {
//     // Aquí cargarías Google Analytics u otras herramientas
//     console.log('Cargando Google Analytics...');
//     // Ejemplo: gtag('config', 'GA_MEASUREMENT_ID');
//   };

//   if (!showBanner) return null;

//   return (
//     <div className="cookie-banner">
//       <div className="cookie-banner-overlay">
//         <div className="cookie-banner-content">
//           {!showSettings ? (
//             // Banner principal
//             <div className="cookie-main">
//               <div className="cookie-text">
//                 <h3>🍪 Cookies y Privacidad</h3>
//                 <p>
//                   Utilizamos cookies para mejorar tu experiencia en nuestro sitio web, 
//                   personalizar contenido y analizar nuestro tráfico. Algunas cookies son 
//                   necesarias para el funcionamiento del sitio.
//                 </p>
//               </div>
//               <div className="cookie-buttons">
//                 <button 
//                   onClick={acceptNecessaryOnly}
//                   className="btn-necessary"
//                 >
//                   Solo Necesarias
//                 </button>
//                 <button 
//                   onClick={() => setShowSettings(true)}
//                   className="btn-settings"
//                 >
//                   Configurar
//                 </button>
//                 <button 
//                   onClick={acceptAllCookies}
//                   className="btn-accept-all"
//                 >
//                   Aceptar Todas
//                 </button>
//               </div>
//             </div>
//           ) : (
//             // Panel de configuración
//             <div className="cookie-settings">
//               <h3>Configuración de Cookies</h3>
              
//               <div className="cookie-category">
//                 <div className="cookie-category-header">
//                   <h4>🔧 Cookies Necesarias</h4>
//                   <input type="checkbox" checked disabled />
//                 </div>
//                 <p>Estas cookies son esenciales para el funcionamiento del sitio web.</p>
//               </div>

//               <div className="cookie-category">
//                 <div className="cookie-category-header">
//                   <h4>📊 Cookies Analíticas</h4>
//                   <input type="checkbox" id="analytics-cookies" defaultChecked />
//                 </div>
//                 <p>Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.</p>
//               </div>

//               <div className="cookie-category">
//                 <div className="cookie-category-header">
//                   <h4>🎯 Cookies de Marketing</h4>
//                   <input type="checkbox" id="marketing-cookies" defaultChecked />
//                 </div>
//                 <p>Se utilizan para mostrar anuncios personalizados y medir su efectividad.</p>
//               </div>

//               <div className="cookie-settings-buttons">
//                 <button 
//                   onClick={() => setShowSettings(false)}
//                   className="btn-back"
//                 >
//                   Volver
//                 </button>
//                 <button 
//                   onClick={saveCustomSettings}
//                   className="btn-save"
//                 >
//                   Guardar Configuración
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CookieBanner;

import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya aceptó las cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    loadAnalytics();
  };

  const acceptNecessaryOnly = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const saveCustomSettings = () => {
    const analytics = document.getElementById('analytics-cookies').checked;
    const marketing = document.getElementById('marketing-cookies').checked;
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: analytics,
      marketing: marketing,
      timestamp: new Date().toISOString()
    }));
    
    setShowBanner(false);
    setShowSettings(false);
    
    if (analytics) {
      loadAnalytics();
    }
  };

  const loadAnalytics = () => {
    console.log('Cargando Google Analytics...');
  };

  // ✅ FUNCION PARA VER COOKIES
//   const showStoredData = () => {
//     const stored = localStorage.getItem('cookieConsent');
//     if (stored) {
//       const data = JSON.parse(stored);
//       alert(`
// 🍪 DATOS DE COOKIES GUARDADOS:

// ✅ Necesarias: ${data.necessary ? 'ACTIVADAS' : 'DESACTIVADAS'}
// 📊 Analytics: ${data.analytics ? 'ACTIVADAS' : 'DESACTIVADAS'}  
// 🎯 Marketing: ${data.marketing ? 'ACTIVADAS' : 'DESACTIVADAS'}
// 📅 Guardado: ${new Date(data.timestamp).toLocaleString('es-ES')}

// 💾 LocalStorage Key: cookieConsent
// 🗂️ Ubicación: Application → Local Storage → localhost:3000
//       `);
//     } else {
//       alert('❌ No hay datos de cookies guardados aún');
//     }
//   };

  // ✅ FUNCIÓN PARA BORRAR COOKIES (TESTING)
  // const clearCookieData = () => {
  //   localStorage.removeItem('cookieConsent');
  //   alert('🗑️ Datos de cookies eliminados. Recarga la página para ver el banner otra vez.');
  // };

  // if (!showBanner) {
  //   // ✅ AGREGAR BOTONES DE DEBUG CUANDO EL BANNER NO SE MUESTRA
  //   return (
  //     <div style={{
  //       position: 'fixed',
  //       top: '10px',
  //       right: '10px',
  //       zIndex: 9999,
  //       display: 'flex',
  //       gap: '10px'
  //     }}>
  //       <button 
  //         onClick={showStoredData}
  //         style={{
  //           background: '#4a9eff',
  //           color: 'white',
  //           border: 'none',
  //           padding: '8px 12px',
  //           borderRadius: '6px',
  //           fontSize: '12px',
  //           cursor: 'pointer'
  //         }}
  //       >
  //         🔍 Ver Cookies
  //       </button>
  //       <button 
  //         onClick={clearCookieData}
  //         style={{
  //           background: '#ff6b35',
  //           color: 'white',
  //           border: 'none',
  //           padding: '8px 12px',
  //           borderRadius: '6px',
  //           fontSize: '12px',
  //           cursor: 'pointer'
  //         }}
  //       >
  //         🗑️ Limpiar
  //       </button>
  //     </div>
  //   );
  // }
  if (!showBanner) {
    return null; // ✅ SOLO ESTA LÍNEA
  }
  return (
    <div className="cookie-banner">
      <div className="cookie-banner-overlay">
        <div className="cookie-banner-content">
          {!showSettings ? (
            <div className="cookie-main">
              <div className="cookie-text">
                <h3>🍪 Cookies y Privacidad</h3>
                <p>
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio web, 
                  personalizar contenido y analizar nuestro tráfico. Algunas cookies son 
                  necesarias para el funcionamiento del sitio.
                </p>
              </div>
              <div className="cookie-buttons">
                <button 
                  onClick={acceptNecessaryOnly}
                  className="btn-necessary"
                >
                  Solo Necesarias
                </button>
                <button 
                  onClick={() => setShowSettings(true)}
                  className="btn-settings"
                >
                  Configurar
                </button>
                <button 
                  onClick={acceptAllCookies}
                  className="btn-accept-all"
                >
                  Aceptar Todas
                </button>
              </div>
            </div>
          ) : (
            <div className="cookie-settings">
              <h3>Configuración de Cookies</h3>
              
              <div className="cookie-category">
                <div className="cookie-category-header">
                  <h4>🔧 Cookies Necesarias</h4>
                  <input type="checkbox" checked disabled />
                </div>
                <p>Estas cookies son esenciales para el funcionamiento del sitio web.</p>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <h4>📊 Cookies Analíticas</h4>
                  <input type="checkbox" id="analytics-cookies" defaultChecked />
                </div>
                <p>Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.</p>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <h4>🎯 Cookies de Marketing</h4>
                  <input type="checkbox" id="marketing-cookies" defaultChecked />
                </div>
                <p>Se utilizan para mostrar anuncios personalizados y medir su efectividad.</p>
              </div>

              <div className="cookie-settings-buttons">
                <button 
                  onClick={() => setShowSettings(false)}
                  className="btn-back"
                >
                  Volver
                </button>
                <button 
                  onClick={saveCustomSettings}
                  className="btn-save"
                >
                  Guardar Configuración
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;