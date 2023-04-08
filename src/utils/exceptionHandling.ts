/**
 * 使用 try-catch 包装一个异步函数，可以捕获异常并输出错误日志
 * @param func 待包装的异步函数
 * @returns 新的异步函数，具有相同的参数和返回值类型，但会在发生异常时返回 undefined
 */
export function asyncTryCatch<T = any>(
    func: (...args: any[]) => Promise<T>
): (...args: any[]) => Promise<T | undefined> {
    return async function(...args: any[]) {
        try {
            return await func(...args);
        } catch (error) {
            if (func.name) {
                console.log(`！！！捕获到异常，请检查函数：\n\t${func.name}\n错误： ${error}`);
            }
            throw error; // 继续向上抛出错误，以便后续处理
        }
    };
}

/**
 * 在类中使用 try-catch 包装所有的异步方法，可以捕获异常并输出错误日志
 * @param target 待包装的类
 * @returns 新的类，具有相同的参数和返回值类型，但会在发生异常时返回 undefined
 */
export function classAsyncTryCatch<T extends new(...args: any[]) => object>(target: T): T {
    for (const key of Object.getOwnPropertyNames(target.prototype)) {
        const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (descriptor && typeof descriptor.value === 'function') {
            target.prototype[key] = asyncTryCatch(descriptor.value);
        }
    }

    return target;
}
