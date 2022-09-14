
// the value import is somehow coming through
import type { T as TType } from "exportpkg";

// this shouldn't conflict but it does
//export { TType as T };

// HACK:
type ForceAsType = TType;
export { ForceAsType as T };

export namespace T {
  export function g(): TType { return "g-test"; }
}
