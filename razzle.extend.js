const path = require('path');
const plugins = (defaultPlugins) => {
  return defaultPlugins;
};
const modify = (config, { target, dev }, webpack) => {
  const themeConfigPath = `${__dirname}/theme/theme.config`;
  config.resolve.alias['../../theme.config$'] = themeConfigPath;
  config.resolve.alias['../../theme.config'] = themeConfigPath;
  const projectRootPath = path.resolve('.');
  config.resolve.alias['volto-ims-theme'] = `${__dirname}/theme`;

  return config;
};

module.exports = {
  plugins,
  modify,
};
