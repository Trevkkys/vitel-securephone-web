import api from "../api/api";

export interface UpdateProfileRequest {
    full_name: string;
}

export interface UserProfile {
    id: number;
    email: string;
    full_name: string | null;
    role: string;
    is_admin: boolean;
    is_active: boolean;
}

export async function updateProfile(
    data: UpdateProfileRequest
): Promise<UserProfile> {
    const response = await api.put(
        "/auth/profile",
        data
    );

    return response.data;
}

export interface ChangePasswordRequest {
    current_password: string;
    new_password: string;
}

export async function changePassword(
    data: ChangePasswordRequest
): Promise<string> {
    const response = await api.put(
        "/auth/change-password",
        data
    );

    return response.data;
}