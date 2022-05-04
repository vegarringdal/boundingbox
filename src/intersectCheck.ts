import { getBoundingBoxSizes } from "./getBoundingBoxSizes.ts";

type BoundingBoxMaxMin = {
  x: number;
  y: number;
  z: number;
};
type bb = {
  max: BoundingBoxMaxMin;
  min: BoundingBoxMaxMin;
};

export function intersectCheck(a: bb, b: bb) {
  const x =
    (a.max.x >= b.max.x && a.min.x <= b.max.x) ||
    (a.min.x <= b.min.x && a.max.x > b.min.x);
  const y =
    (a.max.y >= b.max.y && a.min.y <= b.max.y) ||
    (a.min.y <= b.min.y && a.max.y > b.min.y);
  const z =
    (a.max.z >= b.max.z && a.min.z <= b.max.z) ||
    (a.min.z <= b.min.z && a.max.z > b.min.z);

  const sizeA = getBoundingBoxSizes(a.max, a.min);
  const sizeB = getBoundingBoxSizes(b.max, b.min);
  const result = { x: 0, y: 0, z: 0, size: 0 };
  if (x) {
    result.x = Math.abs(sizeA.x - sizeB.x);
    result.size = result.size + result.x;
  }
  if (y) {
    result.y = Math.abs(sizeA.y - sizeB.y);
    result.size = result.size + result.y;
  }
  if (z) {
    result.z = Math.abs(sizeA.z - sizeB.z);
    result.size = result.size + result.z;
  }

  return result;
}
