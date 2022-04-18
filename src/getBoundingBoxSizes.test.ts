import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";
import { getBoundingBoxSizes } from "./getBoundingBoxSizes.ts";

Deno.test("getBoundingBoxSizes1", () => {
  const result = getBoundingBoxSizes(
    { x: 2, y: 2, z: 2 },
    { x: 0, y: 0, z: 0 }
  );
  assertEquals(result, {
    x: 2,
    y: 2,
    z: 2,
  });
});

Deno.test("getBoundingBoxSizes2", () => {
    const result = getBoundingBoxSizes(
      { x: 2, y: 2, z: 2 },
      { x: -1, y: -1, z: -1 }
    );
    assertEquals(result, {
      x: 3,
      y: 3,
      z: 3,
    });
  });
