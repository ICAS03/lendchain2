'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const loanRepaymentData = [
  { name: 'Jan', repayment: 1200 },
  { name: 'Feb', repayment: 1200 },
  { name: 'Mar', repayment: 1200 },
  { name: 'Apr', repayment: 1200 },
  { name: 'May', repayment: 1200 },
  { name: 'Jun', repayment: 1200 },
]

export default function BorrowerDashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Borrower Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Outstanding Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$25,000</div>
            <p className="text-xs text-muted-foreground">Across 2 active loans</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payment Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,200</div>
            <p className="text-xs text-muted-foreground">Due on July 15, 2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Credit Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">720</div>
            <p className="text-xs text-muted-foreground">+15 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Repayment Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">$16,250 repaid of $25,000</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Repayment Schedule</CardTitle>
            <CardDescription>Your monthly repayment history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  repayment: {
                    label: "Repayment Amount",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={loanRepaymentData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="repayment" stroke="var(--color-repayment)" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Loans</CardTitle>
            <CardDescription>Summary of your current loans</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Loan ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Remaining Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>LOAN-1001</TableCell>
                  <TableCell>$15,000</TableCell>
                  <TableCell>5.5%</TableCell>
                  <TableCell>$10,500</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>LOAN-1002</TableCell>
                  <TableCell>$10,000</TableCell>
                  <TableCell>6.0%</TableCell>
                  <TableCell>$5,750</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

