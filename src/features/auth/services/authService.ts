import api from "../../../services/api/api";

export async function login(
    email: string,
    password: string
) {
    return api.login(email, password);
}