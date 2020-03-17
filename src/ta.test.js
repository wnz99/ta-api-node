const TA = require('./ta');
const bindApi = require('./lib/bindApi');
const defaultConfig = require('./config');

jest.mock('./lib/bindApi');
bindApi.mockReturnValue({});

describe('ta function', () => {
  beforeEach(() => {
    bindApi.mockClear();
  });
  it(`should retun ta instance`, () => {
    const userConfig = {};
    const ta = TA();
    expect(bindApi).toHaveBeenCalledWith(userConfig);
    expect(ta).toContainAllKeys(['config', 'isBrowser', 'logger']);
    expect(ta.config).toEqual(defaultConfig);
    expect(ta.isBrowser).toBe(true);
  });

  it(`should handle userConfig`, () => {
    const userConfig = { relativeUrl: true };
    const ta = TA(userConfig);
    expect(bindApi).toHaveBeenCalledWith(userConfig);
    expect(ta).toContainAllKeys(['config', 'isBrowser', 'logger']);
    const customConfig = { ...defaultConfig, apiUrl: '/api' };
    expect(ta.config).toEqual({ ...customConfig, ...userConfig });
    expect(ta.isBrowser).toBe(true);
  });
});
