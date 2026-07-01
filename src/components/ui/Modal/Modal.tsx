import styles from "./Modal.module.css";

interface ModalProps {
    open: boolean;
    title: string;
    children: React.ReactNode;
    onClose: () => void;
}

function Modal({
    open,
    title,
    children,
    onClose,
}: ModalProps) {
    if (!open) return null;

    return (
        <div
            className={styles.overlay}
            onClick={onClose}
        >
            <div
                className={styles.modal}
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                <div className={styles.header}>
                    <h2>{title}</h2>

                    <button
                        className={styles.close}
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className={styles.body}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export function ModalFooter({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.footer}>
            {children}
        </div>
    );
}

export default Modal;