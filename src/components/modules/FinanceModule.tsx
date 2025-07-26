import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Progress } from '../ui/progress';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Download,
  Upload,
  Eye,
  Filter,
  Search,
  Calendar,
  FileText,
  CreditCard,
  Banknote,
  PieChart,
  BarChart3,
  Activity,
  Target,
  Percent,
  Calculator
} from 'lucide-react';

export default function FinanceModule() {
  const [activeTab, setActiveTab] = useState('disbursement-tracker');

  const disbursements = [
    {
      id: 'DISB-001',
      customer_id: 'HHID-789012',
      customer_name: 'Rahul Verma',
      loan_id: 'LOAN-2024-001',
      amount: 500000,
      product: 'Personal Loan',
      disbursement_date: '2024-01-20',
      bank_account: 'HDFC Bank - ****1234',
      status: 'Completed',
      reference_number: 'TXN123456789',
      processing_time: '2 hours',
      charges: 10000
    },
    {
      id: 'DISB-002',
      customer_id: 'HHID-345678',
      customer_name: 'Sunita Devi',
      loan_id: 'LOAN-2024-002',
      amount: 250000,
      product: 'Gold Loan',
      disbursement_date: '2024-01-20',
      bank_account: 'SBI - ****5678',
      status: 'In Progress',
      reference_number: 'TXN987654321',
      processing_time: '1 hour',
      charges: 2500
    },
    {
      id: 'DISB-003',
      customer_id: 'HHID-901234',
      customer_name: 'Vikash Singh',
      loan_id: 'LOAN-2024-003',
      amount: 1000000,
      product: 'Business Loan',
      disbursement_date: '2024-01-19',
      bank_account: 'ICICI Bank - ****9012',
      status: 'Failed',
      reference_number: 'TXN456789123',
      processing_time: '4 hours',
      charges: 15000,
      failure_reason: 'Insufficient bank details'
    }
  ];

  const ledgerEntries = [
    {
      id: 'LED-001',
      date: '2024-01-20',
      customer_id: 'HHID-789012',
      customer_name: 'Rahul Verma',
      transaction_type: 'Disbursement',
      debit: 500000,
      credit: 0,
      balance: -500000,
      description: 'Personal Loan Disbursement',
      reference: 'LOAN-2024-001'
    },
    {
      id: 'LED-002',
      date: '2024-01-20',
      customer_id: 'HHID-789012',
      customer_name: 'Rahul Verma',
      transaction_type: 'Processing Fee',
      debit: 0,
      credit: 10000,
      balance: -490000,
      description: 'Processing Fee Collection',
      reference: 'FEE-001'
    },
    {
      id: 'LED-003',
      date: '2024-01-19',
      customer_id: 'HHID-345678',
      customer_name: 'Sunita Devi',
      transaction_type: 'EMI Payment',
      debit: 0,
      credit: 15000,
      balance: 15000,
      description: 'Monthly EMI Payment',
      reference: 'EMI-001'
    },
    {
      id: 'LED-004',
      date: '2024-01-18',
      customer_id: 'HHID-901234',
      customer_name: 'Vikash Singh',
      transaction_type: 'Interest Accrual',
      debit: 8500,
      credit: 0,
      balance: -8500,
      description: 'Monthly Interest Accrual',
      reference: 'INT-001'
    }
  ];

  const reconciliationData = [
    {
      id: 'REC-001',
      date: '2024-01-20',
      bank_statement_amount: 485000,
      system_amount: 485000,
      difference: 0,
      status: 'Matched',
      customer_id: 'HHID-789012',
      transaction_ref: 'TXN123456789',
      reconciled_by: 'System Auto',
      reconciliation_time: '2024-01-20 10:30'
    },
    {
      id: 'REC-002',
      date: '2024-01-19',
      bank_statement_amount: 14850,
      system_amount: 15000,
      difference: -150,
      status: 'Unmatched',
      customer_id: 'HHID-345678',
      transaction_ref: 'TXN987654321',
      reconciled_by: 'Pending',
      reconciliation_time: null,
      remarks: 'Bank charges deducted'
    },
    {
      id: 'REC-003',
      date: '2024-01-18',
      bank_statement_amount: 25000,
      system_amount: 25000,
      difference: 0,
      status: 'Matched',
      customer_id: 'HHID-901234',
      transaction_ref: 'TXN456789123',
      reconciled_by: 'Priya Sharma',
      reconciliation_time: '2024-01-18 16:45'
    }
  ];

  const taxReports = [
    {
      id: 'TAX-001',
      period: 'January 2024',
      report_type: 'GST Return',
      total_taxable_amount: 2500000,
      tax_amount: 450000,
      status: 'Filed',
      filing_date: '2024-01-31',
      acknowledgment_number: 'ACK123456789',
      due_date: '2024-02-20'
    },
    {
      id: 'TAX-002',
      period: 'Q3 2023-24',
      report_type: 'TDS Return',
      total_taxable_amount: 1200000,
      tax_amount: 120000,
      status: 'Prepared',
      filing_date: null,
      acknowledgment_number: null,
      due_date: '2024-01-31'
    },
    {
      id: 'TAX-003',
      period: 'FY 2023-24',
      report_type: 'Income Tax Return',
      total_taxable_amount: 15000000,
      tax_amount: 4500000,
      status: 'In Progress',
      filing_date: null,
      acknowledgment_number: null,
      due_date: '2024-07-31'
    }
  ];

  const renderDisbursementTracker = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Disbursement Tracker</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Disbursement Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Total Disbursed</p>
                <p className="text-2xl font-bold">₹1.75Cr</p>
                <p className="text-xs text-green-600">+12% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs text-blue-600">94.5% success rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-orange-600">Avg 2.5 hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Failed</p>
                <p className="text-2xl font-bold">9</p>
                <p className="text-xs text-red-600">5.5% failure rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disbursement List */}
      <div className="space-y-4">
        {disbursements.map(disbursement => (
          <Card key={disbursement.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{disbursement.product}</h4>
                    <Badge variant={
                      disbursement.status === 'Completed' ? 'default' :
                      disbursement.status === 'In Progress' ? 'secondary' :
                      'destructive'
                    }>
                      {disbursement.status}
                    </Badge>
                    <span className="text-sm text-gray-500">#{disbursement.loan_id}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Customer</p>
                      <Button 
                        variant="link" 
                        className="text-blue-600 p-0 h-auto font-medium"
                        onClick={() => alert(`Navigating to customer ${disbursement.customer_id}`)}
                      >
                        {disbursement.customer_name}
                      </Button>
                      <p className="text-xs text-gray-500">{disbursement.customer_id}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Amount</p>
                      <p className="font-medium text-lg">₹{disbursement.amount.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">Charges: ₹{disbursement.charges.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Bank Account</p>
                      <p className="font-medium">{disbursement.bank_account}</p>
                      <p className="text-xs text-gray-500">Ref: {disbursement.reference_number}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Processing Time</p>
                      <p className="font-medium">{disbursement.processing_time}</p>
                      <p className="text-xs text-gray-500">{disbursement.disbursement_date}</p>
                    </div>
                  </div>

                  {disbursement.status === 'Failed' && disbursement.failure_reason && (
                    <div className="mt-3 p-2 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-700">
                        <AlertCircle className="h-4 w-4 inline mr-1" />
                        {disbursement.failure_reason}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {disbursement.status === 'Failed' && (
                    <Button size="sm">
                      Retry
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderLedgerView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Ledger View</h3>
        <div className="flex items-center space-x-2">
          <Input placeholder="Search customer..." className="w-64" />
          <Button variant="outline" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Ledger Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Total Credits</p>
                <p className="text-2xl font-bold text-green-600">₹25,00,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingDown className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Total Debits</p>
                <p className="text-2xl font-bold text-red-600">₹50,08,500</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Net Balance</p>
                <p className="text-2xl font-bold text-blue-600">₹-25,08,500</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ledger Entries */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Customer</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-right p-2">Debit</th>
                  <th className="text-right p-2">Credit</th>
                  <th className="text-right p-2">Balance</th>
                  <th className="text-left p-2">Description</th>
                  <th className="text-center p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {ledgerEntries.map(entry => (
                  <tr key={entry.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{entry.date}</td>
                    <td className="p-2">
                      <Button 
                        variant="link" 
                        className="text-blue-600 p-0 h-auto"
                        onClick={() => alert(`Navigating to customer ${entry.customer_id}`)}
                      >
                        {entry.customer_name}
                      </Button>
                      <p className="text-xs text-gray-500">{entry.customer_id}</p>
                    </td>
                    <td className="p-2">
                      <Badge variant="outline">{entry.transaction_type}</Badge>
                    </td>
                    <td className="p-2 text-right">
                      {entry.debit > 0 && (
                        <span className="text-red-600">₹{entry.debit.toLocaleString()}</span>
                      )}
                    </td>
                    <td className="p-2 text-right">
                      {entry.credit > 0 && (
                        <span className="text-green-600">₹{entry.credit.toLocaleString()}</span>
                      )}
                    </td>
                    <td className="p-2 text-right">
                      <span className={entry.balance >= 0 ? 'text-green-600' : 'text-red-600'}>
                        ₹{Math.abs(entry.balance).toLocaleString()}
                      </span>
                    </td>
                    <td className="p-2">{entry.description}</td>
                    <td className="p-2 text-center">
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPaymentReconciliation = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Payment Reconciliation</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload Bank Statement
          </Button>
          <Button>
            <Activity className="h-4 w-4 mr-2" />
            Auto Reconcile
          </Button>
        </div>
      </div>

      {/* Reconciliation Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Matched</p>
                <p className="text-2xl font-bold">142</p>
                <p className="text-xs text-green-600">89.3% match rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Unmatched</p>
                <p className="text-2xl font-bold">17</p>
                <p className="text-xs text-red-600">10.7% pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold">₹52.4L</p>
                <p className="text-xs text-blue-600">Today's transactions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Differences</p>
                <p className="text-2xl font-bold">₹1,850</p>
                <p className="text-xs text-orange-600">Needs attention</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reconciliation List */}
      <div className="space-y-4">
        {reconciliationData.map(rec => (
          <Card key={rec.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant={
                      rec.status === 'Matched' ? 'default' : 'destructive'
                    }>
                      {rec.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{rec.date}</span>
                    <span className="text-sm text-gray-500">Ref: {rec.transaction_ref}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Customer</p>
                      <Button 
                        variant="link" 
                        className="text-blue-600 p-0 h-auto font-medium"
                        onClick={() => alert(`Navigating to customer ${rec.customer_id}`)}
                      >
                        {rec.customer_id}
                      </Button>
                    </div>
                    <div>
                      <p className="text-gray-500">Bank Statement</p>
                      <p className="font-medium">₹{rec.bank_statement_amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">System Amount</p>
                      <p className="font-medium">₹{rec.system_amount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Difference</p>
                      <p className={`font-medium ${rec.difference === 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {rec.difference === 0 ? 'Matched' : `₹${Math.abs(rec.difference)}`}
                      </p>
                    </div>
                  </div>

                  {rec.remarks && (
                    <div className="mt-3 p-2 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-700">{rec.remarks}</p>
                    </div>
                  )}

                  <div className="mt-2 text-xs text-gray-500">
                    {rec.reconciled_by !== 'Pending' ? (
                      `Reconciled by ${rec.reconciled_by} on ${rec.reconciliation_time}`
                    ) : (
                      'Pending reconciliation'
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  {rec.status === 'Unmatched' && (
                    <Button size="sm">
                      Reconcile
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderTaxReports = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">GST & Tax Filing Reports</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Select Period
          </Button>
          <Button>
            <FileText className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Tax Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Percent className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">GST Collected</p>
                <p className="text-2xl font-bold">₹4.5L</p>
                <p className="text-xs text-blue-600">This quarter</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">TDS Deducted</p>
                <p className="text-2xl font-bold">₹1.2L</p>
                <p className="text-xs text-green-600">This quarter</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Income Tax</p>
                <p className="text-2xl font-bold">₹45L</p>
                <p className="text-xs text-orange-600">Annual estimate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tax Reports List */}
      <div className="space-y-4">
        {taxReports.map(report => (
          <Card key={report.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{report.report_type}</h4>
                    <Badge variant={
                      report.status === 'Filed' ? 'default' :
                      report.status === 'Prepared' ? 'secondary' :
                      'outline'
                    }>
                      {report.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{report.period}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Taxable Amount</p>
                      <p className="font-medium">₹{(report.total_taxable_amount / 100000).toFixed(1)}L</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Tax Amount</p>
                      <p className="font-medium">₹{(report.tax_amount / 100000).toFixed(1)}L</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Due Date</p>
                      <p className="font-medium">{report.due_date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Filing Status</p>
                      {report.filing_date ? (
                        <div>
                          <p className="font-medium text-green-600">Filed</p>
                          <p className="text-xs text-gray-500">{report.filing_date}</p>
                        </div>
                      ) : (
                        <p className="font-medium text-orange-600">Pending</p>
                      )}
                    </div>
                  </div>

                  {report.acknowledgment_number && (
                    <div className="mt-3 p-2 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-700">
                        <CheckCircle className="h-4 w-4 inline mr-1" />
                        Acknowledgment: {report.acknowledgment_number}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  {report.status !== 'Filed' && (
                    <Button size="sm">
                      {report.status === 'Prepared' ? 'File Return' : 'Prepare'}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Finance</h2>
        <p className="text-gray-600">Manage disbursements, ledgers, reconciliation, and tax compliance</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="disbursement-tracker">Disbursement Tracker</TabsTrigger>
          <TabsTrigger value="ledger-view">Ledger View</TabsTrigger>
          <TabsTrigger value="reconciliation">Payment Reconciliation</TabsTrigger>
          <TabsTrigger value="tax-reports">GST & Tax Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="disbursement-tracker" className="mt-6">
          {renderDisbursementTracker()}
        </TabsContent>

        <TabsContent value="ledger-view" className="mt-6">
          {renderLedgerView()}
        </TabsContent>

        <TabsContent value="reconciliation" className="mt-6">
          {renderPaymentReconciliation()}
        </TabsContent>

        <TabsContent value="tax-reports" className="mt-6">
          {renderTaxReports()}
        </TabsContent>
      </Tabs>
    </div>
  );
}