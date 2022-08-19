import { check } from "./check";

test("check", () => {
  expect(check([], {})).toBe(false);
});
test("check", () => {
  expect(check([], { $: true })).toBe(true);
});
test("check", () => {
  expect(check([], { $: false })).toBe(false);
});
test("check", () => {
  expect(check(["test1"], { test1: true })).toBe(true);
});
test("check", () => {
  const include = { test1: { $: true } };
  expect(check(["test1"], include)).toBe(true);
});
test("check", () => {
  expect(check(["test1"], { test1: { "*": true } })).toBe(true);
});
test("check", () => {
  expect(check(["test1"], { test1: { "*": true, $: true } })).toBe(true);
});
test("check", () => {
  expect(check(["test1"], { test1: { "*": true, $: true } })).toBe(true);
});
test("check", () => {
  expect(check(["test1", "test2"], { test1: { "*": true, $: true } })).toBe(
    true
  );
});
test("check", () => {
  expect(check(["test1", "test2"], { test1: { $: true, test2: true } })).toBe(
    true
  );
});
test("check", () => {
  expect(check(["test1", "test2"], { test1: { test2: true } })).toBe(true);
});
test("check", () => {
  expect(check(["test1", "test2"], { test1: { test2: false } })).toBe(false);
});
test("check", () => {
  expect(check(["test1", "test2"], { test1: { test2: { $: true } } })).toBe(
    true
  );
});
test("check", () => {
  expect(check(["test1", "test2"], { test1: { test2: {} } })).toBe(false);
});
