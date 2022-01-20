import React from 'react';
import {
  CustomCSS,
  DraftBackground,
  TokenWidget,
  ThemesWidget,
} from './components';
import { getImageScale } from '@eeacms/volto-block-data-figure/helpers';

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
        let scale = 'panoramic';
        if (__CLIENT__) {
          const window_width = window.innerWidth;
          const image_scale = getImageScale({ width: window_width });
          scale = window_width > 1380 ? scale : image_scale;
        }
        const url = theme
          ? `https://www.eea.europa.eu/themes/${theme}/theme_image/image_${scale}`
          : '';
        return (
          <div className="container-environment-theme">
            {__CLIENT__ && (
              <div
                className="full-width environment-theme-bg"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            )}
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
    {
      match: '',
      component: DraftBackground,
    },
  ];

  return config;
};

export default applyConfig;
