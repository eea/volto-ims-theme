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
        const theme = themes
          ? `https://www.eea.europa.eu/themes/${themes[0]}/theme_image/image_panoramic`
          : '';
        return (
          <div
            className="environment-theme-bg"
            style={{ backgroundImage: `url(${theme})` }}
          >
            <div className="environment-theme-header">{props.children}</div>
          </div>
        );
      },
    },
  ];

  return config;
};

export default applyConfig;
