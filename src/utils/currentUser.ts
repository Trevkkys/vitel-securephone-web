import { PortalType } from "../config/portals";

export interface CurrentUser {
    email: string;
    name: string;
    organization: PortalType;
    role: string;
}

export function getCurrentUser(): CurrentUser {
    return JSON.parse(
        localStorage.getItem("vitel-user") || "{}"
    ) as CurrentUser;
}