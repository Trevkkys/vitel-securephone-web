export interface CurrentUser {
    id: number;
    email: string;
    full_name: string | null;
    role: string;
    is_admin: boolean;
    is_active: boolean;
    is_email_verified: boolean;
    is_phone_verified: boolean;
    is_profile_complete: boolean;
    is_flagged: boolean;
    phone_number: string | null;
    city: string | null;
    nin: string | null;
}

export function getCurrentUser(): CurrentUser | null {
    const user = localStorage.getItem("vitel-user");

    if (!user) return null;

    return JSON.parse(user);
}