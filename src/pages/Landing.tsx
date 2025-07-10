import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, ShieldCheck, Clock, FileText, BarChart3, Zap, Shield, Building2, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-hero opacity-10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative border-b border-border/50 bg-card/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-foreground">ComplyFlow</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/auth/login">
              <Button variant="ghost" className="hover:bg-accent/80">Sign In</Button>
            </Link>
            <Link to="/auth/register">
              <Button variant="gradient" size="sm" className="shadow-button">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-24">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-accent rounded-full text-sm font-medium text-primary mb-8 shadow-feature">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-glow"></span>
            Modern HR Platform
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
            Streamline Your
            <span className="bg-gradient-hero bg-clip-text text-transparent block mt-2"> HR Operations</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Complete employee onboarding, attendance tracking, and HR management platform 
            with role-based access for admins, HR teams, and employees.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link to="/auth/admin" className="group">
              <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-feature">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Admin Dashboard</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Full system control and management</p>
              </div>
            </Link>
            <Link to="/auth/hr" className="group">
              <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-feature">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">HR Dashboard</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Employee management and operations</p>
              </div>
            </Link>
            <Link to="/auth/employee" className="group">
              <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:bg-gradient-feature">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Employee Portal</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Self-service access and tools</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative container mx-auto px-6 py-24">
        <div className="text-center mb-20 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Everything You Need for Modern HR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to automate and streamline your entire HR workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Employee Onboarding</h3>
            <p className="text-muted-foreground leading-relaxed">
              Guided onboarding flow with document uploads, form submissions, and approval workflows
            </p>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Role-Based Access</h3>
            <p className="text-muted-foreground leading-relaxed">
              Secure dashboards for Admin, HR, and Employee roles with appropriate permissions
            </p>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Attendance Tracking</h3>
            <p className="text-muted-foreground leading-relaxed">
              Comprehensive attendance management with reporting and analytics
            </p>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Leave Management</h3>
            <p className="text-muted-foreground leading-relaxed">
              Request, approve, and track employee leave with automated workflows
            </p>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Analytics & Reports</h3>
            <p className="text-muted-foreground leading-relaxed">
              Detailed insights into HR metrics, employee performance, and organizational data
            </p>
          </div>

          <div className="bg-gradient-glass backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Automation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Automated workflows for approvals, notifications, and routine HR tasks
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-6 py-24">
        <div className="relative bg-gradient-hero rounded-3xl p-12 md:p-16 shadow-elegant overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="relative text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your HR Process?
            </h2>
            <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies that trust ComplyFlow for their HR operations
            </p>
            <Link to="/auth/register">
              <Button variant="secondary" size="xl" className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 bg-card/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-xl text-foreground">ComplyFlow</span>
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