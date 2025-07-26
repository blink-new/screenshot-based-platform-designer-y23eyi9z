import React, { useState } from 'react'
import { Search, Plus, User, FileText, Phone, Mail, MapPin, Calendar, Upload, CheckCircle, AlertCircle, Eye, Download, ExternalLink, CreditCard, Clock, Building, DollarSign } from 'lucide-react'

const CustomerModule = () => {
  const [activeTab, setActiveTab] = useState('search')
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [uploadedDocument, setUploadedDocument] = useState(null)
  const [extractedData, setExtractedData] = useState(null)
  const [eligibleProducts, setEligibleProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const tabs = [
    { id: 'search', label: 'Search Customer', icon: Search },
    { id: 'new', label: 'New Customer', icon: Plus },
    { id: 'existing', label: 'Existing Customer', icon: User }
  ]

  const sampleCustomers = [
    {
      hhid: 'HH001234',
      name: 'Rajesh Kumar',
      mobile: '+91 9876543210',
      email: 'rajesh@email.com',
      status: 'Active',
      creditScore: 750,
      address: 'Mumbai, Maharashtra',
      memberSince: '2023',
      kycStatus: 'Verified',
      monthlyIncome: '₹65,000',
      occupation: 'Software Engineer',
      loanHistory: [
        { id: 'LN001', type: 'Personal Loan', amount: '₹2,50,000', status: 'Repaid', date: '2023-01-15', emi: '₹12,500' },
        { id: 'LN002', type: 'Business Loan', amount: '₹5,00,000', status: 'Active', date: '2024-06-10', emi: '₹28,750' }
      ],
      activeCases: [
        { id: 'CS001', type: 'Loan Application', status: 'Under Review', date: '2024-12-20', assignedTo: 'Credit Team' },
        { id: 'CS002', type: 'Document Update', status: 'Pending', date: '2024-12-18', assignedTo: 'KYC Team' }
      ],
      kycDocuments: [
        { type: 'Aadhar Card', status: 'Verified', uploadDate: '2023-01-10', docId: 'DOC001' },
        { type: 'PAN Card', status: 'Verified', uploadDate: '2023-01-10', docId: 'DOC002' },
        { type: 'Bank Statement', status: 'Verified', uploadDate: '2024-06-05', docId: 'DOC003' },
        { type: 'Salary Slip', status: 'Verified', uploadDate: '2024-11-15', docId: 'DOC004' }
      ],
      supportTickets: [
        { id: 'TK001', subject: 'Loan EMI Query', status: 'Resolved', date: '2024-11-15', priority: 'Medium' },
        { id: 'TK002', subject: 'Document Upload Issue', status: 'Open', date: '2024-12-10', priority: 'High' }
      ],
      financialSummary: {
        totalBorrowed: '₹7,50,000',
        totalRepaid: '₹2,50,000',
        outstandingAmount: '₹4,75,000',
        nextEmiDate: '2025-01-15',
        creditUtilization: '65%'
      }
    },
    {
      hhid: 'HH001235',
      name: 'Priya Sharma',
      mobile: '+91 9876543211',
      email: 'priya@email.com',
      status: 'Active',
      creditScore: 680,
      address: 'Delhi, NCR',
      memberSince: '2024',
      kycStatus: 'Pending',
      monthlyIncome: '₹45,000',
      occupation: 'Marketing Manager',
      loanHistory: [
        { id: 'LN003', type: 'Gold Loan', amount: '₹1,50,000', status: 'Active', date: '2024-08-20', emi: '₹8,500' }
      ],
      activeCases: [
        { id: 'CS003', type: 'KYC Verification', status: 'In Progress', date: '2024-12-15', assignedTo: 'KYC Team' }
      ],
      kycDocuments: [
        { type: 'Aadhar Card', status: 'Verified', uploadDate: '2024-08-15', docId: 'DOC005' },
        { type: 'PAN Card', status: 'Pending', uploadDate: '2024-08-15', docId: 'DOC006' }
      ],
      supportTickets: [
        { id: 'TK003', subject: 'KYC Document Query', status: 'Open', date: '2024-12-15', priority: 'Low' }
      ],
      financialSummary: {
        totalBorrowed: '₹1,50,000',
        totalRepaid: '₹45,000',
        outstandingAmount: '₹1,05,000',
        nextEmiDate: '2025-01-20',
        creditUtilization: '35%'
      }
    }
  ]

  const handleDocumentUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setUploadedDocument(file)
      // Simulate document processing and data extraction
      setTimeout(() => {
        setExtractedData({
          name: 'Amit Patel',
          hhid: 'HH001236',
          kycId: 'AADHAR-1234-5678-9012',
          bankIfsc: 'HDFC0001234',
          monthlyIncome: '₹45,000',
          address: 'Ahmedabad, Gujarat',
          panNumber: 'ABCDE1234F',
          bankAccount: '12345678901234',
          occupation: 'Business Owner'
        })
        setEligibleProducts([
          { name: 'Personal Loan', amount: 'Up to ₹3,00,000', interest: '12.5%', eligible: true, processingFee: '2%' },
          { name: 'Business Loan', amount: 'Up to ₹8,00,000', interest: '14.2%', eligible: true, processingFee: '1.5%' },
          { name: 'Gold Loan', amount: 'Up to ₹2,00,000', interest: '10.8%', eligible: false, reason: 'No gold assets declared' },
          { name: 'Vehicle Loan', amount: 'Up to ₹5,00,000', interest: '13.5%', eligible: true, processingFee: '1%' }
        ])
      }, 2000)
    }
  }

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer)
    setActiveTab('existing')
  }

  const handleHHIDClick = (hhid) => {
    const customer = sampleCustomers.find(c => c.hhid === hhid)
    if (customer) {
      setSelectedCustomer(customer)
      setActiveTab('existing')
    }
  }

  const filteredCustomers = sampleCustomers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.hhid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.mobile.includes(searchTerm)
  )

  const renderSearchCustomer = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Customer</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">HHID</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter HHID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter mobile number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Search
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-gray-900">Search Results ({filteredCustomers.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">HHID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCustomers.map((customer) => (
                <tr key={customer.hhid} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 cursor-pointer hover:text-blue-800"
                      onClick={() => handleHHIDClick(customer.hhid)}>
                    {customer.hhid}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{customer.mobile}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <span className={`font-semibold ${customer.creditScore >= 700 ? 'text-green-600' : customer.creditScore >= 600 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {customer.creditScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      className="text-blue-600 hover:text-blue-900 mr-3"
                      onClick={() => handleCustomerClick(customer)}
                    >
                      View 360°
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      Quick Actions
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderNewCustomer = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Onboarding via Document Upload</h3>
        
        {/* Step 1: Mobile and Document Upload */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
              <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+91 XXXXXXXXXX" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Enrollment Document Upload *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label htmlFor="enrollment-upload" className="cursor-pointer">
                    <span className="mt-2 block text-sm font-medium text-gray-900">
                      Upload Single Enrollment Document
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                      PDF/Scan containing KYC, Bank, Asset, Residence & Personal details
                    </span>
                    <span className="mt-1 block text-xs text-gray-400">
                      Supported: PDF, JPG, PNG (Max 10MB)
                    </span>
                  </label>
                  <input 
                    id="enrollment-upload" 
                    name="enrollment-upload" 
                    type="file" 
                    className="sr-only"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleDocumentUpload}
                  />
                </div>
              </div>
              
              {uploadedDocument && (
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-gray-900">Document uploaded: {uploadedDocument.name}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    🤖 AI is processing document for data extraction...
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Auto-extracted Data */}
          {extractedData && (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Auto-Extracted Data
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" value={extractedData.name} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Generated HHID</label>
                    <input type="text" value={extractedData.hhid} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">KYC ID (Aadhar)</label>
                    <input type="text" value={extractedData.kycId} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bank IFSC</label>
                    <input type="text" value={extractedData.bankIfsc} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
                    <input type="text" value={extractedData.monthlyIncome} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                    <input type="text" value={extractedData.occupation} className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Eligibility Suggestions */}
        {eligibleProducts.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <DollarSign className="h-5 w-5 mr-2 text-green-600" />
              Real-time Product Eligibility Analysis
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {eligibleProducts.map((product, index) => (
                <div key={index} className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                  product.eligible ? 'border-green-200 bg-green-50 hover:border-green-300' : 'border-red-200 bg-red-50 hover:border-red-300'
                }`}>
                  <div className="flex items-center space-x-2 mb-3">
                    {product.eligible ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    <h5 className="font-semibold text-gray-900">{product.name}</h5>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-600"><strong>Amount:</strong> {product.amount}</p>
                    <p className="text-gray-600"><strong>Interest:</strong> {product.interest}</p>
                    {product.processingFee && (
                      <p className="text-gray-600"><strong>Processing Fee:</strong> {product.processingFee}</p>
                    )}
                    {!product.eligible && product.reason && (
                      <p className="text-xs text-red-600 mt-2 p-2 bg-red-100 rounded">{product.reason}</p>
                    )}
                    {product.eligible && (
                      <button className="w-full mt-3 bg-blue-600 text-white py-2 px-3 rounded text-xs hover:bg-blue-700 transition-colors">
                        Apply Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
            Create HHID Profile & Send Welcome SMS
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">
            Reset Form
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  )

  const renderExistingCustomer = () => {
    const customer = selectedCustomer || sampleCustomers[0]
    
    return (
      <div className="space-y-6">
        {/* Customer Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Customer 360° View</h3>
              <p className="text-sm text-gray-600 mt-1">Complete customer profile and relationship overview</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
                Edit Profile
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
                New Application
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors text-sm">
                Generate Report
              </button>
            </div>
          </div>

          {/* Customer Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <User className="h-8 w-8 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-blue-800">HHID</p>
                  <p className="text-lg font-bold text-blue-900">{customer.hhid}</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-green-800">Credit Score</p>
                  <p className="text-lg font-bold text-green-900">{customer.creditScore}</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-8 w-8 text-purple-600" />
                <div>
                  <p className="text-sm font-medium text-purple-800">Monthly Income</p>
                  <p className="text-lg font-bold text-purple-900">{customer.monthlyIncome}</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Building className="h-8 w-8 text-orange-600" />
                <div>
                  <p className="text-sm font-medium text-orange-800">Relationship</p>
                  <p className="text-lg font-bold text-orange-900">{new Date().getFullYear() - parseInt(customer.memberSince)} Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">Personal Information</h4>
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{customer.name}</p>
                  <p className="text-sm text-gray-500">{customer.occupation}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{customer.mobile}</p>
                  <p className="text-sm text-gray-500">Verified ✓</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{customer.email}</p>
                  <p className="text-sm text-gray-500">Verified ✓</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">Address & KYC</h4>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{customer.address}</p>
                  <p className="text-sm text-gray-500">Primary Address</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">KYC Status</p>
                  <p className="text-sm text-green-600">{customer.kycStatus}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Member since {customer.memberSince}</p>
                  <p className="text-sm text-gray-500">{new Date().getFullYear() - parseInt(customer.memberSince)} years active</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 border-b pb-2">Financial Summary</h4>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Borrowed:</span>
                  <span className="text-sm font-medium">{customer.financialSummary?.totalBorrowed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Outstanding:</span>
                  <span className="text-sm font-medium text-red-600">{customer.financialSummary?.outstandingAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Next EMI:</span>
                  <span className="text-sm font-medium">{customer.financialSummary?.nextEmiDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Credit Utilization:</span>
                  <span className="text-sm font-medium">{customer.financialSummary?.creditUtilization}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Loan History */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Loan History ({customer.loanHistory?.length || 0})
            </h4>
            <div className="space-y-4">
              {customer.loanHistory?.map((loan) => (
                <div key={loan.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{loan.type}</p>
                      <p className="text-sm text-gray-600">Loan ID: {loan.id}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      loan.status === 'Active' ? 'bg-blue-100 text-blue-800' : 
                      loan.status === 'Repaid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {loan.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Amount: </span>
                      <span className="font-medium">{loan.amount}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">EMI: </span>
                      <span className="font-medium">{loan.emi}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Start Date: </span>
                      <span className="font-medium">{loan.date}</span>
                    </div>
                    <div>
                      <button className="text-blue-600 hover:text-blue-800 text-xs">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Cases */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Active Cases ({customer.activeCases?.length || 0})
            </h4>
            <div className="space-y-4">
              {customer.activeCases?.map((case_) => (
                <div key={case_.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{case_.type}</p>
                      <p className="text-sm text-gray-600">Case ID: {case_.id}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      case_.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' : 
                      case_.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'
                    }`}>
                      {case_.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Assigned to: </span>
                      <span className="font-medium">{case_.assignedTo}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Created: </span>
                      <span className="font-medium">{case_.date}</span>
                    </div>
                  </div>
                  <button className="mt-2 text-blue-600 hover:text-blue-800 text-xs">
                    <ExternalLink className="h-3 w-3 inline mr-1" />
                    Open Case
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* KYC Documents */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              KYC Documents ({customer.kycDocuments?.length || 0})
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {customer.kycDocuments?.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">{doc.type}</p>
                      <p className="text-sm text-gray-600">Uploaded: {doc.uploadDate} • ID: {doc.docId}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      doc.status === 'Verified' ? 'bg-green-100 text-green-800' : 
                      doc.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {doc.status}
                    </span>
                    <button className="text-blue-600 hover:text-blue-800 p-1">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-800 p-1">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
              Upload New Document
            </button>
          </div>

          {/* Support Ticket History */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              Support Tickets ({customer.supportTickets?.length || 0})
            </h4>
            <div className="space-y-4">
              {customer.supportTickets?.map((ticket) => (
                <div key={ticket.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{ticket.subject}</p>
                      <p className="text-sm text-gray-600">Ticket ID: {ticket.id}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        ticket.priority === 'High' ? 'bg-red-100 text-red-800' : 
                        ticket.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {ticket.priority}
                      </span>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        ticket.status === 'Open' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {ticket.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Created: {ticket.date}</span>
                    <button className="text-blue-600 hover:text-blue-800 text-xs">
                      <ExternalLink className="h-3 w-3 inline mr-1" />
                      View Ticket
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm">
              Create New Ticket
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm">
              New Loan Application
            </button>
            <button className="bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors text-sm">
              Payment Reminder
            </button>
            <button className="bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors text-sm">
              Credit Limit Review
            </button>
            <button className="bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors text-sm">
              Schedule Call
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>
        <p className="text-gray-600 mt-1">Comprehensive customer lifecycle management and 360° view</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'search' && renderSearchCustomer()}
        {activeTab === 'new' && renderNewCustomer()}
        {activeTab === 'existing' && renderExistingCustomer()}
      </div>
    </div>
  )
}

export default CustomerModule