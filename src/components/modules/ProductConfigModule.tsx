import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Copy, 
  Eye, 
  Settings,
  DollarSign,
  Users,
  Calendar,
  Target,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Clock,
  Percent,
  Calculator,
  FileText,
  Link,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Building,
  Filter,
  Download,
  Search,
  BarChart3,
  Activity,
  Shield,
  History
} from 'lucide-react';

export default function ProductConfigModule() {
  const [activeTab, setActiveTab] = useState('product-type');
  const [selectedView, setSelectedView] = useState({ type: 'main' });
  const [customerFilter, setCustomerFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [productTypes, setProductTypes] = useState([
    {
      id: 'PL001',
      name: 'Personal Loan',
      category: 'Loans',
      status: 'Active',
      min_amount: 50000,
      max_amount: 1000000,
      term_months: '12-60',
      interest_rate: '12-18%',
      processing_fee: '2%',
      customers: 2847,
      disbursed_amount: 45600000,
      description: 'Unsecured personal loans for various personal needs including medical emergencies, education, travel, and debt consolidation.',
      created_date: '2023-01-15',
      launch_date: '2023-02-01',
      branches: ['Mumbai Central', 'Delhi NCR', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad']
    },
    {
      id: 'BL001',
      name: 'Business Loan',
      category: 'Loans',
      status: 'Active',
      min_amount: 100000,
      max_amount: 5000000,
      term_months: '12-84',
      interest_rate: '14-22%',
      processing_fee: '1.5%',
      customers: 1234,
      disbursed_amount: 78900000,
      description: 'Working capital and term loans for small and medium enterprises to support business growth and expansion.',
      created_date: '2022-11-20',
      launch_date: '2022-12-15',
      branches: ['Mumbai Central', 'Delhi NCR', 'Bangalore', 'Pune']
    },
    {
      id: 'GL001',
      name: 'Gold Loan',
      category: 'Secured Loans',
      status: 'Active',
      min_amount: 25000,
      max_amount: 2000000,
      term_months: '6-36',
      interest_rate: '10-14%',
      processing_fee: '1%',
      customers: 3456,
      disbursed_amount: 34500000,
      description: 'Secured loans against gold jewelry with quick processing and competitive interest rates.',
      created_date: '2023-03-10',
      launch_date: '2023-04-01',
      branches: ['Mumbai Central', 'Delhi NCR', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad', 'Kolkata']
    },
    {
      id: 'VI001',
      name: 'Vehicle Insurance',
      category: 'Insurance',
      status: 'Draft',
      min_amount: 5000,
      max_amount: 500000,
      term_months: '12',
      interest_rate: 'N/A',
      processing_fee: '0%',
      customers: 0,
      disbursed_amount: 0,
      description: 'Comprehensive vehicle insurance coverage for cars, bikes, and commercial vehicles.',
      created_date: '2024-01-10',
      launch_date: 'TBD',
      branches: []
    }
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    description: '',
    estimatedRevenue: '',
    assignedManager: '',
    salesContact: '',
    technicalLead: '',
    stage: '',
    successRate: '',
    priority: '',
    origin: '',
    minAmount: '',
    maxAmount: '',
    termMonths: '',
    interestRate: '',
    processingFee: '',
    createdDate: '',
    launchDate: '',
    branches: [],
    targetSegments: [],
    complianceStatus: '',
    riskLevel: '',
    documents: []
  });



  const sampleCustomers = [
    {
      hhid: 'HH240001',
      name: 'Rajesh Kumar',
      product: 'Personal Loan',
      start_date: '2024-01-15',
      branch: 'Mumbai Central',
      phone: '+91 9876543210',
      email: 'rajesh.kumar@email.com',
      amount: 250000,
      status: 'Active'
    },
    {
      hhid: 'HH240002',
      name: 'Priya Sharma',
      product: 'Personal Loan',
      start_date: '2024-01-20',
      branch: 'Delhi NCR',
      phone: '+91 9876543211',
      email: 'priya.sharma@email.com',
      amount: 150000,
      status: 'Active'
    },
    {
      hhid: 'HH240003',
      name: 'Amit Patel',
      product: 'Business Loan',
      start_date: '2024-01-10',
      branch: 'Bangalore',
      phone: '+91 9876543212',
      email: 'amit.patel@email.com',
      amount: 500000,
      status: 'Active'
    },
    {
      hhid: 'HH240004',
      name: 'Sunita Reddy',
      product: 'Gold Loan',
      start_date: '2024-01-25',
      branch: 'Hyderabad',
      phone: '+91 9876543213',
      email: 'sunita.reddy@email.com',
      amount: 75000,
      status: 'Active'
    },
    {
      hhid: 'HH240005',
      name: 'Vikram Singh',
      product: 'Personal Loan',
      start_date: '2024-01-22',
      branch: 'Pune',
      phone: '+91 9876543214',
      email: 'vikram.singh@email.com',
      amount: 300000,
      status: 'Closed'
    }
  ];

  const getFilteredCustomers = () => {
    let filtered = sampleCustomers;
    
    if (selectedView.productName) {
      filtered = filtered.filter(customer => customer.product === selectedView.productName);
    }
    
    const today = new Date();
    const thisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastQuarter = new Date(today.getFullYear(), today.getMonth() - 3, 1);
    
    switch (customerFilter) {
      case 'ftd':
        filtered = filtered.filter(customer => {
          const customerDate = new Date(customer.start_date);
          return customerDate.toDateString() === today.toDateString();
        });
        break;
      case 'ftm':
        filtered = filtered.filter(customer => {
          const customerDate = new Date(customer.start_date);
          return customerDate >= thisMonth;
        });
        break;
      case 'last_quarter':
        filtered = filtered.filter(customer => {
          const customerDate = new Date(customer.start_date);
          return customerDate >= lastQuarter;
        });
        break;
    }
    
    if (searchTerm) {
      filtered = filtered.filter(customer => 
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.hhid.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const renderProductDetails = () => {
    const product = productTypes.find(p => p.id === selectedView.productId);
    if (!product) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedView({ type: 'main' })}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
            <div>
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
            </div>
          </div>
          <Badge variant={product.status === 'Active' ? 'default' : 'secondary'}>
            {product.status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Customer Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold">{product.customers.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Active Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">₹{(product.disbursed_amount / 10000000).toFixed(1)}Cr</p>
                  <p className="text-sm text-gray-600">Total Disbursed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">₹{Math.round(product.disbursed_amount / product.customers / 1000)}K</p>
                  <p className="text-sm text-gray-600">Average Loan Size</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">{product.branches.length} Branches</p>
                <div className="space-y-1">
                  {product.branches.map((branch, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">{branch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-bold text-green-600">94.2%</p>
                  <p className="text-sm text-gray-600">Collection Efficiency</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-blue-600">2.1%</p>
                  <p className="text-sm text-gray-600">NPA Rate</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-purple-600">4.2 days</p>
                  <p className="text-sm text-gray-600">Avg. Processing Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="dates">Dates</TabsTrigger>
            <TabsTrigger value="activities">Planned Activities</TabsTrigger>
            <TabsTrigger value="compliance">Compliance & Risk</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="history">Change History</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Description</h4>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Loan Parameters</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Amount Range</span>
                          <span>₹{(product.min_amount / 1000).toFixed(0)}K - ₹{(product.max_amount / 100000).toFixed(0)}L</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Term</span>
                          <span>{product.term_months} months</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Interest Rate</span>
                          <span>{product.interest_rate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Processing Fee</span>
                          <span>{product.processing_fee}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Target Segments</h4>
                      <div className="space-y-2">
                        <Badge variant="outline">Salaried Professionals</Badge>
                        <Badge variant="outline">Self-Employed</Badge>
                        <Badge variant="outline">Small Business Owners</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dates" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Important Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Product Creation</p>
                        <p className="text-sm text-gray-600">Initial product design and approval</p>
                      </div>
                    </div>
                    <span className="font-medium">{product.created_date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Activity className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium">Market Launch</p>
                        <p className="text-sm text-gray-600">Product went live for customers</p>
                      </div>
                    </div>
                    <span className="font-medium">{product.launch_date}</span>
                  </div>
                  
                  {product.status === 'Draft' && (
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-yellow-50">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-yellow-500" />
                        <div>
                          <p className="font-medium">Expected Launch</p>
                          <p className="text-sm text-gray-600">Tentative launch date</p>
                        </div>
                      </div>
                      <span className="font-medium">Q2 2024</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Planned Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Q2 2024 - Rate Optimization</h4>
                    <p className="text-sm text-gray-600 mt-1">Review and optimize interest rates based on market conditions and competitor analysis.</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="outline">In Progress</Badge>
                      <span className="text-xs text-gray-500">Due: June 30, 2024</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">Q3 2024 - Digital Enhancement</h4>
                    <p className="text-sm text-gray-600 mt-1">Implement fully digital loan processing with AI-powered underwriting.</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="outline">Planned</Badge>
                      <span className="text-xs text-gray-500">Due: September 15, 2024</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium">Q4 2024 - Market Expansion</h4>
                    <p className="text-sm text-gray-600 mt-1">Launch in 5 new cities with localized marketing campaigns.</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <Badge variant="outline">Planned</Badge>
                      <span className="text-xs text-gray-500">Due: December 31, 2024</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Compliance & Risk Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Regulatory Compliance</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>RBI Guidelines</span>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Fair Practice Code</span>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>KYC/AML Compliance</span>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span>Data Protection</span>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Risk Assessment</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Credit Risk</span>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Medium</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Operational Risk</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Low</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Market Risk</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Low</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Liquidity Risk</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Low</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Associated Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Product Policy Document', type: 'PDF', size: '2.4 MB', date: '2024-01-15' },
                    { name: 'Risk Assessment Report', type: 'PDF', size: '1.8 MB', date: '2024-01-10' },
                    { name: 'Compliance Checklist', type: 'PDF', size: '856 KB', date: '2024-01-05' },
                    { name: 'Market Research Analysis', type: 'PDF', size: '3.2 MB', date: '2023-12-20' },
                    { name: 'Pricing Strategy Document', type: 'PDF', size: '1.5 MB', date: '2023-12-15' }
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-blue-500" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-gray-600">{doc.type} • {doc.size} • {doc.date}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="h-5 w-5 mr-2" />
                  Change History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: '2024-01-20',
                      user: 'Rajesh Kumar',
                      action: 'Updated interest rate range',
                      details: 'Changed from 11-17% to 12-18%',
                      type: 'modification'
                    },
                    {
                      date: '2024-01-15',
                      user: 'Priya Sharma',
                      action: 'Added new branch availability',
                      details: 'Added Pune and Hyderabad branches',
                      type: 'addition'
                    },
                    {
                      date: '2024-01-10',
                      user: 'Amit Patel',
                      action: 'Updated processing fee',
                      details: 'Reduced from 2.5% to 2%',
                      type: 'modification'
                    },
                    {
                      date: '2023-12-01',
                      user: 'System',
                      action: 'Product activated',
                      details: 'Product went live for customer applications',
                      type: 'system'
                    }
                  ].map((change, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        change.type === 'modification' ? 'bg-blue-500' :
                        change.type === 'addition' ? 'bg-green-500' : 'bg-gray-500'
                      }`} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{change.action}</p>
                          <span className="text-sm text-gray-500">{change.date}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{change.details}</p>
                        <p className="text-xs text-gray-500 mt-1">by {change.user}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  };

  const renderProductCustomers = () => {
    const filteredCustomers = getFilteredCustomers();

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedView({ type: 'main' })}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Button>
            <div>
              <h2 className="text-2xl font-bold">{selectedView.productName} Customers</h2>
              <p className="text-gray-600">Manage and view customer records</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Customer Records</CardTitle>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search customers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                </div>
                <Select value={customerFilter} onValueChange={setCustomerFilter}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Customers</SelectItem>
                    <SelectItem value="ftd">First Today (FTD)</SelectItem>
                    <SelectItem value="ftm">First This Month (FTM)</SelectItem>
                    <SelectItem value="last_quarter">Last Quarter</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">HHID</th>
                    <th className="text-left p-3 font-medium">Customer Name</th>
                    <th className="text-left p-3 font-medium">Product Usage Start Date</th>
                    <th className="text-left p-3 font-medium">Branch</th>
                    <th className="text-left p-3 font-medium">Contact Info</th>
                    <th className="text-left p-3 font-medium">Amount</th>
                    <th className="text-left p-3 font-medium">Status</th>
                    <th className="text-left p-3 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((customer, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="p-3">
                        <button 
                          className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                          onClick={() => alert(`Navigating to Customer 360 view for ${customer.hhid}`)}
                        >
                          {customer.hhid}
                        </button>
                      </td>
                      <td className="p-3 font-medium">{customer.name}</td>
                      <td className="p-3">{customer.start_date}</td>
                      <td className="p-3">{customer.branch}</td>
                      <td className="p-3">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Phone className="h-3 w-3 text-gray-500" />
                            <span className="text-sm">{customer.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-3 w-3 text-gray-500" />
                            <span className="text-sm">{customer.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">₹{customer.amount.toLocaleString()}</td>
                      <td className="p-3">
                        <Badge variant={customer.status === 'Active' ? 'default' : 'secondary'}>
                          {customer.status}
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
            
            {filteredCustomers.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No customers found matching the selected criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };

  const handleSaveProduct = () => {
    // Generate new product ID
    const newId = `PR${String(productTypes.length + 1).padStart(3, '0')}`;
    
    // Create new product object
    const productToAdd = {
      id: newId,
      name: newProduct.name,
      category: newProduct.category,
      status: newProduct.stage === 'active' ? 'Active' : 'Draft',
      min_amount: parseInt(newProduct.minAmount) || 0,
      max_amount: parseInt(newProduct.maxAmount) || 0,
      term_months: newProduct.termMonths,
      interest_rate: newProduct.interestRate + '%',
      processing_fee: newProduct.processingFee + '%',
      customers: 0,
      disbursed_amount: 0,
      description: newProduct.description,
      created_date: newProduct.createdDate,
      launch_date: newProduct.launchDate || 'TBD',
      branches: newProduct.branches
    };
    
    // Add to product list
    setProductTypes([...productTypes, productToAdd]);
    
    alert('Product saved successfully!');
    setShowAddProductModal(false);
    
    // Reset form
    setNewProduct({
      name: '',
      category: '',
      description: '',
      estimatedRevenue: '',
      assignedManager: '',
      salesContact: '',
      technicalLead: '',
      stage: '',
      successRate: '',
      priority: '',
      origin: '',
      minAmount: '',
      maxAmount: '',
      termMonths: '',
      interestRate: '',
      processingFee: '',
      createdDate: '',
      launchDate: '',
      branches: [],
      targetSegments: [],
      complianceStatus: '',
      riskLevel: '',
      documents: []
    });
  };

  const renderAddProductModal = () => (
    <Dialog open={showAddProductModal} onOpenChange={setShowAddProductModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* General Product Details */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Package className="h-5 w-5 mr-2" />
              General Product Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Product Name *</Label>
                <Input
                  id="name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  placeholder="e.g., Premium Personal Loan"
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={newProduct.category} onValueChange={(value) => setNewProduct({...newProduct, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="loans">Loans</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="investment">Investment</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  placeholder="Detailed product description and purpose"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="estimatedRevenue">Estimated Revenue (₹)</Label>
                <Input
                  id="estimatedRevenue"
                  type="number"
                  value={newProduct.estimatedRevenue}
                  onChange={(e) => setNewProduct({...newProduct, estimatedRevenue: e.target.value})}
                  placeholder="Annual revenue projection"
                />
              </div>
            </div>
          </div>

          {/* Department/Team Inputs */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Department & Team Assignment
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="assignedManager">Assigned Manager</Label>
                <Input
                  id="assignedManager"
                  value={newProduct.assignedManager}
                  onChange={(e) => setNewProduct({...newProduct, assignedManager: e.target.value})}
                  placeholder="Product manager name"
                />
              </div>
              <div>
                <Label htmlFor="salesContact">Sales Contact</Label>
                <Input
                  id="salesContact"
                  value={newProduct.salesContact}
                  onChange={(e) => setNewProduct({...newProduct, salesContact: e.target.value})}
                  placeholder="Sales team lead"
                />
              </div>
              <div>
                <Label htmlFor="technicalLead">Technical Lead</Label>
                <Input
                  id="technicalLead"
                  value={newProduct.technicalLead}
                  onChange={(e) => setNewProduct({...newProduct, technicalLead: e.target.value})}
                  placeholder="Technical implementation lead"
                />
              </div>
            </div>
          </div>

          {/* Status and Classification */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Status & Classification
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="stage">Stage</Label>
                <Select value={newProduct.stage} onValueChange={(value) => setNewProduct({...newProduct, stage: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="concept">Concept</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="testing">Testing</SelectItem>
                    <SelectItem value="launch">Launch Ready</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="successRate">Success Rate (%)</Label>
                <Input
                  id="successRate"
                  type="number"
                  min="0"
                  max="100"
                  value={newProduct.successRate}
                  onChange={(e) => setNewProduct({...newProduct, successRate: e.target.value})}
                  placeholder="Expected success rate"
                />
              </div>
              <div>
                <Label htmlFor="priority">Priority</Label>
                <Select value={newProduct.priority} onValueChange={(value) => setNewProduct({...newProduct, priority: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="origin">Origin</Label>
                <Select value={newProduct.origin} onValueChange={(value) => setNewProduct({...newProduct, origin: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select origin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="market-research">Market Research</SelectItem>
                    <SelectItem value="customer-request">Customer Request</SelectItem>
                    <SelectItem value="competitive-analysis">Competitive Analysis</SelectItem>
                    <SelectItem value="internal-innovation">Internal Innovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              Product Parameters
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="minAmount">Minimum Amount (₹)</Label>
                <Input
                  id="minAmount"
                  type="number"
                  value={newProduct.minAmount}
                  onChange={(e) => setNewProduct({...newProduct, minAmount: e.target.value})}
                  placeholder="Minimum loan amount"
                />
              </div>
              <div>
                <Label htmlFor="maxAmount">Maximum Amount (₹)</Label>
                <Input
                  id="maxAmount"
                  type="number"
                  value={newProduct.maxAmount}
                  onChange={(e) => setNewProduct({...newProduct, maxAmount: e.target.value})}
                  placeholder="Maximum loan amount"
                />
              </div>
              <div>
                <Label htmlFor="termMonths">Term (Months)</Label>
                <Input
                  id="termMonths"
                  value={newProduct.termMonths}
                  onChange={(e) => setNewProduct({...newProduct, termMonths: e.target.value})}
                  placeholder="e.g., 12-60"
                />
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  value={newProduct.interestRate}
                  onChange={(e) => setNewProduct({...newProduct, interestRate: e.target.value})}
                  placeholder="e.g., 12-18"
                />
              </div>
              <div>
                <Label htmlFor="processingFee">Processing Fee (%)</Label>
                <Input
                  id="processingFee"
                  value={newProduct.processingFee}
                  onChange={(e) => setNewProduct({...newProduct, processingFee: e.target.value})}
                  placeholder="e.g., 2.0"
                />
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Important Dates
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="createdDate">Creation Date</Label>
                <Input
                  id="createdDate"
                  type="date"
                  value={newProduct.createdDate}
                  onChange={(e) => setNewProduct({...newProduct, createdDate: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="launchDate">Expected Launch Date</Label>
                <Input
                  id="launchDate"
                  type="date"
                  value={newProduct.launchDate}
                  onChange={(e) => setNewProduct({...newProduct, launchDate: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Availability & Target Segments
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Available Branches</Label>
                <div className="space-y-2 mt-2">
                  {['Mumbai Central', 'Delhi NCR', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad', 'Kolkata'].map((branch) => (
                    <div key={branch} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={branch}
                        checked={newProduct.branches.includes(branch)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewProduct({...newProduct, branches: [...newProduct.branches, branch]});
                          } else {
                            setNewProduct({...newProduct, branches: newProduct.branches.filter(b => b !== branch)});
                          }
                        }}
                      />
                      <label htmlFor={branch} className="text-sm">{branch}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Label>Target Segments</Label>
                <div className="space-y-2 mt-2">
                  {['Salaried Professionals', 'Self-Employed', 'Small Business Owners', 'Students', 'Senior Citizens'].map((segment) => (
                    <div key={segment} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={segment}
                        checked={newProduct.targetSegments.includes(segment)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewProduct({...newProduct, targetSegments: [...newProduct.targetSegments, segment]});
                          } else {
                            setNewProduct({...newProduct, targetSegments: newProduct.targetSegments.filter(s => s !== segment)});
                          }
                        }}
                      />
                      <label htmlFor={segment} className="text-sm">{segment}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Compliance and Risk */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Compliance & Risk Assessment
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="complianceStatus">Compliance Status</Label>
                <Select value={newProduct.complianceStatus} onValueChange={(value) => setNewProduct({...newProduct, complianceStatus: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select compliance status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="compliant">Fully Compliant</SelectItem>
                    <SelectItem value="pending">Pending Review</SelectItem>
                    <SelectItem value="partial">Partially Compliant</SelectItem>
                    <SelectItem value="non-compliant">Non-Compliant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="riskLevel">Risk Level</Label>
                <Select value={newProduct.riskLevel} onValueChange={(value) => setNewProduct({...newProduct, riskLevel: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select risk level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t">
          <Button variant="outline" onClick={() => setShowAddProductModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSaveProduct}>
            Save Product
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderProductType = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Product Types</h3>
        <Button onClick={() => setShowAddProductModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {productTypes.map(product => (
          <Card key={product.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <button 
                    onClick={() => setSelectedView({ type: 'productDetails', productId: product.id, productName: product.name })}
                    className="text-lg font-semibold text-blue-600 hover:text-blue-800 hover:underline text-left"
                  >
                    {product.name}
                  </button>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={product.status === 'Active' ? 'default' : 'secondary'}>
                    {product.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Amount Range</p>
                  <p className="font-medium">₹{(product.min_amount / 1000).toFixed(0)}K - ₹{(product.max_amount / 100000).toFixed(0)}L</p>
                </div>
                <div>
                  <p className="text-gray-600">Term</p>
                  <p className="font-medium">{product.term_months} months</p>
                </div>
                <div>
                  <p className="text-gray-600">Interest Rate</p>
                  <p className="font-medium">{product.interest_rate}</p>
                </div>
                <div>
                  <p className="text-gray-600">Processing Fee</p>
                  <p className="font-medium">{product.processing_fee}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span>{product.customers.toLocaleString()} customers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-gray-500" />
                      <span>₹{(product.disbursed_amount / 10000000).toFixed(1)}Cr disbursed</span>
                    </div>
                  </div>
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="text-blue-600 p-0"
                    onClick={() => setSelectedView({ type: 'productCustomers', productId: product.id, productName: product.name })}
                  >
                    <Link className="h-3 w-3 mr-1" />
                    View Customers
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Render based on selected view
  if (selectedView.type === 'productDetails') {
    return (
      <div className="p-6">
        {renderProductDetails()}
      </div>
    );
  }

  if (selectedView.type === 'productCustomers') {
    return (
      <div className="p-6">
        {renderProductCustomers()}
      </div>
    );
  }

  // Main view with tabs
  return (
    <div className="p-6">
      {renderAddProductModal()}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Product Configuration</h2>
        <p className="text-gray-600">Configure and manage financial products and their parameters</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="product-type">Product Type</TabsTrigger>
          <TabsTrigger value="price-config">Price Configuration</TabsTrigger>
          <TabsTrigger value="eligibility">Eligibility Matrix</TabsTrigger>
          <TabsTrigger value="payout">Payout Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="product-type" className="mt-6">
          {renderProductType()}
        </TabsContent>

        <TabsContent value="price-config" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Price Configuration</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Price Rule
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Percent className="h-5 w-5 mr-2" />
                    Interest Rate Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Product Type</Label>
                        <Select defaultValue="personal-loan">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal-loan">Personal Loan</SelectItem>
                            <SelectItem value="business-loan">Business Loan</SelectItem>
                            <SelectItem value="gold-loan">Gold Loan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Base Rate (%)</Label>
                        <Input type="number" defaultValue="12.5" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Risk Premium Adjustments</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Credit Score &lt; 650</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">+3.5%</span>
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Credit Score 650-750</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">+1.5%</span>
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Credit Score &gt; 750</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">Base Rate</span>
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2" />
                    Fee Structure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Processing Fee</p>
                          <p className="text-sm text-gray-600">One-time upfront charge</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">2.0%</p>
                          <p className="text-sm text-gray-600">Min ₹1,000</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Documentation Fee</p>
                          <p className="text-sm text-gray-600">Legal and verification</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹500</p>
                          <p className="text-sm text-gray-600">Fixed</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Prepayment Charges</p>
                          <p className="text-sm text-gray-600">Early closure penalty</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">2.5%</p>
                          <p className="text-sm text-gray-600">After 12 months: Nil</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Late Payment Fee</p>
                          <p className="text-sm text-gray-600">Per delayed EMI</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">₹500</p>
                          <p className="text-sm text-gray-600">+ 2% penalty interest</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-3 border-t">
                      <h4 className="font-medium mb-2">Conditional Discounts</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Salary Account Holder</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700">-0.5% Interest</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Existing Customer</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700">-0.25% Interest</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span>Digital Application</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700">50% Processing Fee Waiver</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Dynamic Pricing Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Rule Name</th>
                        <th className="text-left p-3 font-medium">Condition</th>
                        <th className="text-left p-3 font-medium">Adjustment</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">High Value Customer</td>
                        <td className="p-3">Loan Amount &gt; ₹5L AND Credit Score &gt; 750</td>
                        <td className="p-3 text-green-600">-1.0% Interest Rate</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Festive Season Discount</td>
                        <td className="p-3">Application Date: Oct 1 - Nov 30</td>
                        <td className="p-3 text-green-600">Processing Fee Waiver</td>
                        <td className="p-3">
                          <Badge variant="secondary">Inactive</Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Risk-Based Pricing</td>
                        <td className="p-3">Credit Score &lt; 600</td>
                        <td className="p-3 text-red-600">+4.0% Interest Rate</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="eligibility" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Eligibility Matrix</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Eligibility Rule
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Basic Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Product Type</Label>
                        <Select defaultValue="personal-loan">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal-loan">Personal Loan</SelectItem>
                            <SelectItem value="business-loan">Business Loan</SelectItem>
                            <SelectItem value="gold-loan">Gold Loan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Minimum Age</Label>
                        <Input type="number" defaultValue="21" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Maximum Age</Label>
                        <Input type="number" defaultValue="65" />
                      </div>
                      <div>
                        <Label>Minimum Income (₹)</Label>
                        <Input type="number" defaultValue="25000" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Employment Type</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="salaried" defaultChecked />
                          <label htmlFor="salaried" className="text-sm">Salaried</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="self-employed" defaultChecked />
                          <label htmlFor="self-employed" className="text-sm">Self Employed</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="business" />
                          <label htmlFor="business" className="text-sm">Business Owner</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Credit & Financial Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Minimum Credit Score</Label>
                        <Input type="number" defaultValue="650" />
                      </div>
                      <div>
                        <Label>Maximum DTI Ratio (%)</Label>
                        <Input type="number" defaultValue="50" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Work Experience (Years)</Label>
                        <Input type="number" defaultValue="2" />
                      </div>
                      <div>
                        <Label>Current Job Tenure (Months)</Label>
                        <Input type="number" defaultValue="12" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Negative Criteria (Auto Reject)</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="bankruptcy" defaultChecked />
                          <label htmlFor="bankruptcy" className="text-sm">Bankruptcy in last 7 years</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="defaults" defaultChecked />
                          <label htmlFor="defaults" className="text-sm">Active loan defaults</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="criminal" defaultChecked />
                          <label htmlFor="criminal" className="text-sm">Criminal background</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weighted Scoring Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-3">Scoring Parameters</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span>Credit Score</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">35%</span>
                            <Input type="range" min="0" max="100" defaultValue="35" className="w-20" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span>Income Stability</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">25%</span>
                            <Input type="range" min="0" max="100" defaultValue="25" className="w-20" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span>Debt-to-Income Ratio</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">20%</span>
                            <Input type="range" min="0" max="100" defaultValue="20" className="w-20" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span>Banking Relationship</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">10%</span>
                            <Input type="range" min="0" max="100" defaultValue="10" className="w-20" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span>Employment History</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium">10%</span>
                            <Input type="range" min="0" max="100" defaultValue="10" className="w-20" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Score Ranges & Actions</h4>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg bg-green-50">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Excellent (80-100)</span>
                            <Badge variant="default" className="bg-green-600">Auto Approve</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Premium rates, higher limits</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-blue-50">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Good (65-79)</span>
                            <Badge variant="default" className="bg-blue-600">Standard Approve</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Standard rates and terms</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-yellow-50">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Fair (50-64)</span>
                            <Badge variant="outline" className="bg-yellow-100 text-yellow-700">Manual Review</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Additional verification required</p>
                        </div>
                        <div className="p-3 border rounded-lg bg-red-50">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">Poor (&lt;50)</span>
                            <Badge variant="destructive">Auto Reject</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Does not meet minimum criteria</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Regional & Demographic Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Region/State</th>
                        <th className="text-left p-3 font-medium">Product Availability</th>
                        <th className="text-left p-3 font-medium">Min Income Adjustment</th>
                        <th className="text-left p-3 font-medium">Special Conditions</th>
                        <th className="text-left p-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Maharashtra</td>
                        <td className="p-3">All Products</td>
                        <td className="p-3">Base (₹25,000)</td>
                        <td className="p-3">-</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Delhi NCR</td>
                        <td className="p-3">All Products</td>
                        <td className="p-3">+20% (₹30,000)</td>
                        <td className="p-3">Higher cost of living</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Karnataka</td>
                        <td className="p-3">Personal, Gold Loan</td>
                        <td className="p-3">Base (₹25,000)</td>
                        <td className="p-3">Tech sector preference</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Rural Areas</td>
                        <td className="p-3">Gold Loan Only</td>
                        <td className="p-3">-40% (₹15,000)</td>
                        <td className="p-3">Agricultural income accepted</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payout" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Payout Schedule Configuration</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Schedule Template
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Disbursement Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Product Type</Label>
                        <Select defaultValue="personal-loan">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal-loan">Personal Loan</SelectItem>
                            <SelectItem value="business-loan">Business Loan</SelectItem>
                            <SelectItem value="gold-loan">Gold Loan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Disbursement Mode</Label>
                        <Select defaultValue="single">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Single Disbursement</SelectItem>
                            <SelectItem value="multiple">Multiple Tranches</SelectItem>
                            <SelectItem value="milestone">Milestone Based</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Disbursement Timeline</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Document Verification</span>
                          <span className="text-sm font-medium">Day 0-2</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Credit Approval</span>
                          <span className="text-sm font-medium">Day 2-5</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Legal & Technical Clearance</span>
                          <span className="text-sm font-medium">Day 5-7</span>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg bg-green-50">
                          <span className="text-sm font-medium">Disbursement</span>
                          <span className="text-sm font-medium">Day 7</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Disbursement Conditions</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="insurance" defaultChecked />
                          <label htmlFor="insurance" className="text-sm">Insurance premium deduction</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="processing-fee" defaultChecked />
                          <label htmlFor="processing-fee" className="text-sm">Processing fee deduction</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="advance-emi" />
                          <label htmlFor="advance-emi" className="text-sm">Advance EMI collection</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2" />
                    Repayment Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Repayment Mode</Label>
                        <Select defaultValue="emi">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emi">Equal Monthly Installments</SelectItem>
                            <SelectItem value="bullet">Bullet Payment</SelectItem>
                            <SelectItem value="flexible">Flexible EMI</SelectItem>
                            <SelectItem value="step-up">Step-up EMI</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Payment Method</Label>
                        <Select defaultValue="nach">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nach">NACH (Auto Debit)</SelectItem>
                            <SelectItem value="enach">E-NACH</SelectItem>
                            <SelectItem value="manual">Manual Payment</SelectItem>
                            <SelectItem value="upi">UPI Auto Pay</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>EMI Date</Label>
                        <Select defaultValue="5">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st of Month</SelectItem>
                            <SelectItem value="5">5th of Month</SelectItem>
                            <SelectItem value="10">10th of Month</SelectItem>
                            <SelectItem value="15">15th of Month</SelectItem>
                            <SelectItem value="custom">Custom Date</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Grace Period (Days)</Label>
                        <Input type="number" defaultValue="3" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium">Prepayment Options</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Partial Prepayment</span>
                          <div className="flex items-center space-x-2">
                            <Switch defaultChecked />
                            <span className="text-sm">Allowed</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Full Prepayment</span>
                          <div className="flex items-center space-x-2">
                            <Switch defaultChecked />
                            <span className="text-sm">Allowed</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="text-sm">Prepayment Charges</span>
                          <span className="text-sm font-medium">2.5% (First 12 months)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>EMI Schedule Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Template Name</th>
                        <th className="text-left p-3 font-medium">Product Type</th>
                        <th className="text-left p-3 font-medium">Tenure Range</th>
                        <th className="text-left p-3 font-medium">EMI Type</th>
                        <th className="text-left p-3 font-medium">Payment Mode</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Standard Personal Loan</td>
                        <td className="p-3">Personal Loan</td>
                        <td className="p-3">12-60 months</td>
                        <td className="p-3">Fixed EMI</td>
                        <td className="p-3">NACH</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Business Loan Flexible</td>
                        <td className="p-3">Business Loan</td>
                        <td className="p-3">12-84 months</td>
                        <td className="p-3">Step-up EMI</td>
                        <td className="p-3">E-NACH</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">Gold Loan Short Term</td>
                        <td className="p-3">Gold Loan</td>
                        <td className="p-3">6-36 months</td>
                        <td className="p-3">Interest Only + Bullet</td>
                        <td className="p-3">Manual/UPI</td>
                        <td className="p-3">
                          <Badge variant="default">Active</Badge>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Collection & Recovery Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Collection Timeline</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Day 1-3 (Soft Reminder)</span>
                          <Badge variant="outline" className="bg-blue-50 text-blue-700">SMS + Email</Badge>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Friendly payment reminder</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Day 4-7 (Phone Call)</span>
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700">Call Center</Badge>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Personal follow-up call</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Day 8-15 (Field Visit)</span>
                          <Badge variant="outline" className="bg-orange-50 text-orange-700">Field Team</Badge>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">On-site collection attempt</p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Day 16+ (Legal Notice)</span>
                          <Badge variant="outline" className="bg-red-50 text-red-700">Legal Team</Badge>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Formal legal proceedings</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Recovery Options</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm">Restructuring</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm">Settlement Options</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm">Asset Recovery</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <span className="text-sm">Third-party Collection</span>
                        <Switch />
                      </div>
                      
                      <div className="mt-4 p-3 border rounded-lg bg-gray-50">
                        <h5 className="font-medium text-sm mb-2">Recovery Targets</h5>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>0-30 DPD Recovery Rate</span>
                            <span className="font-medium">95%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>31-90 DPD Recovery Rate</span>
                            <span className="font-medium">80%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>90+ DPD Recovery Rate</span>
                            <span className="font-medium">60%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}