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
    this.getFromAndTo = this.getFromAndTo.bind(this);
    this.integerRangeContains = this.integerRangeContains.bind(this);
    this.getAllPoints = this.getAllPoints.bind(this);

    if (!this.isInputValid()) throw Error("Invalid input.");
  }

  getFromAndTo() {
    const [firstChar, lastChar] = this.rangeVals.split(",");

    const from =
      firstChar[0] === "["
        ? Number(firstChar.slice(1))
        : firstChar[0] === "("
        ? Number(firstChar.slice(1)) + 1
        : null;

    const lastSymbol = lastChar[lastChar.length - 1];

    const to =
      lastSymbol === "]"
        ? Number(lastChar.slice(0, lastChar.length - 1))
        : lastSymbol === ")"
        ? Number(lastChar.slice(0, lastChar.length - 1)) - 1
        : null;

    console.log(from, to);

    return { from, to };
  }

  integerRangeContains() {}

  getAllPoints() {
    const { from, to } = this.getFromAndTo();

    const points = [];

    for (let i = from; i <= to; i++) {
      points.push(i);
    }

    return points;
  }
}

module.exports = Range;
