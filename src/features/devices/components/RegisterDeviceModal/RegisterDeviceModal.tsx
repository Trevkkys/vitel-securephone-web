import styles from "./RegisterDeviceModal.module.css";

interface Props {
    open: boolean;
    onClose: () => void;
}

function RegisterDeviceModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Register New Device</h2>

                    <button
                        onClick={onClose}
                        className={styles.close}
                    >
                        ✕
                    </button>
                </div>

                <div className={styles.form}>
                    <input placeholder="Device Name (e.g iPhone 15 Pro)" />

                    <input placeholder="Brand" />

                    <input placeholder="IMEI 1" />

                    <input placeholder="IMEI 2 (Optional)" />

                    <select>
                        <option>Device Color</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Silver</option>
                        <option>Gold</option>
                        <option>Purple</option>
                    </select>

                    <input placeholder="Subscriber Name" />

                    <input placeholder="Subscriber Phone" />

                    <select>
                        <option>Protection Plan</option>
                        <option>Basic</option>
                        <option>Standard</option>
                        <option>Premium</option>
                    </select>

                    <textarea
                        placeholder="Additional Information"
                        rows={4}
                    />
                </div>

                <div className={styles.footer}>
                    <button
                        onClick={onClose}
                        className={styles.cancel}
                    >
                        Cancel
                    </button>

                    <button className={styles.save}>
                        Register Device
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterDeviceModal;