import api from "../api/api";

export interface DashboardSummary {
    active_cases: number;
    protected_devices: number;
    pending_claims: number;
    total_subscribers: number;
}

export async function getDashboardSummary(): Promise<DashboardSummary> {
    const { data } = await api.get("/api/v1/admin/dashboard/summary");
    return data;
}