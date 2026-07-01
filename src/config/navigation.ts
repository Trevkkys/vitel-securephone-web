import { PortalType } from "./portals";

export interface NavigationItem {
    label: string;
    path?: string;
    children?: NavigationItem[];
}

export const navigation: Record<PortalType, NavigationItem[]> = {
    [PortalType.SUPER_ADMIN]: [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Case Management", path: "/dashboard/cases" },
        { label: "Devices", path: "/dashboard/devices" },
        { label: "Organizations", path: "/dashboard/organizations" },
        { label: "Analytics", path: "/dashboard/analytics" },
        { label: "Audit Logs", path: "/dashboard/audit-logs" },
        { label: "Settings", path: "/dashboard/settings" },
    ],

    [PortalType.POLICE]: [
        { label: "Dashboard", path: "/dashboard" },

        { label: "Case Management", path: "/dashboard/cases" },

        {
            label: "Tracking",
            children: [
                {
                    label: "Live Tracking",
                    path: "/dashboard/tracking/live",
                },
                {
                    label: "Geo-Fencing",
                    path: "/dashboard/tracking/geofence",
                },
                {
                    label: "X-TRAC",
                    path: "/dashboard/tracking/xtrac",
                },
                {
                    label: "MSISDN Tracking",
                    path: "/dashboard/tracking/msisdn",
                },
            ],
        },

        {
            label: "Recoveries",
            path: "/dashboard/recoveries",
        },

        {
            label: "Reports",
            path: "/dashboard/reports",
        },

        {
            label: "Settings",
            path: "/dashboard/settings",
        },
    ],

    [PortalType.INSURANCE]: [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Claims", path: "/dashboard/claims" },
        { label: "Verification", path: "/dashboard/verification" },
        { label: "Recoveries", path: "/dashboard/recoveries" },
        { label: "Users", path: "/dashboard/users" },
        { label: "Roles", path: "/dashboard/roles" },
        { label: "Reports", path: "/dashboard/reports" },
    ],

    [PortalType.VITEL]: [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Customers", path: "/dashboard/customers" },
        { label: "Devices", path: "/dashboard/devices" },
        { label: "Monitoring", path: "/dashboard/monitoring" },
        { label: "Support", path: "/dashboard/support" },
        { label: "Reports", path: "/dashboard/reports" },
    ],
};