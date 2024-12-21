import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BorrowerProfilePage() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Borrower Profile and Credit Assessment</h1>
      
      <div className="grid gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Credit Report</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label>Credit Score</Label>
                <div className="text-2xl font-bold">750</div>
              </div>
              <div>
                <Label>Total Debt</Label>
                <div className="text-2xl font-bold">$25,000</div>
              </div>
              <div>
                <Label>Debt-to-Income Ratio</Label>
                <div className="text-2xl font-bold">0.32</div>
              </div>
              <div>
                <Label>Payment History</Label>
                <div className="text-2xl font-bold">98% On-Time</div>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data Point</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Blockchain Hash</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {['Credit Score', 'Total Debt', 'Debt-to-Income Ratio', 'Payment History'].map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{['750', '$25,000', '0.32', '98% On-Time'][i]}</TableCell>
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

        <Card>
          <CardHeader>
            <CardTitle>Document Verification</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="id-upload">Upload Identification</Label>
                <Input id="id-upload" type="file" />
              </div>
              <div>
                <Label htmlFor="income-upload">Upload Proof of Income</Label>
                <Input id="income-upload" type="file" />
              </div>
              <Button>Submit for Verification</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

