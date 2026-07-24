import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/common/PageHeader/PageHeader";
import Button from "../../../components/ui/Button/Button";

import {
    getEmergencyReportRequests,
    getEmergencyReportRequest,
    approveEmergencyReport,
    rejectEmergencyReport,
    type EmergencyReportRequest,
    type EmergencyReportRequestDetail,
} from "../../../services/report.service";

import styles from "./EmergencyReportsPage.module.css";

function EmergencyReportsPage() {
    const [requests, setRequests] = useState<EmergencyReportRequest[]>([]);
    const [loading, setLoading] = useState(true);

    const [selected, setSelected] =
        useState<EmergencyReportRequestDetail | null>(null);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadRequests();
    }, []);

    async function loadRequests() {
        try {
            setLoading(true);

            const response = await getEmergencyReportRequests();

            alert(JSON.stringify(response[0], null, 2));

            setRequests(response);
        } catch (error) {
            console.error(error);
            toast.error("Unable to load emergency reports.");
        } finally {
            setLoading(false);
        }
    }

    async function viewDetails(id: number) {
        try {
            const detail =
                await getEmergencyReportRequest(id);

            setSelected(detail);

            setShowModal(true);
        } catch (error) {
            console.error(error);
            toast.error("Unable to load request details.");
        }
    }

    async function approve(id: number) {
        try {
            await approveEmergencyReport(id);

            toast.success("Emergency report approved.");

            loadRequests();

            setShowModal(false);
        } catch (error) {
            console.error(error);
            toast.error("Unable to approve request.");
        }
    }

    async function reject(id: number) {
        try {
            await rejectEmergencyReport(id);

            toast.success("Emergency report rejected.");

            loadRequests();

            setShowModal(false);
        } catch (error) {
            console.error(error);
            toast.error("Unable to reject request.");
        }
    }

    return (
        <>
            <PageHeader
                title="Emergency Report Requests"
                description="Reports submitted by emergency contacts."
            />

            <div className={styles.panel}>
                {loading ? (
                    <p>Loading...</p>
                ) : requests.length === 0 ? (
                    <p>No emergency requests found.</p>
                ) : (
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Emergency Contact</th>
                                <th>Phone</th>
                                <th>Relationship</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {requests.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.emergency_contact_name}</td>

                                    <td>{item.emergency_contact_phone}</td>

                                    <td>{item.relationship}</td>

                                    <td>{item.status}</td>

                                    <td>
                                        {new Date(
                                            item.created_at
                                        ).toLocaleString()}
                                    </td>

                                    <td>
                                        <Button
                                            onClick={() =>
                                                viewDetails(item.id)
                                            }
                                        >
                                            View Details
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {showModal && selected && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2>Emergency Report</h2>

                        <div className={styles.details}>
                            <p>
                                <strong>Subscriber:</strong>{" "}
                                {selected.subscriber_name}
                            </p>

                            <p>
                                <strong>Subscriber Phone:</strong>{" "}
                                {selected.subscriber_phone}
                            </p>

                            <p>
                                <strong>Emergency Contact:</strong>{" "}
                                {selected.emergency_contact_name}
                            </p>

                            <p>
                                <strong>Contact Number:</strong>{" "}
                                {selected.emergency_contact_phone}
                            </p>

                            <p>
                                <strong>Relationship:</strong>{" "}
                                {selected.relationship}
                            </p>

                            <p>
                                <strong>Reason:</strong>{" "}
                                {selected.reason}
                            </p>

                            <p>
                                <strong>Status:</strong>{" "}
                                {selected.status}
                            </p>
                        </div>

                        <div className={styles.actions}>
                            <Button
                                onClick={() =>
                                    approve(selected.id)
                                }
                            >
                                Approve
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={() =>
                                    reject(selected.id)
                                }
                            >
                                Reject
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={() =>
                                    setShowModal(false)
                                }
                            >
                                Close
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default EmergencyReportsPage;