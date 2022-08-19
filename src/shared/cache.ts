import { AnyObject, extend } from "./utils";

export function cached<FN extends (key: string, ...rest: any[]) => any>(
  callback: FN
) {
  const t = extend(
    { cacheData: {} as AnyObject },
    {
      call(key: string, ...rest: any[]) {
        const data = this.cacheData[key];

        if (data) {
          return data;
        }
        return (this.cacheData[key] = callback(key, ...rest));
      },
      clear(): void {
        this.cacheData = {};
      },
    }
  );
  return t;
}
