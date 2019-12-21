const camelCase = require('lodash/camelCase');
const bindApi = require('./bindApi');
const { ENDPOINTS } = require('../api/const/endpoints');

const expectedPrivateMethods = Object.keys(ENDPOINTS.private).map(key =>
  camelCase(key)
);

describe('makeApiUrl function', () => {
  it(`should have all default endpoint methods`, () => {
    const ta = bindApi();
    expect(ta).toContainAllKeys(expectedPrivateMethods);
  });

  it(`should have user defined endpoint methods`, () => {
    const userConfig = {
      extend: {
        test_one: {},
        test_two: {}
      }
    };
    const expectedCustomMethods = Object.keys(userConfig.extend).map(key =>
      camelCase(key)
    );
    const ta = bindApi(userConfig);
    expect(ta).toContainAllKeys([
      ...expectedPrivateMethods,
      ...expectedCustomMethods
    ]);
  });
});
