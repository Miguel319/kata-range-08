class Range {
  getFromAndTo(rangeVals) {
    const [firstChar, lastChar] = rangeVals.split(",");

    const from =
      firstChar[0] === "["
        ? Number(firstChar.slice(1))
        : firstChar[0] === "("
        ? Number(firstChar.slice(1)) + 1
        : null;

    const lastCharSymbol = lastChar[lastChar.length - 1];

    const to =
      lastCharSymbol === "]"
        ? Number(lastChar.slice(0, lastChar.length - 1))
        : lastCharSymbol === ")"
        ? Number(lastChar.slice(0, lastChar.length - 1)) - 1
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

  containsRange(rangeVals, containedIn) {
    const { from: initialFrom, to: initialTo } = this.getFromAndTo(rangeVals);
    const { from: finalFrom, to: finalTo } = this.getFromAndTo(containedIn);

    console.log(finalFrom, finalTo);

    return finalFrom >= initialFrom && finalTo <= initialTo;
  }

  endPoints(rangeVals) {
    const { from, to } = this.getFromAndTo(rangeVals);

    return [from, to];
  }

  overlapsRange(rangeVals, overlap) {
    const initialRange = this.getAllPoints(overlap);
    const finalRange = this.getAllPoints(rangeVals);

    const overlaps = [...initialRange].some((v) => finalRange.includes(v));

    return overlaps;
  }
}

module.exports = Range;
