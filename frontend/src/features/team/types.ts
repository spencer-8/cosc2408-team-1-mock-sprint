import { z } from 'zod'

/**
 * Maximum blurb length, locked by the BA in the mock-sprint requirements
 * ("Team-member blurbs will have a maximum length of 200 characters").
 */
export const BLURB_MAX_LENGTH = 200

export const teamMemberSchema = z.object({
  /** Stable key for React lists and test selectors. */
  id: z.string().min(1),
  name: z.string().min(1),
  role: z.string().min(1),
  blurb: z.string().min(1).max(BLURB_MAX_LENGTH),
  /**
   * Optional headshot in `frontend/public/team/`. When absent the card falls
   * back to an initials avatar, which is what the Figma mock-up shows.
   */
  photoUrl: z.string().optional(),
})

export type TeamMember = z.infer<typeof teamMemberSchema>

/**
 * Derive the initials shown in the avatar fallback (e.g. "Spencer Keeghan" -> "SK").
 * Single-word names fall back to their first two characters.
 */
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean)

  const first = parts[0]
  if (!first) return ''

  const last = parts[parts.length - 1]
  if (parts.length === 1 || !last) return first.slice(0, 2).toUpperCase()

  return (first.charAt(0) + last.charAt(0)).toUpperCase()
}
