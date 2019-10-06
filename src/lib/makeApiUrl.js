const makeQuery = require('./makeQuery');

module.exports = (endpoint, restRootUrl, queryParams) => {
  let separator;

  if (endpoint[endpoint.length - 1] === '&') {
    separator = '';
  } else {
    separator = '?';
  }

  return `${restRootUrl}/${endpoint}${separator}${makeQuery(queryParams)}`;
};
