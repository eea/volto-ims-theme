const applyConfig = (config) => {
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'www.eea.europa.eu',
    'www.eea.europa.eu/eea-custom-search.tags',
  ];

  return config;
};

export default applyConfig;
