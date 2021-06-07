const Range = require("../range");

describe("Range class", () => {
  const range = new Range();
  const spy = jest
    .spyOn(range, "getAllPoints")
    .mockImplementation(() => "Hello");

  describe("getAllPoints", () => {
    it("[2,6) allPoints = {2,3,4,5}", () => {
      const expectedVals = [2, 3, 4, 5];

      expect(range.getAllPoints("[2, 6)")).toStrictEqual(expectedVals);
    });
  });

  describe("containsRange", () => {
    it("[2,5) doesn’t contain [7,10)", () => {
      expect(range.containsRange("[2,5]", "[7,10)")).toBe(false);
    });

    it("[2,5) doesn’t contain [3,10)", () => {
      expect(range.containsRange("[2,5]", "[3,10)")).toBe(false);
    });

    it("[3,5) doesn’t contain [2,10)", () => {
      expect(range.containsRange("[2,5]", "[2,10)")).toBe(false);
    });
  });

  describe("", () => {
    it("[2,6) endPoints = {2,5}", () => {
      const expectedVals = [2, 5];

      expect(range.endPoints("[2,6)")).toStrictEqual(expectedVals);
    });

    it("[2,6] endPoints = {2,6}", () => {
      const expectedVals = [2, 6];

      expect(range.endPoints("[2,6]")).toStrictEqual(expectedVals);
    });

    it("(2,6) endPoints = {3,5}", () => {
      const expectedVals = [3, 5];

      expect(range.endPoints("(2,6)")).toStrictEqual(expectedVals);
    });

    it("(2,6] endPoints = {3,6}", () => {
      const expectedVals = [3, 6];

      expect(range.endPoints("(2,6]")).toStrictEqual(expectedVals);
    });
  });

  describe("overlapsRange", () => {
    it("[2,5) doesn’t overlap with [7,10)", () => {
      expect(range.overlapsRange("[2,5)", "[7,10)")).toBe(false);
    });
    it("[2,10) overlaps with [3,5)", () => {
      expect(range.overlapsRange("[2,10)", "[3,5)")).toBe(true);
    });
    it("[3,5) overlaps with [3,5)", () => {
      expect(range.overlapsRange("[3,5)", "[3,5)")).toBe(true);
    });
    it("[2,5) overlaps with [3,10)", () => {
      expect(range.overlapsRange("[2,5)", "[3,10)")).toBe(true);
    });
    it("[3,5) overlaps with [2,10)", () => {
      expect(range.overlapsRange("[3,5)", "[2,10)")).toBe(true);
    });
  });

  spy.mockRestore();
});
