export interface User {
    name: string;
    email: string;
    organization:
    | "SUPER_ADMIN"
    | "POLICE"
    | "INSURANCE"
    | "VITEL";
    role: string;
}