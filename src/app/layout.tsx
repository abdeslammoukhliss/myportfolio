import '@/styles/app.css'

import {
  Fira_Code as FiraCode,
  Plus_Jakarta_Sans as PlusJakartaSans,
  Poppins,
} from 'next/font/google'

import Analytics from '@/components/analytics'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'
import NowPlaying from '@/components/now-playing'
import Providers from '@/components/providers'
import cn from '@/lib/cn'

import GuestbookWidgetButton from './guestbook/_components/guestbook-widget-button'

interface RootLayoutProps {
  children: React.ReactNode
}

const fontSans = Poppins({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const fontPlusJakarta = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'fallback',
  weight: ['400', '500', '600', '700', '800'],
})

const firaCode = FiraCode({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        fontSans.variable,
        firaCode.variable,
        fontPlusJakarta.variable,
      )}
    >
      <body>
        <Providers>
          <div id="__app">
            <Navigation />
            <main>{children}</main>
            <Footer />
            <GuestbookWidgetButton />
            <NowPlaying />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
