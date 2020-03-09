module.exports = params => {
  if (!params) {
    return '';
  }

  const query = Object.keys(params).reduce(
    (acc, param) => (params[param] ? `${acc}${param}=${params[param]}&` : acc),
    ''
  );
  return `${query.slice(0, -1)}`;
};
