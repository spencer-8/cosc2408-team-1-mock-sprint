import Image from 'next/image'
import { getInitials, type TeamMember } from '../types'

/**
 * A single roster card: avatar, name, role, divider, blurb.
 * Presentational only — the team page is read-only for the mock sprint.
 */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  const initials = getInitials(member.name)

  return (
    <article
      data-testid="team-member-card"
      className="flex flex-col rounded border border-[#D1D1D1] bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.14)]"
    >
      <div className="flex items-center gap-3">
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E0EAF6] text-xs font-semibold text-[#0F6CBD]"
          >
            {initials}
          </span>
        )}

        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-[#242424]">{member.name}</h2>
          <p className="truncate text-sm text-[#616161]">{member.role}</p>
        </div>
      </div>

      <hr className="my-4 border-0 border-t border-[#E5E5E5]" />

      <p className="text-sm leading-relaxed text-[#424242]">{member.blurb}</p>
    </article>
  )
}
