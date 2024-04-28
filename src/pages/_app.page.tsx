import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

import { globalStyles } from '@/styles/global'

globalStyles()

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Head>
        <title>Ignite Call</title>
      </Head>

      <Component {...pageProps} />
    </main>
  )
}
