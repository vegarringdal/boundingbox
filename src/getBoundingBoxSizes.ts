export function getBoundingBoxSizes(
  max = { x: 0, y: 0, z: 0 },
  min = { x: 0, y: 0, z: 0 }
) {
  const y = max.y - min.y;
  const x = max.x - min.x;
  const z = max.z - min.z;
  return { x, y, z };
}
