import api from "../api/api";

export interface PoliceCase {
    id: number;
    report_number: string;
    status: string;
    incident_location: string;
    police_station: string;
    sim_lock_status: string;
    blacklist_status: string;
    contact_phone: string;
    is_police_report_verified: boolean;
    device_brand: string;
    device_model: string;
    device_imei: string;
    subscriber_name: string;
    subscriber_phone: string;
    last_seen_location: string;
    last_seen_at: string;
    created_at: string;
    assignment_status: string;
}

export async function getPoliceCase(
    caseId: number
): Promise<PoliceCase> {
    const response = await api.get(
        `/police/cases/${caseId}`
    );

    return response.data;
}

export async function acceptPoliceCase(caseId: number) {
    const response = await api.patch(
        `/police/cases/${caseId}/accept`
    );

    return response.data;
}

export async function rejectPoliceCase(caseId: number) {
    const response = await api.patch(
        `/police/cases/${caseId}/reject`
    );

    return response.data;
}

export async function updatePoliceCaseStatus(
    caseId: number,
    status: string
) {
    const response = await api.patch(
        `/police/cases/${caseId}/status`,
        {
            status,
        }
    );

    return response.data;
}