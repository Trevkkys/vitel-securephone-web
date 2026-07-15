import api from "../api/api";

export interface Notification {
    id: number;
    title: string;
    body: string;
    type: string;
    is_read: boolean;
    created_at: string;
}

export async function getNotifications() {
    const response = await api.get("/notifications");
    return response.data;
}

export async function markNotificationRead(
    notificationId: number
) {
    const response = await api.patch(
        `/notifications/${notificationId}/read`
    );

    return response.data;
}

export async function markAllNotificationsRead() {
    const response = await api.patch(
        "/notifications/read-all"
    );

    return response.data;
}