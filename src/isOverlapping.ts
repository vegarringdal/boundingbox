type BoundingBoxMaxMin = {
  x: number;
  y: number;
  z: number;
};
type bb = {
  max: BoundingBoxMaxMin;
  min: BoundingBoxMaxMin;
};

export function isOverlapping(a: bb, b: bb) {
  if (a.min.x < b.max.x && a.max.x > b.min.x) {
    return true;
  }

  if (a.min.y < b.max.y && a.max.y > b.min.y) {
    return true;
  }

  if (a.min.z < b.max.z && a.max.z > b.min.z) {
    return true;
  }

  return false;
}
