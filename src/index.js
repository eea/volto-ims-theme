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

  // Custom block styles
  config.settings.pluggableStyles = [
    ...(config.settings.pluggableStyles || []),
    {
      id: 'transparent-black-box',
      title: 'Transparent black box',
      cssClass: 'transparent-black-box',
      previewComponent: (props) => (
        <div className={`${props.className} transparent-black-box`}>
          {props.children}
        </div>
      ),
    },
  ];

  return config;
};

export default applyConfig;
