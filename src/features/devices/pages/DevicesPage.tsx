import styles from "./DevicesPage.module.css";
import { useState } from "react";
import RegisterDeviceModal from "../components/RegisterDeviceModal/RegisterDeviceModal";
import DeviceDetailsModal from "../components/DeviceDetailsModal/DeviceDetailsModal";
import AddNoteModal from "../components/AddNoteModal/AddNoteModal";
import AddPhotoModal from "../components/AddPhotoModal/AddPhotoModal";

function DevicesPage() {
    const [openModal, setOpenModal] =
        useState(false);
    const [openDetails, setOpenDetails] =
        useState(false);
    const [selectedDevice, setSelectedDevice] =
        useState<any>(null);
    const [openMenu, setOpenMenu] =
        useState<number | null>(null);
    const [openNote, setOpenNote] =
        useState(false);
    const [openPhoto, setOpenPhoto] =
        useState(false);

    const devices = [
        {
            id: 1,
            imei: "352987654123456",
            owner: "John Doe",
            device: "iPhone 15 Pro",
            color: "Black",
            status: "Protected",
            plan: "Premium",
            date: "01 Jun 2026",
        },
        {
            id: 2,
            imei: "357891234567890",
            owner: "Mary Johnson",
            device: "Samsung S24 Ultra",
            color: "Purple",
            status: "Protected",
            plan: "Standard",
            date: "03 Jun 2026",
        },
        {
            id: 3,
            imei: "351234567890123",
            owner: "Michael Adams",
            device: "Google Pixel 9",
            color: "White",
            status: "Stolen",
            plan: "Premium",
            date: "07 Jun 2026",
        },
        {
            id: 4,
            imei: "353456789012345",
            owner: "David Smith",
            device: "Tecno Phantom X2",
            color: "Blue",
            status: "Recovered",
            plan: "Standard",
            date: "09 Jun 2026",
        },
    ];

    return (
        <>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>
                        Manage Devices
                    </h1>

                    <p className={styles.subtitle}>
                        View, register and manage protected devices.
                    </p>
                </div>

                <button
                    className={styles.addButton}
                    onClick={() => setOpenModal(true)}
                >
                    + Register Device
                </button>
            </div>

            <div className={styles.stats}>
                <div className={styles.badge}>
                    <span>15,432</span>
                    <p>Total Devices</p>
                </div>

                <div className={styles.badge}>
                    <span>14,923</span>
                    <p>Protected</p>
                </div>

                <div className={styles.badge}>
                    <span>312</span>
                    <p>Stolen</p>
                </div>

                <div className={styles.badge}>
                    <span>197</span>
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
                        {devices.map((device) => (
                            <tr key={device.id}>
                                <td>{device.imei}</td>
                                <td>{device.owner}</td>
                                <td>{device.device}</td>
                                <td>{device.color}</td>
                                <td>{device.status}</td>
                                <td>{device.plan}</td>
                                <td>{device.date}</td>

                                <td>
                                    <div className={styles.menuContainer}>
                                        <span
                                            className={styles.menu}
                                            onClick={() =>
                                                setOpenMenu(
                                                    openMenu === device.id
                                                        ? null
                                                        : device.id
                                                )
                                            }
                                        >
                                            ⋮
                                        </span>

                                        {openMenu === device.id && (
                                            <div className={styles.dropdown}>
                                                <p
                                                    onClick={() => {
                                                        setSelectedDevice(device);
                                                        setOpenDetails(true);
                                                        setOpenMenu(null);
                                                    }}
                                                >
                                                    View Details
                                                </p>
                                                <p
                                                    onClick={() => {
                                                        setOpenNote(true);
                                                        setOpenMenu(null);
                                                    }}
                                                >
                                                    Add Note
                                                </p>
                                                <p
                                                    onClick={() => {
                                                        setOpenPhoto(true);
                                                        setOpenMenu(null);
                                                    }}
                                                >
                                                    Add Photo
                                                </p>
                                                <p>Add Document</p>
                                                <p>Mark as Stolen</p>
                                                <p>View History</p>
                                            </div>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <RegisterDeviceModal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />
            <DeviceDetailsModal
                open={openDetails}
                device={selectedDevice}
                onClose={() => setOpenDetails(false)}
            />
            <AddNoteModal
                open={openNote}
                onClose={() => setOpenNote(false)}
            />
            <AddPhotoModal
                open={openPhoto}
                onClose={() => setOpenPhoto(false)}
            />
        </>
    );
}

export default DevicesPage;