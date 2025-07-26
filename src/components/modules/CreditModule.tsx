import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Search,
  FileText,
  Download,
  Upload,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Calendar,
  Filter,
  RefreshCw,
  Settings,
  BarChart3,
  Target,
  Shield,
  Zap,
  Phone,
  Mail,
  MapPin,
  Building,
  CreditCard,
  Star,
  Activity
} from 'lucide-react';

export default function CreditModule() {
  const [activeTab, setActiveTab] = useState('loan-applications');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const loanApplications = [
    {
      id: 'LA240001',
      hhid: 'HH240001',
      applicant_name: 'Rajesh Kumar',
      product_type: 'Personal Loan',
      amount_requested: 250000,
      application_date: '2024-01-15',
      status: 'Under Review',
      credit_score: 720,
      monthly_income: 45000,
      employment_type: 'Salaried',
      branch: 'Mumbai Central',
      phone: '+91 9876543210',
      email: 'rajesh.kumar@email.com',
      documents_status: 'Complete',
      risk_category: 'Low',
      processing_stage: 'Credit Verification'
    },
    {
      id: 'LA240002',
      hhid: 'HH240002',
      applicant_name: 'Priya Sharma',
      product_type: 'Business Loan',
      amount_requested: 500000,
      application_date: '2024-01-20',
      status: 'Approved',
      credit_score: 780,
      monthly_income: 75000,
      employment_type: 'Self Employed',
      branch: 'Delhi NCR',
      phone: '+91 9876543211',
      email: 'priya.sharma@email.com',
      documents_status: 'Complete',
      risk_category: 'Low',
      processing_stage: 'Disbursement Ready'
    },
    {
      id: 'LA240003',
      hhid: 'HH240003',
      applicant_name: 'Amit Patel',
      product_type: 'Gold Loan',
      amount_requested: 150000,
      application_date: '2024-01-18',
      status: 'Rejected',
      credit_score: 580,
      monthly_income: 25000,
      employment_type: 'Salaried',
      branch: 'Bangalore',
      phone: '+91 9876543212',
      email: 'amit.patel@email.com',
      documents_status: 'Incomplete',
      risk_category: 'High',
      processing_stage: 'Application Rejected'
    },
    {
      id: 'LA240004',
      hhid: 'HH240004',
      applicant_name: 'Sunita Reddy',
      product_type: 'Personal Loan',
      amount_requested: 300000,
      application_date: '2024-01-22',
      status: 'Pending Documents',
      credit_score: 690,
      monthly_income: 55000,
      employment_type: 'Salaried',
      branch: 'Hyderabad',
      phone: '+91 9876543213',
      email: 'sunita.reddy@email.com',
      documents_status: 'Pending',
      risk_category: 'Medium',
      processing_stage: 'Document Collection'
    }
  ];

  const creditBureauPulls = [
    {
      id: 'CB240001',
      hhid: 'HH240001',
      customer_name: 'Rajesh Kumar',
      bureau_name: 'CIBIL',
      report_type: 'Individual Credit Report',
      pull_date: '2024-01-15 10:30:00',
      credit_score: 720,
      status: 'Success',
      report_id: 'CIB_RPT_240001',
      cost: 50,
      pulled_by: 'System Auto',
      purpose: 'Loan Application LA240001',
      validity_days: 90,
      key_findings: 'Good credit history, no defaults'
    },
    {
      id: 'CB240002',
      hhid: 'HH240002',
      customer_name: 'Priya Sharma',
      bureau_name: 'Experian',
      report_type: 'Commercial Credit Report',
      pull_date: '2024-01-20 14:15:00',
      credit_score: 780,
      status: 'Success',
      report_id: 'EXP_RPT_240002',
      cost: 75,
      pulled_by: 'Underwriter - Vikram Singh',
      purpose: 'Business Loan Application LA240002',
      validity_days: 90,
      key_findings: 'Excellent payment history, strong financials'
    },
    {
      id: 'CB240003',
      hhid: 'HH240003',
      customer_name: 'Amit Patel',
      bureau_name: 'CIBIL',
      report_type: 'Individual Credit Report',
      pull_date: '2024-01-18 09:45:00',
      credit_score: 580,
      status: 'Success',
      report_id: 'CIB_RPT_240003',
      cost: 50,
      pulled_by: 'System Auto',
      purpose: 'Gold Loan Application LA240003',
      validity_days: 90,
      key_findings: 'Multiple defaults, high utilization'
    },
    {
      id: 'CB240004',
      hhid: 'HH240004',
      customer_name: 'Sunita Reddy',
      bureau_name: 'Equifax',
      report_type: 'Individual Credit Report',
      pull_date: '2024-01-22 16:20:00',
      credit_score: 690,
      status: 'Failed',
      report_id: 'N/A',
      cost: 0,
      pulled_by: 'System Auto',
      purpose: 'Personal Loan Application LA240004',
      validity_days: 0,
      key_findings: 'API timeout error - retry required'
    }
  ];

  const underwritingCases = [
    {
      id: 'UW240001',
      application_id: 'LA240001',
      hhid: 'HH240001',
      customer_name: 'Rajesh Kumar',
      product_type: 'Personal Loan',
      amount: 250000,
      assigned_to: 'Vikram Singh',
      assignment_date: '2024-01-15',
      status: 'In Progress',
      priority: 'Medium',
      rule_engine_score: 75,
      rule_engine_decision: 'Approve',
      underwriter_comments: 'Good credit profile, stable income. Recommend approval with standard terms.',
      risk_factors: ['DTI ratio 35%', 'Credit utilization 45%'],
      mitigants: ['Salary account holder', '3 years job stability'],
      final_decision: 'Pending',
      decision_date: null,
      processing_time_hours: 24,
      sla_breach: false
    },
    {
      id: 'UW240002',
      application_id: 'LA240002',
      hhid: 'HH240002',
      customer_name: 'Priya Sharma',
      product_type: 'Business Loan',
      amount: 500000,
      assigned_to: 'Meera Joshi',
      assignment_date: '2024-01-20',
      status: 'Approved',
      priority: 'High',
      rule_engine_score: 85,
      rule_engine_decision: 'Approve',
      underwriter_comments: 'Excellent credit profile and business financials. Premium customer.',
      risk_factors: ['High loan amount'],
      mitigants: ['Excellent credit score', 'Strong business cash flow', 'Existing customer'],
      final_decision: 'Approved',
      decision_date: '2024-01-21',
      processing_time_hours: 18,
      sla_breach: false
    },
    {
      id: 'UW240003',
      application_id: 'LA240003',
      hhid: 'HH240003',
      customer_name: 'Amit Patel',
      product_type: 'Gold Loan',
      amount: 150000,
      assigned_to: 'Ravi Kumar',
      assignment_date: '2024-01-18',
      status: 'Rejected',
      priority: 'Low',
      rule_engine_score: 35,
      rule_engine_decision: 'Reject',
      underwriter_comments: 'Poor credit history with multiple defaults. High risk profile.',
      risk_factors: ['Credit score below threshold', 'Multiple loan defaults', 'High DTI ratio'],
      mitigants: ['Gold collateral available'],
      final_decision: 'Rejected',
      decision_date: '2024-01-19',
      processing_time_hours: 12,
      sla_breach: false
    }
  ];

  const approvalMatrix = [
    {
      id: 'AM001',
      product_type: 'Personal Loan',
      amount_range: '₹50K - ₹2L',
      level_1: 'Branch Manager',
      level_1_limit: 200000,
      level_2: 'Regional Manager',
      level_2_limit: 500000,
      level_3: 'Zonal Head',
      level_3_limit: 1000000,
      level_4: 'Chief Credit Officer',
      level_4_limit: 'Unlimited',
      auto_approval_threshold: 150000,
      auto_approval_conditions: 'Credit Score > 750, DTI < 40%, Existing Customer',
      status: 'Active'
    },
    {
      id: 'AM002',
      product_type: 'Business Loan',
      amount_range: '₹1L - ₹50L',
      level_1: 'Senior Manager',
      level_1_limit: 500000,
      level_2: 'Regional Head',
      level_2_limit: 2000000,
      level_3: 'Zonal Head',
      level_3_limit: 5000000,
      level_4: 'Chief Credit Officer',
      level_4_limit: 'Unlimited',
      auto_approval_threshold: 300000,
      auto_approval_conditions: 'Credit Score > 700, Business Vintage > 2 years',
      status: 'Active'
    },
    {
      id: 'AM003',
      product_type: 'Gold Loan',
      amount_range: '₹25K - ₹20L',
      level_1: 'Branch Manager',
      level_1_limit: 500000,
      level_2: 'Regional Manager',
      level_2_limit: 1000000,
      level_3: 'Zonal Head',
      level_3_limit: 2000000,
      level_4: 'Chief Credit Officer',
      level_4_limit: 'Unlimited',
      auto_approval_threshold: 200000,
      auto_approval_conditions: 'LTV < 75%, Gold Purity > 18K',
      status: 'Active'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'under review': return 'bg-blue-100 text-blue-800';
      case 'pending documents': return 'bg-yellow-100 text-yellow-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'success': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderLoanApplications = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Loan Applications</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search applications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="under-review">Under Review</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="pending-documents">Pending Documents</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Application
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-gray-600">Total Applications</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">Under Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-600">Approved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-gray-600">Rejected</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Application ID</th>
                  <th className="text-left p-3 font-medium">HHID</th>
                  <th className="text-left p-3 font-medium">Applicant</th>
                  <th className="text-left p-3 font-medium">Product</th>
                  <th className="text-left p-3 font-medium">Amount</th>
                  <th className="text-left p-3 font-medium">Credit Score</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Risk</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loanApplications.map((app, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{app.id}</td>
                    <td className="p-3">
                      <button 
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                        onClick={() => alert(`Navigating to Customer 360 view for ${app.hhid}`)}
                      >
                        {app.hhid}
                      </button>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{app.applicant_name}</p>
                        <p className="text-sm text-gray-600">{app.employment_type}</p>
                      </div>
                    </td>
                    <td className="p-3">{app.product_type}</td>
                    <td className="p-3">₹{app.amount_requested.toLocaleString()}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium ${app.credit_score >= 700 ? 'text-green-600' : app.credit_score >= 650 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {app.credit_score}
                        </span>
                        <Star className={`h-4 w-4 ${app.credit_score >= 700 ? 'text-green-500' : app.credit_score >= 650 ? 'text-yellow-500' : 'text-red-500'}`} />
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge className={getRiskColor(app.risk_category)}>
                        {app.risk_category}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
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

  const renderCreditBureauPulls = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Credit Bureau Pulls</h3>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh Status
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Pull Credit Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Total Pulls (MTD)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">142</p>
                <p className="text-sm text-gray-600">Successful</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">14</p>
                <p className="text-sm text-gray-600">Failed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">₹9,450</p>
                <p className="text-sm text-gray-600">Total Cost</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Credit Bureau Pulls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Pull ID</th>
                  <th className="text-left p-3 font-medium">HHID</th>
                  <th className="text-left p-3 font-medium">Customer</th>
                  <th className="text-left p-3 font-medium">Bureau</th>
                  <th className="text-left p-3 font-medium">Report Type</th>
                  <th className="text-left p-3 font-medium">Credit Score</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Cost</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {creditBureauPulls.map((pull, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{pull.id}</td>
                    <td className="p-3">
                      <button 
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                        onClick={() => alert(`Navigating to Customer 360 view for ${pull.hhid}`)}
                      >
                        {pull.hhid}
                      </button>
                    </td>
                    <td className="p-3">{pull.customer_name}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Building className="h-4 w-4 text-gray-500" />
                        <span>{pull.bureau_name}</span>
                      </div>
                    </td>
                    <td className="p-3">{pull.report_type}</td>
                    <td className="p-3">
                      {pull.credit_score ? (
                        <div className="flex items-center space-x-2">
                          <span className={`font-medium ${pull.credit_score >= 700 ? 'text-green-600' : pull.credit_score >= 650 ? 'text-yellow-600' : 'text-red-600'}`}>
                            {pull.credit_score}
                          </span>
                          <Star className={`h-4 w-4 ${pull.credit_score >= 700 ? 'text-green-500' : pull.credit_score >= 650 ? 'text-yellow-500' : 'text-red-500'}`} />
                        </div>
                      ) : (
                        <span className="text-gray-500">N/A</span>
                      )}
                    </td>
                    <td className="p-3">
                      <Badge className={getStatusColor(pull.status)}>
                        {pull.status}
                      </Badge>
                    </td>
                    <td className="p-3">₹{pull.cost}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View Report
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bureau Integration Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">CIBIL</h4>
                <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>API Status</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span>1.2s</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span>98.5%</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost per Pull</span>
                  <span>₹50</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Experian</h4>
                <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>API Status</span>
                  <span className="text-green-600">Online</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span>1.8s</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span>96.2%</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost per Pull</span>
                  <span>₹75</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Equifax</h4>
                <Badge variant="secondary">Inactive</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>API Status</span>
                  <span className="text-red-600">Offline</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time</span>
                  <span>N/A</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span>N/A</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost per Pull</span>
                  <span>₹60</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUnderwritingTracker = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Underwriting Tracker</h3>
        <div className="flex items-center space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cases</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Assign Case
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">18</p>
                <p className="text-sm text-gray-600">Active Cases</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">22.5h</p>
                <p className="text-sm text-gray-600">Avg Processing Time</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">78%</p>
                <p className="text-sm text-gray-600">Approval Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">SLA Breaches</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Underwriting Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Case ID</th>
                  <th className="text-left p-3 font-medium">Application</th>
                  <th className="text-left p-3 font-medium">Customer</th>
                  <th className="text-left p-3 font-medium">Amount</th>
                  <th className="text-left p-3 font-medium">Assigned To</th>
                  <th className="text-left p-3 font-medium">Rule Score</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Processing Time</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {underwritingCases.map((case_, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{case_.id}</td>
                    <td className="p-3">{case_.application_id}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{case_.customer_name}</p>
                        <button 
                          className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                          onClick={() => alert(`Navigating to Customer 360 view for ${case_.hhid}`)}
                        >
                          {case_.hhid}
                        </button>
                      </div>
                    </td>
                    <td className="p-3">₹{case_.amount.toLocaleString()}</td>
                    <td className="p-3">{case_.assigned_to}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium ${case_.rule_engine_score >= 70 ? 'text-green-600' : case_.rule_engine_score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {case_.rule_engine_score}
                        </span>
                        <Badge variant="outline" className={case_.rule_engine_decision === 'Approve' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}>
                          {case_.rule_engine_decision}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={getStatusColor(case_.status)}>
                        {case_.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span>{case_.processing_time_hours}h</span>
                        {case_.sla_breach && <AlertTriangle className="h-4 w-4 text-red-500" />}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Review
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Update
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Underwriter Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Vikram Singh</h4>
                <Badge variant="default" className="bg-green-100 text-green-800">Senior UW</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cases Assigned</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between">
                  <span>Cases Completed</span>
                  <span>10</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Processing Time</span>
                  <span>18.5h</span>
                </div>
                <div className="flex justify-between">
                  <span>Approval Rate</span>
                  <span>85%</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Meera Joshi</h4>
                <Badge variant="default" className="bg-blue-100 text-blue-800">UW Manager</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cases Assigned</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span>Cases Completed</span>
                  <span>8</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Processing Time</span>
                  <span>16.2h</span>
                </div>
                <div className="flex justify-between">
                  <span>Approval Rate</span>
                  <span>92%</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium">Ravi Kumar</h4>
                <Badge variant="default" className="bg-yellow-100 text-yellow-800">Junior UW</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Cases Assigned</span>
                  <span>15</span>
                </div>
                <div className="flex justify-between">
                  <span>Cases Completed</span>
                  <span>12</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Processing Time</span>
                  <span>28.1h</span>
                </div>
                <div className="flex justify-between">
                  <span>Approval Rate</span>
                  <span>68%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderApprovalMatrix = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Approval Matrix Configuration</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Matrix Rule
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Current Approval Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Product Type</th>
                  <th className="text-left p-3 font-medium">Amount Range</th>
                  <th className="text-left p-3 font-medium">Level 1</th>
                  <th className="text-left p-3 font-medium">Level 2</th>
                  <th className="text-left p-3 font-medium">Level 3</th>
                  <th className="text-left p-3 font-medium">Level 4</th>
                  <th className="text-left p-3 font-medium">Auto Approval</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvalMatrix.map((matrix, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{matrix.product_type}</td>
                    <td className="p-3">{matrix.amount_range}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{matrix.level_1}</p>
                        <p className="text-sm text-gray-600">Up to ₹{(matrix.level_1_limit / 100000).toFixed(0)}L</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{matrix.level_2}</p>
                        <p className="text-sm text-gray-600">Up to ₹{(matrix.level_2_limit / 100000).toFixed(0)}L</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{matrix.level_3}</p>
                        <p className="text-sm text-gray-600">Up to ₹{(matrix.level_3_limit / 100000).toFixed(0)}L</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{matrix.level_4}</p>
                        <p className="text-sm text-gray-600">{matrix.level_4_limit}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">₹{(matrix.auto_approval_threshold / 100000).toFixed(1)}L</p>
                        <p className="text-sm text-gray-600">{matrix.auto_approval_conditions}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Approval Hierarchy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">1</span>
                  </div>
                  <div>
                    <p className="font-medium">Branch Manager</p>
                    <p className="text-sm text-gray-600">First level approval</p>
                  </div>
                </div>
                <Badge variant="outline">Up to ₹5L</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">2</span>
                  </div>
                  <div>
                    <p className="font-medium">Regional Manager</p>
                    <p className="text-sm text-gray-600">Second level approval</p>
                  </div>
                </div>
                <Badge variant="outline">Up to ₹20L</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Zonal Head</p>
                    <p className="text-sm text-gray-600">Third level approval</p>
                  </div>
                </div>
                <Badge variant="outline">Up to ₹50L</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">4</span>
                  </div>
                  <div>
                    <p className="font-medium">Chief Credit Officer</p>
                    <p className="text-sm text-gray-600">Final level approval</p>
                  </div>
                </div>
                <Badge variant="outline">Unlimited</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Auto Approval Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg bg-green-50">
                <h4 className="font-medium mb-2">Personal Loan Auto Approval</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount Threshold</span>
                    <span className="font-medium">₹1.5L</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Credit Score</span>
                    <span className="font-medium">&gt; 750</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DTI Ratio</span>
                    <span className="font-medium">&lt; 40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Type</span>
                    <span className="font-medium">Existing</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border rounded-lg bg-blue-50">
                <h4 className="font-medium mb-2">Business Loan Auto Approval</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount Threshold</span>
                    <span className="font-medium">₹3L</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Credit Score</span>
                    <span className="font-medium">&gt; 700</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Business Vintage</span>
                    <span className="font-medium">&gt; 2 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST Filing</span>
                    <span className="font-medium">Regular</span>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border rounded-lg bg-yellow-50">
                <h4 className="font-medium mb-2">Gold Loan Auto Approval</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Amount Threshold</span>
                    <span className="font-medium">₹2L</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LTV Ratio</span>
                    <span className="font-medium">&lt; 75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gold Purity</span>
                    <span className="font-medium">&gt; 18K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Valuation</span>
                    <span className="font-medium">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Credit Management</h2>
        <p className="text-gray-600">Manage loan applications, credit assessments, and approval workflows</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="loan-applications">Loan Applications</TabsTrigger>
          <TabsTrigger value="credit-bureau">Credit Bureau Pulls</TabsTrigger>
          <TabsTrigger value="underwriting">Underwriting Tracker</TabsTrigger>
          <TabsTrigger value="approval-matrix">Approval Matrix</TabsTrigger>
        </TabsList>

        <TabsContent value="loan-applications" className="mt-6">
          {renderLoanApplications()}
        </TabsContent>

        <TabsContent value="credit-bureau" className="mt-6">
          {renderCreditBureauPulls()}
        </TabsContent>

        <TabsContent value="underwriting" className="mt-6">
          {renderUnderwritingTracker()}
        </TabsContent>

        <TabsContent value="approval-matrix" className="mt-6">
          {renderApprovalMatrix()}
        </TabsContent>
      </Tabs>
    </div>
  );
}