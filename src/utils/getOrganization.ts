import { organizations } from "../config/organizations";

export function getOrganization(id: number | string) {
    return organizations.find(
        (organization) => organization.id === Number(id)
    );
}