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
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Activity,
  Calendar,
  Settings,
  Server,
  Database,
  Globe,
  Zap,
  RefreshCw,
  Monitor,
  Code,
  GitBranch,
  Cpu,
  HardDrive,
  Wifi,
  Shield,
  Bug,
  Wrench,
  Terminal,
  BarChart3
} from 'lucide-react';

export default function TechSupportModule() {
  const [activeTab, setActiveTab] = useState('it-tickets');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const itTickets = [
    {
      id: 'IT240001',
      title: 'Login System Performance Issue',
      description: 'Users experiencing slow login response times during peak hours',
      category: 'Performance',
      severity: 'High',
      status: 'In Progress',
      raised_by: 'Rajesh Kumar',
      assigned_to: 'Tech Team - Amit Singh',
      created_date: '2024-01-22 09:30:00',
      updated_date: '2024-01-22 14:15:00',
      resolution_time: '6h 45m',
      affected_users: 150,
      environment: 'Production',
      priority: 'P1'
    },
    {
      id: 'IT240002',
      title: 'Database Connection Timeout',
      description: 'Intermittent database connection timeouts in customer module',
      category: 'Database',
      severity: 'Critical',
      status: 'Open',
      raised_by: 'Priya Sharma',
      assigned_to: 'DBA Team - Vikram Patel',
      created_date: '2024-01-22 11:20:00',
      updated_date: '2024-01-22 11:20:00',
      resolution_time: '2h 15m',
      affected_users: 45,
      environment: 'Production',
      priority: 'P0'
    },
    {
      id: 'IT240003',
      title: 'Report Generation Module Bug',
      description: 'Monthly reports showing incorrect data for last quarter',
      category: 'Application',
      severity: 'Medium',
      status: 'Resolved',
      raised_by: 'Sunita Reddy',
      assigned_to: 'Dev Team - Ravi Kumar',
      created_date: '2024-01-20 16:45:00',
      updated_date: '2024-01-21 10:30:00',
      resolution_time: '17h 45m',
      affected_users: 25,
      environment: 'Production',
      priority: 'P2'
    },
    {
      id: 'IT240004',
      title: 'Email Notification Service Down',
      description: 'Customer email notifications not being sent',
      category: 'Integration',
      severity: 'High',
      status: 'In Progress',
      raised_by: 'Amit Patel',
      assigned_to: 'DevOps Team - Meera Joshi',
      created_date: '2024-01-22 08:15:00',
      updated_date: '2024-01-22 13:45:00',
      resolution_time: '5h 30m',
      affected_users: 200,
      environment: 'Production',
      priority: 'P1'
    }
  ];

  const environmentLogs = [
    {
      id: 'LOG240001',
      environment: 'Production',
      service: 'Authentication Service',
      log_level: 'ERROR',
      timestamp: '2024-01-22 14:30:25',
      message: 'JWT token validation failed for user session',
      source: 'auth-service-pod-1',
      count: 15,
      first_occurrence: '2024-01-22 14:25:10',
      last_occurrence: '2024-01-22 14:30:25'
    },
    {
      id: 'LOG240002',
      environment: 'Production',
      service: 'Database Connection Pool',
      log_level: 'WARN',
      timestamp: '2024-01-22 14:28:15',
      message: 'Connection pool utilization above 85%',
      source: 'db-pool-manager',
      count: 8,
      first_occurrence: '2024-01-22 14:20:30',
      last_occurrence: '2024-01-22 14:28:15'
    },
    {
      id: 'LOG240003',
      environment: 'UAT',
      service: 'Payment Gateway',
      log_level: 'INFO',
      timestamp: '2024-01-22 14:25:40',
      message: 'Payment transaction processed successfully',
      source: 'payment-service',
      count: 142,
      first_occurrence: '2024-01-22 09:00:00',
      last_occurrence: '2024-01-22 14:25:40'
    },
    {
      id: 'LOG240004',
      environment: 'Development',
      service: 'API Gateway',
      log_level: 'DEBUG',
      timestamp: '2024-01-22 14:20:12',
      message: 'Rate limiting applied to client request',
      source: 'api-gateway',
      count: 3,
      first_occurrence: '2024-01-22 14:15:05',
      last_occurrence: '2024-01-22 14:20:12'
    }
  ];

  const deploymentSchedule = [
    {
      id: 'DEP240001',
      release_name: 'Customer Portal v2.1.5',
      version: '2.1.5',
      environment: 'Production',
      scheduled_date: '2024-01-25 02:00:00',
      duration: '2 hours',
      status: 'Scheduled',
      release_manager: 'Vikram Singh',
      features: ['Enhanced search functionality', 'Bug fixes for loan application', 'Performance improvements'],
      rollback_plan: 'Automated rollback available',
      downtime_required: true,
      affected_services: ['Customer Portal', 'Authentication Service', 'Notification Service']
    },
    {
      id: 'DEP240002',
      release_name: 'Payment Gateway Integration v1.3.2',
      version: '1.3.2',
      environment: 'UAT',
      scheduled_date: '2024-01-24 10:00:00',
      duration: '1 hour',
      status: 'In Progress',
      release_manager: 'Meera Joshi',
      features: ['New payment provider integration', 'Enhanced error handling', 'Webhook improvements'],
      rollback_plan: 'Manual rollback required',
      downtime_required: false,
      affected_services: ['Payment Service', 'Webhook Handler']
    },
    {
      id: 'DEP240003',
      release_name: 'Credit Scoring Engine v3.0.1',
      version: '3.0.1',
      environment: 'Production',
      scheduled_date: '2024-01-28 01:30:00',
      duration: '3 hours',
      status: 'Approved',
      release_manager: 'Ravi Kumar',
      features: ['ML model updates', 'New risk parameters', 'Performance optimization'],
      rollback_plan: 'Automated rollback with data migration',
      downtime_required: true,
      affected_services: ['Credit Engine', 'Risk Assessment', 'Underwriting Service']
    },
    {
      id: 'DEP240004',
      release_name: 'Mobile App v4.2.0',
      version: '4.2.0',
      environment: 'App Store',
      scheduled_date: '2024-01-26 12:00:00',
      duration: '30 minutes',
      status: 'Completed',
      release_manager: 'Priya Sharma',
      features: ['New UI design', 'Biometric authentication', 'Offline mode support'],
      rollback_plan: 'Previous version available',
      downtime_required: false,
      affected_services: ['Mobile API', 'Push Notification Service']
    }
  ];

  const integrationHealth = [
    {
      id: 'INT001',
      service_name: 'CIBIL Credit Bureau',
      endpoint: 'https://api.cibil.com/v2/credit-report',
      status: 'Healthy',
      uptime: '99.8%',
      avg_response_time: '1.2s',
      last_check: '2024-01-22 14:30:00',
      success_rate: '98.5%',
      error_count_24h: 3,
      sla_status: 'Met',
      health_score: 95
    },
    {
      id: 'INT002',
      service_name: 'Payment Gateway - Razorpay',
      endpoint: 'https://api.razorpay.com/v1/payments',
      status: 'Healthy',
      uptime: '99.9%',
      avg_response_time: '0.8s',
      last_check: '2024-01-22 14:29:45',
      success_rate: '99.2%',
      error_count_24h: 1,
      sla_status: 'Met',
      health_score: 98
    },
    {
      id: 'INT003',
      service_name: 'SMS Gateway - Twilio',
      endpoint: 'https://api.twilio.com/2010-04-01/Messages',
      status: 'Degraded',
      uptime: '97.2%',
      avg_response_time: '3.5s',
      last_check: '2024-01-22 14:28:30',
      success_rate: '94.8%',
      error_count_24h: 12,
      sla_status: 'Breach',
      health_score: 78
    },
    {
      id: 'INT004',
      service_name: 'Email Service - SendGrid',
      endpoint: 'https://api.sendgrid.com/v3/mail/send',
      status: 'Down',
      uptime: '85.4%',
      avg_response_time: 'N/A',
      last_check: '2024-01-22 14:25:15',
      success_rate: '0%',
      error_count_24h: 45,
      sla_status: 'Critical Breach',
      health_score: 25
    },
    {
      id: 'INT005',
      service_name: 'Document Storage - AWS S3',
      endpoint: 'https://s3.amazonaws.com/navadhan-docs',
      status: 'Healthy',
      uptime: '99.99%',
      avg_response_time: '0.3s',
      last_check: '2024-01-22 14:30:10',
      success_rate: '99.9%',
      error_count_24h: 0,
      sla_status: 'Met',
      health_score: 99
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'resolved': case 'completed': case 'healthy': return 'bg-green-100 text-green-800';
      case 'in progress': case 'scheduled': case 'degraded': return 'bg-yellow-100 text-yellow-800';
      case 'open': case 'critical': case 'down': return 'bg-red-100 text-red-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLogLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'error': return 'bg-red-100 text-red-800';
      case 'warn': return 'bg-yellow-100 text-yellow-800';
      case 'info': return 'bg-blue-100 text-blue-800';
      case 'debug': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderITTickets = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">IT Support Tickets</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search tickets..."
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
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="in-progress">In Progress</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Raise Ticket
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">28</p>
                <p className="text-sm text-gray-600">Total Tickets</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-600">Open</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">Resolved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent IT Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Ticket ID</th>
                  <th className="text-left p-3 font-medium">Title</th>
                  <th className="text-left p-3 font-medium">Category</th>
                  <th className="text-left p-3 font-medium">Severity</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Assigned To</th>
                  <th className="text-left p-3 font-medium">Resolution Time</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {itTickets.map((ticket, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{ticket.id}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{ticket.title}</p>
                        <p className="text-sm text-gray-600">{ticket.description.substring(0, 50)}...</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        {ticket.category === 'Performance' && <Zap className="h-4 w-4 text-yellow-500" />}
                        {ticket.category === 'Database' && <Database className="h-4 w-4 text-blue-500" />}
                        {ticket.category === 'Application' && <Code className="h-4 w-4 text-green-500" />}
                        {ticket.category === 'Integration' && <Globe className="h-4 w-4 text-purple-500" />}
                        <span>{ticket.category}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={getSeverityColor(ticket.severity)}>
                        {ticket.severity}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </td>
                    <td className="p-3">{ticket.assigned_to}</td>
                    <td className="p-3">{ticket.resolution_time}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View
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
    </div>
  );

  const renderEnvironmentLogs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Environment Logs</h3>
        <div className="flex items-center space-x-4">
          <Select defaultValue="production">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Environments</SelectItem>
              <SelectItem value="production">Production</SelectItem>
              <SelectItem value="uat">UAT</SelectItem>
              <SelectItem value="development">Development</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="error">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="error">Error</SelectItem>
              <SelectItem value="warn">Warning</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="debug">Debug</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-sm text-gray-600">Errors (24h)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">45</p>
                <p className="text-sm text-gray-600">Warnings (24h)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">1,247</p>
                <p className="text-sm text-gray-600">Info Logs (24h)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Terminal className="h-8 w-8 text-gray-500" />
              <div>
                <p className="text-2xl font-bold">3,456</p>
                <p className="text-sm text-gray-600">Debug Logs (24h)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Log Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Timestamp</th>
                  <th className="text-left p-3 font-medium">Environment</th>
                  <th className="text-left p-3 font-medium">Service</th>
                  <th className="text-left p-3 font-medium">Level</th>
                  <th className="text-left p-3 font-medium">Message</th>
                  <th className="text-left p-3 font-medium">Count</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {environmentLogs.map((log, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">{log.timestamp}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        {log.environment === 'Production' && <Server className="h-4 w-4 text-red-500" />}
                        {log.environment === 'UAT' && <Monitor className="h-4 w-4 text-yellow-500" />}
                        {log.environment === 'Development' && <Code className="h-4 w-4 text-green-500" />}
                        <span>{log.environment}</span>
                      </div>
                    </td>
                    <td className="p-3">{log.service}</td>
                    <td className="p-3">
                      <Badge className={getLogLevelColor(log.log_level)}>
                        {log.log_level}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="max-w-xs">
                        <p className="truncate">{log.message}</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant="outline">{log.count}</Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Export
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
          <CardTitle>Log Analysis Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Top Error Sources</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Authentication Service</span>
                  <span className="font-medium">15 errors</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Payment Gateway</span>
                  <span className="font-medium">8 errors</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Database Pool</span>
                  <span className="font-medium">5 errors</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Environment Health</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Production</span>
                  <Badge className="bg-green-100 text-green-800">Stable</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>UAT</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Warning</Badge>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Development</span>
                  <Badge className="bg-green-100 text-green-800">Stable</Badge>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Log Volume Trends</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Current Hour</span>
                  <span className="font-medium">1,247 logs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Previous Hour</span>
                  <span className="font-medium">1,156 logs</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>24h Average</span>
                  <span className="font-medium">1,089 logs</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDeploymentSchedule = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Deployment Schedule</h3>
        <div className="flex items-center space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Environments</SelectItem>
              <SelectItem value="production">Production</SelectItem>
              <SelectItem value="uat">UAT</SelectItem>
              <SelectItem value="development">Development</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Deployment
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">Scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">15</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-gray-600">Failed</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Deployments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Release Name</th>
                  <th className="text-left p-3 font-medium">Version</th>
                  <th className="text-left p-3 font-medium">Environment</th>
                  <th className="text-left p-3 font-medium">Scheduled Date</th>
                  <th className="text-left p-3 font-medium">Duration</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Release Manager</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {deploymentSchedule.map((deployment, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{deployment.release_name}</p>
                        <p className="text-sm text-gray-600">{deployment.features.length} features</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <GitBranch className="h-4 w-4 text-gray-500" />
                        <span className="font-mono text-sm">{deployment.version}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        {deployment.environment === 'Production' && <Server className="h-4 w-4 text-red-500" />}
                        {deployment.environment === 'UAT' && <Monitor className="h-4 w-4 text-yellow-500" />}
                        {deployment.environment === 'App Store' && <Globe className="h-4 w-4 text-blue-500" />}
                        <span>{deployment.environment}</span>
                      </div>
                    </td>
                    <td className="p-3 font-mono text-sm">{deployment.scheduled_date}</td>
                    <td className="p-3">{deployment.duration}</td>
                    <td className="p-3">
                      <Badge className={getStatusColor(deployment.status)}>
                        {deployment.status}
                      </Badge>
                    </td>
                    <td className="p-3">{deployment.release_manager}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Modify
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
          <CardTitle>Release Pipeline Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Development</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Active Branches</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Pending PRs</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Build Status</span>
                  <Badge className="bg-green-100 text-green-800">Passing</Badge>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">UAT</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Test Coverage</span>
                  <span className="font-medium">87%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Failed Tests</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Environment Status</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Testing</Badge>
                </div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-3">Production</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uptime</span>
                  <span className="font-medium">99.8%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Deployment</span>
                  <span className="font-medium">2 days ago</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Health Status</span>
                  <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderIntegrationHealth = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Integration Health Status</h3>
        <div className="flex items-center space-x-4">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh All
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Integration
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-gray-600">Healthy</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-gray-600">Degraded</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-gray-600">Down</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">95.2%</p>
                <p className="text-sm text-gray-600">Avg Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Integration Status Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Service</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Uptime</th>
                  <th className="text-left p-3 font-medium">Response Time</th>
                  <th className="text-left p-3 font-medium">Success Rate</th>
                  <th className="text-left p-3 font-medium">Health Score</th>
                  <th className="text-left p-3 font-medium">SLA Status</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {integrationHealth.map((integration, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{integration.service_name}</p>
                        <p className="text-sm text-gray-600 font-mono">{integration.endpoint.substring(0, 30)}...</p>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        {integration.status === 'Healthy' && <CheckCircle className="h-4 w-4 text-green-500" />}
                        {integration.status === 'Degraded' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                        {integration.status === 'Down' && <XCircle className="h-4 w-4 text-red-500" />}
                        <Badge className={getStatusColor(integration.status)}>
                          {integration.status}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-3">{integration.uptime}</td>
                    <td className="p-3">{integration.avg_response_time}</td>
                    <td className="p-3">{integration.success_rate}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span className={`font-medium ${integration.health_score >= 90 ? 'text-green-600' : integration.health_score >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {integration.health_score}
                        </span>
                        <div className="w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${integration.health_score >= 90 ? 'bg-green-500' : integration.health_score >= 70 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${integration.health_score}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={integration.sla_status.includes('Breach') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}>
                        {integration.sla_status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          Monitor
                        </Button>
                        <Button variant="outline" size="sm">
                          <Settings className="h-3 w-3 mr-1" />
                          Config
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
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Average Response Time</span>
                  <span className="text-lg font-bold">1.4s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }} />
                </div>
              </div>
              
              <div className="p-3 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Overall Success Rate</span>
                  <span className="text-lg font-bold">96.8%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '96.8%' }} />
                </div>
              </div>
              
              <div className="p-3 border rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Error Rate (24h)</span>
                  <span className="text-lg font-bold">3.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '3.2%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alert Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Response Time &gt; 5s</p>
                  <p className="text-sm text-gray-600">Critical alert threshold</p>
                </div>
                <Badge className="bg-red-100 text-red-800">Enabled</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Success Rate &lt; 95%</p>
                  <p className="text-sm text-gray-600">Warning alert threshold</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800">Enabled</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Service Unavailable</p>
                  <p className="text-sm text-gray-600">Immediate alert</p>
                </div>
                <Badge className="bg-red-100 text-red-800">Enabled</Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">SLA Breach Warning</p>
                  <p className="text-sm text-gray-600">30 min before breach</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">Enabled</Badge>
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
        <h2 className="text-2xl font-bold">Tech Support</h2>
        <p className="text-gray-600">Manage IT tickets, monitor systems, and track deployments</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="it-tickets">IT Tickets</TabsTrigger>
          <TabsTrigger value="environment-logs">Environment Logs</TabsTrigger>
          <TabsTrigger value="deployment">Deployment Schedule</TabsTrigger>
          <TabsTrigger value="integration-health">Integration Health</TabsTrigger>
        </TabsList>

        <TabsContent value="it-tickets" className="mt-6">
          {renderITTickets()}
        </TabsContent>

        <TabsContent value="environment-logs" className="mt-6">
          {renderEnvironmentLogs()}
        </TabsContent>

        <TabsContent value="deployment" className="mt-6">
          {renderDeploymentSchedule()}
        </TabsContent>

        <TabsContent value="integration-health" className="mt-6">
          {renderIntegrationHealth()}
        </TabsContent>
      </Tabs>
    </div>
  );
}