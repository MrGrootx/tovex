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
 * Truncate a string and append "..." if it exceeds the given length.
 *
 * @param text - The text to truncate
 * @param maxLength - Maximum allowed length
 * @param append - The text to append if the string exceeds the maximum length
 * @returns The truncated text
 */
export function truncate(text: string, maxLength: number, append: string = '...'): string {
    if (typeof text !== 'string') return '';
    if (text.length <= maxLength) return text;

    return text.slice(0, maxLength) + append;
}
