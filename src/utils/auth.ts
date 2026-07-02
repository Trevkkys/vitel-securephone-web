import type { User } from "../types/user";

export function getCurrentUser(): User | null {
    const user = localStorage.getItem("vitel-user");

    if (!user) {
        return {
            organization:
                import.meta.env.DEV ? "INSURANCE" : "POLICE",
        } as User;
    }

    return JSON.parse(user);
}