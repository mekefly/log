import { emit, on } from "./event";

test("on,emit", () => {
  return new Promise<undefined>((resolve, reject) => {
    on("test", () => {
      resolve(undefined);
    });
    emit("test");
    reject();
  });
});
