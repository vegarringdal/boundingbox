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

export function overlapSize(a: bb, b: bb) {

  const asize = getBoundingBoxSizes(a.max, a.min)
  const bsize = getBoundingBoxSizes(b.max, b.min)
  let count = 0;
  if (a.min.x < b.max.x && a.max.x > b.min.x) {
    count = count + (asize.x -bsize.x)
  }

  if (a.min.y < b.max.y && a.max.y > b.min.y) {
    count = count + (asize.y -bsize.y)
  }

  if (a.min.z < b.max.z && a.max.z > b.min.z) {
    count = count + (asize.z -bsize.z)
  }

  return count;
}
