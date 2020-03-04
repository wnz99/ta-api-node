const makeQuery = require('./makeQuery');

module.exports = (endpoint, restRootUrl, queryParams) => {
  return `${restRootUrl}/${endpoint}?${makeQuery(queryParams)}`;
};
