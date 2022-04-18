import { assertEquals } from "https://deno.land/std@0.135.0/testing/asserts.ts";
import { getBoundingBoxNeeded } from "./getBoundingBoxNeeded.ts";


Deno.test("getBoundingBoxNeeded1", () => {
  const result = getBoundingBoxNeeded(
    { x: 2, y: 2, z: 2 },
    { x: 0, y: 0, z: 0 },
    1
  );
  assertEquals(result, {
    x: 2,
    y: 2,
    z: 2,
  });
});

Deno.test("getBoundingBoxNeeded2", () => {
    const result = getBoundingBoxNeeded(
      { x: 2, y: 2, z: 2 },
      { x: 0, y: 0, z: 0 },
      2
    );
    assertEquals(result, {
      x: 1,
      y: 1,
      z: 1,
    });
  });
