const axios = require('axios');
const makeApiUrl = require('../lib/makeApiUrl');

module.exports = endpointName => async (taInstance, params) => {
  const {
    config: { apiUrl, apiKey, debug },
    logger
  } = taInstance;

  const apiCallArgs = !apiKey
    ? params
    : {
        ...params,
        key: apiKey
      };

  const apiCall = makeApiUrl(endpointName, apiUrl, apiCallArgs);

  if (debug) {
    logger.info(apiCall);
  }

  let res;

  try {
    res = await axios.get(apiCall);
  } catch (err) {
    if (err.response) {
      const {
        response: { data, status }
      } = err;

      return {
        status,
        data
      };
    }
    if (err.request) {
      const {
        request: { response, status }
      } = err;

      return {
        status,
        data: response
      };
    }
    return {
      status: 500,
      data: err.message
    };
  }

  return res;
};
