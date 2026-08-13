/** Short product name, used in the signed-in app bar. */
export const APP_TITLE = 'AI-Powered Cybersecurity App'

/** Full group + product name, used on the signed-out auth pages. */
export const FULL_APP_TITLE = 'Group 01 - Microsoft - AI-Powered Cybersecurity App'

/**
 * Product name lockup. Presentational and server-safe so it can be used by
 * both the signed-out auth bar and the signed-in app bar.
 */
export function AppBrand({ title = APP_TITLE }: { title?: string }) {
  return <span className="text-sm font-semibold text-[#242424]">{title}</span>
}
