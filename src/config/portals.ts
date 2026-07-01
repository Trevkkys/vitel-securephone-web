export const PortalType = {
    SUPER_ADMIN: "SUPER_ADMIN",
    POLICE: "POLICE",
    INSURANCE: "INSURANCE",
    VITEL: "VITEL",
} as const;

export type PortalType =
    (typeof PortalType)[keyof typeof PortalType];