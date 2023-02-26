import '@/styles/app.css'

import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'

import Footer from '@/components/footer'
import GoogleAnalytic from '@/components/GoogleAnalytic'
import Navigation from '@/components/navigation'
import ProgressBar from '@/components/ProgressBar'
import { ScrollObserver } from '@/components/ScrollObserver'
import { siteMetadata } from '@/data'
import { trackPageView } from '@/lib/gtag'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      trackPageView(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const { session, ...rest } = pageProps

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <SessionProvider session={session}>
          <AnimatePresence mode="wait" initial={false}>
            <ScrollObserver>
              <ProgressBar />
              <Navigation />
              <main
                className="flex flex-col mx-auto max-w-6xl justify-center py-10 px-4"
                role="main"
              >
                <div className="min-h-screen">
                  <Component {...rest} />
                </div>
              </main>
              <Footer />
            </ScrollObserver>
          </AnimatePresence>
        </SessionProvider>
      </ThemeProvider>
      <GoogleAnalytic />
    </>
  )
}

export default MyApp
