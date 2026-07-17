import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../../../components/ui/Button/Button";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";

import { getUser } from "../../../../services/user.service";

import styles from "./OrganizationAdministratorPage.module.css";

function OrganizationAdministratorPage() {
    const navigate = useNavigate();
    const { organizationId } = useParams();

    const [organization, setOrganization] = useState<any>(null);

    useEffect(() => {
        async function loadOrganization() {
            try {
                const data = await getUser(Number(organizationId));
                setOrganization(data);
            } catch (error) {
                console.error(error);
                toast.error("Unable to load organization.");
            }
        }

        loadOrganization();
    }, [organizationId]);

    if (!organization) {
        return <h2>Loading organization...</h2>;
    }

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                ← Back to Organizations
            </Button>

            <div className={styles.spacing} />

            <OrganizationHeader
                title={organization.full_name ?? organization.email}
                subtitle={`${organization.role.toUpperCase()} Organization Portal`}
            />

            <div className={styles.panel}>

                <h2>Organization Administrator</h2>

                <div className={styles.infoRow}>
                    <span>Full Name</span>
                    <strong>Assigned Administrator</strong>
                </div>

                <div className={styles.infoRow}>
                    <span>Email</span>
                    <strong>{organization.email}</strong>
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
                    <strong>
                        {organization.is_admin ? "Administrator" : "User"}
                    </strong>
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