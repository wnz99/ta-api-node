const axios = require('axios');
const makeApiUrl = require('../lib/makeApiUrl');
const fetchDataFromApi = require('./fetchDataFromApi');

jest.mock('../lib/makeApiUrl');
jest.mock('axios');

makeApiUrl.mockImplementation(() => {
  return 'api_url';
});

const apiKey = 'api_key';
const apiUrl = 'root_url';

describe('fetchDataFromApi function', () => {
  beforeEach(() => {
    makeApiUrl.mockClear();
  });
  it(`should should make a call to TA API with key`, async () => {
    axios.get.mockResolvedValueOnce('success');
    const taInstance = {
      config: {
        apiUrl,
        apiKey,
        debug: true
      },
      logger: { info: jest.fn() }
    };
    const params = {
      pOne: 'p_one',
      pTwo: 'p_two'
    };
    const endpointName = 'test_endpoint';
    const expectedParams = { ...params, key: apiKey };
    const result = await fetchDataFromApi(endpointName)(taInstance, params);
    expect(makeApiUrl).toHaveBeenCalledWith(
      endpointName,
      apiUrl,
      expectedParams
    );
    expect(result).toBe('success');
    expect(taInstance.logger.info).toHaveBeenCalled();
  });

  it(`should should make a call to TA API with no key`, async () => {
    axios.get.mockResolvedValueOnce('success');
    const taInstance = {
      config: {
        apiUrl,
        apiKey
      }
    };
    const params = {
      pOne: 'p_one',
      pTwo: 'p_two'
    };
    const endpointName = 'test_endpoint';

    taInstance.config.apiKey = undefined;
    const result = await fetchDataFromApi(endpointName)(taInstance, params);
    expect(makeApiUrl).toHaveBeenCalledWith(endpointName, apiUrl, params);
    expect(result).toBe('success');
  });

  it(`should return correct error`, async () => {
    const taInstance = {
      config: {
        apiUrl,
        apiKey
      }
    };
    const params = {
      pOne: 'p_one',
      pTwo: 'p_two'
    };
    const endpointName = 'test_endpoint';
    const expectedParams = { ...params, key: apiKey };

    axios.get.mockRejectedValueOnce({
      response: { data: 'error_response', status: 500 }
    });
    let result = await fetchDataFromApi(endpointName)(taInstance, params);
    expect(makeApiUrl).toHaveBeenCalledWith(
      endpointName,
      apiUrl,
      expectedParams
    );
    expect(result).toEqual({ data: 'error_response', status: 500 });

    axios.get.mockRejectedValueOnce({
      request: { response: 'error_request', status: 500 }
    });
    result = await fetchDataFromApi(endpointName)(taInstance, params);
    expect(makeApiUrl).toHaveBeenCalledWith(
      endpointName,
      apiUrl,
      expectedParams
    );
    expect(result).toEqual({ data: 'error_request', status: 500 });

    axios.get.mockRejectedValueOnce({
      message: 'error_message'
    });
    result = await fetchDataFromApi(endpointName)(taInstance, params);
    expect(makeApiUrl).toHaveBeenCalledWith(
      endpointName,
      apiUrl,
      expectedParams
    );
    expect(result).toEqual({ data: 'error_message', status: 500 });
  });
});
