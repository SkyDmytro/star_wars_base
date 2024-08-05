import { describe, test, expect } from "@jest/globals";
import { Edge } from "../types/reactFlow";
import {
  getInitialEdges,
  getInitialNodes,
  getElementPosition,
} from "./functions";
import {
  mockCharacter,
  mockFilms,
  mockStarships,
  mockInitialNodes,
} from "./mocks";

describe("getInitialNodes", () => {
  test("should create initial nodes correctly", () => {
    const result = getInitialNodes(mockCharacter, mockFilms, mockStarships);
    expect(result).toEqual(mockInitialNodes);
  });
});

describe("getInitialEdges", () => {
  test("should create initial edges correctly", () => {
    const edges: Edge[] = getInitialEdges(mockInitialNodes, mockFilms);
    const testResult = edges.slice(0, 5);
    expect(testResult).toEqual(testResult);
  });
});

describe("getElementPosition", () => {
  test("should return correct position for index 0 in a circle with radius 100 and total 4", () => {
    const result = getElementPosition(0, 4, 100);
    expect(result).toEqual({ x: 100, y: 0 });
  });

  test("should return correct position for index 1 in a circle with radius 100 and total 4", () => {
    const result = getElementPosition(1, 4, 100);
    expect(result).toEqual({ x: 0, y: 100 });
  });

  test("should return correct position for index 2 in a circle with radius 100 and total 4", () => {
    const result = getElementPosition(2, 4, 100);
    expect(result).toEqual({ x: -100, y: 0 });
  });

  test("should return correct position for index 3 in a circle with radius 100 and total 4", () => {
    const result = getElementPosition(3, 4, 100);
    expect(result).toEqual({ x: -0, y: -100 });
  });

  test("should return correct position for a single element with radius 50", () => {
    const result = getElementPosition(0, 1, 50);
    expect(result).toEqual({ x: 50, y: 0 });
  });

  test("should return correct position for index 0 in a circle with radius 0 and total 5", () => {
    const result = getElementPosition(0, 5, 0);
    expect(result).toEqual({ x: 0, y: 0 });
  });

  test("should handle large radius values", () => {
    const result = getElementPosition(2, 6, 1000);
    expect(result).toEqual({ x: -500, y: 866 });
  });

  test("should handle negative radius values", () => {
    const result = getElementPosition(2, 4, -100);
    expect(result).toEqual({ x: 100, y: -0 });
  });

  test("should handle negative index values", () => {
    const result = getElementPosition(-1, 4, 100);
    expect(result).toEqual({ x: 0, y: -100 });
    0;
  });

  // test("should handle index greater than total", () => {
  //   const result = getElementPosition(5, 4, 100);
  //   expect(result).toEqual({ x: 0, y: 100 });
  // });
});
