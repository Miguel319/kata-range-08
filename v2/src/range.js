class Range {
  rangeVals;

  isInputValid() {
    const firstChar = this.rangeVals[0];
    const lastChar = this.rangeVals[this.rangeVals.length - 1];

    const validFirstChar = firstChar === "[" || firstChar === "(";
    const validLastChar = lastChar === "]" || lastChar === ")";

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
    this.containsRange = this.containsRange.bind(this);
    this.endPoints = this.endPoints.bind(this);
    this.overlapsRange = this.overlapsRange.bind(this);

    if (!this.isInputValid()) throw Error("Invalid input.");
  }

  getFromAndTo(rangeVals) {
    const [firstChar, lastChar] = rangeVals.split(",");

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

    return { from, to };
  }

  getAllPoints() {
    const { from, to } = this.getFromAndTo(this.rangeVals);

    const points = [];

    for (let i = from; i <= to; i++) {
      points.push(i);
    }

    return points;
  }

  integerRangeContains(rangeVal) {
    const initialVals = this.getAllPoints();
    const containedVals = rangeVal.replace("{", "").replace("}", "").split(",");

    const commonVals = [...containedVals].filter((v) =>
      initialVals.includes(Number(v))
    );

    return commonVals.length === containedVals.length;
  }

  containsRange(secondaryRange) {
    const { from: fromInitial, to: initialTo } = this.getFromAndTo(
      this.rangeVals
    );

    const { from: fromFinal, to: finalTo } = this.getFromAndTo(secondaryRange);

    return fromFinal >= fromInitial && finalTo <= initialTo;
  }

  endPoints() {
    const { from, to } = this.getFromAndTo(this.rangeVals);

    return [from, to];
  }

  overlapsRange(secondaryRange) {
    const initialPoints = this.getAllPoints();
    const { from, to } = this.getFromAndTo(secondaryRange);

    const secondaryPoints = [];

    for (let i = from; i <= to; i++) {
      secondaryPoints.push(i);
    }

    return [...initialPoints].some((v) => secondaryPoints.includes(v));
  }
}

module.exports = Range;
