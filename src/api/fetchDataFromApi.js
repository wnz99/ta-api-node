const axios = require('axios');
const makeApiUrl = require('../lib/makeApiUrl');

module.exports = endpointCallFn => async (taInstance, params) => {
  const {
    config: { apiUrl, apiKey }
  } = taInstance;

  const apiCallArgs = !apiKey
    ? params
    : {
        ...params,
        key: apiKey
      };

  const apiCall = makeApiUrl(endpointCallFn(params), apiUrl, apiCallArgs);

  let response;

  try {
    response = await axios.get(apiCall);
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

  return response;
};
