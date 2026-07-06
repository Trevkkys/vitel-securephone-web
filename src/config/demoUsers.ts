import { PortalType } from "./portals";

export const DEMO_USERS = [
    {
        email: "superadmin@vitel.com",
        password: "admin123",
        portal: PortalType.SUPER_ADMIN,
        name: "Super Administrator",
    },
    {
        email: "admin@police.ng",
        password: "admin123",
        portal: PortalType.POLICE,
        name: "Police Administrator",
    },
    {
        email: "admin@leadway.com",
        password: "admin123",
        portal: PortalType.INSURANCE,
        name: "Insurance Administrator",
    },
    {
        email: "ops@vitel.com",
        password: "admin123",
        portal: PortalType.VITEL,
        name: "Vitel Administrator",
    },
];