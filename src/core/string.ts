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

/**
 * Capitalize the first letter of a string.
 *
 * @param str - The string to capitalize
 * @returns The capitalized string
 */
export function capitalize(str: string): string {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Convert a string to uppercase.
 *
 * @param str - The string to convert to uppercase
 * @returns The uppercase string
 */
export function uppercase(str: string): string {
    if (!str) return ''
    return str.toUpperCase()
}


/**
 * Convert a string to a slug.
 *
 * @param text - The text to convert to a slug
 * @returns The slugified string
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
}
