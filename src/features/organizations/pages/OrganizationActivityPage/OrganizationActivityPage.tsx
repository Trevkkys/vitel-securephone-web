import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button/Button";
import OrganizationHeader from "../../../../components/common/OrganizationHeader/OrganizationHeader";
import styles from "./OrganizationActivityPage.module.css";

function OrganizationActivityPage() {

    const navigate = useNavigate();

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
                title="Nigeria Police Force"
                subtitle="Police Organization Portal"
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