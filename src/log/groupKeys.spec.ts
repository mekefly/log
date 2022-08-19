import { addGroup, clearGroupKeys, getGroupKeys, outGroup } from "./groupKeys";

test("getGroupKeys", () => {
  const groupKeys = getGroupKeys();
  expect(Array.isArray(groupKeys)).toBe(true);
});
test("addGroup", () => {
  const groupKeys = getGroupKeys();
  const oLen = groupKeys.length;
  addGroup("key1");
  expect(groupKeys.length).toBe(oLen + 1);
});
test("outGroup", () => {
  const groupKeys = getGroupKeys();
  const oLen = groupKeys.length;
  addGroup("key1");
  expect(groupKeys.length).toBe(oLen + 1);
  outGroup();
  expect(groupKeys.length).toBe(oLen);
});
test("clearGroupKeys", () => {
  const groupKeys = getGroupKeys();
  addGroup("key1");
  clearGroupKeys();
  expect(groupKeys.length).toBe(0);
});
