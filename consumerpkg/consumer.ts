
// making this a type import doesn't help
import { T } from "reexportpkg";

export function user() {
  // why is f not visible?
  const t = T.f();
  const g = T.g();
}

export interface I {
  a: T;
  b: T;
}