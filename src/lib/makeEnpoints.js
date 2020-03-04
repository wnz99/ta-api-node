module.exports = endpoints => {
  return endpoints.reduce((acc, endpoint) => {
    const { name } = endpoint;
    return {
      ...acc,
      [name]: {
        ...endpoint,
        name: `${name}/last`
      }
    };
  }, {});
};
