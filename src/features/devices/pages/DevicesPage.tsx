import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styles from "./DevicesPage.module.css";

import { getDevices } from "../../../services/device.service";

import DeviceDetailsModal from "../components/DeviceDetailsModal/DeviceDetailsModal";
import HistoryModal from "../components/HistoryModal/HistoryModal";

interface Device {
    id: number;
    imei: string;
    owner: string;
    device: string;
    color: string;
    status: string;
    plan: string;
    date: string;
}

function DevicesPage() {
    const [devices, setDevices] = useState<Device[]>([]);
    const [loading, setLoading] = useState(true);

    const [openDetails, setOpenDetails] = useState(false);
    const [selectedDevice, setSelectedDevice] =
        useState<Device | null>(null);

    const [openMenu, setOpenMenu] =
        useState<number | null>(null);

    const [openHistory, setOpenHistory] =
        useState(false);

    useEffect(() => {
        fetchDevices();
    }, []);

    async function fetchDevices() {
        try {
            setLoading(true);

            const data = await getDevices();

            const mapped = data.map((device: any) => ({
                id: device.id,
                imei: device.imei,
                owner:
                    device.owner_name ??
                    device.subscriber_name ??
                    "Unknown",
                device:
                    device.device_name ??
                    device.model ??
                    "Unknown Device",
                color:
                    device.device_color ??
                    device.color ??
                    "-",
                status:
                    device.status ??
                    "Protected",
                plan:
                    device.plan_name ??
                    device.plan ??
                    "-",
                date: device.created_at
                    ? new Date(device.created_at).toLocaleDateString()
                    : "-",
            }));

            setDevices(mapped);
        } catch (error) {
            console.error("Device API failed:", error);

            toast.error("Unable to load devices.");

            setDevices([]);
        } finally {
            setLoading(false);
        }
    }

    const totalDevices = devices.length;

    const protectedDevices = devices.filter(
        (d) => d.status === "Protected"
    ).length;

    const stolenDevices = devices.filter(
        (d) => d.status === "Stolen"
    ).length;

    const recoveredDevices = devices.filter(
        (d) => d.status === "Recovered"
    ).length;

    return (
        <>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>
                        Devices Overview
                    </h1>

                    <p className={styles.subtitle}>
                        Monitor all registered devices synced
                        from the SecurePhone mobile application.
                    </p>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.badge}>
                    <span>{totalDevices}</span>
                    <p>Total Devices</p>
                </div>

                <div className={styles.badge}>
                    <span>{protectedDevices}</span>
                    <p>Protected</p>
                </div>

                <div className={styles.badge}>
                    <span>{stolenDevices}</span>
                    <p>Stolen</p>
                </div>

                <div className={styles.badge}>
                    <span>{recoveredDevices}</span>
                    <p>Recovered</p>
                </div>
            </div>

            <div className={styles.actions}>
                <input
                    className={styles.search}
                    placeholder="Search by IMEI or Owner"
                />

                <select className={styles.filter}>
                    <option>All Status</option>
                    <option>Protected</option>
                    <option>Stolen</option>
                    <option>Recovered</option>
                </select>
            </div>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>IMEI</th>
                            <th>Owner</th>
                            <th>Device</th>
                            <th>Color</th>
                            <th>Status</th>
                            <th>Plan</th>
                            <th>Date Registered</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td
                                    colSpan={8}
                                    style={{
                                        textAlign: "center",
                                        padding: "30px",
                                    }}
                                >
                                    Loading devices...
                                </td>
                            </tr>
                        ) : (
                            devices.map((device) => (
                                <tr key={device.id}>
                                    <td>{device.imei}</td>

                                    <td>{device.owner}</td>

                                    <td>{device.device}</td>

                                    <td>{device.color}</td>

                                    <td>{device.status}</td>

                                    <td>{device.plan}</td>

                                    <td>{device.date}</td>

                                    <td>
                                        <div
                                            className={
                                                styles.menuContainer
                                            }
                                        >
                                            <span
                                                className={
                                                    styles.menu
                                                }
                                                onClick={() =>
                                                    setOpenMenu(
                                                        openMenu ===
                                                            device.id
                                                            ? null
                                                            : device.id
                                                    )
                                                }
                                            >
                                                ⋮
                                            </span>

                                            {openMenu ===
                                                device.id && (
                                                    <div
                                                        className={
                                                            styles.dropdown
                                                        }
                                                    >
                                                        <p
                                                            onClick={() => {
                                                                setSelectedDevice(
                                                                    device
                                                                );

                                                                setOpenDetails(
                                                                    true
                                                                );

                                                                setOpenMenu(
                                                                    null
                                                                );
                                                            }}
                                                        >
                                                            View Details
                                                        </p>

                                                        <p
                                                            onClick={() => {
                                                                setOpenHistory(
                                                                    true
                                                                );

                                                                setOpenMenu(
                                                                    null
                                                                );
                                                            }}
                                                        >
                                                            View History
                                                        </p>
                                                    </div>
                                                )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <DeviceDetailsModal
                open={openDetails}
                device={selectedDevice}
                onClose={() =>
                    setOpenDetails(false)
                }
            />

            <HistoryModal
                open={openHistory}
                onClose={() =>
                    setOpenHistory(false)
                }
            />
        </>
    );
}

export default DevicesPage;