export function partial(callback: Function, ...partials: unknown[]): (this: unknown, ...args: unknown[]) => unknown;
export function instance<T extends Function>(Class: T, ...partials: ConstructorParameters[]): (...args: unknown) => InstanceType<T>;
