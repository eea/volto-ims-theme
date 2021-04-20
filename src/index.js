import React from 'react';

const applyConfig = (config) => {
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'www.eea.europa.eu',
  ];

  // Restrict block-style to Layout only
  config.settings.layoutOnlyBlockStyles = true;

  // Disable tags on View
  config.settings.showTags = false;

  // Enable Title block
  config.blocks.blocksConfig.title.restricted = false;
  config.blocks.requiredBlocks = [];

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
          <div>
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

  return config;
};

export default applyConfig;
