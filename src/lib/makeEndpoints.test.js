const makeEndpoinst = require('./makeEnpoints');

const RAW_ENDPOINTS = [
  {
    name: 'token_utxo_metric_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'token_volume_window_historical',
    description: '',
    tier: 0
  }
];
const expectedEndpoint = {
  token_utxo_metric_window_historical: {
    name: 'token_utxo_metric_window_historical/last',
    description: '',
    tier: 2
  },
  token_volume_window_historical: {
    name: 'token_volume_window_historical/last',
    description: '',
    tier: 0
  }
};

describe('makeEndpoinst function', () => {
  it('should return correct endpoints', () => {
    const endpoint = makeEndpoinst(RAW_ENDPOINTS);
    expect(endpoint).toEqual(expectedEndpoint);
  });
});
