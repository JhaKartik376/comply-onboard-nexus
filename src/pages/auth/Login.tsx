import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowLeft, Shield, UserCheck, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-foreground">ComplyFlow</span>
          </div>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-elegant">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" variant="gradient" size="lg">
                Sign In
              </Button>
            </form>

            <Separator />

            <div className="space-y-3">
              <p className="text-sm text-muted-foreground text-center">
                Quick Access (Demo)
              </p>
              <div className="grid gap-2">
                <Link to="/auth/admin">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Admin Dashboard
                    <Badge variant="secondary" className="ml-auto">Admin</Badge>
                  </Button>
                </Link>
                <Link to="/auth/hr">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Building2 className="w-4 h-4 mr-2" />
                    HR Dashboard  
                    <Badge variant="secondary" className="ml-auto">HR</Badge>
                  </Button>
                </Link>
                <Link to="/auth/employee">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <UserCheck className="w-4 h-4 mr-2" />
                    Employee Portal
                    <Badge variant="secondary" className="ml-auto">Employee</Badge>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center text-sm">
              <span className="text-muted-foreground">Don't have an account? </span>
              <Link to="/auth/register" className="text-primary hover:underline font-medium">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Protected by enterprise-grade security
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;