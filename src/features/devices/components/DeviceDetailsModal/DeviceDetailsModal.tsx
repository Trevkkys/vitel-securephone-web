import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import styles from "./DeviceDetailsModal.module.css";

import {
    getDevice,
    verifyDevice,
} from "../../../../services/device.service";

interface Props {
    open: boolean;
    onClose: () => void;
    device: any;
}

function DeviceDetailsModal({
    open,
    onClose,
    device,
}: Props) {
    const [loading, setLoading] = useState(false);

    const [verifying, setVerifying] =
        useState(false);

    const [details, setDetails] =
        useState<any>(null);

    useEffect(() => {
        if (open && device?.id) {
            loadDevice();
        }
    }, [open, device]);

    async function loadDevice() {
        try {
            setLoading(true);

            const data = await getDevice(device.id);

            setDetails(data);
        } catch (error) {
            console.error(error);

            setDetails(device);
        } finally {
            setLoading(false);
        }
    }

    async function handleVerify() {
        if (!device?.id) return;

        try {
            setVerifying(true);

            await verifyDevice(device.id);

            toast.success(
                "Device verified successfully."
            );

            await loadDevice();

            onClose();
        } catch (error) {
            console.error(error);

            toast.error(
                "Unable to verify device."
            );
        } finally {
            setVerifying(false);
        }
    }

    if (!open || !device) return null;

    const info = details ?? device;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Device Details</h2>

                    <button
                        onClick={onClose}
                        className={styles.close}
                    >
                        ✕
                    </button>
                </div>

                {loading ? (
                    <div
                        style={{
                            padding: "40px",
                            textAlign: "center",
                        }}
                    >
                        Loading device...
                    </div>
                ) : (
                    <>
                        <div className={styles.infoGrid}>
                            <div>
                                <strong>Device</strong>

                                <p>
                                    {info.device ??
                                        info.device_name ??
                                        "-"}
                                </p>
                            </div>

                            <div>
                                <strong>Owner</strong>

                                <p>
                                    {info.owner ??
                                        info.owner_name ??
                                        "-"}
                                </p>
                            </div>

                            <div>
                                <strong>IMEI 1</strong>

                                <p>
                                    {info.imei ??
                                        "-"}
                                </p>
                            </div>

                            <div>
                                <strong>IMEI 2</strong>

                                <p>
                                    {info.imei2 ??
                                        "-"}
                                </p>
                            </div>

                            <div>
                                <strong>Status</strong>

                                <p>
                                    {info.status ??
                                        "-"}
                                </p>
                            </div>

                            <div>
                                <strong>
                                    Protection Plan
                                </strong>

                                <p>
                                    {info.plan ??
                                        info.plan_name ??
                                        "-"}
                                </p>
                            </div>

                            <div>
                                <strong>Color</strong>

                                <p>
                                    {info.color ??
                                        info.device_color ??
                                        "-"}
                                </p>
                            </div>

                            <div>
                                <strong>
                                    Registered
                                </strong>

                                <p>
                                    {info.created_at ??
                                        info.date ??
                                        "-"}
                                </p>
                            </div>
                        </div>

                        <div
                            className={
                                styles.sections
                            }
                        >
                            <div
                                className={
                                    styles.card
                                }
                            >
                                <h3>📷 Photos</h3>

                                <p>
                                    {info.photos
                                        ?.length ??
                                        0}{" "}
                                    uploaded
                                </p>
                            </div>

                            <div
                                className={
                                    styles.card
                                }
                            >
                                <h3>📝 Notes</h3>

                                <p>
                                    {info.notes
                                        ?.length ??
                                        0}{" "}
                                    notes
                                </p>
                            </div>

                            <div
                                className={
                                    styles.card
                                }
                            >
                                <h3>
                                    📄 Documents
                                </h3>

                                <p>
                                    {info.documents
                                        ?.length ??
                                        0}{" "}
                                    files
                                </p>
                            </div>

                            <div
                                className={
                                    styles.card
                                }
                            >
                                <h3>🕒 History</h3>

                                <p>
                                    {info.history
                                        ?.length ??
                                        0}{" "}
                                    activities
                                </p>
                            </div>

                            <div
                                className={
                                    styles.card
                                }
                            >
                                <h3>🚨 Cases</h3>

                                <p>
                                    {info.case_count ??
                                        0}{" "}
                                    linked
                                </p>
                            </div>

                            <div
                                className={
                                    styles.card
                                }
                            >
                                <h3>
                                    🛡 Insurance
                                </h3>

                                <p>
                                    {info.claims ??
                                        "No claims"}
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent:
                                    "flex-end",
                                gap: "12px",
                                marginTop: "24px",
                            }}
                        >
                            <button
                                className={
                                    styles.close
                                }
                                onClick={
                                    onClose
                                }
                            >
                                Close
                            </button>

                            <button
                                className={
                                    styles.verifyButton
                                }
                                onClick={
                                    handleVerify
                                }
                                disabled={
                                    verifying
                                }
                            >
                                {verifying
                                    ? "Verifying..."
                                    : "Verify Device"}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default DeviceDetailsModal;