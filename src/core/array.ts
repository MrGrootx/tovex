import type { WhereOptions } from "../types";

/**
 * Filters an array of objects by a given key, with optional value matching.
 *
 * @param options - Filter options object
 * @param options.data - The array to filter
 * @param options.key - The object property to filter by
 * @param options.value - Optional value to match against the key
 *
 * @returns A filtered array of matching items
 */
export function where<T>(options: WhereOptions<T>): T[] {
    if (!Array.isArray(options.data)) {
        return [];
    }

    return options.data.filter((item) => {
        if (options.value === undefined) {
            return Object.prototype.hasOwnProperty.call(item, options.key);
        }
        return item[options.key] === options.value;
    });
}

/**
 * Get a unique array of items.
 *
 * @param array - The array to get a unique items from
 * @returns A unique array of items
 */
export function unique<T>(array: T[]): T[] {
    return [...new Set(array)]
}

/**
 * Get a random item from an array.
 *
 * @param array - The array to get a random item from
 * @returns A random item from the array
 */
export function randomFromArray<T>(array: T[]): T | undefined {
    if (!Array.isArray(array)) {
        return undefined;
    }

    return array[Math.floor(Math.random() * array.length)];
}