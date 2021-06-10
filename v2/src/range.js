class Range {
  rangeVals;

  isInputValid() {
    const firstChar = this.rangeVals[0];
    const lastChar = this.rangeVals[this.rangeVals.length - 1];

    const validFirstChar = firstChar === "[" || firstChar === "(";
    const validLastChar = lastChar === ")" || lastChar === ")";

    const validInput =
      validFirstChar && validLastChar && this.rangeVals.includes(",");

    return validInput;
  }

  constructor(rangeVals) {
    this.rangeVals = rangeVals;

    this.isInputValid = this.isInputValid.bind(this);

    if (!this.isInputValid()) throw Error("Invalid input.");
  }

  integerRangeContains() {
      
  }
}

module.exports = Range;
