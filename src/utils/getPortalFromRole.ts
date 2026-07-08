import { PortalType } from "../config/portals";

export function getPortalFromRole(role?: string): PortalType {
    switch (role) {
        case "admin":
            return PortalType.SUPER_ADMIN;

        case "vitel_staff":
            return PortalType.VITEL;

        case "police":
            return PortalType.POLICE;

        case "insurance":
            return PortalType.INSURANCE;

        default:
            return PortalType.POLICE;
    }
}