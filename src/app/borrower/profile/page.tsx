'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const creditScoreHistory = [
  { month: 'Jan', score: 680 },
  { month: 'Feb', score: 685 },
  { month: 'Mar', score: 690 },
  { month: 'Apr', score: 695 },
  { month: 'May', score: 705 },
  { month: 'Jun', score: 720 },
]

export default function BorrowerProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Borrower Profile and Credit Assessment</h1>
      
      <div className="grid gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Credit Report</CardTitle>
            <CardDescription>Your current credit standing and history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <Label>Current Credit Score</Label>
                <div className="text-2xl font-bold">720</div>
              </div>
              <div>
                <Label>Credit Score Change</Label>
                <div className="text-2xl font-bold text-green-600">+40</div>
              </div>
              <div>
                <Label>Total Debt</Label>
                <div className="text-2xl font-bold">$25,000</div>
              </div>
              <div>
                <Label>Debt-to-Income Ratio</Label>
                <div className="text-2xl font-bold">0.32</div>
              </div>
            </div>
            <div className="h-[200px] mb-4">
              <ChartContainer
                config={{
                  score: {
                    label: "Credit Score",
                    color: "hsl(var(--chart-1))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={creditScoreHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="score" stroke="var(--color-score)" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
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
                {[
                  { dataPoint: 'Credit Score', value: '720', lastUpdated: '2023-06-15', hash: '0x1234...5678' },
                  { dataPoint: 'Total Debt', value: '$25,000', lastUpdated: '2023-06-15', hash: '0x5678...9012' },
                  { dataPoint: 'Debt-to-Income Ratio', value: '0.32', lastUpdated: '2023-06-15', hash: '0x9012...3456' },
                  { dataPoint: 'Payment History', value: '98% On-Time', lastUpdated: '2023-06-15', hash: '0x3456...7890' },
                ].map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item.dataPoint}</TableCell>
                    <TableCell>{item.value}</TableCell>
                    <TableCell>{item.lastUpdated}</TableCell>
                    <TableCell className="font-mono text-xs">{item.hash}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document Verification</CardTitle>
            <CardDescription>Upload and verify your identification and loan documents</CardDescription>
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
              <div>
                <Label htmlFor="address-upload">Upload Proof of Address</Label>
                <Input id="address-upload" type="file" />
              </div>
              <Button>Submit for Verification</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Verified Documents</CardTitle>
            <CardDescription>Documents that have been verified and stored on the blockchain</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Document Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Verified Date</TableHead>
                  <TableHead>Blockchain Hash</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { type: 'Government ID', status: 'Verified', date: '2023-05-01', hash: '0xabcd...ef12' },
                  { type: 'Proof of Income', status: 'Pending', date: '-', hash: '-' },
                  { type: 'Proof of Address', status: 'Verified', date: '2023-05-03', hash: '0xef12...3456' },
                ].map((doc, i) => (
                  <TableRow key={i}>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell>{doc.status}</TableCell>
                    <TableCell>{doc.date}</TableCell>
                    <TableCell className="font-mono text-xs">{doc.hash}</TableCell>
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

