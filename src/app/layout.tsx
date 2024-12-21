'use client';
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] })

/*export const metadata: Metadata = {
  title: "LendChain Dashboard",
  description: "Decentralized lending platform",
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'
  const isLender = pathname.startsWith('/lender')
  const isBorrower = pathname.startsWith('/borrower')

  return (
    <html lang="en">
       <head>
        <title>LendChain Dashboard</title>
        <meta name='description' content='Description' />
      </head>
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden">
          {!isLandingPage && <Sidebar />}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

