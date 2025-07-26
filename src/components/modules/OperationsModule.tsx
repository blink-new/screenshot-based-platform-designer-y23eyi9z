import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Progress } from '../ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { 
  Plus, 
  Search, 
  Filter, 
  Eye, 
  Edit, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  User,
  MapPin,
  Calendar,
  Phone,
  Mail,
  FileText,
  Camera,
  Navigation,
  Users,
  Target,
  TrendingUp,
  Activity,
  Zap,
  ArrowLeft,
  Building,
  CreditCard,
  DollarSign,
  Paperclip,
  MessageCircle
} from 'lucide-react';

export default function OperationsModule() {
  const [activeTab, setActiveTab] = useState('task-management');
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [selectedView, setSelectedView] = useState({ type: 'main' });
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: 'SR-001',
      request_number: 'REQ-2024-001',
      title: 'EMI Date Change Request',
      customer_id: 'HHID-789012',
      customer_name: 'Rahul Verma',
      co_borrower: 'Priya Verma',
      fcic_name: 'Delhi Financial Services',
      type: 'Account Modification',
      priority: 'Medium',
      status: 'Open',
      created_date: '2024-01-20',
      assignment_date: '2024-01-20',
      description: 'Customer wants to change EMI date from 5th to 15th of every month',
      assigned_to: 'Rajesh Kumar',
      person_assigned: 'Rajesh Kumar',
      severity: 'Medium',
      resolution_time: '24 hours',
      address: {
        state: 'Delhi',
        district: 'Central Delhi',
        branch: 'Connaught Place',
        pin: '110001',
        full_address: '123 MG Road, Connaught Place, New Delhi - 110001'
      },
      loan_details: {
        enrollment_date: '2023-06-15',
        disbursement_date: '2023-06-20',
        next_collection_date: '2024-02-05',
        loan_amount: 500000,
        interest_rate: '14.5%',
        emi: 12500,
        tenure: '48 months',
        repayment_mode: 'E-NACH'
      }
    },
    {
      id: 'SR-002',
      request_number: 'REQ-2024-002',
      title: 'Loan Statement Request',
      customer_id: 'HHID-345678',
      customer_name: 'Sunita Devi',
      co_borrower: 'Ramesh Devi',
      fcic_name: 'Mumbai Financial Hub',
      type: 'Information Request',
      priority: 'Low',
      status: 'In Progress',
      created_date: '2024-01-19',
      assignment_date: '2024-01-19',
      description: 'Customer needs detailed loan statement for tax filing',
      assigned_to: 'Priya Sharma',
      person_assigned: 'Priya Sharma',
      severity: 'Low',
      resolution_time: '48 hours',
      address: {
        state: 'Maharashtra',
        district: 'Mumbai',
        branch: 'Bandra West',
        pin: '400050',
        full_address: '456 Hill Road, Bandra West, Mumbai - 400050'
      },
      loan_details: {
        enrollment_date: '2023-08-10',
        disbursement_date: '2023-08-15',
        next_collection_date: '2024-02-10',
        loan_amount: 300000,
        interest_rate: '13.5%',
        emi: 8500,
        tenure: '36 months',
        repayment_mode: 'Physical NACH'
      }
    },
    {
      id: 'SR-003',
      request_number: 'REQ-2024-003',
      title: 'Prepayment Calculation',
      customer_id: 'HHID-901234',
      customer_name: 'Vikash Singh',
      co_borrower: 'Anita Singh',
      fcic_name: 'Bangalore Tech Finance',
      type: 'Financial Query',
      priority: 'High',
      status: 'Resolved',
      created_date: '2024-01-18',
      assignment_date: '2024-01-18',
      description: 'Customer wants to know prepayment amount and charges',
      assigned_to: 'Amit Patel',
      person_assigned: 'Amit Patel',
      severity: 'High',
      resolution_time: '12 hours',
      address: {
        state: 'Karnataka',
        district: 'Bangalore Urban',
        branch: 'Whitefield',
        pin: '560066',
        full_address: '789 ITPL Road, Whitefield, Bangalore - 560066'
      },
      loan_details: {
        enrollment_date: '2023-04-05',
        disbursement_date: '2023-04-10',
        next_collection_date: '2024-02-05',
        loan_amount: 750000,
        interest_rate: '15.5%',
        emi: 18500,
        tenure: '60 months',
        repayment_mode: 'E-NACH'
      }
    }
  ]);
  const [showNewRequestModal, setShowNewRequestModal] = useState(false);
  const [newRequest, setNewRequest] = useState({
    title: '',
    category: '',
    priority: '',
    description: '',
    startDate: '',
    endDate: '',
    customer: '',
    assignedOperator: '',
    contactPerson: '',
    department: '',
    email: '',
    customerAddress: {
      state: '',
      district: '',
      branch: '',
      pin: '',
      fullAddress: ''
    },
    loanDetails: {
      enrollmentDate: '',
      disbursementDate: '',
      nextCollectionDate: '',
      loanAmount: '',
      interestRate: '',
      emi: '',
      tenure: '',
      repaymentMode: ''
    },
    resolutionStatus: '',
    comments: ''
  });

  const tasks = [
    {
      id: 'TASK-001',
      title: 'Document Verification - HHID-789012',
      description: 'Verify uploaded KYC documents for loan application',
      priority: 'High',
      status: 'In Progress',
      assigned_to: 'Priya Sharma',
      created_date: '2024-01-20',
      due_date: '2024-01-21',
      category: 'KYC Verification',
      customer_id: 'HHID-789012',
      estimated_hours: 2,
      actual_hours: 1.5,
      completion: 75
    },
    {
      id: 'TASK-002',
      title: 'Field Verification - Business Address',
      description: 'Physical verification of business address for loan application',
      priority: 'Medium',
      status: 'Assigned',
      assigned_to: 'Rajesh Kumar',
      created_date: '2024-01-19',
      due_date: '2024-01-22',
      category: 'Field Verification',
      customer_id: 'HHID-345678',
      estimated_hours: 4,
      actual_hours: 0,
      completion: 0
    },
    {
      id: 'TASK-003',
      title: 'Credit Assessment Review',
      description: 'Manual review of credit assessment for borderline case',
      priority: 'High',
      status: 'Completed',
      assigned_to: 'Amit Patel',
      created_date: '2024-01-18',
      due_date: '2024-01-20',
      category: 'Credit Review',
      customer_id: 'HHID-901234',
      estimated_hours: 3,
      actual_hours: 2.5,
      completion: 100
    }
  ];



  const caseLifecycle = [
    {
      id: 'CASE-001',
      customer_id: 'HHID-789012',
      customer_name: 'Rahul Verma',
      case_type: 'Loan Application',
      current_stage: 'Credit Assessment',
      progress: 60,
      stages: [
        { name: 'Application Received', status: 'completed', date: '2024-01-15' },
        { name: 'Document Verification', status: 'completed', date: '2024-01-17' },
        { name: 'Credit Assessment', status: 'in_progress', date: '2024-01-19' },
        { name: 'Approval Process', status: 'pending', date: null },
        { name: 'Disbursement', status: 'pending', date: null }
      ],
      sla_days: 7,
      days_elapsed: 5,
      next_action: 'Complete credit bureau verification'
    },
    {
      id: 'CASE-002',
      customer_id: 'HHID-345678',
      customer_name: 'Sunita Devi',
      case_type: 'Service Request',
      current_stage: 'Resolution',
      progress: 80,
      stages: [
        { name: 'Request Received', status: 'completed', date: '2024-01-18' },
        { name: 'Initial Review', status: 'completed', date: '2024-01-18' },
        { name: 'Investigation', status: 'completed', date: '2024-01-19' },
        { name: 'Resolution', status: 'in_progress', date: '2024-01-20' },
        { name: 'Closure', status: 'pending', date: null }
      ],
      sla_days: 3,
      days_elapsed: 2,
      next_action: 'Customer confirmation pending'
    }
  ];

  const fieldTeamData = [
    {
      id: 'FT-001',
      name: 'Rajesh Kumar',
      employee_id: 'EMP-1234',
      zone: 'North Delhi',
      status: 'Active',
      current_location: { lat: 28.7041, lng: 77.1025, address: 'Connaught Place, Delhi' },
      assigned_visits: 3,
      completed_visits: 1,
      pending_visits: 2,
      last_update: '2024-01-20 14:30',
      phone: '+91-9876543210'
    },
    {
      id: 'FT-002',
      name: 'Priya Sharma',
      employee_id: 'EMP-5678',
      zone: 'South Mumbai',
      status: 'On Visit',
      current_location: { lat: 19.0760, lng: 72.8777, address: 'Bandra West, Mumbai' },
      assigned_visits: 4,
      completed_visits: 2,
      pending_visits: 2,
      last_update: '2024-01-20 15:45',
      phone: '+91-9876543211'
    },
    {
      id: 'FT-003',
      name: 'Amit Patel',
      employee_id: 'EMP-9012',
      zone: 'East Bangalore',
      status: 'Available',
      current_location: { lat: 12.9716, lng: 77.5946, address: 'Whitefield, Bangalore' },
      assigned_visits: 2,
      completed_visits: 2,
      pending_visits: 0,
      last_update: '2024-01-20 16:00',
      phone: '+91-9876543212'
    }
  ];

  const scheduledVisits = [
    {
      id: 'VISIT-001',
      customer_id: 'HHID-789012',
      customer_name: 'Rahul Verma',
      address: '123 MG Road, Delhi - 110001',
      visit_type: 'Address Verification',
      scheduled_date: '2024-01-21',
      scheduled_time: '10:00 AM',
      assigned_officer: 'Rajesh Kumar',
      status: 'Scheduled',
      priority: 'High',
      estimated_duration: '1 hour'
    },
    {
      id: 'VISIT-002',
      customer_id: 'HHID-345678',
      customer_name: 'Sunita Devi',
      address: '456 Park Street, Mumbai - 400001',
      visit_type: 'Document Collection',
      scheduled_date: '2024-01-21',
      scheduled_time: '2:00 PM',
      assigned_officer: 'Priya Sharma',
      status: 'In Progress',
      priority: 'Medium',
      estimated_duration: '45 minutes'
    }
  ];

  const renderTaskManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Task Management</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Task
          </Button>
        </div>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold">24</p>
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
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">Overdue</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map(task => (
          <Card key={task.id} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium">{task.title}</h4>
                    <Badge variant={
                      task.priority === 'High' ? 'destructive' : 
                      task.priority === 'Medium' ? 'default' : 'secondary'
                    }>
                      {task.priority}
                    </Badge>
                    <Badge variant={
                      task.status === 'Completed' ? 'default' : 
                      task.status === 'In Progress' ? 'secondary' : 'outline'
                    }>
                      {task.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Assigned to</p>
                      <p className="font-medium">{task.assigned_to}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Customer</p>
                      <Button 
                        variant="link" 
                        className="text-blue-600 p-0 h-auto font-medium"
                        onClick={() => alert(`Navigating to customer ${task.customer_id}`)}
                      >
                        {task.customer_id}
                      </Button>
                    </div>
                    <div>
                      <p className="text-gray-500">Due Date</p>
                      <p className="font-medium">{task.due_date}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Progress</p>
                      <div className="flex items-center space-x-2">
                        <Progress value={task.completion} className="flex-1" />
                        <span className="text-xs">{task.completion}%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 ml-4">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderRequestDetails = () => {
    const request = serviceRequests.find(r => r.id === selectedView.requestId);
    if (!request) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => setSelectedView({ type: 'main' })}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Service Requests
            </Button>
            <div>
              <h2 className="text-2xl font-bold">{request.title}</h2>
              <p className="text-gray-600">Request Number: {request.request_number}</p>
            </div>
          </div>
          <Badge variant={
            request.status === 'Resolved' ? 'default' : 
            request.status === 'In Progress' ? 'secondary' : 'outline'
          }>
            {request.status}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Customer Details Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Customer Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">HH ID</Label>
                  <p className="font-medium">{request.customer_id}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Borrower Name</Label>
                  <p className="font-medium">{request.customer_name}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Co-Borrower Name</Label>
                  <p className="font-medium">{request.co_borrower}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">FCIC Name</Label>
                  <p className="font-medium">{request.fcic_name}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Address Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Address Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">State</Label>
                    <p className="font-medium">{request.address.state}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">District</Label>
                    <p className="font-medium">{request.address.district}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Branch</Label>
                    <p className="font-medium">{request.address.branch}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">PIN</Label>
                    <p className="font-medium">{request.address.pin}</p>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Full Address</Label>
                  <p className="font-medium text-sm leading-relaxed">{request.address.full_address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loan Details Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Loan Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Enrollment Date</Label>
                  <p className="font-medium">{request.loan_details.enrollment_date}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Disbursement Date</Label>
                  <p className="font-medium">{request.loan_details.disbursement_date}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Next Collection Date</Label>
                  <p className="font-medium">{request.loan_details.next_collection_date}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Loan Amount</Label>
                  <p className="font-medium">₹{request.loan_details.loan_amount.toLocaleString()}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Interest Rate</Label>
                  <p className="font-medium">{request.loan_details.interest_rate}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">EMI</Label>
                  <p className="font-medium">₹{request.loan_details.emi.toLocaleString()}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Tenure</Label>
                  <p className="font-medium">{request.loan_details.tenure}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-600">Repayment Mode</Label>
                  <Badge variant="outline">{request.loan_details.repayment_mode}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Request Details Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Request Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Request Description</Label>
                  <p className="font-medium mt-1">{request.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Request Date</Label>
                    <p className="font-medium">{request.created_date}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Assignment Date</Label>
                    <p className="font-medium">{request.assignment_date}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Person Assigned</Label>
                    <p className="font-medium">{request.person_assigned}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-600">Severity Level</Label>
                    <Badge variant={
                      request.severity === 'High' ? 'destructive' : 
                      request.severity === 'Medium' ? 'default' : 'secondary'
                    }>
                      {request.severity}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Tracking Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Service Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600">Ticket Status</Label>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className={`w-3 h-3 rounded-full ${
                      request.status === 'Resolved' ? 'bg-green-500' :
                      request.status === 'In Progress' ? 'bg-blue-500' : 'bg-orange-500'
                    }`} />
                    <span className="font-medium">{request.status}</span>
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-gray-600">Comments History</Label>
                  <div className="mt-2 space-y-3">
                    <div className="border-l-4 border-blue-500 pl-3">
                      <p className="text-sm font-medium">Initial Assessment</p>
                      <p className="text-xs text-gray-600">by {request.person_assigned} • {request.created_date}</p>
                      <p className="text-sm text-gray-700 mt-1">Request received and assigned for processing. Customer contacted for verification.</p>
                    </div>
                    {request.status === 'In Progress' && (
                      <div className="border-l-4 border-orange-500 pl-3">
                        <p className="text-sm font-medium">In Progress Update</p>
                        <p className="text-xs text-gray-600">by {request.person_assigned} • {new Date().toISOString().split('T')[0]}</p>
                        <p className="text-sm text-gray-700 mt-1">Working on the request. Additional documentation may be required.</p>
                      </div>
                    )}
                    {request.status === 'Resolved' && (
                      <div className="border-l-4 border-green-500 pl-3">
                        <p className="text-sm font-medium">Resolution Complete</p>
                        <p className="text-xs text-gray-600">by {request.person_assigned} • {request.created_date}</p>
                        <p className="text-sm text-gray-700 mt-1">Request has been successfully processed and completed.</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600">Linked Documents</Label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center space-x-2">
                        <Paperclip className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Customer_Request_Form.pdf</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-2 border rounded">
                      <div className="flex items-center space-x-2">
                        <Paperclip className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Supporting_Documents.zip</span>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button>
            <MessageCircle className="h-4 w-4 mr-2" />
            Add Comment
          </Button>
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Update Status
          </Button>
          <Button variant="outline">
            <Paperclip className="h-4 w-4 mr-2" />
            Attach Document
          </Button>
          {request.status !== 'Resolved' && (
            <Button variant="outline">
              <CheckCircle className="h-4 w-4 mr-2" />
              Mark as Resolved
            </Button>
          )}
        </div>
      </div>
    );
  };

  const handleSaveRequest = () => {
    // Generate new request ID and number
    const newId = `SR-${String(serviceRequests.length + 1).padStart(3, '0')}`;
    const newRequestNumber = `REQ-2024-${String(serviceRequests.length + 1).padStart(3, '0')}`;
    
    // Create new request object
    const requestToAdd = {
      id: newId,
      request_number: newRequestNumber,
      title: newRequest.title,
      customer_id: newRequest.customer.includes('HHID') ? newRequest.customer : `HHID-${Math.floor(Math.random() * 900000) + 100000}`,
      customer_name: newRequest.customer.includes('HHID') ? 'Customer Name' : newRequest.customer,
      co_borrower: 'Co-Borrower Name',
      fcic_name: 'Financial Services',
      type: newRequest.category,
      priority: newRequest.priority,
      status: newRequest.resolutionStatus || 'Open',
      created_date: new Date().toISOString().split('T')[0],
      assignment_date: new Date().toISOString().split('T')[0],
      description: newRequest.description,
      assigned_to: newRequest.assignedOperator || 'Unassigned',
      person_assigned: newRequest.assignedOperator || 'Unassigned',
      severity: newRequest.priority,
      resolution_time: newRequest.priority === 'high' ? '12 hours' : newRequest.priority === 'medium' ? '24 hours' : '48 hours',
      address: {
        state: newRequest.customerAddress.state,
        district: newRequest.customerAddress.district,
        branch: newRequest.customerAddress.branch,
        pin: newRequest.customerAddress.pin,
        full_address: newRequest.customerAddress.fullAddress
      },
      loan_details: {
        enrollment_date: newRequest.loanDetails.enrollmentDate,
        disbursement_date: newRequest.loanDetails.disbursementDate,
        next_collection_date: newRequest.loanDetails.nextCollectionDate,
        loan_amount: parseInt(newRequest.loanDetails.loanAmount) || 0,
        interest_rate: newRequest.loanDetails.interestRate,
        emi: parseInt(newRequest.loanDetails.emi) || 0,
        tenure: newRequest.loanDetails.tenure,
        repayment_mode: newRequest.loanDetails.repaymentMode
      }
    };
    
    // Add to service requests list
    setServiceRequests([...serviceRequests, requestToAdd]);
    
    alert('Service request created successfully!');
    setShowNewRequestModal(false);
    
    // Reset form
    setNewRequest({
      title: '',
      category: '',
      priority: '',
      description: '',
      startDate: '',
      endDate: '',
      customer: '',
      assignedOperator: '',
      contactPerson: '',
      department: '',
      email: '',
      customerAddress: {
        state: '',
        district: '',
        branch: '',
        pin: '',
        fullAddress: ''
      },
      loanDetails: {
        enrollmentDate: '',
        disbursementDate: '',
        nextCollectionDate: '',
        loanAmount: '',
        interestRate: '',
        emi: '',
        tenure: '',
        repaymentMode: ''
      },
      resolutionStatus: '',
      comments: ''
    });
  };

  const renderNewRequestModal = () => (
    <Dialog open={showNewRequestModal} onOpenChange={setShowNewRequestModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Service Request</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Request Details */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Request Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={newRequest.title}
                  onChange={(e) => setNewRequest({...newRequest, title: e.target.value})}
                  placeholder="Brief description of the request"
                />
              </div>
              <div>
                <Label htmlFor="category">Category *</Label>
                <Select value={newRequest.category} onValueChange={(value) => setNewRequest({...newRequest, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="account-modification">Account Modification</SelectItem>
                    <SelectItem value="information-request">Information Request</SelectItem>
                    <SelectItem value="financial-query">Financial Query</SelectItem>
                    <SelectItem value="technical-support">Technical Support</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="priority">Priority *</Label>
                <Select value={newRequest.priority} onValueChange={(value) => setNewRequest({...newRequest, priority: value})}>
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
                <Label htmlFor="resolutionStatus">Resolution Status</Label>
                <Select value={newRequest.resolutionStatus} onValueChange={(value) => setNewRequest({...newRequest, resolutionStatus: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({...newRequest, description: e.target.value})}
                  placeholder="Detailed description of the request"
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={newRequest.startDate}
                  onChange={(e) => setNewRequest({...newRequest, startDate: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={newRequest.endDate}
                  onChange={(e) => setNewRequest({...newRequest, endDate: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Stakeholders */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Stakeholders
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="customer">Customer *</Label>
                <Input
                  id="customer"
                  value={newRequest.customer}
                  onChange={(e) => setNewRequest({...newRequest, customer: e.target.value})}
                  placeholder="Customer name or HHID"
                />
              </div>
              <div>
                <Label htmlFor="assignedOperator">Assigned Operator</Label>
                <Input
                  id="assignedOperator"
                  value={newRequest.assignedOperator}
                  onChange={(e) => setNewRequest({...newRequest, assignedOperator: e.target.value})}
                  placeholder="Operator name"
                />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input
                  id="contactPerson"
                  value={newRequest.contactPerson}
                  onChange={(e) => setNewRequest({...newRequest, contactPerson: e.target.value})}
                  placeholder="Primary contact person"
                />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Select value={newRequest.department} onValueChange={(value) => setNewRequest({...newRequest, department: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="customer-service">Customer Service</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="credit">Credit</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newRequest.email}
                  onChange={(e) => setNewRequest({...newRequest, email: e.target.value})}
                  placeholder="Contact email address"
                />
              </div>
            </div>
          </div>

          {/* Customer Address Details */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Customer Address Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={newRequest.customerAddress.state}
                    onChange={(e) => setNewRequest({
                      ...newRequest, 
                      customerAddress: {...newRequest.customerAddress, state: e.target.value}
                    })}
                    placeholder="State name"
                  />
                </div>
                <div>
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    value={newRequest.customerAddress.district}
                    onChange={(e) => setNewRequest({
                      ...newRequest, 
                      customerAddress: {...newRequest.customerAddress, district: e.target.value}
                    })}
                    placeholder="District name"
                  />
                </div>
                <div>
                  <Label htmlFor="branch">Branch</Label>
                  <Input
                    id="branch"
                    value={newRequest.customerAddress.branch}
                    onChange={(e) => setNewRequest({
                      ...newRequest, 
                      customerAddress: {...newRequest.customerAddress, branch: e.target.value}
                    })}
                    placeholder="Branch name"
                  />
                </div>
                <div>
                  <Label htmlFor="pin">PIN Code</Label>
                  <Input
                    id="pin"
                    value={newRequest.customerAddress.pin}
                    onChange={(e) => setNewRequest({
                      ...newRequest, 
                      customerAddress: {...newRequest.customerAddress, pin: e.target.value}
                    })}
                    placeholder="PIN code"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="fullAddress">Full Address</Label>
                <Textarea
                  id="fullAddress"
                  value={newRequest.customerAddress.fullAddress}
                  onChange={(e) => setNewRequest({
                    ...newRequest, 
                    customerAddress: {...newRequest.customerAddress, fullAddress: e.target.value}
                  })}
                  placeholder="Complete address with landmarks"
                  rows={8}
                />
              </div>
            </div>
          </div>

          {/* Loan Details */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2" />
              Loan Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="enrollmentDate">Enrollment Date</Label>
                <Input
                  id="enrollmentDate"
                  type="date"
                  value={newRequest.loanDetails.enrollmentDate}
                  onChange={(e) => setNewRequest({
                    ...newRequest, 
                    loanDetails: {...newRequest.loanDetails, enrollmentDate: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="disbursementDate">Disbursement Date</Label>
                <Input
                  id="disbursementDate"
                  type="date"
                  value={newRequest.loanDetails.disbursementDate}
                  onChange={(e) => setNewRequest({
                    ...newRequest, 
                    loanDetails: {...newRequest.loanDetails, disbursementDate: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="nextCollectionDate">Next Collection Date</Label>
                <Input
                  id="nextCollectionDate"
                  type="date"
                  value={newRequest.loanDetails.nextCollectionDate}
                  onChange={(e) => setNewRequest({
                    ...newRequest, 
                    loanDetails: {...newRequest.loanDetails, nextCollectionDate: e.target.value}
                  })}
                />
              </div>
              <div>
                <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  value={newRequest.loanDetails.loanAmount}
                  onChange={(e) => setNewRequest({
                    ...newRequest, 
                    loanDetails: {...newRequest.loanDetails, loanAmount: e.target.value}
                  })}
                  placeholder="Loan amount"
                />
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  value={newRequest.loanDetails.interestRate}
                  onChange={(e) => setNewRequest({
                    ...newRequest, 
                    loanDetails: {...newRequest.loanDetails, interestRate: e.target.value}
                  })}
                  placeholder="Interest rate"
                />
              </div>
              <div>
                <Label htmlFor="emi">EMI (₹)</Label>
                <Input
                  id="emi"
                  type="number"
                  value={newRequest.loanDetails.emi}
                  onChange={(e) => setNewRequest({
                    ...newRequest, 
                    loanDetails: {...newRequest.loanDetails, emi: e.target.value}
                  })}
                  placeholder="Monthly EMI"
                />
              </div>
              <div>
                <Label htmlFor="tenure">Tenure</Label>
                <Input
                  id="tenure"
                  value={newRequest.loanDetails.tenure}
                  onChange={(e) => setNewRequest({
                    ...newRequest, 
                    loanDetails: {...newRequest.loanDetails, tenure: e.target.value}
                  })}
                  placeholder="e.g., 36 months"
                />
              </div>
              <div>
                <Label htmlFor="repaymentMode">Repayment Mode</Label>
                <Select 
                  value={newRequest.loanDetails.repaymentMode} 
                  onValueChange={(value) => setNewRequest({
                    ...newRequest, 
                    loanDetails: {...newRequest.loanDetails, repaymentMode: value}
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select repayment mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical-nach">Physical NACH</SelectItem>
                    <SelectItem value="e-nach">E-NACH</SelectItem>
                    <SelectItem value="manual">Manual Payment</SelectItem>
                    <SelectItem value="upi">UPI Auto Pay</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              Additional Comments
            </h4>
            <Textarea
              value={newRequest.comments}
              onChange={(e) => setNewRequest({...newRequest, comments: e.target.value})}
              placeholder="Any additional comments or special instructions"
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6 border-t">
          <Button variant="outline" onClick={() => setShowNewRequestModal(false)}>
            Cancel
          </Button>
          <Button onClick={handleSaveRequest}>
            Save Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

  const renderServiceRequests = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Service Requests</h3>
        <Button onClick={() => setShowNewRequestModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-4 font-medium">Title</th>
                  <th className="text-left p-4 font-medium">Customer</th>
                  <th className="text-left p-4 font-medium">Type</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">SLA</th>
                  <th className="text-left p-4 font-medium">Request Number</th>
                  <th className="text-left p-4 font-medium">Assigned To</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {serviceRequests.map(request => (
                  <tr key={request.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <p className="font-medium">{request.title}</p>
                        <p className="text-sm text-gray-600">{request.description}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <div>
                        <Button 
                          variant="link" 
                          className="text-blue-600 p-0 h-auto font-medium"
                          onClick={() => alert(`Navigating to customer ${request.customer_id}`)}
                        >
                          {request.customer_name}
                        </Button>
                        <p className="text-xs text-gray-500">{request.customer_id}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline">{request.type}</Badge>
                    </td>
                    <td className="p-4">
                      <Badge variant={
                        request.status === 'Resolved' ? 'default' : 
                        request.status === 'In Progress' ? 'secondary' : 'outline'
                      }>
                        {request.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="font-medium">{request.resolution_time}</span>
                    </td>
                    <td className="p-4">
                      <button 
                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                        onClick={() => setSelectedView({ type: 'requestDetails', requestId: request.id })}
                      >
                        {request.request_number}
                      </button>
                    </td>
                    <td className="p-4">
                      <span className="font-medium">{request.assigned_to}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setSelectedView({ type: 'requestDetails', requestId: request.id })}
                        >
                          <Eye className="h-4 w-4" />
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

  const renderCaseLifecycle = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Case Lifecycle Management</h3>
        <Button variant="outline">
          <Search className="h-4 w-4 mr-2" />
          Search Cases
        </Button>
      </div>

      <div className="space-y-6">
        {caseLifecycle.map(caseItem => (
          <Card key={caseItem.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{caseItem.case_type}</CardTitle>
                  <p className="text-sm text-gray-600">
                    Customer: 
                    <Button 
                      variant="link" 
                      className="text-blue-600 p-0 ml-1 h-auto"
                      onClick={() => alert(`Navigating to customer ${caseItem.customer_id}`)}
                    >
                      {caseItem.customer_name} ({caseItem.customer_id})
                    </Button>
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary">{caseItem.current_stage}</Badge>
                  <p className="text-sm text-gray-600 mt-1">
                    Day {caseItem.days_elapsed} of {caseItem.sla_days}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Progress Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-600">{caseItem.progress}%</span>
                  </div>
                  <Progress value={caseItem.progress} className="h-2" />
                </div>

                {/* Stage Timeline */}
                <div className="space-y-3">
                  {caseItem.stages.map((stage, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                        stage.status === 'completed' ? 'bg-green-500' :
                        stage.status === 'in_progress' ? 'bg-blue-500' :
                        'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${
                          stage.status === 'completed' ? 'text-green-700' :
                          stage.status === 'in_progress' ? 'text-blue-700' :
                          'text-gray-500'
                        }`}>
                          {stage.name}
                        </p>
                        {stage.date && (
                          <p className="text-xs text-gray-500">{stage.date}</p>
                        )}
                      </div>
                      {stage.status === 'in_progress' && (
                        <Badge variant="secondary" className="text-xs">Current</Badge>
                      )}
                    </div>
                  ))}
                </div>

                {/* Next Action */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900">Next Action Required:</p>
                  <p className="text-sm text-blue-700">{caseItem.next_action}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderFieldTeamTracker = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Field Team Tracker</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <MapPin className="h-4 w-4 mr-2" />
            Map View
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Visit
          </Button>
        </div>
      </div>

      {/* Field Team Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fieldTeamData.map(officer => (
          <Card key={officer.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{officer.name}</CardTitle>
                    <p className="text-sm text-gray-600">{officer.employee_id}</p>
                  </div>
                </div>
                <Badge variant={
                  officer.status === 'Active' ? 'default' :
                  officer.status === 'On Visit' ? 'secondary' : 'outline'
                }>
                  {officer.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{officer.zone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Navigation className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{officer.current_location.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{officer.phone}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center text-sm mt-4">
                  <div>
                    <p className="font-medium text-green-600">{officer.completed_visits}</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                  <div>
                    <p className="font-medium text-orange-600">{officer.pending_visits}</p>
                    <p className="text-xs text-gray-500">Pending</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-600">{officer.assigned_visits}</p>
                    <p className="text-xs text-gray-500">Total</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-gray-500">Last update: {officer.last_update}</span>
                  <div className="flex space-x-1">
                    <Button variant="outline" size="sm">
                      <Phone className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MapPin className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scheduled Visits */}
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Visits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledVisits.map(visit => (
              <div key={visit.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-3 h-3 rounded-full ${
                    visit.status === 'Completed' ? 'bg-green-500' :
                    visit.status === 'In Progress' ? 'bg-blue-500' :
                    'bg-gray-400'
                  }`} />
                  <div>
                    <p className="font-medium">{visit.visit_type}</p>
                    <p className="text-sm text-gray-600">
                      Customer: 
                      <Button 
                        variant="link" 
                        className="text-blue-600 p-0 ml-1 h-auto"
                        onClick={() => alert(`Navigating to customer ${visit.customer_id}`)}
                      >
                        {visit.customer_name} ({visit.customer_id})
                      </Button>
                    </p>
                    <p className="text-xs text-gray-500">{visit.address}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{visit.scheduled_date} at {visit.scheduled_time}</p>
                  <p className="text-xs text-gray-500">Officer: {visit.assigned_officer}</p>
                  <Badge variant="outline" className="mt-1">{visit.status}</Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Render based on selected view
  if (selectedView.type === 'requestDetails') {
    return (
      <div className="p-6">
        {renderRequestDetails()}
      </div>
    );
  }

  return (
    <div className="p-6">
      {renderNewRequestModal()}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Operations</h2>
        <p className="text-gray-600">Manage tasks, service requests, cases, and field operations</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="task-management">Task Management</TabsTrigger>
          <TabsTrigger value="service-requests">Service Requests</TabsTrigger>
          <TabsTrigger value="case-lifecycle">Case Lifecycle</TabsTrigger>
          <TabsTrigger value="field-team">Field Team Tracker</TabsTrigger>
        </TabsList>

        <TabsContent value="task-management" className="mt-6">
          {renderTaskManagement()}
        </TabsContent>

        <TabsContent value="service-requests" className="mt-6">
          {renderServiceRequests()}
        </TabsContent>

        <TabsContent value="case-lifecycle" className="mt-6">
          {renderCaseLifecycle()}
        </TabsContent>

        <TabsContent value="field-team" className="mt-6">
          {renderFieldTeamTracker()}
        </TabsContent>
      </Tabs>
    </div>
  );
}