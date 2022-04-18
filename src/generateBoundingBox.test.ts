import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";
import { generateBoundingBox } from "./generateBoundingBox.ts";

Deno.test("generateBoundingBox", () => {
  const result = generateBoundingBox([2, 2, 2, 0, 0, 0]);
  assertEquals(result, {
    max: { x: 2, y: 2, z: 2 },
    min: { x: 0, y: 0, z: 0 },
  });
});
