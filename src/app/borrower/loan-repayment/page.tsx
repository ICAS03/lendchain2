import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function LoanRepaymentPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Loan Repayment</h1>
      
      <div className="grid gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Make a Payment</CardTitle>
            <CardDescription>Choose a loan and enter the amount you want to repay</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="loan">Select Loan</Label>
                  <Select>
                    <SelectTrigger id="loan">
                      <SelectValue placeholder="Select a loan" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="loan-1001">LOAN-1001 ($10,500 remaining)</SelectItem>
                      <SelectItem value="loan-1002">LOAN-1002 ($5,750 remaining)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" placeholder="Enter amount to repay" type="number" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Make Payment</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Recent payments and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Loan ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Transaction Hash</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { date: '2023-06-15', loanId: 'LOAN-1001', amount: 1200, status: 'Completed', hash: '0x1234...5678' },
                  { date: '2023-05-15', loanId: 'LOAN-1001', amount: 1200, status: 'Completed', hash: '0x5678...9012' },
                  { date: '2023-04-15', loanId: 'LOAN-1002', amount: 800, status: 'Completed', hash: '0x9012...3456' },
                ].map((payment, i) => (
                  <TableRow key={i}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>{payment.loanId}</TableCell>
                    <TableCell>${payment.amount}</TableCell>
                    <TableCell>{payment.status}</TableCell>
                    <TableCell className="font-mono text-xs">{payment.hash}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

