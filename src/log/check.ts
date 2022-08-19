import { Include, include, IncludeValue } from "src/config/Include";

export function check(
  keys: string[],
  include: Include | IncludeValue
): boolean {
  if (include === true) {
    if (keys.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  if (!include) {
    return false;
  }
  if (include["*"]) {
    return true;
  }
  if (keys.length === 0) {
    if (include["$"]) {
      return true;
    } else {
      return false;
    }
  }

  const key = keys.shift();
  if (!key) {
    return true;
  }

  return check(keys, include[key]);
}
