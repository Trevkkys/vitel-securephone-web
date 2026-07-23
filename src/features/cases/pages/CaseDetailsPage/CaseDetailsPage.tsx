import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./CaseDetailsPage.module.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
    getPoliceCase,
    acceptPoliceCase,
    rejectPoliceCase,
} from "../../../../services/police.service";

import type { PoliceCase } from "../../../../services/police.service";
import { updatePoliceCaseStatus } from "../../../../services/police.service";
import Button from "../../../../components/ui/Button/Button";

function CaseDetailsPage() {
    const { caseId } = useParams();

    const navigate = useNavigate();

    const [caseData, setCaseData] =
        useState<PoliceCase | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCase() {
            if (!caseId) return;

            try {
                const data = await getPoliceCase(
                    Number(caseId)
                );

                setCaseData(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        loadCase();
    }, [caseId]);

    if (loading) {
        return <p>Loading case...</p>;
    }

    if (!caseData) {
        return <p>Unable to load case.</p>;
    }

    async function handleAcceptCase() {
        if (!caseData) return;

        try {
            await acceptPoliceCase(caseData.id);

            toast.success("Case accepted.");

            const updated = await getPoliceCase(caseData.id);

            setCaseData(updated);

        } catch (error) {
            console.error(error);
            toast.error("Unable to accept case.");
        }
    }

    async function handleRejectCase() {
        if (!caseData) return;

        try {
            await rejectPoliceCase(caseData.id);

            toast.success("Case rejected.");

            navigate("/dashboard/police/cases");

        } catch (error) {
            console.error(error);
            toast.error("Unable to reject case.");
        }
    }


    async function handleStatusChange(
        status: string
    ) {
        if (!caseData) return;

        try {
            await updatePoliceCaseStatus(
                caseData.id,
                status
            );

            toast.success("Status updated.");

            const updated = await getPoliceCase(
                caseData.id
            );

            setCaseData(updated);

        } catch (error: any) {
            console.error(error.response?.data);
            toast.error("Unable to update status.");
        }
    }

    function getStatusClass(status: string) {
        switch (status.toLowerCase()) {

            case "recovered":
                return styles.success;

            case "recovery_in_progress":
                return styles.warning;

            case "accepted":
                return styles.info;

            case "rejected":
                return styles.danger;

            default:
                return styles.defaultStatus;
        }
    }

    return (
        <>
            <div className={styles.header}>
                <div>
                    <h1>
                        Case {caseData.report_number}
                    </h1>

                    <p>
                        Reported on{" "}
                        {new Date(
                            caseData.created_at
                        ).toLocaleDateString()} • {caseData.status}
                    </p>
                </div>

                <div className={styles.headerActions}>

                    {caseData.assignment_status !== "accepted" && (
                        <Button onClick={handleAcceptCase}>
                            Accept Case
                        </Button>
                    )}

                    {(caseData.assignment_status === "pending" ||
                        caseData.assignment_status === "assigned") && (
                            <Button onClick={handleRejectCase}>
                                Reject Case
                            </Button>
                        )}

                    <select
                        className={styles.statusSelect}
                        value={caseData.status}
                        disabled={caseData.status === "recovered"}
                        onChange={(e) => handleStatusChange(e.target.value)}
                    >
                        <option value="police_assigned">
                            Police Assigned
                        </option>

                        <option value="recovery_in_progress">
                            Recovery In Progress
                        </option>

                        <option value="recovered">
                            Recovered
                        </option>
                    </select>

                    <button className={styles.export}>
                        Export Case
                    </button>

                </div>
            </div>

            <div className={styles.tabs}>
                <button className={styles.active}>
                    Overview
                </button>

                <button>Timeline</button>

                <button>Device</button>

                <button>Owner</button>

                <button>Tracking</button>

                <button>Insurance</button>

                <button>Evidence</button>

                <button>Activity Log</button>
            </div>

            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.card}>
                        <h2>Case Information</h2>

                        <div className={styles.row}>
                            <strong>Report Number</strong>
                            <span>{caseData.report_number}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Status</strong>
                            <span
                                className={`${styles.statusBadge} ${getStatusClass(
                                    caseData.status
                                )}`}
                            >
                                {caseData.status.replaceAll("_", " ")}
                            </span>
                        </div>

                        <div className={styles.row}>
                            <strong>Police Station</strong>
                            <span>{caseData.police_station}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Incident Location</strong>
                            <span>{caseData.incident_location}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Police Verification</strong>
                            <span>
                                {caseData.is_police_report_verified
                                    ? "Verified"
                                    : "Pending"}
                            </span>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>Device Information</h2>

                        <div className={styles.row}>
                            <strong>Brand</strong>
                            <span>{caseData.device_brand}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Model</strong>
                            <span>{caseData.device_model}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>IMEI</strong>
                            <span>{caseData.device_imei}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>SIM Lock</strong>
                            <span>{caseData.sim_lock_status}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Blacklist</strong>
                            <span>{caseData.blacklist_status}</span>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>
                            Subscriber Information
                        </h2>

                        <div className={styles.row}>
                            <strong>Name</strong>

                            <span>
                                {
                                    caseData.subscriber_name
                                }
                            </span>
                        </div>

                        <div className={styles.row}>
                            <strong>Phone</strong>

                            <span>
                                {
                                    caseData.subscriber_phone
                                }
                            </span>
                        </div>

                        <div className={styles.row}>
                            <strong>
                                Contact Phone
                            </strong>

                            <span>
                                {
                                    caseData.contact_phone
                                }
                            </span>
                        </div>

                        <div className={styles.row}>
                            <strong>
                                Incident Location
                            </strong>

                            <span>
                                {
                                    caseData.incident_location
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.card}>
                        <h2>Tracking Information</h2>

                        <div className={styles.row}>
                            <strong>Assignment</strong>
                            <span>{caseData.assignment_status}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Last Seen</strong>
                            <span>{caseData.last_seen_location || "Unknown"}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Last Seen Time</strong>
                            <span>
                                {caseData.last_seen_at
                                    ? new Date(
                                        caseData.last_seen_at
                                    ).toLocaleString()
                                    : "-"}
                            </span>
                        </div>

                        <div className={styles.row}>
                            <strong>Reported</strong>
                            <span>
                                {new Date(
                                    caseData.created_at
                                ).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CaseDetailsPage;