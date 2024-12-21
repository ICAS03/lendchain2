import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function LoansPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Loan Origination & Repayment</h1>
      
      <div className="grid gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Create New Loan</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="borrower">Borrower ID</Label>
                  <Input id="borrower" placeholder="Enter borrower ID" />
                </div>
                <div>
                  <Label htmlFor="amount">Loan Amount</Label>
                  <Input id="amount" type="number" placeholder="Enter loan amount" />
                </div>
                <div>
                  <Label htmlFor="term">Loan Term</Label>
                  <Select>
                    <SelectTrigger id="term">
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 months</SelectItem>
                      <SelectItem value="12">12 months</SelectItem>
                      <SelectItem value="24">24 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="interest">Interest Rate</Label>
                  <Input id="interest" type="number" placeholder="Enter interest rate" />
                </div>
              </div>
              <Button>Create Loan Smart Contract</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Loan ID</TableHead>
                  <TableHead>Borrower</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[1, 2, 3].map((i) => (
                  <TableRow key={i}>
                    <TableCell>LOAN-{1000 + i}</TableCell>
                    <TableCell>BID-{2000 + i}</TableCell>
                    <TableCell>${(10000 + i * 1000).toLocaleString()}</TableCell>
                    <TableCell>{12 * i} months</TableCell>
                    <TableCell>{(5 + i * 0.5).toFixed(2)}%</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">View Details</Button>
                    </TableCell>
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

