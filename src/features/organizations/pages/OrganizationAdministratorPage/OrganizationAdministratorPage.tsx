import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";
import styles from "./OrganizationAdministratorPage.module.css";

function OrganizationAdministratorPage() {
    const navigate = useNavigate();

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                ← Back to Organizations
            </Button>

            <div className={styles.spacing} />

            <OrganizationHeader
                title="Nigeria Police Force"
                subtitle="Police Organization Portal"
            />

            <div className={styles.panel}>

                <h2>Organization Administrator</h2>

                <div className={styles.infoRow}>
                    <span>Full Name</span>
                    <strong>John Ibrahim</strong>
                </div>

                <div className={styles.infoRow}>
                    <span>Email</span>
                    <strong>john.ibrahim@police.gov.ng</strong>
                </div>

                <div className={styles.infoRow}>
                    <span>Phone Number</span>
                    <strong>+234 801 234 5678</strong>
                </div>

                <div className={styles.infoRow}>
                    <span>Last Login</span>
                    <strong>Today • 09:24 AM</strong>
                </div>

                <div className={styles.infoRow}>
                    <span>Status</span>
                    <strong>Active</strong>
                </div>

            </div>

            <div className={styles.panel}>

                <h2>Administrator Actions</h2>

                <div className={styles.actions}>

                    <Button>
                        Change Administrator
                    </Button>

                    <Button>
                        Reset Password
                    </Button>

                    <Button>
                        Send Invitation
                    </Button>

                    <Button>
                        Suspend Administrator
                    </Button>

                </div>

            </div>

        </>
    );
}

export default OrganizationAdministratorPage;