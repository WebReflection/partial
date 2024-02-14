/**
 * Return a callback that will fill missing arguments with pre-populated partials values.
 * @param {Function} callback the callback to invoke with partial arguments.
 * @param  {...unknown} partials all partial arguments.
 * @returns
 */
export const partial = (callback, ...partials) => {
    const p = partials.length;
    /**
     * @this {unknown}
     * @param  {...unknown} args
     * @returns {unknown}
     */
    return function () {
        'use strict';
        const args = [];
        for (let a = arguments.length, l = a < p ? p : a, i = 0; i < l; i++) {
            args[i] = i < p && (i >= a || arguments[i] === void 0) ?
                partials[i] :
                arguments[i]
            ;
        }
        return callback.apply(this, args);
    };
};

/**
 * @template {Function} T
 * @param {T} Class
 * @param  {...ConstructorParameters} partials
 * @returns {(...args:unknown) => InstanceType<T>}
 */
export const instance = (Class, ...partials) => partial(
    (...args) => new Class(...args),
    ...partials
);
