import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Toggle from "../../../../components/ui/Toggle/Toggle";
import Button from "../../../../components/ui/Button/Button";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";

import { getOrganization } from "../../../../utils/getOrganization";
import { getUser } from "../../../../services/user.service";

import styles from "./OrganizationModulesPage.module.css";

function OrganizationModulesPage() {
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

    const organizationConfig = getOrganization(
        organization?.role ?? ""
    );

    const allModules = [
        {
            name: "Dashboard",
            description: "Organization dashboard",
        },
        {
            name: "Case Management",
            description: "Investigation workflow",
        },
        {
            name: "Devices",
            description: "Device management",
        },
        {
            name: "Organizations",
            description: "Organization management",
        },
        {
            name: "Device Tracking",
            description: "Track stolen devices",
        },
        {
            name: "Geo Location",
            description: "Live GPS detection",
        },
        {
            name: "X-TRAC",
            description: "Network tracking",
        },
        {
            name: "MSISDN Lookup",
            description: "Subscriber lookup",
        },
        {
            name: "IMEI Lookup",
            description: "Search IMEI database",
        },
        {
            name: "Device Blacklisting",
            description: "Blacklist stolen devices",
        },
        {
            name: "Recoveries",
            description: "Recovery operations",
        },
        {
            name: "Claims",
            description: "Insurance claims",
        },
        {
            name: "Customers",
            description: "Customer management",
        },
        {
            name: "Monitoring",
            description: "Platform monitoring",
        },
        {
            name: "Support",
            description: "Support centre",
        },
        {
            name: "Users",
            description: "User management",
        },
        {
            name: "Roles & Permissions",
            description: "Access control",
        },
        {
            name: "Analytics",
            description: "Analytics dashboard",
        },
        {
            name: "Reports",
            description: "Generate reports",
        },
        {
            name: "Audit Logs",
            description: "System audit trail",
        },
        {
            name: "Settings",
            description: "Organization settings",
        },
    ];

    const [modules, setModules] = useState<any[]>([]);

    useEffect(() => {
        if (!organizationConfig) return;

        setModules(
            allModules.map((module) => ({
                ...module,
                enabled: organizationConfig.enabledModules.includes(module.name),
            }))
        );
    }, [organizationConfig]);

    const toggleModule = (index: number) => {
        setModules((prev) =>
            prev.map((module, i) =>
                i === index
                    ? {
                        ...module,
                        enabled: !module.enabled,
                    }
                    : module
            )
        );
    };

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
                <h2>Platform Modules</h2>

                <div className={styles.moduleList}>
                    {modules.map((module, index) => (
                        <div
                            key={module.name}
                            className={styles.moduleCard}
                        >
                            <div>
                                <h3>{module.name}</h3>

                                <p>{module.description}</p>
                            </div>

                            <Toggle
                                checked={module.enabled}
                                onChange={() => toggleModule(index)}
                            />
                        </div>
                    ))}
                </div>

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