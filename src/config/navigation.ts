import { PortalType } from "./portals";
import type { IconType } from "react-icons";
import {
    FiHome,
    FiBriefcase,
    FiSmartphone,
    FiUsers,
    FiShield,
    FiBarChart2,
    FiSettings,
    FiMap,
    FiPackage,
    FiActivity,
    FiHeadphones,
    FiFileText,
} from "react-icons/fi";

export interface NavigationItem {
    label: string;
    path?: string;
    icon?: IconType;
    children?: NavigationItem[];
}

export const navigation: Record<PortalType, NavigationItem[]> = {
    [PortalType.SUPER_ADMIN]: [
        { label: "Dashboard", icon: FiHome, path: "/dashboard" },
        { label: "Case Management", icon: FiBriefcase, path: "/dashboard/cases" },
        { label: "Devices", icon: FiSmartphone, path: "/dashboard/devices" },
        { label: "Organizations", icon: FiUsers, path: "/dashboard/organizations" },
        { label: "Analytics", icon: FiBarChart2, path: "/dashboard/analytics" },
        { label: "Audit Logs", icon: FiFileText, path: "/dashboard/audit-logs" },
        { label: "Settings", icon: FiSettings, path: "/dashboard/settings" },
    ],

    [PortalType.POLICE]: [
        { label: "Dashboard", icon: FiHome, path: "/dashboard" },

        { label: "Case Management", icon: FiBriefcase, path: "/dashboard/cases" },

        {
            label: "Tracking",
            icon: FiMap,
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
            icon: FiPackage,
            path: "/dashboard/recoveries",
        },

        {
            label: "Users",
            icon: FiUsers,
            path: "/dashboard/users",
        },

        {
            label: "Roles & Permissions",
            icon: FiShield,
            path: "/dashboard/roles",
        },

        {
            label: "Reports",
            icon: FiBarChart2,
            path: "/dashboard/reports",
        },

        {
            label: "Settings",
            icon: FiSettings,
            path: "/dashboard/settings",
        },
    ],

    [PortalType.INSURANCE]: [
        {
            label: "Dashboard",
            icon: FiHome,
            path: "/dashboard",
        },

        {
            label: "Claims",
            icon: FiBriefcase,
            path: "/dashboard/cases",
        },

        {
            label: "Recoveries",
            icon: FiPackage,
            path: "/dashboard/recoveries",
        },

        {
            label: "Users",
            icon: FiUsers,
            path: "/dashboard/users",
        },

        {
            label: "Roles & Permissions",
            icon: FiShield,
            path: "/dashboard/roles",
        },

        {
            label: "Reports",
            icon: FiBarChart2,
            path: "/dashboard/reports",
        },

        {
            label: "Settings",
            icon: FiSettings,
            path: "/dashboard/settings",
        },
    ],

    [PortalType.VITEL]: [
        {
            label: "Dashboard",
            icon: FiHome,
            path: "/dashboard",
        },

        {
            label: "Customers",
            icon: FiBriefcase,
            path: "/dashboard/customers",
        },

        {
            label: "Devices",
            icon: FiSmartphone,
            path: "/dashboard/devices",
        },

        {
            label: "Monitoring",
            icon: FiActivity,
            path: "/dashboard/monitoring",
        },

        {
            label: "Support",
            icon: FiHeadphones,
            path: "/dashboard/support",
        },

        {
            label: "Users",
            icon: FiUsers,
            path: "/dashboard/users",
        },

        {
            label: "Roles",
            icon: FiShield,
            path: "/dashboard/roles",
        },

        {
            label: "Reports",
            icon: FiBarChart2,
            path: "/dashboard/reports",
        },

        {
            label: "Settings",
            icon: FiSettings,
            path: "/dashboard/settings",
        },
    ],
};