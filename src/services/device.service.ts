import api from "../api/api";

export async function getDevices() {
    const response = await api.get("/admin/devices");
    return response.data;
}

export async function getDevice(deviceId: number) {
    const response = await api.get(
        `/admin/devices/${deviceId}`
    );

    return response.data;
}

export async function verifyDevice(deviceId: number) {
    const response = await api.patch(
        `/admin/devices/${deviceId}/verify`
    );

    return response.data;
}