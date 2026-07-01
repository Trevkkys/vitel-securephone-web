import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";
import styles from "./OrganizationModulesPage.module.css";

function OrganizationModulesPage() {
    const navigate = useNavigate();

    const modules = [
        {
            name: "Device Tracking",
            description: "Track stolen devices",
            enabled: true,
        },
        {
            name: "Geo Location",
            description: "Live GPS detection",
            enabled: true,
        },
        {
            name: "X-TRAC",
            description: "Network tracking",
            enabled: true,
        },
        {
            name: "IMEI Lookup",
            description: "Search IMEI database",
            enabled: true,
        },
        {
            name: "MSISDN Lookup",
            description: "Subscriber lookup",
            enabled: true,
        },
        {
            name: "Device Blacklisting",
            description: "Blacklist stolen devices",
            enabled: true,
        },
        {
            name: "Analytics",
            description: "Platform analytics",
            enabled: true,
        },
        {
            name: "Case Management",
            description: "Investigation workflow",
            enabled: true,
        },
        {
            name: "Insurance Claims",
            description: "Insurance claims module",
            enabled: false,
        },
        {
            name: "Customer Portal",
            description: "Subscriber self-service portal",
            enabled: false,
        },
    ];

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

                <h2>Enabled Platform Modules</h2>

                <table className={styles.table}>

                    <thead>
                        <tr>
                            <th>Module</th>
                            <th>Description</th>
                            <th>Enabled</th>
                        </tr>
                    </thead>

                    <tbody>

                        {modules.map((module) => (
                            <tr key={module.name}>

                                <td>{module.name}</td>

                                <td>{module.description}</td>

                                <td>
                                    {module.enabled ? "🟢 Enabled" : "⚪ Disabled"}
                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

                <div className={styles.actions}>

                    <div className={styles.saveButton}>
                        <Button>
                            Save Configuration
                        </Button>
                    </div>

                </div>

            </div>

        </>
    );
}

export default OrganizationModulesPage;