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

  return { x, y, z };
}
