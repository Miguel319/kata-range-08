const Range = require("../range");

describe("Range class", () => {
  const range = new Range();
  const spy = jest
    .spyOn(range, "getAllPoints")
    .mockImplementation(() => "Hello");

  it("[2,6) allPoints = {2,3,4,5}", () => {
    const expectedVals = [2, 3, 4, 5];

    expect(range.getAllPoints("[2, 6)")).toStrictEqual(expectedVals);
  });

  it("[2,5) doesn’t contain [7,10)", () => {
    expect(range.containsRange("[2,5]", "[7,10)")).toBe(false);
  });

  it("[2,5) doesn’t contain [3,10)", () => {
    expect(range.containsRange("[2,5]", "[3,10)")).toBe(false);
  });

  it("[3,5) doesn’t contain [2,10)", () => {
    expect(range.containsRange("[2,5]", "[2,10)")).toBe(false);
  });

  spy.mockRestore();
});
