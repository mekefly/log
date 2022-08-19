import { log } from "./api";

const stackKey: string[] = [];
export function getGroupKeys() {
  return stackKey;
}
export function clearGroupKeys() {
  stackKey.splice(0, stackKey.length);
}
export function addGroup(key: string) {
  stackKey.push(key);
  return stackKey;
}
export function outGroup() {
  stackKey.pop();

  return stackKey;
}

let numberOfLayers = 0;
export function getNumberOfLayers() {
  return numberOfLayers;
}
export function increase() {
  numberOfLayers++;
}
export function reduce() {
  numberOfLayers--;
}
