const makeQuery = require('./makeQuery');

const queryParams = { test1: 'test1', test2: 'test2', test3: undefined };
const stringQuery = 'test1=test1&test2=test2';

describe('makeQuery function', () => {
  it('should return empty string', () => {
    const query = makeQuery();
    expect(query).toEqual('');
  });
  it('should return correct query string', () => {
    const query = makeQuery(queryParams);
    expect(query).toEqual(stringQuery);
  });
});
