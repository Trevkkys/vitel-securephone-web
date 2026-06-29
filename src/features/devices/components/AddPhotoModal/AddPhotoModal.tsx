import styles from "./AddPhotoModal.module.css";

interface Props {
    open: boolean;
    onClose: () => void;
}

function AddPhotoModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Upload Device Photo</h2>

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
                        Upload Photo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddPhotoModal;