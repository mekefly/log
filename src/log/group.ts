import { nextTick, runOnlyOnce } from "../shared/utils";
import { addGroup, increase, outGroup, reduce } from "./groupKeys";
import { customLog, log } from "./api";

export function group(
  key: string,
  options: {
    autoClose?: boolean;
  } = {}
) {
  addGroup(key);

  customLog(`%c↴ ${key}`, "background-color: #44bd32; border");
  increase();

  const end = runOnlyOnce(() => {
    reduce();
    outGroup();
    customLog(`%cEnd ${key} `, "background-color: #44bd32; border");
  });

  (options.autoClose ?? true) && nextTick(end);

  return end;
}
