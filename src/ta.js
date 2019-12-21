const defaultConfig = require('./config');
const bindApi = require('./lib/bindApi');

module.exports = (userConfig = {}) => {
  const ta = bindApi(userConfig);

  if (userConfig.relativeUrl) {
    defaultConfig.apiUrl = '/api';
  }

  ta.config = { ...defaultConfig, ...userConfig };

  ta.isBrowser = typeof window !== 'undefined';

  return ta;
};
