import { redirect } from 'next/navigation'
import { getServerSession } from '@/actions/auth.actions'
import { AppBar } from '@/components/layout/AppBar'

/**
 * The team page sits behind sign-in: an unauthenticated request is bounced
 * back to /auth/signin before any content renders.
 */
export default async function TeamLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()
  if (!session) redirect('/auth/signin')

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <AppBar />
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  )
}
