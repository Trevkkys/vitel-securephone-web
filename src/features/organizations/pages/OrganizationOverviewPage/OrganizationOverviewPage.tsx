import { useNavigate } from "react-router-dom";
import SummaryCard from "../../../../components/common/SummaryCard/SummaryCard";
import Button from "../../../../components/ui/Button/Button";
import styles from "./OrganizationOverviewPage.module.css";
import { useParams } from "react-router-dom";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";

function OrganizationOverviewPage() {
    const navigate = useNavigate();
    const { organizationId } = useParams();

    const organizationData = {
        "1": {
            name: "Nigeria Police Force",
            subtitle: "Police Organization Portal",
            portal: "police.vitelsecurephone.com",
            type: "Police",
            admin: "John Ibrahim",
            email: "admin@police.gov.ng",
            status: "Active",
            created: "12 Jan 2026",
            lastActivity: "15 Minutes Ago",
        },

        "2": {
            name: "Leadway Insurance",
            subtitle: "Insurance Organization Portal",
            portal: "insurance.vitelsecurephone.com",
            type: "Insurance",
            admin: "Linda Okoye",
            email: "admin@leadway.ng",
            status: "Active",
            created: "20 Jan 2026",
            lastActivity: "8 Minutes Ago",
        },

        "3": {
            name: "Vitel SecurePhone Operations",
            subtitle: "Internal Operations Portal",
            portal: "vitel.vitelsecurephone.com",
            type: "Internal",
            admin: "Martin Mek",
            email: "admin@vitel.com",
            status: "Active",
            created: "01 Jan 2026",
            lastActivity: "2 Minutes Ago",
        },
    };

    const organization =
        organizationData[
        organizationId as keyof typeof organizationData
        ];

    return (
        <>
            <Button onClick={() => navigate(-1)}>
                ← Back to Organizations
            </Button>

            <div className={styles.spacing} />

            <OrganizationHeader
                title={organization.name}
                subtitle={organization.subtitle}
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
                        <strong>{organization.portal}</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Organization Type</span>
                        <strong>{organization.type}</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Status</span>
                        <strong className={styles.activeStatus}>
                            🟢 {organization.status}
                        </strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Administrator</span>
                        <strong>{organization.admin}</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Email</span>
                        <strong>{organization.email}</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Created</span>
                        <strong>{organization.created}</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Last Activity</span>
                        <strong>{organization.lastActivity}</strong>
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
                                navigate("/dashboard/organizations/1/modules")
                            }
                        >
                            ⚙ Configure Modules
                        </Button>

                        <Button
                            onClick={() =>
                                navigate("/dashboard/organizations/1/administrator")
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

                    <div>✅ Cases</div>
                    <div>✅ Device Tracking</div>
                    <div>✅ Geo Tracking</div>
                    <div>✅ X-TRAC</div>
                    <div>✅ IMEI Lookup</div>
                    <div>✅ MSISDN Lookup</div>
                    <div>✅ Analytics</div>
                    <div>❌ Insurance</div>

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