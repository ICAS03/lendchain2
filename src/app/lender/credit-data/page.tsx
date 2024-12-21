import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CreditDataPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Credit Data Aggregation</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Real-time Data Feed</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <Label htmlFor="search">Search</Label>
              <Input id="search" placeholder="Search by borrower name or ID" />
            </div>
            <div>
              <Label htmlFor="metric">Credit Metric</Label>
              <Select>
                <SelectTrigger id="metric">
                  <SelectValue placeholder="Select metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="credit-score">Credit Score</SelectItem>
                  <SelectItem value="debt-to-income">Debt-to-Income Ratio</SelectItem>
                  <SelectItem value="payment-history">Payment History</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Borrower ID</TableHead>
                <TableHead>Credit Score</TableHead>
                <TableHead>Debt-to-Income Ratio</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Blockchain Hash</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3].map((i) => (
                <TableRow key={i}>
                  <TableCell>BID-{1000 + i}</TableCell>
                  <TableCell>{650 + i * 10}</TableCell>
                  <TableCell>{(0.3 + i * 0.05).toFixed(2)}</TableCell>
                  <TableCell>{new Date().toLocaleString()}</TableCell>
                  <TableCell className="font-mono text-xs">
                    0x{Array(40).fill(0).map(() => Math.random().toString(16)[2]).join('')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

