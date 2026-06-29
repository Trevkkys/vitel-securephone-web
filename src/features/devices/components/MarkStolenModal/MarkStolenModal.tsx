import styles from "./MarkStolenModal.module.css";

interface Props {
    open: boolean;
    onClose: () => void;
}

function MarkStolenModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Report Device as Stolen</h2>

                <input
                    type="date"
                    className={styles.input}
                />

                <input
                    placeholder="Location of Theft"
                    className={styles.input}
                />

                <input
                    placeholder="Police Report Number"
                    className={styles.input}
                />

                <textarea
                    placeholder="Description"
                    rows={5}
                    className={styles.textarea}
                />

                <div className={styles.footer}>
                    <button onClick={onClose}>
                        Cancel
                    </button>

                    <button className={styles.save}>
                        Report Theft
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MarkStolenModal;