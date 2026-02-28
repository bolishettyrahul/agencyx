import { clsx } from 'clsx'

/**
 * Lightweight cn() helper — merges Tailwind class strings.
 * Uses clsx only (no tailwind-merge) for Tailwind v4 compatibility.
 */
export function cn(...inputs) {
  return clsx(inputs)
}
