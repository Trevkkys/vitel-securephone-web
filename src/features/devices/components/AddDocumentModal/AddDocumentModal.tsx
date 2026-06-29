import styles from "./AddDocumentModal.module.css";

interface Props {
    open: boolean;
    onClose: () => void;
}

function AddDocumentModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Upload Document</h2>

                <select className={styles.input}>
                    <option>Document Type</option>
                    <option>Purchase Receipt</option>
                    <option>Police Report</option>
                    <option>Insurance Form</option>
                    <option>Ownership Proof</option>
                </select>

                <input
                    type="file"
                    className={styles.input}
                />

                <textarea
                    placeholder="Description"
                    rows={4}
                    className={styles.textarea}
                />

                <div className={styles.footer}>
                    <button onClick={onClose}>
                        Cancel
                    </button>

                    <button className={styles.save}>
                        Save Document
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddDocumentModal;