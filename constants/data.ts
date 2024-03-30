import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";
export type Integration = {
  id: number;
  name: string;
  company: string;
  verified: boolean;
  status: 'Active' | 'Inactive' | 'Pending Setup';
  callbackUrl: string;
  scope: string[];
  reads: { name: string; description: string }[];
  writes: { name: string; description: string }[];
  lastSync: string; // Use ISO 8601 format for date and time (e.g., "2024-03-31T08:00:00Z")
  createdAt: string;
  updatedAt: string;
  actions: { name: string; url: string }[];
  performanceMetrics: {
    dataTransferRate: string;
    errorRate: string;
    syncDuration: string;
  };
  healthStatus: { status: string; details: string };
  permissionsManagement: { url: string };
  notifications: { settingsUrl: string };
  documentation: { url: string };
  support: { url: string };
};


 export const integrations: Integration[] = [
   {
     id: 1,
     name: "GitHub Integration",
     company: "GitHub",
     verified: true,
     status: "Active",
     callbackUrl: "https://example.com/callback/github",
     scope: ["read:user", "repo"],
     reads: [
       { name: "Read User Data", description: "Allows access to basic user information." },
       { name: "Read Repository Data", description: "Allows access to repository details." },
     ],
     writes: [
       { name: "Write Repository Data", description: "Allows creating and modifying repositories." },
       { name: "Write User Data", description: "Allows modifying user information." },
     ],
     lastSync: "2024-03-31T08:00:00Z",
     createdAt: "2023-01-15T12:00:00Z",
     updatedAt: "2024-03-30T15:30:00Z",
     actions: [
       { name: "Edit Integration", url: "https://example.com/integrations/edit/github" },
       { name: "Disconnect Integration", url: "https://example.com/integrations/disconnect/github" },
       { name: "Refresh Sync", url: "https://example.com/integrations/refresh/github" },
       { name: "View Logs", url: "https://example.com/integrations/logs/github" },
     ],
     performanceMetrics: {
       dataTransferRate: "1 GB/day",
       errorRate: "0.5%",
       syncDuration: "5 seconds",
     },
     healthStatus: { status: "Healthy", details: "No issues reported" },
     permissionsManagement: { url: "https://example.com/integrations/permissions/github" },
     notifications: { settingsUrl: "https://example.com/integrations/notifications/github" },
     documentation: { url: "https://developer.github.com" },
     support: { url: "https://support.example.com" },
   },
   {
     id: 2,
     name: "Slack Integration",
     company: "Slack",
     verified: true,
     status: "Active",
     callbackUrl: "https://example.com/callback/slack",
     scope: ["channels:read", "chat:write"],
     reads: [
       { name: "Read Channel Data", description: "Allows access to channel information." },
       { name: "Read Chat Data", description: "Allows access to chat messages." },
     ],
     writes: [{ name: "Write Chat Messages", description: "Allows sending chat messages." }],
     lastSync: "2024-03-31T10:00:00Z",
     createdAt: "2023-02-20T09:30:00Z",
     updatedAt: "2024-03-30T16:45:00Z",
     actions: [
       { name: "Edit Integration", url: "https://example.com/integrations/edit/slack" },
       { name: "Disconnect Integration", url: "https://example.com/integrations/disconnect/slack" },
       { name: "Refresh Sync", url: "https://example.com/integrations/refresh/slack" },
       { name: "View Logs", url: "https://example.com/integrations/logs/slack" },
     ],
     performanceMetrics: {
       dataTransferRate: "500 MB/day",
       errorRate: "1%",
       syncDuration: "10 seconds",
     },
     healthStatus: { status: "Healthy", details: "No issues reported" },
     permissionsManagement: { url: "https://example.com/integrations/permissions/slack" },
     notifications: { settingsUrl: "https://example.com/integrations/notifications/slack" },
     documentation: { url: "https://api.slack.com" },
     support: { url: "https://help.slack.com" },
   },
   {
     id: 3,
     name: "Snowflake Integration",
     company: "Snowflake",
     verified: true,
     status: "Active",
     callbackUrl: "https://example.com/callback/slack",
     scope: ["channels:read", "chat:write"],
     reads: [
       { name: "Read Channel Data", description: "Allows access to channel information." },
       { name: "Read Chat Data", description: "Allows access to chat messages." },
     ],
     writes: [{ name: "Write Chat Messages", description: "Allows sending chat messages." }],
     lastSync: "2024-03-31T10:00:00Z",
     createdAt: "2023-02-20T09:30:00Z",
     updatedAt: "2024-03-30T16:45:00Z",
     actions: [
       { name: "Edit Integration", url: "https://example.com/integrations/edit/slack" },
       { name: "Disconnect Integration", url: "https://example.com/integrations/disconnect/slack" },
       { name: "Refresh Sync", url: "https://example.com/integrations/refresh/slack" },
       { name: "View Logs", url: "https://example.com/integrations/logs/slack" },
     ],
     performanceMetrics: {
       dataTransferRate: "500 MB/day",
       errorRate: "1%",
       syncDuration: "10 seconds",
     },
     healthStatus: { status: "Healthy", details: "No issues reported" },
     permissionsManagement: { url: "https://example.com/integrations/permissions/slack" },
     notifications: { settingsUrl: "https://example.com/integrations/notifications/slack" },
     documentation: { url: "https://api.slack.com" },
     support: { url: "https://help.slack.com" },
   },
   {
     id: 4,
     name: "Clickhouse Integration",
     company: "Clickhouse",
     verified: true,
     status: "Active",
     callbackUrl: "https://example.com/callback/slack",
     scope: ["channels:read", "chat:write"],
     reads: [
       { name: "Read Channel Data", description: "Allows access to channel information." },
       { name: "Read Chat Data", description: "Allows access to chat messages." },
     ],
     writes: [{ name: "Write Chat Messages", description: "Allows sending chat messages." }],
     lastSync: "2024-03-31T10:00:00Z",
     createdAt: "2023-02-20T09:30:00Z",
     updatedAt: "2024-03-30T16:45:00Z",
     actions: [
       { name: "Edit Integration", url: "https://example.com/integrations/edit/slack" },
       { name: "Disconnect Integration", url: "https://example.com/integrations/disconnect/slack" },
       { name: "Refresh Sync", url: "https://example.com/integrations/refresh/slack" },
       { name: "View Logs", url: "https://example.com/integrations/logs/slack" },
     ],
     performanceMetrics: {
       dataTransferRate: "500 MB/day",
       errorRate: "1%",
       syncDuration: "10 seconds",
     },
     healthStatus: { status: "Healthy", details: "No issues reported" },
     permissionsManagement: { url: "https://example.com/integrations/permissions/slack" },
     notifications: { settingsUrl: "https://example.com/integrations/notifications/slack" },
     documentation: { url: "https://api.slack.com" },
     support: { url: "https://help.slack.com" },
   },
 ];


export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "User",
    href: "/dashboard/user",
    icon: "user",
    label: "user",
  },
  {
    title: "Employee",
    href: "/dashboard/employee",
    icon: "employee",
    label: "employee",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Kanban",
    href: "/dashboard/kanban",
    icon: "kanban",
    label: "kanban",
  },
  {
    title: "Login",
    href: "/",
    icon: "login",
    label: "login",
  },
];
