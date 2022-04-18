import { getBoundingBoxSizes } from "./getBoundingBoxSizes.ts";

export function getBoundingBoxNeeded(
  max = { x: 0, y: 0, z: 0 },
  min = { x: 0, y: 0, z: 0 },
  size = 1
) {
  const sizes = getBoundingBoxSizes(max, min);
  const x = Math.ceil(sizes.x / size);
  const z = Math.ceil(sizes.z / size);
  const y = Math.ceil(sizes.y / size);

  return { x, y, z };
}
