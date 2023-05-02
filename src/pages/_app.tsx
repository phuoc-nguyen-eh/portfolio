import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      <main className={`${montserrat.variable} dark:bg-dark font-mont bg-light w-full min-h-screen`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  )
}
