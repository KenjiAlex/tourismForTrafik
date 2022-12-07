import Header from './header'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Tourism</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}