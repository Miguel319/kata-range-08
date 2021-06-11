const { isInputValid } = require("./utils/range.utils");

class Range {
  rangeVals;

  constructor(rangeVals) {
    this.rangeVals = rangeVals;

    if (!isInputValid(rangeVals))
      throw Error(
        "Input should start with [ or (, and it should end with a ] and a )."
      );
  }

  
}

module.exports = Range;
