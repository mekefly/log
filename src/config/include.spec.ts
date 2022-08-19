import { addInclude, clear, include } from "./Include";

test("addInclude", () => {
  clear();
  addInclude({ $: true });

  expect(include).toStrictEqual({ $: true });

  addInclude({ "*": true });
  expect(include).toStrictEqual({ $: true, "*": true });
  addInclude({ test1: true }).addInclude({ test2: true });
  expect(include).toStrictEqual({
    $: true,
    "*": true,
    test1: true,
    test2: true,
  });

  addInclude({ dep1: { test1: true, $: true } });
  expect(include).toStrictEqual({
    $: true,
    "*": true,
    test1: true,
    test2: true,
    dep1: { test1: true, $: true },
  });
});

test("clear", () => {
  clear();
  expect(include).toStrictEqual({});
});
