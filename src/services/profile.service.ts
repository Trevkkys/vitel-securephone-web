import api from "../api/api";

export interface UpdateProfileRequest {
    full_name: string;
}

export async function updateProfile(
    data: UpdateProfileRequest
) {
    const response = await api.put(
        "/update-admin-user/profile",
        data
    );

    return response.data;
}