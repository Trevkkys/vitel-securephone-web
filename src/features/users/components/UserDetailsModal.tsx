import styles from "./UserDetailsModal.module.css";
import Button from "../../../components/ui/Button/Button";

interface Props {
    open: boolean;
    user: any;
    onClose: () => void;
}

function UserDetailsModal({
    open,
    user,
    onClose,
}: Props) {

    if (!open || !user) return null;

    return (

        <div
            className={styles.overlay}
            onClick={onClose}
        >

            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.header}>

                    <h2>User Details</h2>

                    <Button
                        onClick={onClose}
                    >
                        ✕
                    </Button>

                </div>

                <div className={styles.body}>

                    <div className={styles.grid}>

                        <div>

                            <span>Full Name</span>

                            <strong>
                                {user.full_name}
                            </strong>

                        </div>

                        <div>

                            <span>Email</span>

                            <strong>
                                {user.email}
                            </strong>

                        </div>

                        <div>

                            <span>Role</span>

                            <strong>
                                {user.role}
                            </strong>

                        </div>

                        <div>

                            <span>Status</span>

                            <strong>

                                {user.is_active
                                    ? "Active"
                                    : "Disabled"}

                            </strong>

                        </div>

                        <div>

                            <span>Administrator</span>

                            <strong>

                                {user.is_admin
                                    ? "Yes"
                                    : "No"}

                            </strong>

                        </div>

                        <div>

                            <span>User ID</span>

                            <strong>
                                #{user.id}
                            </strong>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default UserDetailsModal;