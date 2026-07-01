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
        },
        "2": {
            name: "Leadway Insurance",
            subtitle: "Insurance Organization Portal",
        },
        "3": {
            name: "Vitel SecurePhone Operations",
            subtitle: "Internal Operations Portal",
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
                        <strong>police.vitelsecurephone.com</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Organization Type</span>
                        <strong>Police</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Status</span>
                        <strong>Active</strong>
                    </div>

                    <div className={styles.infoRow}>
                        <span>Administrator</span>
                        <strong>John Ibrahim</strong>
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

                    <li>Administrator updated Inspector role</li>

                    <li>New officer account created</li>

                    <li>Tracking module enabled</li>

                    <li>Case SP-1002 assigned</li>

                    <li>User password reset</li>

                </ul>

            </div>

        </>
    );
}

export default OrganizationOverviewPage;