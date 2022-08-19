export type AnyObject = {
  [key: string | symbol | number]: any;
};
export function isObject(v: any): v is AnyObject {
  return typeof v === "object";
}

/**
 * 混入，混合
 *
 * @export
 * @param {AnyObject} target
 * @param {AnyObject} option
 * @return {*}
 */
export function mixin(target: AnyObject, option: AnyObject) {
  for (const key in option) {
    if (typeof option[key] === "object") {
      if (typeof target[key] === "object") {
        mixin(target[key], option[key]);
        return;
      }
    }
    target[key] = option[key];
  }
}

/**
 * 继承
 *
 * @export
 * @template T
 * @template O
 * @param {T} target
 * @param {O} option
 * @return {*}  {(T & O)}
 */
export function extend<
  T extends object,
  O extends {
    [key: string | symbol | number]: (
      this: T,
      ...rest: any[]
    ) => any | boolean | string | number | object | symbol;
  }
>(target: T, option: O): T & O {
  return Object.setPrototypeOf(target, option);
}
const ticker = Promise.resolve();

/**
 * 下一次异步执行
 *
 * @export
 * @param {() => any} [callback]
 * @return {*}
 */
export function nextTick(callback?: () => any) {
  return callback ? ticker.then(callback) : ticker;
}

/**
 * 只执行一次
 *
 * @export
 * @template FN
 * @param {FN} cl
 * @return {*}  {FN}
 */
export function runOnlyOnce<FN extends (...rest: any) => any>(cl: FN): FN {
  let isRun = false;
  return function (...rest: any[]) {
    if (isRun) {
      return;
    }
    isRun = true;
    return cl(...rest);
  } as any;
}
