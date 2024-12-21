'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts"

const loanActivityData = [
  { name: 'Jan', newLoans: 4000, repayments: 2400 },
  { name: 'Feb', newLoans: 3000, repayments: 1398 },
  { name: 'Mar', newLoans: 2000, repayments: 9800 },
  { name: 'Apr', newLoans: 2780, repayments: 3908 },
  { name: 'May', newLoans: 1890, repayments: 4800 },
  { name: 'Jun', newLoans: 2390, repayments: 3800 },
]

const loanPerformanceData = [
  { name: 'Current', value: 65 },
  { name: '1-30 Days Late', value: 20 },
  { name: '31-60 Days Late', value: 10 },
  { name: '61-90 Days Late', value: 3 },
  { name: '90+ Days Late', value: 2 },
]

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lender Overview</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Active Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231,890</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Interest Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2%</div>
            <p className="text-xs text-muted-foreground">-1.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Borrowers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Loan Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.3%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Activity</CardTitle>
            <CardDescription>New loans vs repayments over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  newLoans: {
                    label: "New Loans",
                    color: "hsl(var(--chart-1))",
                  },
                  repayments: {
                    label: "Repayments",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={loanActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="newLoans" stroke="var(--color-newLoans)" />
                    <Line type="monotone" dataKey="repayments" stroke="var(--color-repayments)" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Loan Performance</CardTitle>
            <CardDescription>Current status of active loans</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  value: {
                    label: "Percentage",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={loanPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="var(--color-value)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Latest loan activities and repayments</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Borrower</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { id: 'TX001', type: 'New Loan', amount: 5000, borrower: 'John Doe', date: '2023-06-15', status: 'Completed' },
                { id: 'TX002', type: 'Repayment', amount: 1200, borrower: 'Jane Smith', date: '2023-06-14', status: 'Completed' },
                { id: 'TX003', type: 'New Loan', amount: 7500, borrower: 'Alice Johnson', date: '2023-06-13', status: 'Pending' },
                { id: 'TX004', type: 'Repayment', amount: 900, borrower: 'Bob Williams', date: '2023-06-12', status: 'Completed' },
                { id: 'TX005', type: 'New Loan', amount: 3000, borrower: 'Charlie Brown', date: '2023-06-11', status: 'Completed' },
              ].map((transaction, i) => (
                <TableRow key={i}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                  <TableCell>{transaction.borrower}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

