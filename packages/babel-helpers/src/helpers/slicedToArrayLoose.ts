/* @minVersion 7.0.0-beta.0 */

import arrayWithHoles from "./arrayWithHoles.ts";
import iterableToArrayLimitLoose from "./iterableToArrayLimitLoose.ts";
import unsupportedIterableToArray from "./unsupportedIterableToArray.ts";
// @ts-expect-error nonIterableRest is still being converted to TS.
import nonIterableRest from "./nonIterableRest.ts";

export default function _slicedToArrayLoose<T>(arr: any, i: number): T[] {
  return (
    arrayWithHoles<T>(arr) ||
    iterableToArrayLimitLoose<T>(arr, i) ||
    unsupportedIterableToArray<T>(arr, i) ||
    nonIterableRest()
  );
}
