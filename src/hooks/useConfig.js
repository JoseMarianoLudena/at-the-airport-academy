import { useContext } from 'react';
import { ConfigContext } from '../context/ConfigContext';

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};

export const useSiteConfig = () => {
  const { siteConfig } = useConfig();
  return siteConfig;
};

export const useThemeConfig = () => {
  const { themeConfig } = useConfig();
  return themeConfig;
};

export const useContentConfig = () => {
  const { contentConfig } = useConfig();
  return contentConfig;
};