import styles from "./HistoryModal.module.css";

interface Props {
    open: boolean;
    onClose: () => void;
}

function HistoryModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Device History</h2>

                <div className={styles.timeline}>
                    <div>
                        ● Device Registered
                        <p>01 Jun 2026</p>
                    </div>

                    <div>
                        ● Photo Uploaded
                        <p>03 Jun 2026</p>
                    </div>

                    <div>
                        ● Document Added
                        <p>05 Jun 2026</p>
                    </div>

                    <div>
                        ● Marked as Stolen
                        <p>09 Jun 2026</p>
                    </div>
                </div>

                <button
                    onClick={onClose}
                    className={styles.close}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default HistoryModal;