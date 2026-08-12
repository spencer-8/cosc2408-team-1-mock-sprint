import type { Metadata } from 'next'
import { AppBrand, FULL_APP_TITLE } from '@/components/layout/AppBrand'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <header className="flex h-12 items-center bg-white px-6">
        <AppBrand title={FULL_APP_TITLE} />
      </header>

      <div className="flex items-start justify-center px-4 py-20">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  )
}