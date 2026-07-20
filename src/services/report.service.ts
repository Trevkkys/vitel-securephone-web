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
    data: unknown
) {
    const response = await api.patch(
        `/reports/${reportId}/assign`,
        data
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