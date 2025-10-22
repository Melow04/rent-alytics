"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Key,
  Smartphone,
  Mail,
  Bell,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Globe,
  Monitor,
} from "lucide-react";
import { DataTable } from "@/components/dashboard/data-table";
import { mockSecurityEvents } from "@/lib/services/mock-data";
import { formatDate } from "@/lib/utils/format";

export default function SecurityPage() {
  const securitySettings = {
    twoFactorEnabled: true,
    emailNotifications: true,
    smsNotifications: false,
    loginAlerts: true,
    lastPasswordChange: "2024-05-01",
  };

  return (
    <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b bg-white sticky top-0 z-10">
        <div>
          <h1 className="text-3xl font-bold">Security</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your account security and privacy settings
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {/* Security Overview */}
        <Card className="mb-6 border-l-4 border-l-green-500 bg-green-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-green-100 p-3">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-green-900 text-lg">
                  Your Account is Secure
                </h3>
                <p className="text-sm text-green-800 mt-1">
                  Two-factor authentication is enabled and your account is protected with
                  strong security measures.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Settings</CardTitle>
              <CardDescription>Manage how you sign in to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-50">
                    <Key className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Password</h4>
                    <p className="text-sm text-muted-foreground">
                      Last changed {formatDate(securitySettings.lastPasswordChange)}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Change
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-green-50">
                    <Smartphone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      {securitySettings.twoFactorEnabled ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {securitySettings.twoFactorEnabled ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                  <Button variant="outline" size="sm">
                    {securitySettings.twoFactorEnabled ? "Disable" : "Enable"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Control security alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-50">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Security alerts via email
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {securitySettings.emailNotifications ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-orange-50">
                    <Smartphone className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">SMS Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Security alerts via SMS
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {securitySettings.smsNotifications ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-50">
                    <Bell className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Login Alerts</h4>
                    <p className="text-sm text-muted-foreground">
                      Notify on new device login
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {securitySettings.loginAlerts ? (
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Recent Security Activity</CardTitle>
            <CardDescription>Login history and security events</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={mockSecurityEvents}
              columns={[
                {
                  key: "type",
                  label: "Event",
                  render: (value) => {
                    const eventMap = {
                      login: "Login",
                      password_change: "Password Change",
                      "2fa_enabled": "2FA Enabled",
                      suspicious_activity: "Suspicious Activity",
                    };
                    return (
                      <span className="capitalize font-medium">
                        {eventMap[value as keyof typeof eventMap] || value}
                      </span>
                    );
                  },
                },
                {
                  key: "date",
                  label: "Date & Time",
                  render: (value) => formatDate(value),
                },
                {
                  key: "location",
                  label: "Location",
                  render: (value) => (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      {value}
                    </div>
                  ),
                },
                {
                  key: "device",
                  label: "Device",
                  render: (value) => (
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4 text-muted-foreground" />
                      {value}
                    </div>
                  ),
                },
                {
                  key: "status",
                  label: "Status",
                  render: (value) => {
                    const colors = {
                      success: "text-green-600 bg-green-50",
                      failed: "text-red-600 bg-red-50",
                      blocked: "text-orange-600 bg-orange-50",
                    };
                    const icons = {
                      success: CheckCircle2,
                      failed: XCircle,
                      blocked: AlertTriangle,
                    };
                    const Icon = icons[value as keyof typeof icons];
                    return (
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium capitalize inline-flex items-center gap-1 ${
                          colors[value as keyof typeof colors]
                        }`}
                      >
                        <Icon className="h-3 w-3" />
                        {value}
                      </span>
                    );
                  },
                },
              ]}
              pageSize={5}
            />
          </CardContent>
        </Card>

        {/* Additional Security Options */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Security Options</CardTitle>
            <CardDescription>Advanced security features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <h4 className="font-semibold">Active Sessions</h4>
                  <p className="text-sm text-muted-foreground">
                    You have 2 active sessions on different devices
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Manage
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border">
                <div>
                  <h4 className="font-semibold">Data Export</h4>
                  <p className="text-sm text-muted-foreground">
                    Download all your account data
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border border-red-200 bg-red-50">
                <div>
                  <h4 className="font-semibold text-red-900">Delete Account</h4>
                  <p className="text-sm text-red-700">
                    Permanently delete your account and all data
                  </p>
                </div>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
