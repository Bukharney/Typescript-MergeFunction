import { merge } from "../src/index";

describe("merge", () => {
  it("should merge two sorted arrays", () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const collection3 = [0, 0, 0, 0, 0, 0];
    expect(merge(collection1, collection2, collection3)).toEqual([
      6, 5, 4, 3, 2, 1,
    ]);
  });
});

describe("merge", () => {
  it("should merge two empty arrays", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    expect(merge(collection1, collection2, collection3)).toEqual([]);
  });
});

describe("merge", () => {
  it("should merge one empty array and one non-empty array", () => {
    const collection1: number[] = [];
    const collection2 = [1, 2, 3];
    const collection3 = [0, 0, 0];
    expect(merge(collection1, collection2, collection3)).toEqual([3, 2, 1]);
  });
});

describe("merge", () => {
  it("should merge two arrays with different lengths", () => {
    const collection1 = [1, 2, 3];
    const collection2 = [4, 5];
    const collection3 = [0, 0, 0, 0, 0];
    expect(merge(collection1, collection2, collection3)).toEqual([
      5, 4, 3, 2, 1,
    ]);
  });
});
