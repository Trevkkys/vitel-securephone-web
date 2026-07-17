import { useNavigate, useParams } from "react-router-dom";
import SummaryCard from "../../../../components/common/SummaryCard/SummaryCard";
import Button from "../../../../components/ui/Button/Button";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";
import styles from "./OrganizationOverviewPage.module.css";
import { getOrganization } from "../../../../utils/getOrganization";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getUser } from "../../../../services/user.service";
function OrganizationOverviewPage() {
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

    const organizationConfig = getOrganization(organization.role);

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

            <div className={styles.summary}>

                <SummaryCard
                    title="Users"
                    value="154"
                />

                <SummaryCard
                    title="Roles"
                    value="7"
                />

                <SummaryCard
                    title="Modules"
                    value="18"
                />

                <SummaryCard
                    title="Active Cases"
                    value="245"
                />

            </div>

            <div className={styles.grid}>

                <div className={styles.panel}>

                    <h2>Organization Information</h2>

                    <div className={styles.infoRow}>
                        <span>Portal</span>
                        <strong>{organization.role}</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Organization Type</span>
                        <strong>{organization.role}</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Status</span>
                        <strong className={styles.activeStatus}>
                            🟢 Active
                        </strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Administrator</span>
                        <strong>Assigned Administrator</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Email</span>
                        <strong>{organization.email}</strong>

                    </div>

                    <div className={styles.infoRow}>
                        <span>Created</span>
                        <strong>—</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Last Activity</span>
                        <strong>Just now</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>License</span>
                        <strong>Enterprise</strong>
                    </div>

                </div>

                <div className={styles.panel}>

                    <h2>Quick Actions</h2>

                    <div className={styles.actions}>

                        <Button
                            onClick={() =>
                                navigate(`/dashboard/organizations/${organization.id}/modules`)
                            }
                        >
                            ⚙ Configure Modules
                        </Button>

                        <Button
                            onClick={() =>
                                navigate(`/dashboard/organizations/${organization.id}/administrator`)
                            }
                        >
                            👤 Change Administrator
                        </Button>

                        <Button
                            onClick={() =>
                                alert("Suspend Organization")
                            }
                        >
                            ⏸ Suspend Organization
                        </Button>

                        <Button
                            onClick={() =>
                                alert("Export Organization")
                            }
                        >
                            📄 Export Organization
                        </Button>

                        <Button
                            onClick={() =>
                                alert("View Audit History")
                            }
                        >
                            📜 Audit History
                        </Button>
                    </div>

                </div>

            </div>

            <div className={styles.panel}>

                <h2>Enabled Modules</h2>

                <div className={styles.modules}>
                    {organizationConfig?.enabledModules.map((module) => (
                        <div key={module}>✅ {module}</div>
                    ))}
                </div>

            </div>

            <div className={styles.panel}>

                <h2>Recent Activity</h2>

                <ul className={styles.activity}>

                    <li>New Tracking Officer added</li>

                    <li>Administrator password changed</li>

                    <li>Geo-Fencing module enabled</li>

                    <li>Organization settings updated</li>

                    <li>Monthly report generated</li>

                    <li>Recovery completed successfully</li>

                    <li>User account suspended</li>

                </ul>

            </div>

        </>
    );
}

export default OrganizationOverviewPage;