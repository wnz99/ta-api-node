const makeEndpoints = require('../../lib/makeEnpoints');

const RAW_ENDPOINTS = [
  {
    name: 'entity_to_entity_flow_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'exchange_balancediff_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'exchange_balance_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'exchange_flow_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'exchange_flow_window_static',
    description: '',
    tier: 2
  },
  {
    name: 'miner_balancediff_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'miner_balance_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'token_active_address_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'miner_flow_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'token_address_balance_group_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'token_count_window_historical',
    description: '',
    tier: 0
  },
  {
    name: 'token_fees_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'token_miner_hashrate_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'token_hashrate_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'token_miner_rewards_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'token_new_address_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'token_nvt_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'token_price_usd_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'token_rewards_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'token_sopr_window_historical',
    description: '',
    tier: 2
  },
  {
    name: 'token_supply_window_historical',
    description: '',
    tier: 1
  },
  {
    name: 'token_utxo_age_window_historical',
    description: '',
    tier: 1
  },
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

module.exports = {
  ENDPOINTS: {
    private: makeEndpoints(RAW_ENDPOINTS)
  }
};
