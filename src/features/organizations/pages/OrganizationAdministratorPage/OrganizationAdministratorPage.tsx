import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";
import styles from "./OrganizationAdministratorPage.module.css";
import { getOrganization } from "../../../../utils/getOrganization";

function OrganizationAdministratorPage() {
    const navigate = useNavigate();
    const { organizationId } = useParams();

const organization = getOrganization(organizationId!);

if (!organization) {
    return <h2>Organization not found.</h2>;
}

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                ← Back to Organizations
            </Button>

            <div className={styles.spacing} />

            <OrganizationHeader
    title={organization.name}
    subtitle={`${organization.type} Organization Portal`}
/>

            <div className={styles.panel}>

                <h2>Organization Administrator</h2>

                <div className={styles.infoRow}>
    <span>Full Name</span>
    <strong>Assigned Administrator</strong>
</div>

<div className={styles.infoRow}>
    <span>Email</span>
    <strong>administrator@vitel.com</strong>
</div>

<div className={styles.infoRow}>
    <span>Phone Number</span>
    <strong>+234 XXX XXX XXXX</strong>
</div>

<div className={styles.infoRow}>
    <span>Last Login</span>
    <strong>Recently</strong>
</div>

<div className={styles.infoRow}>
    <span>Status</span>
    <strong>{organization.status}</strong>
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