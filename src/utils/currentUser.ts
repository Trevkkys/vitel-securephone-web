import { PortalType } from "../config/portals";

export interface CurrentUser {
    email: string;
    name: string;
    organization: PortalType;
    role: string;
}

export function getCurrentUser(): CurrentUser | null {
    const stored = localStorage.getItem("vitel-user");

    if (!stored) {
        return null;
    }

    try {
        return JSON.parse(stored) as CurrentUser;
    } catch {
        localStorage.removeItem("vitel-user");
        return null;
    }
}