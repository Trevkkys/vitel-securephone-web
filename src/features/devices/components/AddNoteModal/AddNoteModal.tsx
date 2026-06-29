import styles from "./AddNoteModal.module.css";

interface Props {
    open: boolean;
    onClose: () => void;
}

function AddNoteModal({
    open,
    onClose,
}: Props) {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Add Note</h2>

                <input
                    placeholder="Title"
                    className={styles.input}
                />

                <textarea
                    placeholder="Write your note..."
                    rows={5}
                    className={styles.textarea}
                />

                <div className={styles.footer}>
                    <button onClick={onClose}>
                        Cancel
                    </button>

                    <button className={styles.save}>
                        Save Note
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddNoteModal;