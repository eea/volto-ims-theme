import React from 'react';
import {
  CustomCSS,
  DraftBackground,
  TokenWidget,
  ThemesWidget,
} from './components';

const applyConfig = (config) => {
  // CORS Allowed Destinations
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'www.eea.europa.eu',
  ];

  // Custom widgets view
  if (config.widgets.views?.id) {
    config.widgets.views.id.subjects = TokenWidget;
    config.widgets.views.id.taxonomy_themes = ThemesWidget;
  }

  if (config.widgets.views?.widget) {
    config.widgets.views.widget.tags = TokenWidget;
  }

  // ensure scripts load on error pages
  if (__SERVER__) {
    config.settings.serverConfig.extractScripts.errorPages = true;
  }

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

  // 139558 any path that isn't static ims or controlpanel is treated as external
  const notInIMS = /^(?!.*(\/ims|\/static|\/controlpanel|\/Plone)).*$/;
  config.settings.externalRoutes = [
    {
      match: {
        path: notInIMS,
        exact: false,
        strict: false,
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
    {
      match: '',
      component: DraftBackground,
    },
  ];

  return config;
};

export default applyConfig;
