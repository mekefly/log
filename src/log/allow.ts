import { include } from "../config/Include";
import { cached } from "../shared/cache";
import { on } from "../shared/event";
import { check } from "./check";
import { getGroupKeys } from "./groupKeys";

const cacheApi = cached((key, stackKey) => {
  return check(stackKey, include);
});

//遇到修改config的事件就要清除缓存
[
  "onSetInclude",
  "onSetExclude",
  "onAddInclude",
  "onAddExclude",
  "onSetConfig",
].forEach((v) => {
  on(v, () => {
    cacheApi.clear();
  });
});

export function allow() {
  const groupKeys = getGroupKeys();
  return cacheApi.call(groupKeys.join("/"), groupKeys);
}
