/**
 * Format a duration in seconds to a human-readable string.
 *
 * @param seconds - The duration in seconds
 * @returns The formatted duration (e.g. "1h 30m 0s")
 */
export function formatDuration(seconds: number): string {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    return `${h}h ${m}m ${s}s`
}

/**
 * Format a date to a human-readable string.
 *
 * @param date - The date to format
 * @returns The formatted date (e.g. "1h 30m 0s ago")
 */
export function timeAgo(date: string | Date): string {
    const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1000)

    if (diff < 60) return `${diff}s ago`
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    return `${Math.floor(diff / 86400)}d ago`
}
