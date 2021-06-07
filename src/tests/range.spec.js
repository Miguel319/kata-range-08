const Range = require("../range");

describe("Range class", () => {
  const range = new Range();
  const spy = jest
    .spyOn(range, "getAllPoints")
    .mockImplementation(() => "Hello");

  // const

  it("[2,6) allPoints = {2,3,4,5}", () => {
    const expectedVals = [2, 3, 4, 5];

    expect(range.getAllPoints("[2, 6)")).toStrictEqual(expectedVals);
  });

  it("[2,5) doesn’t contain [7,10)", () => {
    expect(range.containsRange("[2,5]", "[7,10)")).toBe(false);
  });

  spy.mockRestore();
});
