import api from "../api/api";

/* ===========================
   DASHBOARD
=========================== */

export interface DashboardSummary {
    active_reports: number;
    protected_devices: number;
    pending_claims: number;
    total_subscribers: number;
}

export async function getDashboardSummary(): Promise<DashboardSummary> {
    const { data } = await api.get("/admin/dashboard/summary");
    return data;
}

/* ===========================
   RECENT ACTIVITY
=========================== */

export interface ActivityFeedItem {
    id: number;
    actor_id: number;
    actor_role: string;
    action: string;
    entity_type: string;
    entity_id: number;
    description: string;
    created_at: string;
}

export async function getActivityFeed(): Promise<ActivityFeedItem[]> {
    const { data } = await api.get("/admin/activity-feed");
    return data;
}

/* ===========================
   AUDIT LOGS
=========================== */

export interface AuditLogItem {
    id: number;
    actor_id: number;
    actor_role: string;
    action: string;
    entity_type: string;
    entity_id: number;
    description: string;
    created_at: string;
}

export interface AuditLogsResponse {
    items: AuditLogItem[];
    total: number;
    page: number;
    limit: number;
}

export interface AuditLogFilters {
    page?: number;
    limit?: number;
    actor_id?: number;
    entity_type?: string;
    action?: string;
    entity_id?: number;
    start_date?: string;
    end_date?: string;
}

export async function getAuditLogs(
    filters: AuditLogFilters = {}
): Promise<AuditLogsResponse> {
    const { data } = await api.get("/admin/audit-logs", {
        params: {
            page: filters.page ?? 1,
            limit: filters.limit ?? 25,
            actor_id: filters.actor_id,
            entity_type: filters.entity_type,
            action: filters.action,
            entity_id: filters.entity_id,
            start_date: filters.start_date,
            end_date: filters.end_date,
        },
    });

    return data;
}

export interface SystemStatus {
    api_status: string;
    database_status: string;
}

export async function getSystemStatus(): Promise<SystemStatus> {
    const { data } = await api.get("/admin/system-status");
    return data;
}