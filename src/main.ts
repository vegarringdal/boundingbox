import { generateBoundingBox } from "./generateBoundingBox.ts";
import { generateInternalBoxesNeeded } from "./generateInternalBoxesNeeded.ts";


const bbox = generateBoundingBox([3, 3, 3, 1, 1, 1]);
const result = generateInternalBoxesNeeded(bbox.max, bbox.min, 3);
console.log(result)