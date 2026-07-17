import api from "../api/api";

export async function getClaims() {
    const response = await api.get("/insurance/claims");
    return response.data;
}

export async function getClaim(id: number) {
    const response = await api.get(`/insurance/claims/${id}`);
    return response.data;
}

export async function approveClaim(id: number) {
    const response = await api.patch(
        `/insurance/claims/${id}/approve`
    );

    return response.data;
}

export async function rejectClaim(id: number) {
    const response = await api.patch(
        `/insurance/claims/${id}/reject`
    );

    return response.data;
}

export async function payClaim(id: number) {
    const response = await api.patch(
        `/insurance/claims/${id}/pay`
    );

    return response.data;
}