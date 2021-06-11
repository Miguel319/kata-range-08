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

  describe("integerRangeContains", () => {
    it("Throws error if invalid input is provided.", () => {
      expect(() => new Range("[3,8)").integerRangeContains("2,9")).toThrow(
        "Input should start with { and end with }."
      );
    });

    it("[2,6) contains {2,4}", () => {
      expect(new Range("[2,6)").integerRangeContains("{2,4}")).toBe(true);
    });

    it("[2,6) doesn’t contain {-1,1,6,10}", () => {
      expect(new Range("[2,6)").integerRangeContains("{-1,1,6,10}")).toBe(
        false
      );
    });
  });

  describe("endPoints", () => {
    it("[2,6) endPoints = {2,5}", () => {
      expect(new Range("[2,6)").endPoints()).toStrictEqual([2, 5]);
    });
    it("[2,6] endPoints = {2,6}", () => {
      expect(new Range("[2,6]").endPoints()).toStrictEqual([2, 6]);
    });

    it("(2,6) endPoints = {3,5}", () => {
      expect(new Range("(2,6)").endPoints()).toStrictEqual([3, 5]);
    });

    it("(2,6] endPoints = {3,6}", () => {
      expect(new Range("(2,6]").endPoints()).toStrictEqual([3, 6]);
    });
  });

  describe("overlapsRange", () => {
    it("Throws an error if invalid input is provided", () => {
      expect(() => new Range("[3,9)").overlapsRange("[34}")).toThrow(
        "Input should start with [ or (, and it should end with a ] and a )."
      );
    });

    it("[2,5) doesn’t overlap with [7,10)", () => {
      expect(new Range("[2,5)").overlapsRange("[7,10)")).toBe(false);
    });

    it("[2,10) overlaps with [3,5)", () => {
      expect(new Range("[2,10)").overlapsRange("[3,5)")).toBe(true);
    });

    it("[3,5) overlaps with [3,5)", () => {
      expect(new Range("[3,5)").overlapsRange("[3,5)")).toBe(true);
    });

    it("[2,5) overlaps with [3,10)", () => {
      expect(new Range("[3,5)").overlapsRange("[3,10)")).toBe(true);
    });

    it("[3,5) overlaps with [2,10)", () => {
      expect(new Range("[3,5)").overlapsRange("[2,10)")).toBe(true);
    });
  });
});
