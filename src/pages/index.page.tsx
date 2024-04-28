import { Heading } from '@ignite-ui/react'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function Home() {
  return (
    <div className={roboto.className}>
      <Head>
        <title>Ignite Call</title>
      </Head>
      <Heading>Hello World</Heading>
    </div>
  )
}
