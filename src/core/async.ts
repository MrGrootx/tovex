/**
 * Sleep for a given number of milliseconds.
 *
 * @param ms - The number of milliseconds to sleep
 * @returns A promise that resolves after the given number of milliseconds
 */
export const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))


/**
 * Try to execute a function and catch any errors.
 *
 * @param fn - The function to execute
 * @returns A promise that resolves to an array with the error (if any) and the result (if any) 
 */
export async function tryCatch<T>(
    fn: () => Promise<T>
  ): Promise<[Error | null, T | null]> {
    try {
      return [null, await fn()]
    } catch (err) {
      return [err as Error, null]
    }
  }
  