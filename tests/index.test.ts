import { merge } from "../src/index";

describe("merge", () => {
  it("should merge three sorted arrays: col1[n],col2[n] < col3[n]", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [9, 8, 7];
    expect(merge(collection1, collection2, collection3)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});

describe("merge", () => {
  it("should merge three sorted arrays: col1[n],col2[n] <= col3[n]", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [9, 8, 6];
    expect(merge(collection1, collection2, collection3)).toEqual([
      1, 2, 3, 4, 5, 6, 6, 8, 9,
    ]);
  });
});

describe("merge", () => {
  it("should merge three sorted arrays: col1[n],col2[n] > col3[n]", () => {
    const collection1 = [6, 9, 11];
    const collection2 = [7, 10, 12];
    const collection3 = [5, 2, 1];
    expect(merge(collection1, collection2, collection3)).toEqual([
      1, 2, 5, 6, 7, 9, 10, 11, 12,
    ]);
  });
});

describe("merge", () => {
  it("should merge three sorted arrays: col1[n],col2[n] >= col3[n]", () => {
    const collection1 = [6, 9, 11];
    const collection2 = [7, 10, 12];
    const collection3 = [6, 2, 1];
    expect(merge(collection1, collection2, collection3)).toEqual([
      1, 2, 6, 6, 7, 9, 10, 11, 12,
    ]);
  });
});

describe("merge", () => {
  it("should merge three sorted arrays with different size", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4];
    const collection3 = [0];
    expect(merge(collection1, collection2, collection3)).toEqual([
      0, 1, 2, 3, 4, 5,
    ]);
  });
});
