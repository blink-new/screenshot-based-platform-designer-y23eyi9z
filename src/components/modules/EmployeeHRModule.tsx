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
  Star,
  Activity,
  BookOpen,
  Award,
  UserPlus,
  UserCheck,
  UserX,
  Briefcase,
  GraduationCap,
  TrendingUp as Performance,
  Navigation,
  Timer,
  CalendarDays
} from 'lucide-react';

export default function EmployeeHRModule() {
  const [activeTab, setActiveTab] = useState('directory');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const employees = [
    {
      id: 'EMP001',
      employee_id: 'NAV001',
      name: 'Rajesh Kumar',
      designation: 'Branch Manager',
      department: 'Operations',
      branch: 'Mumbai Central',
      email: 'rajesh.kumar@navadhan.com',
      phone: '+91 9876543210',
      joining_date: '2022-03-15',
      status: 'Active',
      reporting_manager: 'Vikram Singh',
      salary: 85000,
      experience: '8 years',
      skills: ['Leadership', 'Customer Service', 'Team Management'],
      performance_rating: 4.2,
      last_appraisal: '2023-12-15'
    },
    {
      id: 'EMP002',
      employee_id: 'NAV002',
      name: 'Priya Sharma',
      designation: 'Credit Analyst',
      department: 'Credit',
      branch: 'Delhi NCR',
      email: 'priya.sharma@navadhan.com',
      phone: '+91 9876543211',
      joining_date: '2023-01-20',
      status: 'Active',
      reporting_manager: 'Meera Joshi',
      salary: 65000,
      experience: '4 years',
      skills: ['Credit Analysis', 'Risk Assessment', 'Financial Modeling'],
      performance_rating: 4.5,
      last_appraisal: '2023-12-20'
    },
    {
      id: 'EMP003',
      employee_id: 'NAV003',
      name: 'Amit Patel',
      designation: 'Field Officer',
      department: 'Collections',
      branch: 'Bangalore',
      email: 'amit.patel@navadhan.com',
      phone: '+91 9876543212',
      joining_date: '2023-06-10',
      status: 'Active',
      reporting_manager: 'Ravi Kumar',
      salary: 45000,
      experience: '2 years',
      skills: ['Customer Relations', 'Collections', 'Field Operations'],
      performance_rating: 3.8,
      last_appraisal: '2023-12-10'
    },
    {
      id: 'EMP004',
      employee_id: 'NAV004',
      name: 'Sunita Reddy',
      designation: 'HR Executive',
      department: 'Human Resources',
      branch: 'Hyderabad',
      email: 'sunita.reddy@navadhan.com',
      phone: '+91 9876543213',
      joining_date: '2022-08-25',
      status: 'Active',
      reporting_manager: 'Kavya Nair',
      salary: 55000,
      experience: '5 years',
      skills: ['Recruitment', 'Employee Relations', 'Policy Management'],
      performance_rating: 4.1,
      last_appraisal: '2023-12-25'
    }
  ];

  const attendanceRecords = [
    {
      id: 'ATT001',
      employee_id: 'NAV001',
      employee_name: 'Rajesh Kumar',
      date: '2024-01-22',
      check_in: '09:15:00',
      check_out: '18:30:00',
      working_hours: '9h 15m',
      location: 'Mumbai Central Office',
      status: 'Present',
      overtime: '0h 30m',
      break_time: '1h 00m'
    },
    {
      id: 'ATT002',
      employee_id: 'NAV002',
      employee_name: 'Priya Sharma',
      date: '2024-01-22',
      check_in: '09:00:00',
      check_out: '18:00:00',
      working_hours: '9h 00m',
      location: 'Delhi NCR Office',
      status: 'Present',
      overtime: '0h 00m',
      break_time: '1h 00m'
    },
    {
      id: 'ATT003',
      employee_id: 'NAV003',
      employee_name: 'Amit Patel',
      date: '2024-01-22',
      check_in: '08:45:00',
      check_out: '17:45:00',
      working_hours: '9h 00m',
      location: 'Field Location - Bangalore',
      status: 'Present',
      overtime: '0h 00m',
      break_time: '1h 00m'
    },
    {
      id: 'ATT004',
      employee_id: 'NAV004',
      employee_name: 'Sunita Reddy',
      date: '2024-01-22',
      check_in: '09:30:00',
      check_out: '18:15:00',
      working_hours: '8h 45m',
      location: 'Hyderabad Office',
      status: 'Present',
      overtime: '0h 00m',
      break_time: '1h 00m'
    }
  ];

  const leaveRequests = [
    {
      id: 'LR001',
      employee_id: 'NAV001',
      employee_name: 'Rajesh Kumar',
      leave_type: 'Annual Leave',
      from_date: '2024-02-05',
      to_date: '2024-02-09',
      days: 5,
      reason: 'Family vacation',
      status: 'Approved',
      applied_date: '2024-01-20',
      approved_by: 'Vikram Singh',
      approved_date: '2024-01-21'
    },
    {
      id: 'LR002',
      employee_id: 'NAV002',
      employee_name: 'Priya Sharma',
      leave_type: 'Sick Leave',
      from_date: '2024-01-25',
      to_date: '2024-01-26',
      days: 2,
      reason: 'Medical treatment',
      status: 'Pending',
      applied_date: '2024-01-22',
      approved_by: null,
      approved_date: null
    },
    {
      id: 'LR003',
      employee_id: 'NAV003',
      employee_name: 'Amit Patel',
      leave_type: 'Casual Leave',
      from_date: '2024-01-30',
      to_date: '2024-01-30',
      days: 1,
      reason: 'Personal work',
      status: 'Approved',
      applied_date: '2024-01-18',
      approved_by: 'Ravi Kumar',
      approved_date: '2024-01-19'
    }
  ];

  const payrollData = [
    {
      id: 'PAY001',
      employee_id: 'NAV001',
      employee_name: 'Rajesh Kumar',
      month: 'January 2024',
      basic_salary: 85000,
      hra: 25500,
      transport_allowance: 2000,
      medical_allowance: 1500,
      gross_salary: 114000,
      pf_deduction: 10200,
      tax_deduction: 15000,
      insurance_deduction: 2500,
      total_deductions: 27700,
      net_salary: 86300,
      status: 'Processed'
    },
    {
      id: 'PAY002',
      employee_id: 'NAV002',
      employee_name: 'Priya Sharma',
      month: 'January 2024',
      basic_salary: 65000,
      hra: 19500,
      transport_allowance: 2000,
      medical_allowance: 1500,
      gross_salary: 88000,
      pf_deduction: 7800,
      tax_deduction: 8500,
      insurance_deduction: 2000,
      total_deductions: 18300,
      net_salary: 69700,
      status: 'Processed'
    }
  ];

  const trainingPrograms = [
    {
      id: 'TRN001',
      program_name: 'Credit Risk Assessment',
      category: 'Technical',
      duration: '3 days',
      trainer: 'External - CRISIL',
      start_date: '2024-02-15',
      end_date: '2024-02-17',
      participants: 15,
      status: 'Scheduled',
      cost: 45000,
      location: 'Mumbai Training Center'
    },
    {
      id: 'TRN002',
      program_name: 'Leadership Development',
      category: 'Soft Skills',
      duration: '2 days',
      trainer: 'Internal - HR Team',
      start_date: '2024-02-20',
      end_date: '2024-02-21',
      participants: 8,
      status: 'Scheduled',
      cost: 15000,
      location: 'Delhi Office'
    },
    {
      id: 'TRN003',
      program_name: 'Digital Banking Trends',
      category: 'Technology',
      duration: '1 day',
      trainer: 'External - Fintech Expert',
      start_date: '2024-01-20',
      end_date: '2024-01-20',
      participants: 25,
      status: 'Completed',
      cost: 25000,
      location: 'Virtual'
    }
  ];

  const performanceReviews = [
    {
      id: 'PR001',
      employee_id: 'NAV001',
      employee_name: 'Rajesh Kumar',
      review_period: 'Q4 2023',
      overall_rating: 4.2,
      goals_achievement: 85,
      competency_rating: 4.0,
      reviewer: 'Vikram Singh',
      review_date: '2023-12-15',
      strengths: ['Strong leadership', 'Customer focus', 'Team building'],
      improvement_areas: ['Digital skills', 'Process optimization'],
      next_review: '2024-03-15'
    },
    {
      id: 'PR002',
      employee_id: 'NAV002',
      employee_name: 'Priya Sharma',
      review_period: 'Q4 2023',
      overall_rating: 4.5,
      goals_achievement: 92,
      competency_rating: 4.3,
      reviewer: 'Meera Joshi',
      review_date: '2023-12-20',
      strengths: ['Analytical skills', 'Attention to detail', 'Quick learner'],
      improvement_areas: ['Communication', 'Presentation skills'],
      next_review: '2024-03-20'
    }
  ];

  const fieldStaff = [
    {
      id: 'FS001',
      employee_id: 'NAV003',
      employee_name: 'Amit Patel',
      current_location: 'Koramangala, Bangalore',
      last_update: '2024-01-22 14:30:00',
      status: 'Active',
      assigned_area: 'Bangalore South',
      visits_today: 8,
      visits_completed: 6,
      distance_covered: '45 km',
      battery_level: '78%',
      next_visit: 'HSR Layout - Customer Visit'
    },
    {
      id: 'FS002',
      employee_id: 'NAV005',
      employee_name: 'Kiran Reddy',
      current_location: 'Gachibowli, Hyderabad',
      last_update: '2024-01-22 14:25:00',
      status: 'Active',
      assigned_area: 'Hyderabad West',
      visits_today: 6,
      visits_completed: 4,
      distance_covered: '32 km',
      battery_level: '65%',
      next_visit: 'Madhapur - Document Collection'
    }
  ];

  const recruitmentPipeline = [
    {
      id: 'REC001',
      position: 'Senior Credit Analyst',
      department: 'Credit',
      location: 'Mumbai',
      posted_date: '2024-01-10',
      applications: 45,
      shortlisted: 12,
      interviewed: 8,
      selected: 2,
      status: 'In Progress',
      hiring_manager: 'Meera Joshi',
      expected_joining: '2024-02-15'
    },
    {
      id: 'REC002',
      position: 'Branch Manager',
      department: 'Operations',
      location: 'Chennai',
      posted_date: '2024-01-05',
      applications: 32,
      shortlisted: 8,
      interviewed: 5,
      selected: 1,
      status: 'Offer Extended',
      hiring_manager: 'Vikram Singh',
      expected_joining: '2024-02-01'
    },
    {
      id: 'REC003',
      position: 'Field Officer',
      department: 'Collections',
      location: 'Pune',
      posted_date: '2024-01-15',
      applications: 28,
      shortlisted: 6,
      interviewed: 3,
      selected: 0,
      status: 'Interview Scheduled',
      hiring_manager: 'Ravi Kumar',
      expected_joining: '2024-02-20'
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active': case 'present': case 'approved': case 'processed': case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': case 'scheduled': case 'in progress': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': case 'absent': case 'rejected': case 'failed': return 'bg-red-100 text-red-800';
      case 'offer extended': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderEmployeeDirectory = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Employee Directory</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="operations">Operations</SelectItem>
              <SelectItem value="credit">Credit</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
              <SelectItem value="collections">Collections</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Total Employees</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserCheck className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">148</p>
                <p className="text-sm text-gray-600">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserPlus className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-gray-600">New Joiners (MTD)</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <UserX className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">On Leave</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Employee ID</th>
                  <th className="text-left p-3 font-medium">Name</th>
                  <th className="text-left p-3 font-medium">Designation</th>
                  <th className="text-left p-3 font-medium">Department</th>
                  <th className="text-left p-3 font-medium">Branch</th>
                  <th className="text-left p-3 font-medium">Contact</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{employee.employee_id}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-sm text-gray-600">Joined: {employee.joining_date}</p>
                      </div>
                    </td>
                    <td className="p-3">{employee.designation}</td>
                    <td className="p-3">{employee.department}</td>
                    <td className="p-3">{employee.branch}</td>
                    <td className="p-3">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3 text-gray-500" />
                          <span className="text-sm">{employee.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3 text-gray-500" />
                          <span className="text-sm">{employee.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={getStatusColor(employee.status)}>
                        {employee.status}
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

  const renderAttendanceLogs = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Attendance Logs</h3>
        <div className="flex items-center space-x-4">
          <Input type="date" defaultValue="2024-01-22" className="w-48" />
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Employees</SelectItem>
              <SelectItem value="present">Present</SelectItem>
              <SelectItem value="absent">Absent</SelectItem>
              <SelectItem value="late">Late Arrival</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">142</p>
                <p className="text-sm text-gray-600">Present Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-gray-600">Absent</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">6</p>
                <p className="text-sm text-gray-600">Late Arrivals</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Timer className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">8.5h</p>
                <p className="text-sm text-gray-600">Avg Working Hours</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Employee</th>
                  <th className="text-left p-3 font-medium">Check In</th>
                  <th className="text-left p-3 font-medium">Check Out</th>
                  <th className="text-left p-3 font-medium">Working Hours</th>
                  <th className="text-left p-3 font-medium">Location</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Overtime</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{record.employee_name}</p>
                        <p className="text-sm text-gray-600">{record.employee_id}</p>
                      </div>
                    </td>
                    <td className="p-3 font-mono">{record.check_in}</td>
                    <td className="p-3 font-mono">{record.check_out}</td>
                    <td className="p-3 font-medium">{record.working_hours}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{record.location}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={getStatusColor(record.status)}>
                        {record.status}
                      </Badge>
                    </td>
                    <td className="p-3">{record.overtime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderLeaveRequests = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Leave Requests</h3>
        <div className="flex items-center space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Requests</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Apply Leave
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CalendarDays className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">45</p>
                <p className="text-sm text-gray-600">Total Requests (MTD)</p>
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
                <p className="text-sm text-gray-600">Pending Approval</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">28</p>
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
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-gray-600">Rejected</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Leave Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Employee</th>
                  <th className="text-left p-3 font-medium">Leave Type</th>
                  <th className="text-left p-3 font-medium">Duration</th>
                  <th className="text-left p-3 font-medium">Reason</th>
                  <th className="text-left p-3 font-medium">Applied Date</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {leaveRequests.map((request, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{request.employee_name}</p>
                        <p className="text-sm text-gray-600">{request.employee_id}</p>
                      </div>
                    </td>
                    <td className="p-3">{request.leave_type}</td>
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{request.days} days</p>
                        <p className="text-sm text-gray-600">{request.from_date} to {request.to_date}</p>
                      </div>
                    </td>
                    <td className="p-3">{request.reason}</td>
                    <td className="p-3">{request.applied_date}</td>
                    <td className="p-3">
                      <Badge className={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        {request.status === 'Pending' && (
                          <>
                            <Button variant="outline" size="sm" className="text-green-600">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Approve
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600">
                              <XCircle className="h-3 w-3 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
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

  const renderPayrollBreakdown = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Payroll Breakdown</h3>
        <div className="flex items-center space-x-4">
          <Select defaultValue="january-2024">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="january-2024">January 2024</SelectItem>
              <SelectItem value="december-2023">December 2023</SelectItem>
              <SelectItem value="november-2023">November 2023</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Payroll
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Process Payroll
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">₹1.2Cr</p>
                <p className="text-sm text-gray-600">Total Payroll</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Employees Paid</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-purple-500" />
              <div>
                <p className="text-2xl font-bold">₹77K</p>
                <p className="text-sm text-gray-600">Average Salary</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-orange-500" />
              <div>
                <p className="text-2xl font-bold">₹18L</p>
                <p className="text-sm text-gray-600">Total Deductions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>January 2024 Payroll</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Employee</th>
                  <th className="text-left p-3 font-medium">Basic Salary</th>
                  <th className="text-left p-3 font-medium">Allowances</th>
                  <th className="text-left p-3 font-medium">Gross Salary</th>
                  <th className="text-left p-3 font-medium">Deductions</th>
                  <th className="text-left p-3 font-medium">Net Salary</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payrollData.map((payroll, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3">
                      <div>
                        <p className="font-medium">{payroll.employee_name}</p>
                        <p className="text-sm text-gray-600">{payroll.employee_id}</p>
                      </div>
                    </td>
                    <td className="p-3">₹{payroll.basic_salary.toLocaleString()}</td>
                    <td className="p-3">
                      <div className="text-sm">
                        <p>HRA: ₹{payroll.hra.toLocaleString()}</p>
                        <p>Transport: ₹{payroll.transport_allowance.toLocaleString()}</p>
                        <p>Medical: ₹{payroll.medical_allowance.toLocaleString()}</p>
                      </div>
                    </td>
                    <td className="p-3 font-medium">₹{payroll.gross_salary.toLocaleString()}</td>
                    <td className="p-3">
                      <div className="text-sm">
                        <p>PF: ₹{payroll.pf_deduction.toLocaleString()}</p>
                        <p>Tax: ₹{payroll.tax_deduction.toLocaleString()}</p>
                        <p>Insurance: ₹{payroll.insurance_deduction.toLocaleString()}</p>
                      </div>
                    </td>
                    <td className="p-3 font-bold text-green-600">₹{payroll.net_salary.toLocaleString()}</td>
                    <td className="p-3">
                      <Badge className={getStatusColor(payroll.status)}>
                        {payroll.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Slip
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

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Employee & HR Management</h2>
        <p className="text-gray-600">Manage employee records, attendance, payroll, and HR operations</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="directory">Directory</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="leave">Leave</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="field-monitoring">Field Staff</TabsTrigger>
          <TabsTrigger value="recruitment">Recruitment</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="mt-6">
          {renderEmployeeDirectory()}
        </TabsContent>

        <TabsContent value="attendance" className="mt-6">
          {renderAttendanceLogs()}
        </TabsContent>

        <TabsContent value="leave" className="mt-6">
          {renderLeaveRequests()}
        </TabsContent>

        <TabsContent value="payroll" className="mt-6">
          {renderPayrollBreakdown()}
        </TabsContent>

        <TabsContent value="training" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Training & Skill Matrix</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Schedule Training
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-sm text-gray-600">Training Programs</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold">342</p>
                      <p className="text-sm text-gray-600">Certifications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-8 w-8 text-purple-500" />
                    <div>
                      <p className="text-2xl font-bold">89%</p>
                      <p className="text-sm text-gray-600">Completion Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-8 w-8 text-orange-500" />
                    <div>
                      <p className="text-2xl font-bold">₹8.5L</p>
                      <p className="text-sm text-gray-600">Training Budget</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Program Name</th>
                        <th className="text-left p-3 font-medium">Category</th>
                        <th className="text-left p-3 font-medium">Duration</th>
                        <th className="text-left p-3 font-medium">Trainer</th>
                        <th className="text-left p-3 font-medium">Schedule</th>
                        <th className="text-left p-3 font-medium">Participants</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {trainingPrograms.map((program, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3 font-medium">{program.program_name}</td>
                          <td className="p-3">{program.category}</td>
                          <td className="p-3">{program.duration}</td>
                          <td className="p-3">{program.trainer}</td>
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{program.start_date}</p>
                              <p className="text-sm text-gray-600">{program.location}</p>
                            </div>
                          </td>
                          <td className="p-3">{program.participants}</td>
                          <td className="p-3">
                            <Badge className={getStatusColor(program.status)}>
                              {program.status}
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
        </TabsContent>

        <TabsContent value="performance" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Performance Appraisal Dashboard</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Review
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-8 w-8 text-yellow-500" />
                    <div>
                      <p className="text-2xl font-bold">4.2</p>
                      <p className="text-sm text-gray-600">Avg Rating</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Performance className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold">87%</p>
                      <p className="text-sm text-gray-600">Goal Achievement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold">142</p>
                      <p className="text-sm text-gray-600">Reviews Completed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-8 w-8 text-orange-500" />
                    <div>
                      <p className="text-2xl font-bold">14</p>
                      <p className="text-sm text-gray-600">Pending Reviews</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Employee</th>
                        <th className="text-left p-3 font-medium">Review Period</th>
                        <th className="text-left p-3 font-medium">Overall Rating</th>
                        <th className="text-left p-3 font-medium">Goal Achievement</th>
                        <th className="text-left p-3 font-medium">Reviewer</th>
                        <th className="text-left p-3 font-medium">Review Date</th>
                        <th className="text-left p-3 font-medium">Next Review</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceReviews.map((review, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{review.employee_name}</p>
                              <p className="text-sm text-gray-600">{review.employee_id}</p>
                            </div>
                          </td>
                          <td className="p-3">{review.review_period}</td>
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium">{review.overall_rating}</span>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= review.overall_rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </td>
                          <td className="p-3">{review.goals_achievement}%</td>
                          <td className="p-3">{review.reviewer}</td>
                          <td className="p-3">{review.review_date}</td>
                          <td className="p-3">{review.next_review}</td>
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
        </TabsContent>

        <TabsContent value="field-monitoring" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Field Staff Monitoring</h3>
              <Button variant="outline">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Locations
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Navigation className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-sm text-gray-600">Field Staff</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Activity className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold">22</p>
                      <p className="text-sm text-gray-600">Active</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-8 w-8 text-purple-500" />
                    <div>
                      <p className="text-2xl font-bold">156</p>
                      <p className="text-sm text-gray-600">Visits Today</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Target className="h-8 w-8 text-orange-500" />
                    <div>
                      <p className="text-2xl font-bold">89%</p>
                      <p className="text-sm text-gray-600">Target Achievement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Field Staff Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Employee</th>
                        <th className="text-left p-3 font-medium">Current Location</th>
                        <th className="text-left p-3 font-medium">Last Update</th>
                        <th className="text-left p-3 font-medium">Assigned Area</th>
                        <th className="text-left p-3 font-medium">Visits Today</th>
                        <th className="text-left p-3 font-medium">Distance</th>
                        <th className="text-left p-3 font-medium">Battery</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fieldStaff.map((staff, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{staff.employee_name}</p>
                              <p className="text-sm text-gray-600">{staff.employee_id}</p>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-blue-500" />
                              <span className="text-sm">{staff.current_location}</span>
                            </div>
                          </td>
                          <td className="p-3 font-mono text-sm">{staff.last_update}</td>
                          <td className="p-3">{staff.assigned_area}</td>
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{staff.visits_completed}/{staff.visits_today}</p>
                              <p className="text-sm text-gray-600">Completed</p>
                            </div>
                          </td>
                          <td className="p-3">{staff.distance_covered}</td>
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${
                                    parseInt(staff.battery_level) > 50 ? 'bg-green-500' : 
                                    parseInt(staff.battery_level) > 20 ? 'bg-yellow-500' : 'bg-red-500'
                                  }`}
                                  style={{ width: staff.battery_level }}
                                />
                              </div>
                              <span className="text-sm">{staff.battery_level}</span>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                <MapPin className="h-3 w-3 mr-1" />
                                Track
                              </Button>
                              <Button variant="outline" size="sm">
                                <Phone className="h-3 w-3 mr-1" />
                                Call
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
        </TabsContent>

        <TabsContent value="recruitment" className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Recruitment Tracker</h3>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-8 w-8 text-blue-500" />
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-gray-600">Open Positions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="text-2xl font-bold">105</p>
                      <p className="text-sm text-gray-600">Total Applications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <UserCheck className="h-8 w-8 text-purple-500" />
                    <div>
                      <p className="text-2xl font-bold">26</p>
                      <p className="text-sm text-gray-600">Shortlisted</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <UserPlus className="h-8 w-8 text-orange-500" />
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-gray-600">Selected</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recruitment Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium">Position</th>
                        <th className="text-left p-3 font-medium">Department</th>
                        <th className="text-left p-3 font-medium">Location</th>
                        <th className="text-left p-3 font-medium">Applications</th>
                        <th className="text-left p-3 font-medium">Pipeline</th>
                        <th className="text-left p-3 font-medium">Status</th>
                        <th className="text-left p-3 font-medium">Hiring Manager</th>
                        <th className="text-left p-3 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recruitmentPipeline.map((job, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3">
                            <div>
                              <p className="font-medium">{job.position}</p>
                              <p className="text-sm text-gray-600">Posted: {job.posted_date}</p>
                            </div>
                          </td>
                          <td className="p-3">{job.department}</td>
                          <td className="p-3">{job.location}</td>
                          <td className="p-3 font-medium">{job.applications}</td>
                          <td className="p-3">
                            <div className="space-y-1 text-sm">
                              <div className="flex justify-between">
                                <span>Shortlisted:</span>
                                <span className="font-medium">{job.shortlisted}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Interviewed:</span>
                                <span className="font-medium">{job.interviewed}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Selected:</span>
                                <span className="font-medium">{job.selected}</span>
                              </div>
                            </div>
                          </td>
                          <td className="p-3">
                            <Badge className={getStatusColor(job.status)}>
                              {job.status}
                            </Badge>
                          </td>
                          <td className="p-3">{job.hiring_manager}</td>
                          <td className="p-3">
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-3 w-3 mr-1" />
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-3 w-3 mr-1" />
                                Manage
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
        </TabsContent>
      </Tabs>
    </div>
  );
}