module.exports = {
  ENDPOINTS: {
    private: {
      token_volume_window_historical: () =>
        'token_volume_window_historical/last',
      token_count_window_historical: () => 'token_count_window_historical/last',
      exchange_flow_historical: () => 'exchange_flow_historical/last',
      exchange_flow_window_historical: () =>
        'exchange_flow_window_historical/last',
      erc20_exchanges_flow_window_historical: () =>
        'erc20_exchanges_flow_window_historical/last',
      token_price_usd_window_historical: () =>
        'token_price_usd_window_historical/last'
    },
    public: {
      exchange_flows_all_tokens: () => 'last?job=exchange_flows_all_tokens_v5&',
      latest_price: ({ token }) => `last?job=${token}_latest_price_v5&`,
      exchange_flows_all_tokens_30_day: () => 'exchange_flows_all_tokens_30day',
      all_exchange_flows_all_tokens: () =>
        'last?job=all_exchange_flows_all_tokens_v5&',
      miner_hashrate_30day: () => ({ token }) =>
        `last?job=${token}_miner_hashrate_30day_v5&`,
      miner_rewards_30day: () => ({ token }) =>
        `last?job=${token}_miner_rewards_30day_v5&`
    }
  }
};
