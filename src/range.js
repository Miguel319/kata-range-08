class Range {
  getFromAndTo(rangeVals) {
    const firstChar = rangeVals[0];
    const lastChart = rangeVals[rangeVals.length - 1];

    const from =
      firstChar === "["
        ? Number(rangeVals[1])
        : firstChar === "("
        ? Number(rangeVals[rangeVals[1]]) + 1
        : null;

    const to =
      lastChart === "]"
        ? Number(rangeVals[rangeVals.length - 2])
        : lastChart === ")"
        ? Number(rangeVals[rangeVals.length - 2]) - 1
        : null;

    return { from, to };
  }

  getAllPoints(rangeVals) {
    const { from, to } = this.getFromAndTo(rangeVals);

    const points = [];

    for (let i = from; i <= to; i++) {
      points.push(i);
    }

    return points;
  }
}

module.exports = Range;
