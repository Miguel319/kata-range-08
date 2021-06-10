const Range = require("../range");

describe("Range", () => {
  describe("Constructor", () => {
    it("[3,5} should throw an 'Invalid input'.", () => {
      expect(() => new Range("[3,5}")).toThrow("Invalid input.");
    });

    it("[38] should throw an 'Invalid input'.", () => {
      expect(() => new Range("[38]")).toThrow("Invalid input.");
    });
  });

  describe("integerRangeContains", () => {
    it("[2,6) contains {2,4}", () => {
      expect(new Range("[2,6)").integerRangeContains("{2,4}")).toBe(true);
    });

    it("[2,6) doesn’t contain {-1,1,6,10}", () => {
      expect(new Range("[2,6)").integerRangeContains("{-1,1,6,10}")).toBe(
        false
      );
    });
  });

  describe("getAllPoints", () => {
    it("[2,6) allPoints = {2,3,4,5}", () => {
      const expectedVals = [2, 3, 4, 5];

      expect(new Range("[2,6)").getAllPoints()).toStrictEqual(expectedVals);
    });

    describe("containsRange", () => {
      it("[2,5) doesn’t contain [7,10)", () => {
        expect(new Range("[2,5)").containsRange("[7,10)")).toBe(false);
      });
      it("[2,5) doesn’t contain [3,10)", () => {
        expect(new Range("[2,5)").containsRange("[3,10)")).toBe(false);
      });
      it("[3,5) doesn’t contain [2,10)", () => {
        expect(new Range("[3,5)").containsRange("[2,10)")).toBe(false);
      });
      it("[2,10) contains [3,5]", () => {
        expect(new Range("[2,10)").containsRange("[3,5]")).toBe(true);
      });
      it("[2,5) contains [3,5)", () => {
        expect(new Range("[2,5)").containsRange("[3,5)")).toBe(true);
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
  });
});
