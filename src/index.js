import React from 'react';
import CustomCSS from './components';

const applyConfig = (config) => {
  // CORS Allowed Destinations
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'www.eea.europa.eu',
  ];

  // Custom block styles
  config.settings.pluggableStyles = [
    ...(config.settings.pluggableStyles || []),
    {
      id: 'environment-theme-bg',
      title: 'Environment Theme Header',
      viewComponent: (props) => {
        const themes =
          props?.metadata?.taxonomy_themes ||
          props?.properties?.taxonomy_themes;
        const theme = themes?.length ? themes[0]?.token || themes[0] : '';
        const url = theme
          ? `https://www.eea.europa.eu/themes/${theme}/theme_image/image_panoramic`
          : '';
        return (
          <div className="container-environment-theme">
            <div
              className="full-width environment-theme-bg"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
            <div className="environment-theme-header">{props.children}</div>
          </div>
        );
      },
    },
  ];

  const appExtras = config.settings.appExtras || [];

  config.settings.appExtras = [
    ...appExtras,
    {
      match: '',
      component: CustomCSS,
    },
  ];

  return config;
};

export default applyConfig;
