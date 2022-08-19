import { getNumberOfLayers } from "./groupKeys";
import { allow } from "./allow";
import { group } from "./group";

export function generatePrefix(filler: string = " |") {
  let prefix = "";
  for (let i = 0; i <= getNumberOfLayers(); i++) {
    prefix += filler;
  }
  return prefix;
}
export function customLog(text: { toString: () => string }, ...options: any[]) {
  if (!allow()) {
    return;
  }
  console.log(`${generatePrefix()} ${text}`, ...options);
}
export function log(...rest: Parameters<Console["log"]>) {
  if (!allow()) {
    return;
  }
  console.log(generatePrefix(), ...rest);
}
export function warn(...rest: Parameters<Console["warn"]>) {
  if (!allow()) {
    return;
  }
  console.warn(generatePrefix(), ...rest);
}
export function dir(...rest: Parameters<Console["dir"]>) {
  if (!allow()) {
    return;
  }

  const obj = rest[0];
  customLog(`%c$ ⇙⇙⇙ ${obj?.[Symbol.toStringTag] ?? "console.dir"}`, "color: red");
  console.dir(...rest);
}

export { group };
