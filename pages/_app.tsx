
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { AuthProvider } from 'context/auth'
import { BoardProvider } from 'context/board'

import { globalStyle } from 'stitches.config'

const CookieWarn = dynamic(() => import('components/cooke-warn').then(mod => mod.CookieWarn), {
  ssr: false
})

export default function MyApp ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    globalStyle()
  }, [])

  return (
    <AuthProvider>
      <CookieWarn />
      <BoardProvider>
        <Component {...pageProps} />
      </BoardProvider>
    </AuthProvider>
  )
}
