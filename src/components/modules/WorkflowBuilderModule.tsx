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
import { Progress } from '../ui/progress';
import { 
  Play, 
  Square, 
  Settings, 
  GitBranch, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  Plus,
  Trash2,
  Copy,
  Eye,
  Download,
  Upload,
  Zap,
  Database,
  Globe,
  Timer,
  Users,
  FileText,
  Activity
} from 'lucide-react';

export default function WorkflowBuilderModule() {
  const [activeTab, setActiveTab] = useState('canvas');
  const [selectedWorkflow, setSelectedWorkflow] = useState('loan-approval');
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const workflows = [
    {
      id: 'loan-approval',
      name: 'Loan Approval Process',
      version: 'v2.1',
      status: 'Production',
      lastModified: '2024-01-20',
      nodes: 12,
      success_rate: 94.2
    },
    {
      id: 'kyc-verification',
      name: 'KYC Verification',
      version: 'v1.8',
      status: 'Staging',
      lastModified: '2024-01-19',
      nodes: 8,
      success_rate: 98.1
    },
    {
      id: 'customer-onboarding',
      name: 'Customer Onboarding',
      version: 'v3.0',
      status: 'Production',
      lastModified: '2024-01-18',
      nodes: 15,
      success_rate: 91.7
    }
  ];

  const nodeTypes = [
    { id: 'start', name: 'Start', icon: Play, color: 'bg-green-500' },
    { id: 'decision', name: 'Decision', icon: GitBranch, color: 'bg-yellow-500' },
    { id: 'action', name: 'Action', icon: Zap, color: 'bg-blue-500' },
    { id: 'api', name: 'API Call', icon: Globe, color: 'bg-purple-500' },
    { id: 'database', name: 'Database', icon: Database, color: 'bg-indigo-500' },
    { id: 'wait', name: 'Wait/Timer', icon: Timer, color: 'bg-orange-500' },
    { id: 'approval', name: 'Approval', icon: Users, color: 'bg-teal-500' },
    { id: 'document', name: 'Document', icon: FileText, color: 'bg-gray-500' },
    { id: 'end', name: 'End', icon: Square, color: 'bg-red-500' }
  ];

  const workflowNodes = [
    { id: 'start-1', type: 'start', name: 'Application Received', x: 100, y: 100 },
    { id: 'decision-1', type: 'decision', name: 'Check Eligibility', x: 300, y: 100 },
    { id: 'api-1', type: 'api', name: 'Credit Bureau Check', x: 500, y: 50 },
    { id: 'decision-2', type: 'decision', name: 'Credit Score > 650?', x: 700, y: 50 },
    { id: 'approval-1', type: 'approval', name: 'Manager Approval', x: 900, y: 50 },
    { id: 'action-1', type: 'action', name: 'Generate Loan Offer', x: 1100, y: 50 },
    { id: 'document-1', type: 'document', name: 'Send Documents', x: 500, y: 150 },
    { id: 'wait-1', type: 'wait', name: 'Wait 24 Hours', x: 700, y: 150 },
    { id: 'end-1', type: 'end', name: 'Process Complete', x: 1300, y: 100 }
  ];

  const templates = [
    {
      id: 'loan-approval-template',
      name: 'Standard Loan Approval',
      description: 'Complete loan approval workflow with credit checks and approvals',
      nodes: 12,
      category: 'Lending'
    },
    {
      id: 'kyc-template',
      name: 'KYC Verification Process',
      description: 'Document verification and identity validation workflow',
      nodes: 8,
      category: 'Compliance'
    },
    {
      id: 'customer-service-template',
      name: 'Customer Service Ticket',
      description: 'Service request handling and resolution workflow',
      nodes: 10,
      category: 'Operations'
    },
    {
      id: 'disbursement-template',
      name: 'Loan Disbursement',
      description: 'Fund disbursement and notification workflow',
      nodes: 6,
      category: 'Finance'
    }
  ];

  const executionLogs = [
    {
      id: 'exec-001',
      workflow: 'Loan Approval Process',
      customer: 'HHID-789012',
      status: 'Completed',
      duration: '2h 15m',
      timestamp: '2024-01-20 14:30',
      current_node: 'Process Complete',
      success: true
    },
    {
      id: 'exec-002',
      workflow: 'KYC Verification',
      customer: 'HHID-345678',
      status: 'In Progress',
      duration: '45m',
      timestamp: '2024-01-20 15:45',
      current_node: 'Document Review',
      success: null
    },
    {
      id: 'exec-003',
      workflow: 'Customer Onboarding',
      customer: 'HHID-901234',
      status: 'Failed',
      duration: '1h 20m',
      timestamp: '2024-01-20 13:10',
      current_node: 'Credit Bureau Check',
      success: false
    }
  ];

  const triggers = [
    {
      id: 'trigger-1',
      name: 'New Loan Application',
      type: 'Event',
      condition: 'Application Status = "Submitted"',
      workflow: 'Loan Approval Process',
      active: true
    },
    {
      id: 'trigger-2',
      name: 'Document Upload Complete',
      type: 'Event',
      condition: 'All KYC Documents Uploaded',
      workflow: 'KYC Verification',
      active: true
    },
    {
      id: 'trigger-3',
      name: 'Daily Batch Process',
      type: 'Schedule',
      condition: 'Every day at 2:00 AM',
      workflow: 'Daily Reconciliation',
      active: false
    }
  ];

  const renderCanvasView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Select value={selectedWorkflow} onValueChange={setSelectedWorkflow}>
            <SelectTrigger className="w-64">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {workflows.map(workflow => (
                <SelectItem key={workflow.id} value={workflow.id}>
                  {workflow.name} ({workflow.version})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Badge variant={workflows.find(w => w.id === selectedWorkflow)?.status === 'Production' ? 'default' : 'secondary'}>
            {workflows.find(w => w.id === selectedWorkflow)?.status}
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            <Copy className="h-4 w-4 mr-2" />
            Clone
          </Button>
          <Button size="sm">
            <Play className="h-4 w-4 mr-2" />
            Test Run
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Node Palette */}
        <div className="col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Node Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {nodeTypes.map(nodeType => {
                const Icon = nodeType.icon;
                return (
                  <div
                    key={nodeType.id}
                    className="flex items-center space-x-2 p-2 rounded-lg border cursor-pointer hover:bg-gray-50"
                    draggable
                  >
                    <div className={`w-6 h-6 rounded ${nodeType.color} flex items-center justify-center`}>
                      <Icon className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs">{nodeType.name}</span>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Canvas Area */}
        <div className="col-span-8">
          <Card className="h-96">
            <CardContent className="p-4 h-full">
              <div className="relative w-full h-full bg-gray-50 rounded-lg overflow-hidden">
                <svg className="absolute inset-0 w-full h-full">
                  {/* Grid Pattern */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Connection Lines */}
                  <line x1="140" y1="110" x2="280" y2="110" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="340" y1="110" x2="480" y2="60" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="540" y1="60" x2="680" y2="60" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="740" y1="60" x2="880" y2="60" stroke="#6b7280" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                    </marker>
                  </defs>
                </svg>

                {/* Workflow Nodes */}
                {workflowNodes.slice(0, 6).map(node => {
                  const nodeType = nodeTypes.find(nt => nt.id === node.type);
                  const Icon = nodeType?.icon || Play;
                  return (
                    <div
                      key={node.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                        selectedNode === node.id ? 'ring-2 ring-blue-500' : ''
                      }`}
                      style={{ left: `${node.x / 14}%`, top: `${node.y / 4}%` }}
                      onClick={() => setSelectedNode(node.id)}
                    >
                      <div className="bg-white rounded-lg border-2 border-gray-200 p-3 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-2">
                          <div className={`w-8 h-8 rounded ${nodeType?.color} flex items-center justify-center`}>
                            <Icon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="text-xs font-medium">{node.name}</div>
                            <div className="text-xs text-gray-500">{nodeType?.name}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Properties Panel */}
        <div className="col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Node Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedNode ? (
                <>
                  <div>
                    <Label className="text-xs">Node Name</Label>
                    <Input className="mt-1" defaultValue="Check Eligibility" />
                  </div>
                  <div>
                    <Label className="text-xs">Description</Label>
                    <Textarea className="mt-1" rows={3} defaultValue="Verify customer eligibility based on income and credit score" />
                  </div>
                  <div>
                    <Label className="text-xs">Timeout (minutes)</Label>
                    <Input className="mt-1" type="number" defaultValue="30" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-xs">Required</Label>
                    <Switch defaultChecked />
                  </div>
                  <div>
                    <Label className="text-xs">Assigned Role</Label>
                    <Select defaultValue="credit-manager">
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-manager">Credit Manager</SelectItem>
                        <SelectItem value="loan-officer">Loan Officer</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-500 text-sm">
                  Select a node to view properties
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderTemplateLibrary = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Workflow Templates</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Template
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(template => (
          <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{template.name}</CardTitle>
                <Badge variant="outline">{template.category}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{template.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{template.nodes} nodes</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm">
                    <Copy className="h-3 w-3 mr-1" />
                    Use
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderTriggerSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Workflow Triggers</h3>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Trigger
        </Button>
      </div>

      <div className="space-y-4">
        {triggers.map(trigger => (
          <Card key={trigger.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <Switch checked={trigger.active} />
                    <div>
                      <h4 className="font-medium">{trigger.name}</h4>
                      <p className="text-sm text-gray-600">{trigger.condition}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                    <Badge variant="outline">{trigger.type}</Badge>
                    <span>→ {trigger.workflow}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderMonitoringDashboard = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Workflow Monitoring</h3>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Active Workflows</p>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Completed Today</p>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Failed Today</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Avg Duration</p>
                <p className="text-2xl font-bold">2.4h</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Execution Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Executions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {executionLogs.map(log => (
              <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    log.success === true ? 'bg-green-500' : 
                    log.success === false ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div>
                    <p className="font-medium">{log.workflow}</p>
                    <p className="text-sm text-gray-600">Customer: {log.customer}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{log.status}</p>
                  <p className="text-xs text-gray-500">{log.duration} • {log.timestamp}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Workflow Builder</h2>
        <p className="text-gray-600">Design and manage automated business workflows</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="canvas">Canvas View</TabsTrigger>
          <TabsTrigger value="templates">Template Library</TabsTrigger>
          <TabsTrigger value="triggers">Trigger Settings</TabsTrigger>
          <TabsTrigger value="versioning">Versioning</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="canvas" className="mt-6">
          {renderCanvasView()}
        </TabsContent>

        <TabsContent value="templates" className="mt-6">
          {renderTemplateLibrary()}
        </TabsContent>

        <TabsContent value="triggers" className="mt-6">
          {renderTriggerSettings()}
        </TabsContent>

        <TabsContent value="versioning" className="mt-6">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Workflow Versions</h3>
            <div className="space-y-4">
              {workflows.map(workflow => (
                <Card key={workflow.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{workflow.name}</h4>
                        <p className="text-sm text-gray-600">Version {workflow.version} • Modified {workflow.lastModified}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={workflow.status === 'Production' ? 'default' : 'secondary'}>
                          {workflow.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <GitBranch className="h-4 w-4 mr-2" />
                          History
                        </Button>
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Deploy
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="monitoring" className="mt-6">
          {renderMonitoringDashboard()}
        </TabsContent>
      </Tabs>
    </div>
  );
}