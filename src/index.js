const applyConfig = (config) => {
  // Default CORS: www.eea.europa.eu
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'www.eea.europa.eu/eea-custom-search.tags?q=',
  ];

  return config;
};

export default applyConfig;
