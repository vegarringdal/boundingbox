import { generateBoundingBox } from "./generateBoundingBox.ts";
import { generateInternalBoxesNeeded } from "./generateInternalBoxesNeeded.ts";
import { isInside } from "./isInside.ts";
import { isOverlapping } from "./isOverlapping.ts";

const bbox = generateBoundingBox([3, 3, 3, 1, 1, 1]);
const result = generateInternalBoxesNeeded(bbox.max, bbox.min, 3);
console.log(result);

const bbox1 = generateBoundingBox([7, 7, 7, -2, -2, -2]);

const bbox2 = generateBoundingBox([5, 5, 5, 2, 3, 3]);
console.log(bbox1);
console.log(bbox2);
console.log(isOverlapping(bbox1, bbox2));
console.log(isInside(bbox2, bbox1));
console.log(isInside(bbox1, bbox2));
