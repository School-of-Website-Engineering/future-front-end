/**
 * 使用 try-catch 包装一个异步函数，可以捕获异常并输出错误日志。
 *
 * @param func 待包装的异步函数。
 * @returns 新的异步函数，具有相同的参数和返回值类型，但会在发生异常时返回 undefined。
 */
export function asyncTryCatch<T extends (...args: unknown[]) => Promise<unknown>, U = ReturnType<T>>(
    func: T,
): (...args: Parameters<T>) => Promise<U | undefined> {
    return async function (...args: Parameters<T>): Promise<U | undefined> {
        try {
            const result = await func(...args);
            return result as U;
        } catch (e) {
            // 异常处理逻辑
            console.log(`Caught exception in ${func.name}: ${e}`);
            return undefined;
        }
    };
}
/**
 * 使用 try-catch 包装一个类的所有异步方法，可以捕获异常并输出错误日志。
 * @param target 待包装的类。
 * @returns 新的类，具有相同的参数和返回值类型，但会在发生异常时返回 undefined。
 * */
export function classAsyncTryCatch<T extends new (...args: any[]) => object>(target: T) {
    for (const key of Object.getOwnPropertyNames(target.prototype)) {
        const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (descriptor && typeof descriptor.value === 'function') {
            target.prototype[key] = asyncTryCatch(descriptor.value);
        }
    }
}
