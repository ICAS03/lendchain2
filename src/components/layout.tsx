import * as React from "react"
import { Bell, CreditCard, DollarSign, FileText, Home, PieChart, Settings, User, Users } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h1 className="text-2xl font-bold mb-8">LendChain</h1>
        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link href="/credit-data" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <FileText className="h-5 w-5" />
            <span>Credit Data</span>
          </Link>
          <Link href="/loans" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <DollarSign className="h-5 w-5" />
            <span>Loans</span>
          </Link>
          <Link href="/borrower-profile" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <User className="h-5 w-5" />
            <span>Borrower Profile</span>
          </Link>
          <Link href="/analytics" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <PieChart className="h-5 w-5" />
            <span>Analytics</span>
          </Link>
          <Link href="/settings" className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

