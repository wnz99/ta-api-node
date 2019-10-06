const defaultConfig = require('./config');
const bind = require('./lib/bind_api');

module.exports = (userConfig = {}) => {
  const ta = bind(userConfig);

  if (userConfig.relativeUrl) {
    defaultConfig.apiUrl = '/api';
  }

  ta.config = { ...defaultConfig, ...userConfig };

  ta.isBrowser = typeof window !== 'undefined';

  return ta;
};
