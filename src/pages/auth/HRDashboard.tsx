import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  UserCheck, 
  Clock, 
  FileText, 
  Calendar,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  AlertCircle,
  Building2,
  TrendingUp,
  Eye
} from "lucide-react";

const HRDashboard = () => {
  // Mock data
  const stats = {
    totalEmployees: 156,
    pendingOnboarding: 8,
    leaveRequests: 5,
    attendanceToday: 142
  };

  const onboardingApplications = [
    { id: 1, name: "Alex Chen", email: "alex@company.com", position: "Software Engineer", department: "Engineering", status: "pending", submittedAt: "2 days ago" },
    { id: 2, name: "Sarah Wilson", email: "sarah@company.com", position: "Marketing Specialist", department: "Marketing", status: "under_review", submittedAt: "1 day ago" },
    { id: 3, name: "Mike Johnson", email: "mike@company.com", position: "Sales Rep", department: "Sales", status: "pending", submittedAt: "3 hours ago" },
    { id: 4, name: "Emily Davis", email: "emily@company.com", position: "Data Analyst", department: "Analytics", status: "pending", submittedAt: "5 hours ago" }
  ];

  const employees = [
    { id: 1, name: "John Smith", email: "john@company.com", department: "Engineering", role: "Senior Developer", status: "active", joinDate: "2023-01-15" },
    { id: 2, name: "Lisa Brown", email: "lisa@company.com", department: "Marketing", role: "Marketing Manager", status: "active", joinDate: "2022-08-20" },
    { id: 3, name: "David Miller", email: "david@company.com", department: "Sales", role: "Sales Manager", status: "active", joinDate: "2022-03-10" },
    { id: 4, name: "Emma Wilson", email: "emma@company.com", department: "Finance", role: "Accountant", status: "on_leave", joinDate: "2023-06-01" }
  ];

  const leaveRequests = [
    { id: 1, employee: "John Smith", type: "Annual Leave", startDate: "2024-02-15", endDate: "2024-02-20", days: 5, status: "pending", reason: "Family vacation" },
    { id: 2, employee: "Lisa Brown", type: "Sick Leave", startDate: "2024-02-12", endDate: "2024-02-14", days: 3, status: "approved", reason: "Medical appointment" },
    { id: 3, employee: "David Miller", type: "Personal Leave", startDate: "2024-02-18", endDate: "2024-02-18", days: 1, status: "pending", reason: "Personal matter" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-warning/10 text-warning"><AlertCircle className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'approved':
        return <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      case 'under_review':
        return <Badge variant="secondary" className="bg-primary/10 text-primary"><Eye className="w-3 h-3 mr-1" />Under Review</Badge>;
      case 'active':
        return <Badge variant="secondary" className="bg-success/10 text-success">Active</Badge>;
      case 'on_leave':
        return <Badge variant="secondary" className="bg-warning/10 text-warning">On Leave</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">HR Dashboard</h1>
              <p className="text-sm text-muted-foreground">Employee Management & Operations</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="default" className="bg-gradient-primary">
              HR Manager
            </Badge>
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Reports
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.totalEmployees}</div>
              <p className="text-xs text-success">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +8% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Onboarding</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.pendingOnboarding}</div>
              <p className="text-xs text-warning">
                <AlertCircle className="inline w-3 h-3 mr-1" />
                Requires review
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leave Requests</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.leaveRequests}</div>
              <p className="text-xs text-muted-foreground">
                This week
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Today</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.attendanceToday}</div>
              <p className="text-xs text-success">
                91% attendance rate
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="onboarding" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
            <TabsTrigger value="employees">Employees</TabsTrigger>
            <TabsTrigger value="leave">Leave Requests</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
          </TabsList>

          <TabsContent value="onboarding" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Onboarding Applications</CardTitle>
                  <CardDescription>Review and approve new employee applications</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search applications..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {onboardingApplications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">
                            {application.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{application.name}</p>
                          <p className="text-sm text-muted-foreground">{application.email}</p>
                          <p className="text-xs text-muted-foreground">{application.position} • {application.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          {getStatusBadge(application.status)}
                          <p className="text-xs text-muted-foreground mt-1">{application.submittedAt}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-1" />
                            Review
                          </Button>
                          <Button variant="success" size="sm">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button variant="outline" size="sm">
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="employees" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Employee Directory</CardTitle>
                  <CardDescription>Manage your team and view employee information</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search employees..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {employees.map((employee) => (
                    <div key={employee.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{employee.name}</p>
                          <p className="text-sm text-muted-foreground">{employee.email}</p>
                          <p className="text-xs text-muted-foreground">{employee.role} • {employee.department}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          {getStatusBadge(employee.status)}
                          <p className="text-xs text-muted-foreground mt-1">Joined {employee.joinDate}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leave" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Leave Requests</CardTitle>
                  <CardDescription>Review and manage employee leave applications</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter by Status
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests.map((request) => (
                    <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-medium text-foreground">{request.employee}</p>
                          {getStatusBadge(request.status)}
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{request.type} • {request.days} days</p>
                        <p className="text-xs text-muted-foreground">{request.startDate} to {request.endDate}</p>
                        <p className="text-xs text-muted-foreground mt-1">Reason: {request.reason}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Details
                        </Button>
                        {request.status === 'pending' && (
                          <>
                            <Button variant="success" size="sm">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button variant="outline" size="sm">
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Attendance Overview</CardTitle>
                <CardDescription>Monitor employee attendance and working hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Clock className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Attendance Tracking</h3>
                  <p className="text-muted-foreground mb-6">
                    Comprehensive attendance management system will be displayed here
                  </p>
                  <Button variant="gradient">
                    View Detailed Attendance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HRDashboard;