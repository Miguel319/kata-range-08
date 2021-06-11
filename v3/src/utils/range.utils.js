const isInputValid = (rangeVals) => {
  const firstChar = rangeVals[0];
  const lastChar = rangeVals[rangeVals.length - 1];

  const validFirstChar = firstChar === "[" || firstChar === "(";
  const validLastChar = lastChar === "]" || lastChar === ")";

  return validFirstChar && validLastChar && rangeVals.includes(",");
};


module.exports = {
  isInputValid,
  getFromAndTo,
};
