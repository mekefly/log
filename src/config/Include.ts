import { emit } from "src/shared/event";

export interface Include {
  [key: string | number]: Include | IncludeValue;
  //$代表自己
  $?: IncludeValue;
  //_这个和之下的全部启动
  "*"?: IncludeValue;
}
export type IncludeValue = boolean | undefined;

export let include = {} as Include;
export let exclude = {} as Include;
export function setInclude(_include: any) {
  include = _include;
  emit("onSetInclude");
}
export function setExclude(_exclude: any) {
  exclude = _exclude;
  emit("onSetExclude");
}

const cludeApi = {
  addInclude,
  addExclude,
};
export function clear() {
  setInclude({});
  setExclude({});
}
export function addInclude(options: Include) {
  patch(include, options);

  emit("onAddInclude");
  return cludeApi;
}
export function addExclude(options: Include) {
  patch(exclude, options);

  emit("onAddInclude");
  return cludeApi;
}
export function patch(target: Include, options: Include): void {
  for (const key in options) {
    const tv = target[key];
    const ov = options[key];
    if (typeof tv === "object") {
      if (typeof ov === "object") {
        patch(tv, ov);
      } else {
        tv["$"] = ov;
      }
    } else {
      target[key] = ov;
    }
  }
}
