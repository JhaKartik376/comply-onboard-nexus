import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Building2, 
  UserPlus, 
  BarChart3, 
  Settings, 
  Shield, 
  Clock,
  FileText,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  UserX
} from "lucide-react";

const AdminDashboard = () => {
  // Mock data
  const stats = {
    totalEmployees: 247,
    activeHRs: 8,
    pendingOnboarding: 12,
    totalDepartments: 6
  };

  const recentActivities = [
    { id: 1, type: "hr_added", message: "New HR Manager added: Sarah Johnson", time: "2 hours ago" },
    { id: 2, type: "employee_approved", message: "Employee onboarding approved: Mike Chen", time: "4 hours ago" },
    { id: 3, type: "department_created", message: "New department created: Data Science", time: "1 day ago" },
    { id: 4, type: "system_update", message: "System maintenance completed", time: "2 days ago" }
  ];

  const hrManagers = [
    { id: 1, name: "Sarah Johnson", email: "sarah@company.com", department: "Engineering", employees: 45, status: "active" },
    { id: 2, name: "Mark Thompson", email: "mark@company.com", department: "Marketing", employees: 32, status: "active" },
    { id: 3, name: "Lisa Chen", email: "lisa@company.com", department: "Sales", employees: 28, status: "active" },
    { id: 4, name: "David Kumar", email: "david@company.com", department: "Operations", employees: 19, status: "inactive" }
  ];

  const departments = [
    { id: 1, name: "Engineering", headCount: 89, manager: "Sarah Johnson", budget: "$2.4M" },
    { id: 2, name: "Marketing", headCount: 45, manager: "Mark Thompson", budget: "$800K" },
    { id: 3, name: "Sales", headCount: 67, manager: "Lisa Chen", budget: "$1.2M" },
    { id: 4, name: "Operations", headCount: 34, manager: "David Kumar", budget: "$600K" },
    { id: 5, name: "Finance", headCount: 12, manager: "Emma Wilson", budget: "$400K" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">System Administration & Management</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="default" className="bg-gradient-primary">
              Admin Access
            </Badge>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
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
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active HR Managers</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.activeHRs}</div>
              <p className="text-xs text-muted-foreground">
                Managing all departments
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Onboarding</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.pendingOnboarding}</div>
              <p className="text-xs text-warning">
                <AlertCircle className="inline w-3 h-3 mr-1" />
                Requires attention
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.totalDepartments}</div>
              <p className="text-xs text-muted-foreground">
                Across organization
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="hrs">HR Managers</TabsTrigger>
            <TabsTrigger value="departments">Departments</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Activities */}
              <Card className="lg:col-span-2 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Recent Activities
                  </CardTitle>
                  <CardDescription>Latest system activities and changes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{activity.message}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add New HR Manager
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Building2 className="w-4 h-4 mr-2" />
                    Create Department
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    System Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="hrs" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>HR Managers</CardTitle>
                  <CardDescription>Manage HR personnel and their access</CardDescription>
                </div>
                <Button variant="gradient">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add HR Manager
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hrManagers.map((hr) => (
                    <div key={hr.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">
                            {hr.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{hr.name}</p>
                          <p className="text-sm text-muted-foreground">{hr.email}</p>
                          <p className="text-xs text-muted-foreground">{hr.department} • {hr.employees} employees</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {hr.status === 'active' ? (
                          <Badge variant="secondary" className="bg-success/10 text-success">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Active
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                            <UserX className="w-3 h-3 mr-1" />
                            Inactive
                          </Badge>
                        )}
                        <Button variant="ghost" size="sm">Actions</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="departments" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Departments</CardTitle>
                  <CardDescription>Manage organizational departments and structure</CardDescription>
                </div>
                <Button variant="gradient">
                  <Building2 className="w-4 h-4 mr-2" />
                  Create Department
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {departments.map((dept) => (
                    <Card key={dept.id} className="shadow-card hover:shadow-elegant transition-all duration-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{dept.name}</CardTitle>
                        <CardDescription>Managed by {dept.manager}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Head Count</span>
                          <Badge variant="secondary">{dept.headCount}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Budget</span>
                          <span className="text-sm font-medium">{dept.budget}</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full mt-3">
                          Manage Department
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>Monitor system performance and status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Database Connection</span>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Authentication Service</span>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Storage Service</span>
                    <Badge variant="secondary" className="bg-success/10 text-success">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Operational
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>System Actions</CardTitle>
                  <CardDescription>Administrative system controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Generate Reports
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    System Configuration
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="w-4 h-4 mr-2" />
                    Audit Logs
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    User Management
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;