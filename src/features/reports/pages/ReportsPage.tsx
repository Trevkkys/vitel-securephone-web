import { useState } from "react";

import SubscriberReportsPage from "./SubscriberReportsPage";
import EmergencyReportsPage from "./EmergencyReportsPage";

import styles from "./ReportsPage.module.css";

function ReportsPage() {
    const [tab, setTab] = useState<
        "subscriber" | "emergency"
    >("subscriber");

    return (
        <div>

            <div className={styles.tabs}>

                <button
                    className={
                        tab === "subscriber"
                            ? styles.active
                            : ""
                    }
                    onClick={() =>
                        setTab("subscriber")
                    }
                >
                    Subscriber Reports
                </button>

                <button
                    className={
                        tab === "emergency"
                            ? styles.active
                            : ""
                    }
                    onClick={() =>
                        setTab("emergency")
                    }
                >
                    Emergency Report Requests
                </button>

            </div>

            {tab === "subscriber" ? (
                <SubscriberReportsPage />
            ) : (
                <EmergencyReportsPage />
            )}

        </div>
    );
}

export default ReportsPage;