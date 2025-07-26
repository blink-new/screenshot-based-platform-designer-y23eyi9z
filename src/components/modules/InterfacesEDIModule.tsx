import React, { useState } from 'react'
import { 
  Link, 
  Database, 
  Users, 
  Activity, 
  ArrowUpDown, 
  ArrowUp, 
  ArrowDown,
  BarChart3,
  RefreshCw,
  Terminal,
  Settings,
  CheckCircle,
  AlertCircle,
  Clock,
  Play,
  Pause,
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  Upload,
  Search,
  Filter,
  ExternalLink
} from 'lucide-react'

const InterfacesEDIModule = () => {
  const [activeTab, setActiveTab] = useState('connection-manager')
  const [selectedConnection, setSelectedConnection] = useState(null)

  const tabs = [
    { id: 'connection-manager', label: 'Connection Manager', icon: Link },
    { id: 'data-mapping', label: 'Data Mapping Tool', icon: ArrowUpDown },
    { id: 'partner-setup', label: 'Partner Setup', icon: Users },
    { id: 'edi-monitor', label: 'EDI Monitor', icon: Activity },
    { id: 'inbound-monitor', label: 'Inbound Monitor', icon: ArrowDown },
    { id: 'outbound-monitor', label: 'Outbound Monitor', icon: ArrowUp },
    { id: 'health-analytics', label: 'Health & Analytics', icon: BarChart3 },
    { id: 'retry-rules', label: 'Retry Rules', icon: RefreshCw },
    { id: 'api-console', label: 'API Console', icon: Terminal },
    { id: 'compliance', label: 'Compliance Settings', icon: Settings }
  ]

  const connections = [
    {
      id: 'CONN001',
      name: 'CIBIL Credit Bureau',
      type: 'Credit Bureau',
      status: 'Active',
      endpoint: 'https://api.cibil.com/v2',
      lastSync: '2024-12-21 10:30:00',
      responseTime: '1.2s',
      successRate: '99.5%',
      authType: 'API Key',
      environment: 'Production'
    },
    {
      id: 'CONN002',
      name: 'GST Verification API',
      type: 'Government',
      status: 'Active',
      endpoint: 'https://api.gst.gov.in/taxpayerapi',
      lastSync: '2024-12-21 09:45:00',
      responseTime: '2.8s',
      successRate: '97.2%',
      authType: 'OAuth 2.0',
      environment: 'Production'
    },
    {
      id: 'CONN003',
      name: 'UPI Payment Gateway',
      type: 'Payment',
      status: 'Active',
      endpoint: 'https://api.upi.npci.org.in',
      lastSync: '2024-12-21 11:15:00',
      responseTime: '0.8s',
      successRate: '99.8%',
      authType: 'Certificate',
      environment: 'Production'
    },
    {
      id: 'CONN004',
      name: 'Bank Statement Analyzer',
      type: 'Financial',
      status: 'Testing',
      endpoint: 'https://api.bankanalyzer.com/v1',
      lastSync: '2024-12-21 08:20:00',
      responseTime: '3.5s',
      successRate: '95.1%',
      authType: 'API Key',
      environment: 'Staging'
    }
  ]

  const dataMappings = [
    {
      id: 'MAP001',
      name: 'CIBIL to Customer Profile',
      sourceSystem: 'CIBIL Credit Bureau',
      targetSystem: 'Customer Database',
      mappings: [
        { source: 'cust_id', target: 'hhid', type: 'string', transformation: 'prefix_HH' },
        { source: 'credit_score', target: 'credit_score', type: 'number', transformation: 'none' },
        { source: 'full_name', target: 'customer_name', type: 'string', transformation: 'title_case' },
        { source: 'pan_number', target: 'pan_id', type: 'string', transformation: 'uppercase' }
      ],
      status: 'Active',
      lastUpdated: '2024-12-20'
    },
    {
      id: 'MAP002',
      name: 'GST to Business Profile',
      sourceSystem: 'GST Verification API',
      targetSystem: 'Business Database',
      mappings: [
        { source: 'gstin', target: 'gst_number', type: 'string', transformation: 'none' },
        { source: 'legal_name', target: 'business_name', type: 'string', transformation: 'title_case' },
        { source: 'registration_date', target: 'gst_reg_date', type: 'date', transformation: 'iso_format' },
        { source: 'status', target: 'gst_status', type: 'string', transformation: 'lowercase' }
      ],
      status: 'Active',
      lastUpdated: '2024-12-19'
    }
  ]

  const partners = [
    {
      id: 'PART001',
      name: 'HDFC Bank',
      type: 'Banking Partner',
      status: 'Active',
      apiUsage: '15,420 calls/month',
      slaCompliance: '99.2%',
      responseTime: '1.1s',
      lastContact: '2024-12-20',
      contactPerson: 'Rajesh Gupta',
      email: 'rajesh.gupta@hdfcbank.com',
      phone: '+91 9876543210'
    },
    {
      id: 'PART002',
      name: 'Experian Credit Bureau',
      type: 'Credit Bureau',
      status: 'Active',
      apiUsage: '8,750 calls/month',
      slaCompliance: '98.8%',
      responseTime: '1.8s',
      lastContact: '2024-12-18',
      contactPerson: 'Priya Sharma',
      email: 'priya.sharma@experian.com',
      phone: '+91 9876543211'
    },
    {
      id: 'PART003',
      name: 'Razorpay Payment Gateway',
      type: 'Payment Partner',
      status: 'Active',
      apiUsage: '25,680 calls/month',
      slaCompliance: '99.7%',
      responseTime: '0.6s',
      lastContact: '2024-12-21',
      contactPerson: 'Amit Patel',
      email: 'amit.patel@razorpay.com',
      phone: '+91 9876543212'
    }
  ]

  const outboundLogs = [
    {
      id: 'OUT001',
      timestamp: '2024-12-21 11:30:00',
      fileName: 'Customer_Sync_2025_Q2.csv',
      destination: 'CRM System',
      status: 'Success',
      sentTimestamp: '2024-12-21 11:30:15',
      retryCount: 0,
      fileSize: '2.3 MB',
      recordCount: 1250
    },
    {
      id: 'OUT002',
      timestamp: '2024-12-21 10:45:00',
      fileName: 'Loan_Disbursement_Report_Dec2024.xml',
      destination: 'Banking Partner Portal',
      status: 'Success',
      sentTimestamp: '2024-12-21 10:45:22',
      retryCount: 1,
      fileSize: '856 KB',
      recordCount: 89
    },
    {
      id: 'OUT003',
      timestamp: '2024-12-21 09:15:00',
      fileName: 'Collection_Status_Update.json',
      destination: 'Third-party Collection Agency',
      status: 'Failed',
      sentTimestamp: 'N/A',
      retryCount: 3,
      fileSize: '1.2 MB',
      recordCount: 0,
      errorMessage: 'Connection timeout - Destination server unreachable'
    },
    {
      id: 'OUT004',
      timestamp: '2024-12-21 08:30:00',
      fileName: 'Regulatory_Compliance_Report.pdf',
      destination: 'RBI Reporting System',
      status: 'Success',
      sentTimestamp: '2024-12-21 08:30:45',
      retryCount: 0,
      fileSize: '4.7 MB',
      recordCount: 1
    }
  ]

  const inboundLogs = [
    {
      id: 'IN001',
      timestamp: '2024-12-21 11:45:00',
      fileName: 'Loan_Application_Status_Import.xml',
      source: 'Third-party Underwriting System',
      status: 'Parsed',
      importTime: '2024-12-21 11:45:18',
      validationResult: 'All records validated successfully',
      fileSize: '3.2 MB',
      recordCount: 456
    },
    {
      id: 'IN002',
      timestamp: '2024-12-21 10:20:00',
      fileName: 'Credit_Bureau_Response_Batch.csv',
      source: 'CIBIL Credit Bureau',
      status: 'Parsed',
      importTime: '2024-12-21 10:20:35',
      validationResult: '12 records failed validation - Invalid PAN format',
      fileSize: '1.8 MB',
      recordCount: 234
    },
    {
      id: 'IN003',
      timestamp: '2024-12-21 09:30:00',
      fileName: 'Bank_Statement_Analysis.json',
      source: 'Financial Data Provider',
      status: 'Error',
      importTime: 'N/A',
      validationResult: 'File format validation failed',
      fileSize: '5.1 MB',
      recordCount: 0,
      errorMessage: 'Invalid JSON structure - Missing required fields'
    },
    {
      id: 'IN004',
      timestamp: '2024-12-21 08:15:00',
      fileName: 'GST_Verification_Results.xml',
      source: 'Government GST Portal',
      status: 'Rejected',
      importTime: 'N/A',
      validationResult: 'Schema validation failed',
      fileSize: '892 KB',
      recordCount: 0,
      errorMessage: 'XML schema mismatch - Version 2.1 required, received 1.8'
    }
  ]

  const healthMetrics = {
    totalAPICalls: '45,850',
    successRate: '98.7%',
    avgResponseTime: '1.4s',
    activeConnections: 12,
    failedCalls: '595',
    retryAttempts: '1,240'
  }

  const ediLogs = [
    {
      id: 'EDI001',
      timestamp: '2024-12-21 11:20:00',
      messageType: 'Loan Application EDI',
      partner: 'Banking Partner Portal',
      direction: 'Outbound',
      status: 'Success',
      recordCount: 45,
      fileSize: '1.2 MB',
      processingTime: '2.3s'
    },
    {
      id: 'EDI002',
      timestamp: '2024-12-21 10:15:00',
      messageType: 'Credit Bureau Response',
      partner: 'CIBIL Credit Bureau',
      direction: 'Inbound',
      status: 'Success',
      recordCount: 128,
      fileSize: '856 KB',
      processingTime: '1.8s'
    },
    {
      id: 'EDI003',
      timestamp: '2024-12-21 09:45:00',
      messageType: 'Payment Status Update',
      partner: 'UPI Payment Gateway',
      direction: 'Inbound',
      status: 'Failed',
      recordCount: 0,
      fileSize: '0 KB',
      processingTime: 'N/A',
      errorMessage: 'Invalid message format - Missing required transaction ID field'
    }
  ]

  const retryRules = [
    {
      id: 'RETRY001',
      name: 'Credit Bureau Retry Policy',
      maxRetries: 3,
      backoffStrategy: 'Exponential',
      initialDelay: '10s',
      maxDelay: '60s',
      retryConditions: ['Timeout', 'Server Error (5xx)', 'Network Error'],
      escalationAfterFailure: true,
      escalationEmail: 'tech-support@company.com'
    },
    {
      id: 'RETRY002',
      name: 'Payment Gateway Retry Policy',
      maxRetries: 5,
      backoffStrategy: 'Linear',
      initialDelay: '5s',
      maxDelay: '30s',
      retryConditions: ['Timeout', 'Rate Limit (429)', 'Server Error (5xx)'],
      escalationAfterFailure: true,
      escalationEmail: 'payments@company.com'
    }
  ]

  const renderConnectionManager = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Link className="mr-2 h-5 w-5" />
              Connection Manager
            </h3>
            <p className="text-gray-600 mt-1">Manage API credentials, endpoints, headers, and authentication tokens</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Plus className="mr-2 h-4 w-4 inline" />
            Add Connection
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {connections.map((conn) => (
            <div key={conn.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{conn.name}</h4>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  conn.status === 'Active' ? 'bg-green-100 text-green-800' : 
                  conn.status === 'Testing' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                }`}>
                  {conn.status}
                </span>
              </div>
              
              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Type: </span>
                  <span className="font-medium">{conn.type}</span>
                </div>
                <div>
                  <span className="text-gray-600">Response Time: </span>
                  <span className="font-medium">{conn.responseTime}</span>
                </div>
                <div>
                  <span className="text-gray-600">Success Rate: </span>
                  <span className="font-medium text-green-600">{conn.successRate}</span>
                </div>
                <div>
                  <span className="text-gray-600">Auth: </span>
                  <span className="font-medium">{conn.authType}</span>
                </div>
                <div>
                  <span className="text-gray-600">Last Sync: </span>
                  <span className="font-medium">{conn.lastSync}</span>
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="bg-blue-600 text-white px-2 py-1 rounded text-xs hover:bg-blue-700">
                  <Edit className="h-3 w-3 inline mr-1" />
                  Edit
                </button>
                <button className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700">
                  <Play className="h-3 w-3 inline mr-1" />
                  Test
                </button>
                <button className="bg-purple-600 text-white px-2 py-1 rounded text-xs hover:bg-purple-700">
                  <Eye className="h-3 w-3 inline mr-1" />
                  Logs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderDataMapping = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <ArrowUpDown className="mr-2 h-5 w-5" />
              Data Mapping Tool
            </h3>
            <p className="text-gray-600 mt-1">Drag-and-drop UI to map external API fields to internal field schema</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Plus className="mr-2 h-4 w-4 inline" />
            Create Mapping
          </button>
        </div>

        <div className="space-y-6">
          {dataMappings.map((mapping) => (
            <div key={mapping.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{mapping.name}</h4>
                  <p className="text-sm text-gray-600">{mapping.sourceSystem} → {mapping.targetSystem}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {mapping.status}
                  </span>
                  <span className="text-sm text-gray-500">Updated: {mapping.lastUpdated}</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h5 className="font-medium text-gray-900 mb-3">Field Mappings:</h5>
                <div className="space-y-2">
                  {mapping.mappings.map((map, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-blue-600">{map.source}</span>
                        <ArrowUpDown className="h-4 w-4 text-gray-400" />
                        <span className="text-sm font-medium text-green-600">{map.target}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{map.type}</span>
                        {map.transformation !== 'none' && (
                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                            {map.transformation}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                  <Edit className="h-3 w-3 inline mr-1" />
                  Edit Mapping
                </button>
                <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                  <Play className="h-3 w-3 inline mr-1" />
                  Test Mapping
                </button>
                <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700">
                  <Download className="h-3 w-3 inline mr-1" />
                  Export Schema
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderPartnerSetup = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Users className="mr-2 h-5 w-5" />
              Partner Setup
            </h3>
            <p className="text-gray-600 mt-1">Create and manage third-party connections with SLA tracking</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Plus className="mr-2 h-4 w-4 inline" />
            Add Partner
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {partners.map((partner) => (
            <div key={partner.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                  <p className="text-sm text-gray-600">{partner.type}</p>
                </div>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  {partner.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-xs text-blue-600">API Usage</p>
                  <p className="text-sm font-bold text-blue-900">{partner.apiUsage}</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-xs text-green-600">SLA Compliance</p>
                  <p className="text-sm font-bold text-green-900">{partner.slaCompliance}</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div>
                  <span className="text-gray-600">Response Time: </span>
                  <span className="font-medium">{partner.responseTime}</span>
                </div>
                <div>
                  <span className="text-gray-600">Contact: </span>
                  <span className="font-medium">{partner.contactPerson}</span>
                </div>
                <div>
                  <span className="text-gray-600">Email: </span>
                  <span className="font-medium text-blue-600">{partner.email}</span>
                </div>
                <div>
                  <span className="text-gray-600">Last Contact: </span>
                  <span className="font-medium">{partner.lastContact}</span>
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                  <Edit className="h-3 w-3 inline mr-1" />
                  Edit
                </button>
                <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                  <BarChart3 className="h-3 w-3 inline mr-1" />
                  Analytics
                </button>
                <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700">
                  <ExternalLink className="h-3 w-3 inline mr-1" />
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderOutboundMonitor = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <ArrowUp className="mr-2 h-5 w-5" />
              Outbound Monitor
            </h3>
            <p className="text-gray-600 mt-1">Track outbound file transfers and data exports to external systems</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              <RefreshCw className="mr-2 h-4 w-4 inline" />
              Refresh
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <Download className="mr-2 h-4 w-4 inline" />
              Export Logs
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {outboundLogs.map((log) => (
            <div key={log.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className={`p-2 rounded-full ${
                    log.status === 'Success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {log.status === 'Success' ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{log.fileName}</h4>
                    <p className="text-sm text-gray-600">Destination: {log.destination}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                    Outbound
                  </span>
                  <span className="text-sm text-gray-500">{log.timestamp}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Status: </span>
                  <span className={`font-medium ${log.status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                    {log.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Sent: </span>
                  <span className="font-medium">{log.sentTimestamp}</span>
                </div>
                <div>
                  <span className="text-gray-600">Retry Count: </span>
                  <span className="font-medium">{log.retryCount}</span>
                </div>
                <div>
                  <span className="text-gray-600">File Size: </span>
                  <span className="font-medium">{log.fileSize}</span>
                </div>
                <div className="flex space-x-2">
                  {log.status === 'Failed' && (
                    <button className="bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700">
                      <RefreshCw className="h-3 w-3 inline mr-1" />
                      Retry
                    </button>
                  )}
                  <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs hover:bg-gray-700">
                    <Eye className="h-3 w-3 inline mr-1" />
                    Details
                  </button>
                </div>
              </div>

              {log.errorMessage && (
                <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                  <strong>Error:</strong> {log.errorMessage}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderInboundMonitor = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <ArrowDown className="mr-2 h-5 w-5" />
              Inbound Monitor
            </h3>
            <p className="text-gray-600 mt-1">Track inbound file imports and data received from external systems</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              <RefreshCw className="mr-2 h-4 w-4 inline" />
              Refresh
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <Download className="mr-2 h-4 w-4 inline" />
              Export Logs
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {inboundLogs.map((log) => (
            <div key={log.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className={`p-2 rounded-full ${
                    log.status === 'Parsed' ? 'bg-green-100 text-green-600' : 
                    log.status === 'Error' || log.status === 'Rejected' ? 'bg-red-100 text-red-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {log.status === 'Parsed' ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{log.fileName}</h4>
                    <p className="text-sm text-gray-600">Source: {log.source}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    Inbound
                  </span>
                  <span className="text-sm text-gray-500">{log.timestamp}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Status: </span>
                  <span className={`font-medium ${
                    log.status === 'Parsed' ? 'text-green-600' : 
                    log.status === 'Error' || log.status === 'Rejected' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>
                    {log.status}
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Import Time: </span>
                  <span className="font-medium">{log.importTime}</span>
                </div>
                <div>
                  <span className="text-gray-600">Records: </span>
                  <span className="font-medium">{log.recordCount}</span>
                </div>
                <div>
                  <span className="text-gray-600">File Size: </span>
                  <span className="font-medium">{log.fileSize}</span>
                </div>
                <div className="flex space-x-2">
                  {(log.status === 'Error' || log.status === 'Rejected') && (
                    <button className="bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700">
                      <RefreshCw className="h-3 w-3 inline mr-1" />
                      Retry
                    </button>
                  )}
                  <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs hover:bg-gray-700">
                    <Eye className="h-3 w-3 inline mr-1" />
                    Details
                  </button>
                </div>
              </div>

              <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-sm">
                <strong>Validation Result:</strong> {log.validationResult}
              </div>

              {log.errorMessage && (
                <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                  <strong>Error:</strong> {log.errorMessage}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderEDIMonitor = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              EDI Monitor
            </h3>
            <p className="text-gray-600 mt-1">Track Electronic Data Interchange messages and errors in real-time</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              <RefreshCw className="mr-2 h-4 w-4 inline" />
              Refresh
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <Download className="mr-2 h-4 w-4 inline" />
              Export Logs
            </button>
          </div>
        </div>

        <div className="space-y-3">
          {ediLogs.map((log) => (
            <div key={log.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className={`p-2 rounded-full ${
                    log.status === 'Success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {log.status === 'Success' ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{log.messageType}</h4>
                    <p className="text-sm text-gray-600">{log.partner}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    log.direction === 'Inbound' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {log.direction}
                  </span>
                  <span className="text-sm text-gray-500">{log.timestamp}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Records: </span>
                  <span className="font-medium">{log.recordCount}</span>
                </div>
                <div>
                  <span className="text-gray-600">File Size: </span>
                  <span className="font-medium">{log.fileSize}</span>
                </div>
                <div>
                  <span className="text-gray-600">Processing Time: </span>
                  <span className="font-medium">{log.processingTime}</span>
                </div>
                <div className="flex space-x-2">
                  {log.status === 'Failed' && (
                    <button className="bg-red-600 text-white px-2 py-1 rounded text-xs hover:bg-red-700">
                      <RefreshCw className="h-3 w-3 inline mr-1" />
                      Retry
                    </button>
                  )}
                  <button className="bg-gray-600 text-white px-2 py-1 rounded text-xs hover:bg-gray-700">
                    <Eye className="h-3 w-3 inline mr-1" />
                    Details
                  </button>
                </div>
              </div>

              {log.errorMessage && (
                <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
                  <strong>Error:</strong> {log.errorMessage}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderHealthAnalytics = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Health & Analytics
            </h3>
            <p className="text-gray-600 mt-1">Monitor API uptime, latency, retries, and error codes with partner-level breakdown</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Download className="mr-2 h-4 w-4 inline" />
            Export Report
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600">Total API Calls</p>
            <p className="text-2xl font-bold text-blue-900">{healthMetrics.totalAPICalls}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600">Success Rate</p>
            <p className="text-2xl font-bold text-green-900">{healthMetrics.successRate}</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-purple-600">Avg Response Time</p>
            <p className="text-2xl font-bold text-purple-900">{healthMetrics.avgResponseTime}</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-sm text-orange-600">Active Connections</p>
            <p className="text-2xl font-bold text-orange-900">{healthMetrics.activeConnections}</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-sm text-red-600">Failed Calls</p>
            <p className="text-2xl font-bold text-red-900">{healthMetrics.failedCalls}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-600">Retry Attempts</p>
            <p className="text-2xl font-bold text-yellow-900">{healthMetrics.retryAttempts}</p>
          </div>
        </div>

        {/* Partner Performance */}
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-4">Partner Performance Breakdown</h4>
          <div className="space-y-3">
            {connections.map((conn) => (
              <div key={conn.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h5 className="font-medium text-gray-900">{conn.name}</h5>
                  <p className="text-sm text-gray-600">{conn.type}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="text-gray-600">Success Rate</p>
                    <p className="font-semibold text-green-600">{conn.successRate}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600">Response Time</p>
                    <p className="font-semibold text-blue-600">{conn.responseTime}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600">Status</p>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      conn.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {conn.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderRetryRules = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <RefreshCw className="mr-2 h-5 w-5" />
              Retry Rules
            </h3>
            <p className="text-gray-600 mt-1">Configure retry policies for failed API calls with escalation settings</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Plus className="mr-2 h-4 w-4 inline" />
            Create Retry Rule
          </button>
        </div>

        <div className="space-y-4">
          {retryRules.map((rule) => (
            <div key={rule.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">{rule.name}</h4>
                <div className="flex space-x-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                    <Edit className="h-3 w-3 inline mr-1" />
                    Edit
                  </button>
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                    <Play className="h-3 w-3 inline mr-1" />
                    Test
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-blue-600">Max Retries</p>
                  <p className="text-lg font-bold text-blue-900">{rule.maxRetries}</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm text-green-600">Strategy</p>
                  <p className="text-lg font-bold text-green-900">{rule.backoffStrategy}</p>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <p className="text-sm text-purple-600">Initial Delay</p>
                  <p className="text-lg font-bold text-purple-900">{rule.initialDelay}</p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <p className="text-sm text-orange-600">Max Delay</p>
                  <p className="text-lg font-bold text-orange-900">{rule.maxDelay}</p>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="font-medium text-gray-900 mb-2">Retry Conditions:</h5>
                <div className="flex flex-wrap gap-2">
                  {rule.retryConditions.map((condition, index) => (
                    <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>

              {rule.escalationAfterFailure && (
                <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">Escalation Enabled</span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">
                    Email notification will be sent to: {rule.escalationEmail}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderAPIConsole = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Terminal className="mr-2 h-5 w-5" />
              API Console
            </h3>
            <p className="text-gray-600 mt-1">Built-in Swagger-style tester with sample requests and responses</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <ExternalLink className="mr-2 h-4 w-4 inline" />
            Open Full Console
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Request Panel */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">API Request</h4>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Endpoint</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>CIBIL Credit Bureau - Get Credit Report</option>
                  <option>GST Verification API - Verify GSTIN</option>
                  <option>UPI Payment Gateway - Process Payment</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Method</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>GET</option>
                  <option>POST</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Headers</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder={`{
  "Authorization": "Bearer {{api_key}}",
  "Content-Type": "application/json"
}`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Request Body</label>
                <textarea 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder={`{
  "pan_number": "ABCDE1234F",
  "consent": true,
  "purpose": "loan_application"
}`}
                />
              </div>

              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                <Play className="mr-2 h-4 w-4 inline" />
                Send Request
              </button>
            </div>
          </div>

          {/* Response Panel */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">API Response</h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Status:</span>
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                  200 OK
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Response Time:</span>
                <span className="text-sm font-medium">1.2s</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Response Headers</label>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono">
                  content-type: application/json<br/>
                  x-ratelimit-remaining: 99<br/>
                  x-response-time: 1.2s
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Response Body</label>
                <div className="bg-gray-50 p-3 rounded text-xs font-mono max-h-48 overflow-y-auto">
{`{
  "status": "success",
  "data": {
    "credit_score": 750,
    "credit_history": "excellent",
    "pan_number": "ABCDE1234F",
    "name": "John Doe",
    "last_updated": "2024-12-21"
  },
  "request_id": "req_12345"
}`}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                <Download className="mr-2 h-4 w-4 inline" />
                Save Response
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h5 className="font-semibold text-blue-900 mb-2">Quick Links to Data Mapping</h5>
          <p className="text-sm text-blue-700 mb-3">
            Map the response fields to your internal schema using the Data Mapping Tool
          </p>
          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
            <ArrowUpDown className="h-3 w-3 inline mr-1" />
            Open Data Mapping Tool
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Interfaces & EDI</h2>
        <p className="text-gray-600 mt-1">Manage API integrations, data mapping, and electronic data interchange</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap ${
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
        {activeTab === 'connection-manager' && renderConnectionManager()}
        {activeTab === 'data-mapping' && renderDataMapping()}
        {activeTab === 'partner-setup' && renderPartnerSetup()}
        {activeTab === 'edi-monitor' && renderEDIMonitor()}
        {activeTab === 'inbound-monitor' && renderInboundMonitor()}
        {activeTab === 'outbound-monitor' && renderOutboundMonitor()}
        {activeTab === 'health-analytics' && renderHealthAnalytics()}
        {activeTab === 'retry-rules' && renderRetryRules()}
        {activeTab === 'api-console' && renderAPIConsole()}
        {activeTab === 'compliance' && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Compliance Settings
            </h3>
            <p className="text-gray-600 mb-6">Configure data retention, masking, GDPR/DPDP compliance rules</p>
            
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Data Retention Policies</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Customer Data Retention</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>7 Years (Default)</option>
                      <option>5 Years</option>
                      <option>10 Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Transaction Logs</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>3 Years (Default)</option>
                      <option>1 Year</option>
                      <option>5 Years</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Data Masking Rules</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">PAN Number Masking</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Aadhar Number Masking</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Bank Account Masking</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Enabled</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">GDPR/DPDP Compliance</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Right to be Forgotten</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Data Portability</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Consent Management</span>
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">Enabled</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InterfacesEDIModule