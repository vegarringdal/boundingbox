type BoundingBoxMaxMin = {
  x: number;
  y: number;
  z: number;
};

export function generateBoundingBox(array: number[]): {
  max: BoundingBoxMaxMin;
  min: BoundingBoxMaxMin;
} {
  
  // inital
  const max: {
    x: number | null;
    y: number | null;
    z: number | null;
  } = {
    x: null,
    y: null,
    z: null,
  };
  const min: {
    x: number | null;
    y: number | null;
    z: number | null;
  } = {
    x: null,
    y: null,
    z: null,
  };

  let i = 0;
  while (i < array.length) {
    for (let y = 0; y < 3; y++, i++) {
      const val = array[i] || 0;

      if (y === 0) {
        if (max.x === null) {
          max.x = val;
        }
        if (min.x === null) {
          min.x = val;
        }

        if (max.x < val) {
          max.x = val;
        }

        if (min.x > val) {
          min.x = val;
        }
      }

      if (y === 1) {
        if (max.y === null) {
          max.y = val;
        }
        if (min.y === null) {
          min.y = val;
        }

        if (max.y < val) {
          max.y = val;
        }

        if (min.y > val) {
          min.y = val;
        }
      }

      if (y === 2) {
        if (max.z === null) {
          max.z = val;
        }
        if (min.z === null) {
          min.z = val;
        }

        if (max.z < val) {
          max.z = val;
        }

        if (min.z > val) {
          min.z = val;
        }
      }
    }
  }

  return {
    max: { x: max.x || 0, y: max.y || 0, z: max.z || 0 },
    min: { x: min.x || 0, y: min.y || 0, z: min.z || 0 },
  };
}
