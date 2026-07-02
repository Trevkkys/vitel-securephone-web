import { PortalType } from "./portals";

export const portalContent = {
    [PortalType.POLICE]: {
        users: {
            title: "Police Users",
            description: "Manage police officers and portal access.",
            roles: [
                "Administrator",
                "Investigator",
                "Tracking Officer",
                "Recovery Officer",
            ],
            domain: "lagospolice.gov.ng",
        },

        roles: {
            title: "Police Roles & Permissions",
            description: "Configure police user permissions.",
        },
    },

    [PortalType.INSURANCE]: {
        users: {
            title: "Insurance Users",
            description: "Manage insurance staff and portal access.",
            roles: [
                "Insurance Administrator",
                "Claims Supervisor",
                "Claims Officer",
                "Verification Officer",
            ],
            domain: "securelifeinsurance.com",
        },

        roles: {
            title: "Insurance Roles & Permissions",
            description: "Configure insurance user permissions.",
        },
    },

    [PortalType.VITEL]: {
        users: {
            title: "Vitel Staff",
            description: "Manage Vitel employees and platform access.",
            roles: [
                "Platform Administrator",
                "Operations Manager",
                "Support Engineer",
                "Device Operations",
            ],
            domain: "vitelsecurephone.com",
        },

        roles: {
            title: "Vitel Roles & Permissions",
            description: "Configure Vitel staff permissions.",
        },
    },
};