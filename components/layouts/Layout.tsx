import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui'

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <>
    <Head>

    </Head>

    <Navbar />

    <main style={{ padding: '20px 50px'}}>
        {children}
    </main>
  </>
}

export default Layout