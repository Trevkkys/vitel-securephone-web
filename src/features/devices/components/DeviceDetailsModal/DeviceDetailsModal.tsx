import styles from "./DeviceDetailsModal.module.css";

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
    if (!open || !device) return null;

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

                <div className={styles.infoGrid}>
                    <div>
                        <strong>Device</strong>
                        <p>{device.device}</p>
                    </div>

                    <div>
                        <strong>Owner</strong>
                        <p>{device.owner}</p>
                    </div>

                    <div>
                        <strong>IMEI 1</strong>
                        <p>{device.imei}</p>
                    </div>

                    <div>
                        <strong>IMEI 2</strong>
                        <p>-</p>
                    </div>

                    <div>
                        <strong>Status</strong>
                        <p>{device.status}</p>
                    </div>

                    <div>
                        <strong>Protection Plan</strong>
                        <p>{device.plan}</p>
                    </div>
                </div>

                <div className={styles.sections}>
                    <div className={styles.card}>
                        <h3>📷 Photos</h3>
                        <p>2 uploaded</p>
                    </div>

                    <div className={styles.card}>
                        <h3>📝 Notes</h3>
                        <p>3 notes</p>
                    </div>

                    <div className={styles.card}>
                        <h3>📄 Documents</h3>
                        <p>1 document</p>
                    </div>

                    <div className={styles.card}>
                        <h3>🕒 History</h3>
                        <p>5 activities</p>
                    </div>

                    <div className={styles.card}>
                        <h3>🚨 Cases</h3>
                        <p>1 linked case</p>
                    </div>

                    <div className={styles.card}>
                        <h3>🛡 Insurance</h3>
                        <p>No claims</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeviceDetailsModal;