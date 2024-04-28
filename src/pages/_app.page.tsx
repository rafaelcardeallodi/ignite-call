import type { AppProps } from 'next/app'
import Head from 'next/head'

import { globalStyles } from '@/styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Head>
        <title>Ignite Call</title>
      </Head>

      <Component {...pageProps} />
    </main>
  )
}
