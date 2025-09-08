import sum from "./sum.js";

describe("test for sum fnx", () => {
   test("adds 6+5 to equal 11", () => {
    expect(sum(6,5)).toBe(11);
});

test("adds -6 + -5 to equal -11", () => {
    expect(sum(-6,-5)).toBe(-11);
});
})
