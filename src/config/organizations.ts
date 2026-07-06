export interface Organization {
    id: number;
    name: string;
    type: "Police" | "Insurance" | "Internal";
    users: number;
    portal: string;
    status: "Active" | "Suspended";
    enabledModules: string[];
}

export const organizations: Organization[] = [
    {
        id: 1,
        name: "Nigeria Police Force",
        type: "Police",
        users: 154,
        portal: "police.vitelsecurephone.com",
        status: "Active",
        enabledModules: [
            "Dashboard",
            "Case Management",
            "Device Tracking",
            "Geo Location",
            "X-TRAC",
            "MSISDN Lookup",
            "Recoveries",
            "Users",
            "Roles & Permissions",
            "Reports",
            "Settings",
        ],
    },

    {
        id: 2,
        name: "Leadway Insurance",
        type: "Insurance",
        users: 67,
        portal: "insurance.vitelsecurephone.com",
        status: "Active",
        enabledModules: [
            "Dashboard",
            "Claims",
            "Recoveries",
            "Users",
            "Roles & Permissions",
            "Reports",
            "Settings",
        ],
    },

    {
        id: 3,
        name: "Vitel SecurePhone Operations",
        type: "Internal",
        users: 28,
        portal: "staff.vitelsecurephone.com",
        status: "Active",
        enabledModules: [
            "Dashboard",
            "Customers",
            "Devices",
            "Monitoring",
            "Support",
            "Users",
            "Roles",
            "Reports",
            "Settings",
        ],
    },
];