'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { AppBrand } from './AppBrand'

/**
 * Signed-in top bar: brand lockup, current user, sign out.
 * The mock-up has no sign-out control; it is added here so the flow is
 * reversible and testable.
 */
export function AppBar() {
  const router = useRouter()
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }

  return (
    <header className="flex h-12 items-center border-b border-[#E5E5E5] bg-white px-6">
      <AppBrand />

      <div className="flex-1" />

      {user?.email && <span className="mr-3 text-sm text-[#616161]">{user.email}</span>}

      <button
        type="button"
        onClick={handleSignOut}
        className="rounded-sm px-3 py-1.5 text-sm font-medium text-[#0F6CBD] transition-colors hover:bg-[#F0F6FC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6CBD]"
      >
        Sign out
      </button>
    </header>
  )
}
