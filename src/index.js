const applyConfig = (config) => {
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'www.eea.europa.eu',
  ];

  // Restrict block-style to Layout only
  config.settings.layoutOnlyBlockStyles = true;

  // Disable tags on View
  config.settings.showTags = false;

  return config;
};

export default applyConfig;
