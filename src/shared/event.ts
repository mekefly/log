const even: { [key: evenType]: Array<(...rest: any) => any> } = {};
type evenType = string | symbol;
export function emit(type: evenType, ...rest: any[]) {
  if (!even[type]) {
    return;
  }
  even[type].forEach((fn) => fn(...rest));
}
export function on(type: evenType, callback: (...rest: any) => any) {
  const callbacks = even[type] ?? (even[type] = []);
  callbacks.push(callback);
}
