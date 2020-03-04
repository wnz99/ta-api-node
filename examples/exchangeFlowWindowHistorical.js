/* eslint-disable no-console */
const TA = require('../dist/ta');

const getFlow = async () => {
  const conf = {
    apiKey: '<your-api-key>'
  };

  const ta = TA(conf);

  const params = {
    format: 'json',
    token: 'btc',
    exchange: 'binance',
    window: '1d',
    direction: 'inflow',
    from_date: '2019-07-16',
    to_date: '2019-10-06'
  };

  const response = await ta.exchangeFlowWindowHistorical(params);

  if (!response.status === 200) {
    const { data } = response;
    throw data;
  } else {
    const { data } = response;
    return data;
  }
};

getFlow()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.warn(err);
  });
