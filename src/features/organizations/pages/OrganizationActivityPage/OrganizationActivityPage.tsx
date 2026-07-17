import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Button from "../../../../components/ui/Button/Button";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";

import { getUser } from "../../../../services/user.service";

import styles from "./OrganizationActivityPage.module.css";

function OrganizationActivityPage() {

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

    const activities = [

        {
            date: "Today",
            events: [
                "Administrator password reset",
                "Device Tracking module enabled",
                "X-TRAC access enabled",
                "Organization profile updated",
            ],
        },

        {
            date: "Yesterday",
            events: [
                "Administrator invitation sent",
                "Analytics module enabled",
                "Organization activated",
            ],
        },

    ];

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

            {activities.map((group) => (

                <div
                    key={group.date}
                    className={styles.panel}
                >

                    <h2>{group.date}</h2>

                    <ul className={styles.timeline}>

                        {group.events.map((event) => (

                            <li key={event}>
                                <span className={styles.dot}></span>

                                {event}
                            </li>

                        ))}

                    </ul>

                </div>

            ))}

        </>
    );
}

export default OrganizationActivityPage;