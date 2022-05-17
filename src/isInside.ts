type BoundingBoxMaxMin = {
  x: number;
  y: number;
  z: number;
};
type bb = {
  max: BoundingBoxMaxMin;
  min: BoundingBoxMaxMin;
};

/**
 * 
 * @param a container
 * @param b bb to check if is inside a
 * @returns boolean
 */
export function isInside(a: bb, b: bb) {
  let i = 0
  if (a.min.x < b.max.x && a.max.x > b.min.x) {
    i++;
  }

  if (a.min.y < b.max.y && a.max.y > b.min.y) {
    i++;
  }

  if (a.min.z < b.max.z && a.max.z > b.min.z) {
    i++;
  }

  if (a.min.x < b.min.x && a.max.x > b.max.x) {
    i++;
  }

  if (a.min.y < b.min.y && a.max.y > b.max.y) {
    i++;
  }

  if (a.min.z < b.min.z && a.max.z > b.max.z) {
    i++;
  }

  return i === 6;
}
