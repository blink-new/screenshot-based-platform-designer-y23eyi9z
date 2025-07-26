import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Users, 
  FileText, 
  Download,
  Calendar,
  Filter,
  PieChart,
  Activity
} from 'lucide-react'

const ReportsModule = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly')

  const corporateReports = [
    { name: 'ATP Partnership Report', description: 'Partnership performance metrics', status: 'Ready', lastUpdated: '2 hours ago' },
    { name: 'Cash Balance Report', description: 'Current cash position and flow', status: 'Processing', lastUpdated: '1 hour ago' },
    { name: 'Collection Efficiency', description: 'Collection performance analysis', status: 'Ready', lastUpdated: '30 mins ago' },
    { name: 'Disbursement Summary', description: 'Loan disbursement overview', status: 'Ready', lastUpdated: '1 hour ago' }
  ]

  const financeReports = [
    { name: 'P&L Statement', description: 'Profit and Loss statement', status: 'Ready', lastUpdated: '3 hours ago' },
    { name: 'Balance Sheet', description: 'Financial position statement', status: 'Ready', lastUpdated: '2 hours ago' },
    { name: 'Cash Flow Statement', description: 'Cash flow analysis', status: 'Processing', lastUpdated: '1 hour ago' },
    { name: 'Loan Portfolio Analysis', description: 'Portfolio performance metrics', status: 'Ready', lastUpdated: '45 mins ago' }
  ]

  const businessReports = [
    { name: 'Customer Acquisition', description: 'New customer metrics', status: 'Ready', lastUpdated: '1 hour ago' },
    { name: 'Loan Approval Rates', description: 'Approval and rejection analysis', status: 'Ready', lastUpdated: '2 hours ago' },
    { name: 'Geographic Distribution', description: 'Customer location analysis', status: 'Ready', lastUpdated: '30 mins ago' },
    { name: 'Product Performance', description: 'Product-wise performance', status: 'Processing', lastUpdated: '45 mins ago' }
  ]

  const kpiData = [
    { title: 'Total Disbursed', value: '₹45.2Cr', change: '+12.4%', trend: 'up' },
    { title: 'Active Customers', value: '12,847', change: '+5.2%', trend: 'up' },
    { title: 'Collection Rate', value: '94.8%', change: '+2.1%', trend: 'up' },
    { title: 'Default Rate', value: '2.3%', change: '-0.8%', trend: 'down' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready': return 'bg-green-100 text-green-800'
      case 'Processing': return 'bg-yellow-100 text-yellow-800'
      case 'Error': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const ReportCard = ({ report }: { report: any }) => (
    <Card className="hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">{report.name}</h3>
          <Badge className={getStatusColor(report.status)}>
            {report.status}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 mb-3">{report.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">Updated {report.lastUpdated}</span>
          <Button size="sm" variant="outline">
            <Download className="mr-1 h-3 w-3" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="p-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="corporate">Corporate Reports</TabsTrigger>
          <TabsTrigger value="finance">Finance Reports</TabsTrigger>
          <TabsTrigger value="business">Business Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
                    </div>
                    <div className={`p-2 rounded-full ${kpi.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                      <TrendingUp className={`h-4 w-4 ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600 rotate-180'}`} />
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className={`text-sm font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {kpi.change}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Monthly Disbursement Trend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Chart visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PieChart className="mr-2 h-5 w-5" />
                  Portfolio Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <PieChart className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Pie chart visualization would appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
              <CardDescription>Latest generated reports across all categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[...corporateReports.slice(0, 2), ...financeReports.slice(0, 2)].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-4 w-4 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">{report.name}</p>
                        <p className="text-sm text-gray-500">{report.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Download className="mr-1 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="corporate" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Corporate Reports</CardTitle>
              <CardDescription>
                Partnership, cash balance, and collection efficiency reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {corporateReports.map((report, index) => (
                  <ReportCard key={index} report={report} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Finance Reports</CardTitle>
              <CardDescription>
                Financial statements and portfolio analysis reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {financeReports.map((report, index) => (
                  <ReportCard key={index} report={report} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="business" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Reports</CardTitle>
              <CardDescription>
                Customer acquisition, approval rates, and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessReports.map((report, index) => (
                  <ReportCard key={index} report={report} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ReportsModule