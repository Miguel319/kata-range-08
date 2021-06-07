const Range = require("../range");

describe("Range class", () => {
  const range = new Range();
  const spy = jest
    .spyOn(range, "getAllPoints")
    .mockImplementation(() => "Hello");

  it("Should return [2, 3, 4, 5]", () => {
    const expectedVals = [2, 3, 4, 5];

    expect(range.getAllPoints("[2, 6)")).toStrictEqual(expectedVals);
  });



  spy.mockRestore();
});
