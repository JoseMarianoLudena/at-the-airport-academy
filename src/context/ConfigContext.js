import React, { createContext, useEffect, useState } from 'react';

// Importar configuraciones
import siteConfigData from '../config/site-config.json';
import themeConfigData from '../config/theme-config.json';
import contentConfigData from '../config/content-config.json';

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [configs, setConfigs] = useState({
    siteConfig: null,
    themeConfig: null,
    contentConfig: null
  });

  useEffect(() => {
    // Cargar configuraciones
    setConfigs({
      siteConfig: siteConfigData,
      themeConfig: themeConfigData,
      contentConfig: contentConfigData
    });
    setIsLoaded(true);
  }, []);

  // Aplicar variables CSS dinámicamente
  useEffect(() => {
    if (configs.themeConfig && isLoaded) {
      const { colors, typography, spacing, animations } = configs.themeConfig;
      const root = document.documentElement;

      // Aplicar colores
      root.style.setProperty('--primary-blue', colors.primary.blue);
      root.style.setProperty('--light-blue', colors.primary.lightBlue);
      root.style.setProperty('--vibrant-orange', colors.secondary.orange);
      root.style.setProperty('--accent-orange', colors.secondary.accentOrange);
      root.style.setProperty('--white', colors.neutral.white);
      root.style.setProperty('--light-gray', colors.neutral.lightGray);
      root.style.setProperty('--header-bg', colors.neutral.headerBg); //ejemplo que agregue ahorita

      root.style.setProperty('--text-dark', colors.neutral.textDark);
      root.style.setProperty('--text-light', colors.neutral.textLight);

      // Aplicar sombras
      root.style.setProperty('--shadow-light', colors.effects.shadowLight);
      root.style.setProperty('--shadow-medium', colors.effects.shadowMedium);
      root.style.setProperty('--shadow-strong', colors.effects.shadowStrong);

      // Aplicar tipografías
      root.style.setProperty('--font-primary', typography.primary);
      root.style.setProperty('--font-secondary', typography.secondary);

      // Aplicar transiciones
      root.style.setProperty('--transition-fast', animations.transitionFast);
      root.style.setProperty('--transition-medium', animations.transitionMedium);
    }
  }, [configs, isLoaded]);

  if (!isLoaded) {
    return <div>Cargando configuración...</div>;
  }

  return (
    <ConfigContext.Provider value={configs}>
      {children}
    </ConfigContext.Provider>
  );
};