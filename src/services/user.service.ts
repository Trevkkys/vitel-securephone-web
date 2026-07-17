import api from "../api/api";

export interface CreateUserRequest {
    email: string;
    password: string;
    role: string;
}

export interface UserResponse {
    id: number;
    email: string;
    role: string;
    is_admin: boolean;
}

export async function getCurrentUser() {
    const response = await api.get("/auth/me");
    return response.data;
}

export async function createUser(data: {
    email: string;
    password: string;
    role: string;
}) {
    const response = await api.post(
        "/create/user",
        data
    );

    return response.data;
}

export async function getUsers() {
    const response = await api.get("/users");
    return response.data;
}

export async function getUser(userId: number) {
    const response = await api.get(`/users/${userId}`);
    return response.data;
}

export async function deactivateUser(userId: number) {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
}

export async function reactivateUser(userId: number) {
    const response = await api.patch(
        `/users/${userId}/reactivate`
    );

    return response.data;
}