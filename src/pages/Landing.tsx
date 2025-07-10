import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, ShieldCheck, Clock, FileText, BarChart3, Zap, Shield, Building2, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">ComplyFlow</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth/register">
              <Button variant="gradient" size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <Badge variant="secondary" className="mb-6">
            Modern HR Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Streamline Your
            <span className="bg-gradient-primary bg-clip-text text-transparent"> HR Operations</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Complete employee onboarding, attendance tracking, and HR management platform 
            with role-based access for admins, HR teams, and employees.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Link to="/auth/admin">
              <Button variant="gradient" size="xl" className="w-full flex flex-col h-auto py-6">
                <Shield className="w-8 h-8 mb-2" />
                <span className="text-lg font-semibold">Admin Dashboard</span>
                <span className="text-sm opacity-90">Full system control</span>
              </Button>
            </Link>
            <Link to="/auth/hr">
              <Button variant="outline" size="xl" className="w-full flex flex-col h-auto py-6">
                <Building2 className="w-8 h-8 mb-2" />
                <span className="text-lg font-semibold">HR Dashboard</span>
                <span className="text-sm opacity-75">Employee management</span>
              </Button>
            </Link>
            <Link to="/auth/employee">
              <Button variant="secondary" size="xl" className="w-full flex flex-col h-auto py-6">
                <UserCheck className="w-8 h-8 mb-2" />
                <span className="text-lg font-semibold">Employee Portal</span>
                <span className="text-sm opacity-75">Self-service access</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for Modern HR
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to automate and streamline your entire HR workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Employee Onboarding</CardTitle>
              <CardDescription>
                Guided onboarding flow with document uploads, form submissions, and approval workflows
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Role-Based Access</CardTitle>
              <CardDescription>
                Secure dashboards for Admin, HR, and Employee roles with appropriate permissions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Attendance Tracking</CardTitle>
              <CardDescription>
                Comprehensive attendance management with reporting and analytics
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Leave Management</CardTitle>
              <CardDescription>
                Request, approve, and track employee leave with automated workflows
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Analytics & Reports</CardTitle>
              <CardDescription>
                Detailed insights into HR metrics, employee performance, and organizational data
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Automation</CardTitle>
              <CardDescription>
                Automated workflows for approvals, notifications, and routine HR tasks
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="bg-gradient-hero text-white shadow-elegant">
          <CardContent className="text-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your HR Process?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that trust ComplyFlow for their HR operations
            </p>
            <Link to="/auth/register">
              <Button variant="secondary" size="xl">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">ComplyFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ComplyFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;