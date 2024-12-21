import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to LendChain</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Empowering Transparent Lending with Real-Time Insights and Blockchain Trust
      </p>
      <div className="flex space-x-4">
        <Button asChild size="lg">
          <Link href="/lender/dashboard">I'm a Lender</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/borrower/dashboard">I'm a Borrower</Link>
        </Button>
      </div>
    </div>
  )
}

