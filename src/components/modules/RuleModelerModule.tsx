import React, { useState } from 'react'
import { 
  GitBranch, 
  Settings, 
  Database, 
  BarChart3, 
  FileText, 
  History,
  Rocket,
  Play,
  Eye,
  Edit,
  Copy,
  Trash2,
  CheckCircle,
  AlertCircle,
  Clock,
  User,
  Calendar,
  ArrowRight,
  Download,
  Upload,
  RefreshCw
} from 'lucide-react'

const RuleModelerModule = () => {
  const [activeTab, setActiveTab] = useState('decision-trees')
  const [selectedRule, setSelectedRule] = useState(null)

  const tabs = [
    { id: 'decision-trees', label: 'Decision Trees', icon: GitBranch },
    { id: 'rule-sets', label: 'Rule Sets', icon: Settings },
    { id: 'scoring', label: 'Scoring Model', icon: BarChart3 },
    { id: 'simulations', label: 'Simulations', icon: Database },
    { id: 'audit', label: 'Audit Logs', icon: FileText },
    { id: 'version', label: 'Version Control', icon: History },
    { id: 'deployment', label: 'Deployment', icon: Rocket }
  ]

  const rules = [
    {
      id: 'RULE001',
      name: 'Credit Score Eligibility',
      type: 'Decision Tree',
      status: 'Production',
      version: '1.2',
      lastModified: '2024-12-20',
      modifiedBy: 'Rajesh Kumar',
      description: 'If monthly income > ₹10,000 and no loan defaults, show Product A',
      environment: 'Production',
      usedInWorkflows: ['Loan Approval', 'Credit Assessment'],
      conditions: [
        { field: 'monthly_income', operator: '>', value: '10000', type: 'number' },
        { field: 'loan_defaults', operator: '=', value: '0', type: 'number' }
      ],
      actions: [
        { type: 'show_product', product: 'Product A' },
        { type: 'set_eligibility', value: 'eligible' }
      ]
    },
    {
      id: 'RULE002', 
      name: 'Income Verification Rules',
      type: 'Rule Set',
      status: 'Staging',
      version: '2.0',
      lastModified: '2024-12-19',
      modifiedBy: 'Priya Sharma',
      description: 'Validates customer income documentation and employment status',
      environment: 'Staging',
      usedInWorkflows: ['KYC Process', 'Document Verification'],
      rules: [
        'Income documents must be less than 3 months old',
        'Salary slips must match bank statements',
        'Employment letter required for salaried individuals'
      ]
    },
    {
      id: 'RULE003',
      name: 'Credit Scoring Model',
      type: 'Scoring Model',
      status: 'Production',
      version: '1.5',
      lastModified: '2024-12-18',
      modifiedBy: 'Amit Patel',
      description: 'Weighted scoring: Income (40%), Past Defaults (30%), Guarantor (30%)',
      environment: 'Production',
      weights: [
        { factor: 'Income', weight: 40, description: 'Monthly income verification' },
        { factor: 'Past Defaults', weight: 30, description: 'Credit history analysis' },
        { factor: 'Guarantor Availability', weight: 30, description: 'Guarantor assessment' }
      ]
    }
  ]

  const ruleVersions = [
    {
      version: '1.3',
      status: 'Staging',
      changes: 'Changed income threshold to ₹12,000',
      timestamp: '2024-12-21 10:30:00',
      author: 'Rajesh Kumar',
      environment: 'Staging'
    },
    {
      version: '1.2',
      status: 'Production - Live',
      changes: 'If monthly income > ₹10,000 and no loan defaults, show Product A',
      timestamp: '2024-12-20 15:45:00',
      author: 'Rajesh Kumar',
      environment: 'Production'
    },
    {
      version: '1.1',
      status: 'Archived',
      changes: 'Initial rule with ₹8,000 threshold',
      timestamp: '2024-12-15 09:20:00',
      author: 'Priya Sharma',
      environment: 'Archived'
    }
  ]

  const auditLogs = [
    {
      id: 'AUD001',
      action: 'Rule Modified',
      ruleName: 'Credit Score Eligibility',
      user: 'Rajesh Kumar',
      timestamp: '2024-12-21 10:30:00',
      changes: 'Updated income threshold from ₹10,000 to ₹12,000',
      environment: 'Staging'
    },
    {
      id: 'AUD002',
      action: 'Rule Deployed',
      ruleName: 'Income Verification Rules',
      user: 'System',
      timestamp: '2024-12-20 16:15:00',
      changes: 'Deployed version 1.2 to Production',
      environment: 'Production'
    },
    {
      id: 'AUD003',
      action: 'Simulation Run',
      ruleName: 'Credit Scoring Model',
      user: 'Amit Patel',
      timestamp: '2024-12-20 14:20:00',
      changes: 'Executed simulation with 1000 test records',
      environment: 'Staging'
    }
  ]

  const simulationResults = [
    {
      id: 'SIM001',
      ruleName: 'Credit Score Eligibility',
      testRecords: 1000,
      passed: 750,
      failed: 250,
      executionTime: '2.3s',
      timestamp: '2024-12-20 14:20:00',
      scoreDistribution: {
        'High Score (700+)': 450,
        'Medium Score (600-699)': 300,
        'Low Score (<600)': 250
      }
    }
  ]

  const renderDecisionTrees = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <GitBranch className="mr-2 h-5 w-5" />
              Decision Trees
            </h3>
            <p className="text-gray-600 mt-1">Create logical decision flows with if/else rules and action nodes</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <GitBranch className="mr-2 h-4 w-4 inline" />
            Create New Tree
          </button>
        </div>

        <div className="space-y-4">
          {rules.filter(rule => rule.type === 'Decision Tree').map((rule) => (
            <div key={rule.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{rule.name}</h4>
                  <p className="text-sm text-gray-600">{rule.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    rule.status === 'Production' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rule.status}
                  </span>
                  <span className="text-sm text-gray-500">v{rule.version}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Modified by: </span>
                  <span className="font-medium">{rule.modifiedBy}</span>
                </div>
                <div>
                  <span className="text-gray-600">Last updated: </span>
                  <span className="font-medium">{rule.lastModified}</span>
                </div>
                <div>
                  <span className="text-gray-600">Used in: </span>
                  <span className="font-medium">{rule.usedInWorkflows?.join(', ')}</span>
                </div>
              </div>

              <div className="mt-4 flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                  <Edit className="h-3 w-3 inline mr-1" />
                  Edit
                </button>
                <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                  <Play className="h-3 w-3 inline mr-1" />
                  Test
                </button>
                <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700">
                  <Copy className="h-3 w-3 inline mr-1" />
                  Clone
                </button>
                <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700">
                  <Eye className="h-3 w-3 inline mr-1" />
                  View Canvas
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderRuleSets = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Settings className="mr-2 h-5 w-5" />
              Rule Sets
            </h3>
            <p className="text-gray-600 mt-1">Groups of independent rules applied together, reusable across workflows</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Settings className="mr-2 h-4 w-4 inline" />
            Create Rule Set
          </button>
        </div>

        <div className="space-y-4">
          {rules.filter(rule => rule.type === 'Rule Set').map((rule) => (
            <div key={rule.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-gray-900">{rule.name}</h4>
                  <p className="text-sm text-gray-600">{rule.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    rule.status === 'Production' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {rule.status}
                  </span>
                  <span className="text-sm text-gray-500">v{rule.version}</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Rules in this set:</h5>
                <ul className="space-y-1">
                  {rule.rules?.map((ruleText, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      {ruleText}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
                <div>
                  <span className="text-gray-600">Modified by: </span>
                  <span className="font-medium">{rule.modifiedBy}</span>
                </div>
                <div>
                  <span className="text-gray-600">Last updated: </span>
                  <span className="font-medium">{rule.lastModified}</span>
                </div>
                <div>
                  <span className="text-gray-600">Used in: </span>
                  <span className="font-medium">{rule.usedInWorkflows?.join(', ')}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                  <Edit className="h-3 w-3 inline mr-1" />
                  Edit Rules
                </button>
                <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                  <Play className="h-3 w-3 inline mr-1" />
                  Test Set
                </button>
                <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700">
                  <Download className="h-3 w-3 inline mr-1" />
                  Export
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderScoringModel = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <BarChart3 className="mr-2 h-5 w-5" />
              Scoring Models
            </h3>
            <p className="text-gray-600 mt-1">Configure weighted rule models for credit scoring and risk assessment</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <BarChart3 className="mr-2 h-4 w-4 inline" />
            Create Scoring Model
          </button>
        </div>

        <div className="space-y-4">
          {rules.filter(rule => rule.type === 'Scoring Model').map((rule) => (
            <div key={rule.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900">{rule.name}</h4>
                  <p className="text-sm text-gray-600">{rule.description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {rule.status}
                  </span>
                  <span className="text-sm text-gray-500">v{rule.version}</span>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-900 mb-3">Weight Configuration:</h5>
                <div className="space-y-3">
                  {rule.weights?.map((weight, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <span className="font-medium text-gray-900">{weight.factor}</span>
                        <p className="text-sm text-gray-600">{weight.description}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{width: `${weight.weight}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-8">{weight.weight}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                  <Edit className="h-3 w-3 inline mr-1" />
                  Adjust Weights
                </button>
                <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                  <Play className="h-3 w-3 inline mr-1" />
                  Test Model
                </button>
                <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs hover:bg-purple-700">
                  <BarChart3 className="h-3 w-3 inline mr-1" />
                  View Analytics
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderVersionControl = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <History className="mr-2 h-5 w-5" />
              Version Control & History
            </h3>
            <p className="text-gray-600 mt-1">Manage rule versions with rollback capabilities and environment comparison</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
              <Eye className="mr-2 h-4 w-4 inline" />
              Preview Staging
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              <RefreshCw className="mr-2 h-4 w-4 inline" />
              Compare Environments
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-md font-semibold text-gray-900 mb-4">Rule: Credit Score Eligibility</h4>
          <div className="space-y-3">
            {ruleVersions.map((version, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-semibold text-gray-900">Version {version.version}</span>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      version.status.includes('Production') ? 'bg-green-100 text-green-800' : 
                      version.status === 'Staging' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {version.status}
                    </span>
                    {version.status.includes('Live') && (
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        LIVE
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    {version.status === 'Staging' && (
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                        <Rocket className="h-3 w-3 inline mr-1" />
                        Deploy to Prod
                      </button>
                    )}
                    {version.status !== 'Production - Live' && (
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700">
                        <RefreshCw className="h-3 w-3 inline mr-1" />
                        Rollback
                      </button>
                    )}
                    <button className="bg-gray-600 text-white px-3 py-1 rounded text-xs hover:bg-gray-700">
                      <Eye className="h-3 w-3 inline mr-1" />
                      View
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{version.changes}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {version.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {version.timestamp}
                  </span>
                  <span className="flex items-center">
                    <Database className="h-3 w-3 mr-1" />
                    {version.environment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h5 className="font-semibold text-blue-900 mb-2">Environment Comparison</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-medium text-blue-800">Production (v1.2)</h6>
              <p className="text-sm text-blue-700">Income threshold: ₹10,000</p>
            </div>
            <div>
              <h6 className="font-medium text-blue-800">Staging (v1.3)</h6>
              <p className="text-sm text-blue-700">Income threshold: ₹12,000</p>
            </div>
          </div>
          <div className="mt-3 flex items-center text-sm text-blue-700">
            <ArrowRight className="h-4 w-4 mr-2" />
            Staging version increases threshold by ₹2,000 for stricter eligibility
          </div>
        </div>
      </div>
    </div>
  )

  const renderAuditLogs = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <FileText className="mr-2 h-5 w-5" />
              Audit Logs
            </h3>
            <p className="text-gray-600 mt-1">Complete audit trail of all rule changes, deployments, and simulations</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            <Download className="mr-2 h-4 w-4 inline" />
            Export Logs
          </button>
        </div>

        <div className="space-y-3">
          {auditLogs.map((log) => (
            <div key={log.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className={`p-2 rounded-full ${
                    log.action === 'Rule Modified' ? 'bg-blue-100 text-blue-600' :
                    log.action === 'Rule Deployed' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {log.action === 'Rule Modified' ? <Edit className="h-4 w-4" /> :
                     log.action === 'Rule Deployed' ? <Rocket className="h-4 w-4" /> :
                     <Play className="h-4 w-4" />}
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{log.action}</h4>
                    <p className="text-sm text-gray-600">{log.ruleName}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    log.environment === 'Production' ? 'bg-green-100 text-green-800' :
                    log.environment === 'Staging' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {log.environment}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-2">{log.changes}</p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span className="flex items-center">
                  <User className="h-3 w-3 mr-1" />
                  {log.user}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {log.timestamp}
                </span>
                <span>ID: {log.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Rule Modeler</h2>
        <p className="text-gray-600 mt-1">Design, test, and deploy business rules with version control and audit trails</p>
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
        {activeTab === 'decision-trees' && renderDecisionTrees()}
        {activeTab === 'rule-sets' && renderRuleSets()}
        {activeTab === 'scoring' && renderScoringModel()}
        {activeTab === 'simulations' && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="mr-2 h-5 w-5" />
              Rule Simulations
            </h3>
            <p className="text-gray-600 mb-6">Run mock data through rule sets to verify behavior and performance</p>
            
            {simulationResults.map((result) => (
              <div key={result.id} className="border rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">{result.ruleName}</h4>
                  <button className="bg-green-600 text-white px-3 py-1 rounded text-xs hover:bg-green-700">
                    <Play className="h-3 w-3 inline mr-1" />
                    Run Again
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm text-blue-600">Test Records</p>
                    <p className="text-lg font-bold text-blue-900">{result.testRecords}</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-green-600">Passed</p>
                    <p className="text-lg font-bold text-green-900">{result.passed}</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded">
                    <p className="text-sm text-red-600">Failed</p>
                    <p className="text-lg font-bold text-red-900">{result.failed}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="text-sm text-purple-600">Execution Time</p>
                    <p className="text-lg font-bold text-purple-900">{result.executionTime}</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 mb-2">Score Distribution:</h5>
                  <div className="space-y-2">
                    {Object.entries(result.scoreDistribution).map(([range, count]) => (
                      <div key={range} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{range}</span>
                        <span className="text-sm font-medium">{count} records</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'audit' && renderAuditLogs()}
        {activeTab === 'version' && renderVersionControl()}
        {activeTab === 'deployment' && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Rocket className="mr-2 h-5 w-5" />
              Deployment Control
            </h3>
            <p className="text-gray-600 mb-6">Move rules from staging to production and manage deployment workflows</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Staging Environment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Credit Score Eligibility</span>
                    <span className="text-sm font-medium">v1.3 (Ready)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Income Verification</span>
                    <span className="text-sm font-medium">v2.1 (Testing)</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors">
                  <Upload className="mr-2 h-4 w-4 inline" />
                  Deploy to Staging
                </button>
              </div>
              
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Production Environment</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Credit Score Eligibility</span>
                    <span className="text-sm font-medium">v1.2 (Live)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Income Verification</span>
                    <span className="text-sm font-medium">v2.0 (Live)</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
                  <Rocket className="mr-2 h-4 w-4 inline" />
                  Deploy to Production
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RuleModelerModule