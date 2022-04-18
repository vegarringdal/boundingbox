import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";
import { generateBoundingBox } from "./generateBoundingBox.ts";
import { generateInternalBoxesNeeded } from "./generateInternalBoxesNeeded.ts";

Deno.test("generateBoundingBox1", () => {
  const bbox = generateBoundingBox([1, 1, 1, 0, 0, 0]);
  const result = generateInternalBoxesNeeded(bbox.max, bbox.min, 1);
  assertEquals(result, [
    {
      max: {
        x: 1,
        y: 1,
        z: 1,
      },
      min: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
  ]);
});

Deno.test("generateBoundingBox1", () => {
  const bbox = generateBoundingBox([2, 2, 2, 1, 1, 1]);
  const result = generateInternalBoxesNeeded(bbox.max, bbox.min, 1);
  assertEquals(result, [
    {
      max: {
        x: 2,
        y: 2,
        z: 2,
      },
      min: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
  ]);
});
