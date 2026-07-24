import api from "../api/api";

/* ===========================
   REPORTS
=========================== */

export async function getReports() {
    const response = await api.get("/admin/reports");
    return response.data;
}

export async function getReport(reportId: number) {
    const response = await api.get(
        `/admin/reports/${reportId}`
    );

    return response.data;
}

export async function getReportTimeline(
    reportId: number
) {
    const response = await api.get(
        `/admin/reports/${reportId}/timeline`
    );

    return response.data;
}

/* ===========================
   REPORT ACTIONS
=========================== */

export async function verifyReport(
    reportId: number
) {
    const response = await api.patch(
        `/reports/${reportId}/verify`
    );

    return response.data;
}

export async function assignOfficer(
    reportId: number,
    officerId: number
) {
    const response = await api.patch(
        `/reports/${reportId}/assign`,
        null,
        {
            params: {
                officer_id: officerId,
            },
        }
    );

    return response.data;
}

export async function escalateReport(
    reportId: number
) {
    const response = await api.patch(
        `/reports/${reportId}/escalate-to-insurance`
    );

    return response.data;
}

export async function closeReport(
    reportId: number
) {
    const response = await api.patch(
        `/reports/${reportId}/close`
    );

    return response.data;
}

export async function updateSimLockStatus(
    reportId: number,
    status: string
) {

    const response = await api.patch(

        `/reports/${reportId}/sim-lock/status`,

        {
            status
        }

    );

    return response.data;

}

export async function updateBlacklistStatus(
    reportId: number,
    status: string
) {

    const response = await api.patch(

        `/reports/${reportId}/blacklist/status`,

        {
            status
        }

    );

    return response.data;

}

// ===============================
// Emergency Report Requests
// ===============================

export interface EmergencyReportRequest {
    id: number;
    subscriber_id: number;
    emergency_contact_name: string;
    emergency_contact_phone: string;
    relationship: string;
    reason: string;
    status: string;
    created_at: string;
}

export interface EmergencyReportRequestDetail {
    id: number;
    subscriber_id: number;
    subscriber_name: string;
    subscriber_phone: string;
    emergency_contact_name: string;
    emergency_contact_phone: string;
    relationship: string;
    reason: string;
    status: string;
    created_at: string;
}

export interface EmergencyReportListResponse {
    items: EmergencyReportRequest[];
    total: number;
    page: number;
    limit: number;
}

export async function getEmergencyReportRequests(
    page = 1,
    limit = 25
): Promise<EmergencyReportRequest[]> {
    const { data } = await api.get(
        "/admin/emergency-report-requests",
        {
            params: {
                page,
                limit,
            },
        }
    );

    return data;
}

export async function getEmergencyReportRequest(
    requestId: number
): Promise<EmergencyReportRequestDetail> {
    const { data } = await api.get(
        `/admin/emergency-report-requests/${requestId}`
    );

    return data;
}

export async function approveEmergencyReport(
    requestId: number
) {
    const { data } = await api.patch(
        `/admin/emergency-report-requests/${requestId}/approve`
    );

    return data;
}

export async function rejectEmergencyReport(
    requestId: number
) {
    const { data } = await api.patch(
        `/admin/emergency-report-requests/${requestId}/reject`
    );

    return data;
}