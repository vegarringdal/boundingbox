import { getBoundingBoxNeeded } from "./getBoundingBoxNeeded.ts";

type Vec3 = {
  x: number;
  y: number;
  z: number;
};

type Box3 = {
  max: Vec3;
  min: Vec3;
};

export function generateInternalBoxesNeeded(
  max = { x: 0, y: 0, z: 0 },
  min = { x: 0, y: 0, z: 0 },
  size = 1
) {
  const numberOfBoxes = getBoundingBoxNeeded(max, min, size);

  const boxes: Box3[] = [];

  // helper to generate a copy
  function getCopy(box: Box3) {
    return {
      min: { x: box.min.x, y: box.min.y, z: box.min.x },
      max: { x: box.max.x, y: box.max.y, z: box.max.z },
    };
  }

  // original loop does not know about size, just offsets
  // so we need to add them
  function addSizeToBoundingBox(box: { max: Vec3; min: Vec3 }) {
    const boxCopy = getCopy(box);
    boxCopy.min.x = boxCopy.min.x * size;
    boxCopy.min.y = boxCopy.min.y * size;
    boxCopy.min.z = boxCopy.min.z * size;
    boxCopy.max.x = boxCopy.max.x * size;
    boxCopy.max.y = boxCopy.max.y * size;
    boxCopy.max.z = boxCopy.max.z * size;
    boxes.push(boxCopy);
  }

  // inital box
  let box = getCopy({
    min: { x: 0, y: 0, z: 0 },
    max: { x: 0, y: 0, z: 0 },
  });

  // for each z in forach x foreach y
  for (let z = 0; z < numberOfBoxes.z; z++) {
    box.max.z = z + 1;
    box.min.z = z;

    for (let x = 0; x < numberOfBoxes.x; x++) {
      box.max.x = x + 1;
      box.min.x = x;

      for (let y = 0; y < numberOfBoxes.y; y++) {
        box.max.y = y + 1;
        box.min.y = y;
        box = getCopy(box);
        addSizeToBoundingBox(box);
      }
    }
  }

  return boxes;
}
