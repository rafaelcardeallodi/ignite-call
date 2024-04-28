import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/ignite-ui'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
