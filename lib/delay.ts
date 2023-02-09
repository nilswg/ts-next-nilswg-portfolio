type AnyFn = (...args: any[]) => void;
type Args = Parameters<AnyFn>;

const delay = (ms: number, fn?: AnyFn, args?: Args) =>
  new Promise((resolve) => setTimeout(() => resolve(fn && fn(args)), ms));

export default delay;
