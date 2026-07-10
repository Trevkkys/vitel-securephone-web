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