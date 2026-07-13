import api from "../api/api";

/* ===========================
   GENERAL CASES
=========================== */

export async function getCases() {
    const response = await api.get("/cases");
    return response.data;
}

export async function getCase(caseId: number) {
    const response = await api.get(`/cases/${caseId}`);
    return response.data;
}

export async function getCaseTimeline(caseId: number) {
    const response = await api.get(
        `/cases/${caseId}/timeline`
    );

    return response.data;
}

export async function createCase(data: unknown) {
    const response = await api.post(
        "/cases",
        data
    );

    return response.data;
}

/* ===========================
   ADMIN / VITEL
=========================== */

export async function verifyPoliceReport(caseId: number) {
    const response = await api.patch(
        `/cases/${caseId}/verify`
    );

    return response.data;
}

export async function assignOfficer(
    caseId: number,
    data: unknown
) {
    const response = await api.patch(
        `/cases/${caseId}/assign`,
        data
    );

    return response.data;
}

export async function escalateToInsurance(
    caseId: number
) {
    const response = await api.patch(
        `/cases/${caseId}/escalate-to-insurance`
    );

    return response.data;
}

/* ===========================
   POLICE
=========================== */

export async function getPoliceCases() {
    const response = await api.get(
        "/police/cases"
    );

    return response.data;
}

export async function getPoliceCase(
    caseId: number
) {
    const response = await api.get(
        `/police/cases/${caseId}`
    );

    return response.data;
}

export async function updatePoliceCaseStatus(
    caseId: number,
    data: {
        status: string;
    }
) {
    const response = await api.patch(
        `/police/cases/${caseId}/status`,
        data
    );

    return response.data;
}

export async function updateLastSeenLocation(
    caseId: number,
    data: {
        last_seen_location: string;
    }
) {
    const response = await api.patch(
        `/police/cases/${caseId}/last-seen`,
        data
    );

    return response.data;
}

/* ===========================
   INSURANCE CLAIMS
=========================== */

export async function getClaim(claimId: number) {
    const response = await api.get(
        `/insurance/claims/${claimId}`
    );

    return response.data;
}

export async function approveClaim(claimId: number) {
    const response = await api.patch(
        `/insurance/claims/${claimId}/approve`
    );

    return response.data;
}

export async function rejectClaim(claimId: number) {
    const response = await api.patch(
        `/insurance/claims/${claimId}/reject`
    );

    return response.data;
}

export async function payClaim(claimId: number) {
    const response = await api.patch(
        `/insurance/claims/${claimId}/pay`
    );

    return response.data;
}