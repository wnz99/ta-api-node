const makeApiUrl = require('./makeApiUrl');

const rootUrl = 'https://api.com';
const endpoint = 'test_endpoint';
const queryParams = { test1: 'test1', test2: 'test2', test3: 'test3' };
const stringQuery = 'test1=test1&test2=test2&test3=test3';

describe('makeApiUrl function', () => {
  it(`should return correct url with default params`, () => {
    const query = makeApiUrl(endpoint, rootUrl, queryParams);
    expect(query).toEqual(`${rootUrl}/${endpoint}?${stringQuery}`);
  });
  it(`should return correct url with custom params`, () => {
    const query = makeApiUrl(endpoint, rootUrl, {
      ...queryParams,
      ...{ limit: '2000' }
    });
    expect(query).toEqual(`${rootUrl}/${endpoint}?${stringQuery}&limit=2000`);
  });
});
