# TokenAnalyst API client for Node.JS

An un-official Node.JS client for TokenAnalyst API: https://docs.tokenanalyst.io/#/api

Please note that only a few endpoint are supported so far.

## Installation

```
npm i ta-api-node
```

# Usage

Please have a look at TokenAnalyst API for the available endpoints and an request parameters.

The client methods names are the `camelCase` version of the relevant endpoints names, so:

```
https://api.tokenanalyst.io/analytics/private/v1/last/exchange_flow_window_historical/last?
```

woulde be:

``` javascript
ta.exchangeFlowWindowHistorical(params)
```

Example:

``` javascript
import TA from 'ta-api-node';

const conf = {
  apiKey: '<your-api-key>'
}

const ta = TA(conf) 

const params = {
  format: 'json',
  token: 'BTC',
  exchange: 'binance',
  window: '1d',
  directrion: 'inflow',
  from_date: '2019-07-16',
  to_date: '2019-10-06',
}

const response =  await ta.exchangeFlowWindowHistorical(params);

if (!response.status === 200) {
  // Inspect error in response.data
} else {
  const {status, data} = response
  // Do something cool with data :)
}
```

Please open an issue for additional help or any other queries.