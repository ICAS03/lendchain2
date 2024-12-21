import Link from "next/link"
import { usePathname } from "next/navigation"
import { CreditCard, FileText, Home, User, DollarSign } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()
  const isLender = pathname.startsWith('/lender')
  const isBorrower = pathname.startsWith('/borrower')

  return (
    <div className="pb-12 w-64">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            LendChain
          </h2>
          <Button asChild variant="ghost" className="w-full justify-start mb-4">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <div className="space-y-1">
            {isLender && (
              <>
                <h3 className="mb-2 px-4 text-sm font-semibold text-muted-foreground">Lender</h3>
                <Button asChild variant={pathname === "/lender/dashboard" ? "secondary" : "ghost"} className="w-full justify-start">
                  <Link href="/lender/dashboard">
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button asChild variant={pathname === "/lender/credit-data" ? "secondary" : "ghost"} className="w-full justify-start">
                  <Link href="/lender/credit-data">
                    <FileText className="mr-2 h-4 w-4" />
                    Credit Data
                  </Link>
                </Button>
                <Button asChild variant={pathname === "/lender/loans" ? "secondary" : "ghost"} className="w-full justify-start">
                  <Link href="/lender/loans">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Loans
                  </Link>
                </Button>
              </>
            )}
            {isBorrower && (
              <>
                <h3 className="mb-2 px-4 text-sm font-semibold text-muted-foreground">Borrower</h3>
                <Button asChild variant={pathname === "/borrower/dashboard" ? "secondary" : "ghost"} className="w-full justify-start">
                  <Link href="/borrower/dashboard">
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button asChild variant={pathname === "/borrower/loan-repayment" ? "secondary" : "ghost"} className="w-full justify-start">
                  <Link href="/borrower/loan-repayment">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Loan Repayment
                  </Link>
                </Button>
                <Button asChild variant={pathname === "/borrower/profile" ? "secondary" : "ghost"} className="w-full justify-start">
                  <Link href="/borrower/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

