import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  FileText, 
  Clock, 
  Calendar,
  Upload,
  CheckCircle,
  AlertCircle,
  XCircle,
  Download,
  Bell,
  MapPin,
  Briefcase,
  GraduationCap,
  CreditCard,
  Shield
} from "lucide-react";

const EmployeeDashboard = () => {
  // Mock data
  const userProfile = {
    name: "John Smith",
    email: "john.smith@company.com",
    employeeId: "EMP001",
    department: "Engineering",
    role: "Senior Developer",
    joinDate: "2023-01-15",
    manager: "Sarah Johnson"
  };

  const onboardingStatus = {
    currentStep: 3,
    totalSteps: 6,
    progress: 50,
    status: "in_progress",
    steps: [
      { id: 1, name: "Personal Information", status: "completed" },
      { id: 2, name: "ID Verification", status: "completed" },
      { id: 3, name: "Education Details", status: "in_progress" },
      { id: 4, name: "Work Experience", status: "pending" },
      { id: 5, name: "Bank Details", status: "pending" },
      { id: 6, name: "Final Declaration", status: "pending" }
    ]
  };

  const documents = [
    { id: 1, name: "ID Proof", type: "PDF", status: "uploaded", uploadedAt: "2024-01-15" },
    { id: 2, name: "Educational Certificates", type: "PDF", status: "uploaded", uploadedAt: "2024-01-15" },
    { id: 3, name: "Experience Letters", type: "PDF", status: "pending", uploadedAt: null },
    { id: 4, name: "Bank Statements", type: "PDF", status: "pending", uploadedAt: null }
  ];

  const leaveRequests = [
    { id: 1, type: "Annual Leave", startDate: "2024-02-20", endDate: "2024-02-25", days: 5, status: "approved", reason: "Family vacation" },
    { id: 2, type: "Sick Leave", startDate: "2024-01-10", endDate: "2024-01-12", days: 3, status: "approved", reason: "Medical treatment" },
    { id: 3, type: "Personal Leave", startDate: "2024-02-28", endDate: "2024-02-28", days: 1, status: "pending", reason: "Personal matter" }
  ];

  const announcements = [
    { id: 1, title: "Company Annual Meeting", content: "Join us for our annual company meeting on March 15th", date: "2024-02-10", priority: "high" },
    { id: 2, title: "New Health Insurance Policy", content: "Updated health insurance benefits are now available", date: "2024-02-08", priority: "medium" },
    { id: 3, title: "Office Renovation Notice", content: "Office will undergo renovation from March 1-5", date: "2024-02-05", priority: "low" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case 'in_progress':
        return <Badge variant="secondary" className="bg-primary/10 text-primary"><Clock className="w-3 h-3 mr-1" />In Progress</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="bg-warning/10 text-warning"><AlertCircle className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'approved':
        return <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case 'rejected':
        return <Badge variant="secondary" className="bg-destructive/10 text-destructive"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      case 'uploaded':
        return <Badge variant="secondary" className="bg-success/10 text-success"><CheckCircle className="w-3 h-3 mr-1" />Uploaded</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="bg-warning/10 text-warning">Medium</Badge>;
      case 'low':
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">{priority}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-white">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Welcome, {userProfile.name.split(' ')[0]}</h1>
              <p className="text-sm text-muted-foreground">{userProfile.role} • {userProfile.department}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="default" className="bg-gradient-primary">
              Employee ID: {userProfile.employeeId}
            </Badge>
            <Button variant="outline" size="sm">
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Profile Summary */}
        <Card className="shadow-card mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Department</p>
                  <p className="text-sm text-muted-foreground">{userProfile.department}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Role</p>
                  <p className="text-sm text-muted-foreground">{userProfile.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Join Date</p>
                  <p className="text-sm text-muted-foreground">{userProfile.joinDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Manager</p>
                  <p className="text-sm text-muted-foreground">{userProfile.manager}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="onboarding" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="leave">Leave</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="announcements">News</TabsTrigger>
          </TabsList>

          <TabsContent value="onboarding" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Onboarding Progress
                  {getStatusBadge(onboardingStatus.status)}
                </CardTitle>
                <CardDescription>Complete your onboarding process to access all features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress: {onboardingStatus.currentStep} of {onboardingStatus.totalSteps} completed</span>
                    <span>{onboardingStatus.progress}%</span>
                  </div>
                  <Progress value={onboardingStatus.progress} className="w-full" />
                </div>

                <div className="grid gap-4">
                  {onboardingStatus.steps.map((step) => (
                    <div key={step.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.status === 'completed' ? 'bg-success/10' : 
                          step.status === 'in_progress' ? 'bg-primary/10' : 'bg-muted'
                        }`}>
                          {step.status === 'completed' ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : step.status === 'in_progress' ? (
                            <Clock className="w-4 h-4 text-primary" />
                          ) : (
                            <span className="text-sm font-medium text-muted-foreground">{step.id}</span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{step.name}</p>
                          {getStatusBadge(step.status)}
                        </div>
                      </div>
                      {step.status === 'in_progress' && (
                        <Button variant="gradient" size="sm">
                          Continue
                        </Button>
                      )}
                      {step.status === 'pending' && (
                        <Button variant="outline" size="sm" disabled>
                          Start
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                {onboardingStatus.status === 'in_progress' && (
                  <div className="text-center pt-4">
                    <Button variant="gradient" size="lg">
                      Continue Onboarding Process
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Document Management</CardTitle>
                  <CardDescription>Upload and manage your employment documents</CardDescription>
                </div>
                <Button variant="gradient">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {doc.type} • {doc.uploadedAt ? `Uploaded on ${doc.uploadedAt}` : 'Not uploaded'}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {getStatusBadge(doc.status)}
                        {doc.status === 'uploaded' ? (
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm">
                            <Upload className="w-4 h-4 mr-1" />
                            Upload
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leave" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Leave Requests</CardTitle>
                    <CardDescription>View and manage your leave applications</CardDescription>
                  </div>
                  <Button variant="gradient">
                    <Calendar className="w-4 h-4 mr-2" />
                    Request Leave
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leaveRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-medium">{request.type}</p>
                            {getStatusBadge(request.status)}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{request.days} days • {request.startDate} to {request.endDate}</p>
                          <p className="text-xs text-muted-foreground">Reason: {request.reason}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Leave Balance</CardTitle>
                  <CardDescription>Your available leave days</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Annual Leave</span>
                    <Badge variant="secondary">18 days left</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sick Leave</span>
                    <Badge variant="secondary">10 days left</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Personal Leave</span>
                    <Badge variant="secondary">5 days left</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Attendance Overview</CardTitle>
                <CardDescription>View your attendance records and working hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Clock className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Attendance Tracking</h3>
                  <p className="text-muted-foreground mb-6">
                    Your personal attendance records and time tracking will be displayed here
                  </p>
                  <Button variant="gradient">
                    View Attendance History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="announcements" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Company Announcements</CardTitle>
                <CardDescription>Stay updated with the latest company news and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="p-4 border border-border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-foreground">{announcement.title}</h4>
                        {getPriorityBadge(announcement.priority)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{announcement.content}</p>
                      <p className="text-xs text-muted-foreground">{announcement.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EmployeeDashboard;