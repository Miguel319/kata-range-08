const Range = require("../range");

describe("Range Class", () => {
  const { getAllPoints } = new Range();

  it("Should return [2,3,4,5]", () => {
    const expectedVals = [2, 3, 4, 5];

    expect(getAllPoints('[2,6)')).toStrictBe(expectedVals);
  });
});
