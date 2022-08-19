import { mixin, nextTick, runOnlyOnce } from "./utils";

test("extend", () => {
  const o1 = {};
  mixin(o1, { test1: "1" });
  expect(o1).toStrictEqual({ test1: "1" });
});
test("extend", () => {
  const o1 = { test1: "2" };
  mixin(o1, { test1: "1" });
  expect(o1).toStrictEqual({ test1: "1" });
});
test("extend", () => {
  const o1 = { test1: 2 };
  mixin(o1, { test1: "1" });
  expect(o1).toStrictEqual({ test1: "1" });
});
test("extend", () => {
  const o1 = { test1: "2" };
  mixin(o1, { test1: 1 });
  expect(o1).toStrictEqual({ test1: 1 });
});
test("extend", () => {
  const o1 = { test1: "2" };
  mixin(o1, { test1: 1 });
  expect(o1).toStrictEqual({ test1: 1 });
});
test("extend", () => {
  const o1 = { test2: "2" };
  mixin(o1, { test1: 1 });
  expect(o1).toStrictEqual({ test1: 1, test2: "2" });
});
test("extend", () => {
  const o1 = { test2: "2", test3: {} };
  mixin(o1, { test1: 1 });
  expect(o1).toStrictEqual({ test1: 1, test2: "2", test3: {} });
});
test("extend", () => {
  const o1 = { test2: "2", test3: { test4: "test4" } };
  mixin(o1, { test1: 1 });
  expect(o1).toStrictEqual({ test1: 1, test2: "2", test3: { test4: "test4" } });
});
test("extend", () => {
  const o1 = { test2: "2", test3: { test4: "test4" } };
  mixin(o1, { test1: 1, test3: { test5: "test5" } });
  expect(o1).toStrictEqual({
    test1: 1,
    test2: "2",
    test3: { test4: "test4", test5: "test5" },
  });
});
test("extend", () => {
  const o1 = { test2: "2", test3: { test4: "test4" } };
  mixin(o1, { test1: 1, test3: true });
  expect(o1).toStrictEqual({ test1: 1, test2: "2", test3: true });
});
test("runOnlyOnce", () => {
  let numberOfCall = 0;
  const fn = runOnlyOnce(() => {
    numberOfCall++;
  });
  fn();
  fn();
  expect(numberOfCall).toBe(1);
});
test("nextTick", () => {
  return new Promise((resolve, reject) => {
    let isRun = false;
    nextTick(() => {
      isRun = true;
    });
    expect(isRun).toBe(false);
    setTimeout(() => {
      expect(isRun).toBe(true);
      resolve(undefined);
    }, 0);
    //promise是根据队列执行的，上面那个执行更早，所以应该先执行
    Promise.resolve().then(() => {
      expect(isRun).toBe(true);
    });
  });
});
test("nextTick", () => {
  return new Promise((resolve, reject) => {
    let isRun = false;
    nextTick().then(() => {
      isRun = true;
    });
    expect(isRun).toBe(false);
    setTimeout(() => {
      expect(isRun).toBe(true);
      resolve(undefined);
    }, 0);
    //promise是根据队列执行的，上面那个执行更早，所以应该先执行
    Promise.resolve().then(() => {
      expect(isRun).toBe(true);
    });
  });
});
test("nextTick", () => {
  return new Promise((resolve, reject) => {
    let numberOfCall = 0;
    nextTick().then(() => {
      numberOfCall++;
    });
    nextTick().then(() => {
      numberOfCall++;
    });
    Promise.resolve().then(() => {
      expect(numberOfCall).toBe(2);
      resolve(0);
    });
  });
});
