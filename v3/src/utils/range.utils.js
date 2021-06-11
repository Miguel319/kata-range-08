const isInputValid = (rangeVals) => {
  const firstChar = rangeVals[0];
  const lastChar = rangeVals[rangeVals.length - 1];

  const validFirstChar = firstChar === "[" || firstChar === "(";
  const validLastChar = lastChar === "]" || lastChar === ")";

  return validFirstChar && validLastChar && rangeVals.includes(",");
};

const getFromAndTo = (rangeVals) => {
  const [firstChar, lastChar] = rangeVals.split(",");

  const firstSymbol = firstChar[0];
  const lastSymbol = lastChar[lastChar.length - 1];

  const from =
    firstSymbol === "["
      ? Number(firstChar[1])
      : firstSymbol === "("
      ? Number(firstChar[1]) + 1
      : null;

  const to =
    lastSymbol === "]"
      ? Number(lastChar.slice(0, lastChar.length - 1))
      : lastSymbol === ")"
      ? Number(lastChar.slice(0, lastChar.length - 1)) - 1
      : null;

  return { from, to };
};

const isContainsRangeInputValid = (rangeVals) => {
  const firstChar = rangeVals[0];
  const lastChar = rangeVals[rangeVals.length - 1];

  return firstChar === "{" && lastChar === "}";
};

const getIntegerRangeArr = (rangeVals) => {
  const newArr = rangeVals.replace("{", "").replace("}", "").split(",");

  return newArr;
};

module.exports = {
  isInputValid,
  getFromAndTo,
  isContainsRangeInputValid,
  getIntegerRangeArr
};
