const Range = require("../range");

describe("Range", () => {
  describe("Constructor", () => {
    it("{343] should throw error", () =>
      expect(() => new Range("{343]")).toThrow(
        "Input should start with [ or (, and it should end with a ] and a )."
      ));
  });

  it("942. should throw error", () => {
    expect(() => new Range("942.")).toThrow(
      "Input should start with [ or (, and it should end with a ] and a )."
    );
  });

  describe("getAllPoints", () => {
    it("[2,6) allPoints = {2,3,4,5}", () => {
      expect(new Range("[2,6)").getAllPoints()).toStrictEqual([2, 3, 4, 5]);
    });
  });
});
