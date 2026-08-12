import type { Metadata } from 'next'
import { TeamMemberCard } from '@/features/team/components/TeamMemberCard'
import { teamMembers, TEAM_NAME, TEAM_TAGLINE } from '@/features/team/data'

export const metadata: Metadata = {
  title: 'Team',
}

/**
 * Static, read-only team roster. Desktop layout only — mobile is explicitly
 * out of scope for the mock sprint, so the grid stays at three columns.
 */
export default function TeamPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#242424]">{TEAM_NAME}</h1>
      <p className="mt-1 text-sm text-[#616161]">{TEAM_TAGLINE}</p>

      <div className="mt-8 grid grid-cols-3 gap-5">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
