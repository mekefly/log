import { cached } from "./cache";

test("cached", () => {
  const api = cached((key) => {
    return Math.random();
  });
  const v1 = api.call("k1");
  expect(api.call("k1")).toBe(v1);
});
