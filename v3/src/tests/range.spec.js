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

  describe("containsRange", () => {
    it("[2,5) doesn’t contain [7,10)", () =>
      expect(new Range("[2,5)").containsRange("[7,10)")).toBe(false));
    it("[2,5) doesn’t contain [3,10)", () =>
      expect(new Range("[2,5)").containsRange("[3,10)")).toBe(false));
    it("[3,5) doesn’t contain [2,10)", () =>
      expect(new Range("[3,5)").containsRange("[2,10)")).toBe(false));
    it("[2,10) contains [3,5]", () =>
      expect(new Range("[2,10)").containsRange("[3,5]")).toBe(true));
    it("[3,5] contains [3,5)", () =>
      expect(new Range("[3,5)").containsRange("[3,5)")).toBe(true));
  });
});
