export const policeRoles = [
    {
        name: "Administrator",
        users: 3,
        description: "Full administrative access.",
        permissions: [
            "View Cases",
            "Create Cases",
            "Edit Cases",
            "Assign Cases",
            "Close Cases",
            "Delete Cases",

            "Live Tracking",
            "Geo-Fencing",
            "X-TRAC",
            "MSISDN Tracking",

            "View Recoveries",
            "Update Recoveries",
            "Upload Evidence",
            "Release Device",

            "View Users",
            "Create Users",
            "Edit Users",
            "Reset Password",
            "Delete Users",

            "View Settings",
            "Modify Settings",
        ],
    },

    {
        name: "Investigator",
        users: 42,
        description: "Investigates theft cases.",
        permissions: [
            "View Cases",
            "Create Cases",
            "Edit Cases",
            "Assign Cases",

            "Live Tracking",
            "Geo-Fencing",
            "X-TRAC",
            "MSISDN Tracking",

            "View Recoveries",
        ],
    },

    {
        name: "Tracking Officer",
        users: 18,
        description: "Responsible for tracking devices.",
        permissions: [
            "View Cases",
            "Live Tracking",
            "Geo-Fencing",
            "X-TRAC",
            "MSISDN Tracking",
        ],
    },

    {
        name: "Recovery Officer",
        users: 11,
        description: "Handles recovered devices.",
        permissions: [
            "View Cases",
            "View Recoveries",
            "Update Recoveries",
            "Upload Evidence",
            "Release Device",
        ],
    },

    {
        name: "Read Only",
        users: 8,
        description: "View-only access.",
        permissions: [
            "View Cases",
            "View Recoveries",
            "View Users",
            "View Settings",
        ],
    },
];

export const insuranceRoles = [
    {
        name: "Insurance Administrator",
        users: 2,
        description: "Full access to insurance operations.",
        permissions: [
            "View Cases",
            "Create Cases",
            "Edit Cases",
            "Assign Cases",
            "Close Cases",

            "View Recoveries",

            "View Users",
            "Create Users",
            "Edit Users",
            "Reset Password",

            "View Settings",
            "Modify Settings",
        ],
    },

    {
        name: "Claims Supervisor",
        users: 5,
        description: "Approves and supervises claims.",
        permissions: [
            "View Cases",
            "Create Cases",
            "Edit Cases",
            "Assign Cases",
            "Close Cases",

            "View Recoveries",
        ],
    },

    {
        name: "Claims Officer",
        users: 18,
        description: "Processes insurance claims.",
        permissions: [
            "View Cases",
            "Create Cases",
            "Edit Cases",
            "View Recoveries",
        ],
    },

    {
        name: "Verification Officer",
        users: 7,
        description: "Verifies ownership and supporting documents.",
        permissions: [
            "View Cases",
            "Edit Cases",
            "View Recoveries",
        ],
    },

    {
        name: "Read Only Auditor",
        users: 3,
        description: "Read-only access to records.",
        permissions: [
            "View Cases",
            "View Recoveries",
            "View Users",
            "View Settings",
        ],
    },
];

export const vitelRoles = [
    {
        name: "Platform Administrator",
        users: 2,
        description: "Full platform administration access.",
        permissions: [
            "View Users",
            "Create Users",
            "Edit Users",
            "Reset Password",
            "Delete Users",

            "View Settings",
            "Modify Settings",
        ],
    },

    {
        name: "Operations Manager",
        users: 5,
        description: "Oversees daily platform operations.",
        permissions: [
            "View Users",
            "Create Users",
            "Edit Users",

            "View Settings",
        ],
    },

    {
        name: "Support Engineer",
        users: 11,
        description: "Provides customer support and troubleshooting.",
        permissions: [
            "View Users",
            "Edit Users",
        ],
    },

    {
        name: "Device Operations",
        users: 8,
        description: "Manages device onboarding and monitoring.",
        permissions: [
            "View Users",
            "Edit Users",
        ],
    },

    {
        name: "Read Only",
        users: 3,
        description: "View-only access.",
        permissions: [
            "View Users",
            "View Settings",
        ],
    },
];