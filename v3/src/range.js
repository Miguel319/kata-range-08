const {
  isInputValid,
  getFromAndTo,
  isContainsRangeInputValid,
  getIntegerRangeArr,
} = require("./utils/range.utils");

class Range {
  rangeVals;

  constructor(rangeVals) {
    if (!isInputValid(rangeVals))
      throw Error(
        "Input should start with [ or (, and it should end with a ] and a )."
      );

    this.rangeVals = rangeVals;

    this.getAllPoints = this.getAllPoints.bind(this);
    this.containsRange = this.containsRange.bind(this);
    this.integerRangeContains = this.integerRangeContains.bind(this);
  }

  getAllPoints() {
    const { from, to } = getFromAndTo(this.rangeVals);

    const points = [];

    for (let i = from; i <= to; i++) {
      points.push(i);
    }

    return points;
  }

  containsRange(altRange) {
    const { from: initialFrom, to: initialTo } = getFromAndTo(this.rangeVals);

    const { from: finalFrom, to: finalTo } = getFromAndTo(altRange);

    return finalFrom >= initialFrom && finalTo <= initialTo;
  }

  integerRangeContains(altRange) {
    if (!isContainsRangeInputValid(altRange))
      throw Error("Input should start with { and end with }.");

    const rangeArr = this.getAllPoints();
    const altArr = getIntegerRangeArr(altRange);

    const commonArr = altArr.filter((v) => rangeArr.includes(Number(v)));

    return altArr.length === commonArr.length;
  }
}

module.exports = Range;
