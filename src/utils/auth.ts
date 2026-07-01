import type { User } from "../types/user";

export function getCurrentUser(): User | null {
    const user = localStorage.getItem("vitel-user");

    if (!user) return null;

    return JSON.parse(user);
}