import { Layout } from "@/components/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function AnalyticsPage() {
  const data = [
    { name: 'Jan', loans: 4000, repayments: 2400 },
    { name: 'Feb', loans: 3000, repayments: 1398 },
    { name: 'Mar', loans: 2000, repayments: 9800 },
    { name: 'Apr', loans: 2780, repayments: 3908 },
    { name: 'May', loans: 1890, repayments: 4800 },
    { name: 'Jun', loans: 2390, repayments: 3800 },
  ]

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Analytics and Insights</h1>
      
      <div className="grid gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ChartContainer
                config={{
                  loans: {
                    label: "Loans",
                    color: "hsl(var(--chart-1))",
                  },
                  repayments: {
                    label: "Repayments",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="loans" stroke="var(--color-loans)" />
                    <Line type="monotone" dataKey="repayments" stroke="var(--color-repayments)" />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blockchain Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transactions">Transaction Volume</SelectItem>
                  <SelectItem value="wallets">Active Wallets</SelectItem>
                  <SelectItem value="gas">Gas Fees</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="h-[300px] bg-muted rounded-md flex items-center justify-center">
              Blockchain analytics visualization placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

