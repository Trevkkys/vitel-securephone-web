import { organizations } from "../config/organizations";

export function getOrganization(role: string) {
    switch (role) {
        case "police":
            return organizations.find((o) => o.type === "Police");

        case "insurance":
            return organizations.find((o) => o.type === "Insurance");

        case "vitel_staff":
            return organizations.find((o) => o.type === "Internal");

        case "admin":
            return organizations.find((o) => o.type === "Internal");

        default:
            return undefined;
    }
}