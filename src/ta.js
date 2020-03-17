const log4js = require('log4js');
const defaultConfig = require('./config');
const bindApi = require('./lib/bindApi');

const logger = log4js.getLogger();

logger.level = 'debug';

module.exports = (userConfig = {}) => {
  const ta = bindApi(userConfig);

  if (userConfig.relativeUrl) {
    defaultConfig.apiUrl = '/api';
  }

  ta.config = { ...defaultConfig, ...userConfig };

  ta.isBrowser = typeof window !== 'undefined';

  ta.logger = logger;

  return ta;
};
