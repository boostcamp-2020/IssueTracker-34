const validateStringOrUndefined = (data) => {
  return typeof data === 'string' || data === undefined;
};

const validateBooleanOrUndefined = (data) => {
  return typeof data === 'boolean' || data === undefined;
};

module.exports = {
  validateStringOrUndefined,
  validateBooleanOrUndefined,
};
