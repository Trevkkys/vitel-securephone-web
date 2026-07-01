export const Modules = {
    CASE_MANAGEMENT: "Case Management",
    DEVICE_TRACKING: "Device Tracking",
    GEO_LOCATION: "Geo Location",
    XTRAC: "X-TRAC",
    IMEI_LOOKUP: "IMEI Lookup",
    MSISDN_LOOKUP: "MSISDN Lookup",
    DEVICE_BLACKLISTING: "Device Blacklisting",
    ANALYTICS: "Analytics",
    RECOVERIES: "Recoveries",
    REPORTS: "Reports",
    CUSTOMER_PORTAL: "Customer Portal",
    INSURANCE_CLAIMS: "Insurance Claims",
    VERIFICATION: "Verification",
    MONITORING: "Monitoring",
    SUPPORT: "Support",
} as const;

export type Module =
    (typeof Modules)[keyof typeof Modules];