/**
 * - Creates an at instance
 * - Load all the enpoint funtions into this instance
 * - Binds the functions so they will always receive at as first argument
 *
 * This way we get a regular looking API on top of functional code
 */
const partial = require('lodash/partial');
const camelCase = require('lodash/camelCase');
const { ENDPOINTS } = require('../api/const/endpoints');
const fetchDataFromApi = require('../api/fetchDataFromApi');

module.exports = (userConfig = {}) => {
  const ta = {};

  const compose = funk => {
    return partial(funk, ta);
  };

  // Private endpoints

  Object.entries(ENDPOINTS.private).forEach(([key, value]) => {
    const { name } = value;

    ta[camelCase(key)] = compose(fetchDataFromApi(name));
  });

  // Custom endpoints
  if (userConfig.extend) {
    Object.keys(userConfig.extend).forEach(endpointName => {
      ta[camelCase(endpointName)] = compose(
        fetchDataFromApi(userConfig.extend[endpointName])
      );
    });
  }

  return ta;
};
