import styles from "./SuperAdminCases.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";
import Modal, {
    ModalFooter,
} from "../../../components/ui/Modal/Modal";
import Button from "../../../components/ui/Button/Button";

import {
    getCases,
    getCaseTimeline,
} from "../../../services/case.service";

interface CaseItem {
    id: number;
    case_number: string;
    device_id: number;
    status: string;
    incident_location: string;
    police_station: string;
    is_police_report_verified: boolean;
    assigned_officer_id: number;
    last_seen_location: string;
    last_seen_at: string;
    created_at: string;
}

interface TimelineItem {
    title: string;
    description: string;
    is_completed: boolean;
    created_at: string;
}

function CasesPage() {
    const navigate = useNavigate();

    const [cases, setCases] = useState<CaseItem[]>([]);
    const [loading, setLoading] = useState(true);

    const [selectedCase, setSelectedCase] =
        useState<CaseItem | null>(null);

    const [timeline, setTimeline] =
        useState<TimelineItem[]>([]);

    const [assignOfficerOpen, setAssignOfficerOpen] =
        useState(false);

    const [timelineOpen, setTimelineOpen] =
        useState(false);

    const [trackingOpen, setTrackingOpen] =
        useState(false);

    const [evidenceOpen, setEvidenceOpen] =
        useState(false);

    useEffect(() => {
        loadCases();
    }, []);

    async function loadCases() {
        try {
            setLoading(true);

            const data = await getCases();

            setCases(data);
        } catch (error) {
            console.error(error);
            toast.error("Unable to load cases.");
        } finally {
            setLoading(false);
        }
    }

    async function openTimeline(item: CaseItem) {
        try {
            setSelectedCase(item);

            const data = await getCaseTimeline(item.id);

            setTimeline(data);

            setTimelineOpen(true);
        } catch (error) {
            console.error(error);

            toast.error("Unable to load timeline.");
        }
    }

    return (
        <>
            <div className={styles.header}>
                <div>
                    <h1>Cases Management</h1>

                    <p>
                        Monitor and investigate all reported device theft cases.
                    </p>
                </div>

                <button className={styles.exportButton}>
                    Export Cases
                </button>
            </div>

            <div className={styles.filters}>
                <input
                    placeholder="Search by Case Number..."
                    className={styles.search}
                />

                <select className={styles.select}>
                    <option>All Status</option>
                    <option>Open</option>
                    <option>Investigating</option>
                    <option>Recovered</option>
                    <option>Closed</option>
                </select>
            </div>

            <div className={styles.summary}>
                <div className={styles.summaryCard}>
                    <h3>Total</h3>
                    <span>{cases.length}</span>
                </div>

                <div className={styles.summaryCard}>
                    <h3>Verified</h3>
                    <span>
                        {
                            cases.filter(
                                (c) =>
                                    c.is_police_report_verified
                            ).length
                        }
                    </span>
                </div>

                <div className={styles.summaryCard}>
                    <h3>Recovered</h3>
                    <span>
                        {
                            cases.filter(
                                (c) =>
                                    c.status === "Recovered"
                            ).length
                        }
                    </span>
                </div>

                <div className={styles.summaryCard}>
                    <h3>Open</h3>
                    <span>
                        {
                            cases.filter(
                                (c) =>
                                    c.status === "Open"
                            ).length
                        }
                    </span>
                </div>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Case Number</th>
                            <th>Device ID</th>
                            <th>Status</th>
                            <th>Incident Location</th>
                            <th>Police Station</th>
                            <th>Verified</th>
                            <th>Last Seen</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td
                                    colSpan={9}
                                    style={{
                                        textAlign:
                                            "center",
                                        padding:
                                            "30px",
                                    }}
                                >
                                    Loading...
                                </td>
                            </tr>
                        ) : cases.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={9}
                                    style={{
                                        textAlign:
                                            "center",
                                        padding:
                                            "30px",
                                    }}
                                >
                                    No cases found.
                                </td>
                            </tr>
                        ) : (
                            cases.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        {item.case_number}
                                    </td>

                                    <td>
                                        {item.device_id}
                                    </td>

                                    <td>
                                        {item.status}
                                    </td>

                                    <td>
                                        {
                                            item.incident_location
                                        }
                                    </td>

                                    <td>
                                        {
                                            item.police_station
                                        }
                                    </td>

                                    <td>
                                        {item.is_police_report_verified
                                            ? "Yes"
                                            : "No"}
                                    </td>

                                    <td>
                                        {
                                            item.last_seen_location
                                        }
                                    </td>

                                    <td>
                                        {new Date(
                                            item.created_at
                                        ).toLocaleDateString()}
                                    </td>

                                    <td className={styles.actions}>
                                        <ActionMenu
                                            items={[
                                                {
                                                    label: "Assign Officer",
                                                    onClick:
                                                        () => {
                                                            setSelectedCase(
                                                                item
                                                            );
                                                            setAssignOfficerOpen(
                                                                true
                                                            );
                                                        },
                                                },
                                                {
                                                    label: "View Timeline",
                                                    onClick:
                                                        () =>
                                                            openTimeline(
                                                                item
                                                            ),
                                                },
                                                {
                                                    label: "Tracking History",
                                                    onClick:
                                                        () => {
                                                            setSelectedCase(
                                                                item
                                                            );
                                                            setTrackingOpen(
                                                                true
                                                            );
                                                        },
                                                },
                                                {
                                                    label: "Evidence",
                                                    onClick:
                                                        () => {
                                                            setSelectedCase(
                                                                item
                                                            );
                                                            setEvidenceOpen(
                                                                true
                                                            );
                                                        },
                                                },
                                            ]}
                                        />

                                        <button
                                            className={
                                                styles.viewButton
                                            }
                                            onClick={() =>
                                                navigate(
                                                    `/dashboard/cases/${item.id}`
                                                )
                                            }
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <Modal
                open={timelineOpen}
                title={
                    selectedCase
                        ? `Timeline - ${selectedCase.case_number}`
                        : "Case Timeline"
                }
                onClose={() => {
                    setTimelineOpen(false);
                    setTimeline([]);
                }}
            >
                {timeline.length === 0 ? (
                    <p>No timeline available.</p>
                ) : (
                    <ul
                        style={{
                            lineHeight: "2",
                            paddingLeft: "20px",
                        }}
                    >
                        {timeline.map((event, index) => (
                            <li key={index}>
                                <strong>
                                    {new Date(
                                        event.created_at
                                    ).toLocaleString()}
                                </strong>

                                <br />

                                {event.title}

                                <br />

                                <span
                                    style={{
                                        color: "#777",
                                    }}
                                >
                                    {event.description}
                                </span>

                                <br />

                                <span
                                    style={{
                                        color: event.is_completed
                                            ? "green"
                                            : "orange",
                                    }}
                                >
                                    {event.is_completed
                                        ? "Completed"
                                        : "Pending"}
                                </span>
                            </li>
                        ))}
                    </ul>
                )}

                <ModalFooter>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setTimelineOpen(false);
                            setTimeline([]);
                        }}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal
                open={assignOfficerOpen}
                title="Assign Officer"
                onClose={() => setAssignOfficerOpen(false)}
            >
                <p>
                    Select an officer that will handle this investigation.
                </p>

                <select
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "20px",
                    }}
                >
                    <option>Inspector Ahmed</option>
                    <option>Officer Bello</option>
                    <option>Inspector Musa</option>
                </select>

                <ModalFooter>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            setAssignOfficerOpen(false)
                        }
                    >
                        Cancel
                    </Button>

                    <Button>
                        Assign
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal
                open={evidenceOpen}
                title="Add Evidence"
                onClose={() =>
                    setEvidenceOpen(false)
                }
            >
                <p>
                    Upload or record evidence related to this
                    investigation.
                </p>

                <input
                    placeholder="Evidence title"
                    style={{
                        width: "100%",
                        marginTop: "16px",
                        padding: "12px",
                    }}
                />

                <textarea
                    placeholder="Evidence description..."
                    style={{
                        width: "100%",
                        marginTop: "16px",
                        padding: "12px",
                        minHeight: "120px",
                        resize: "vertical",
                    }}
                />

                <ModalFooter>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            setEvidenceOpen(false)
                        }
                    >
                        Cancel
                    </Button>

                    <Button>
                        Save Evidence
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal
                open={trackingOpen}
                title="Tracking History"
                onClose={() =>
                    setTrackingOpen(false)
                }
            >
                {selectedCase ? (
                    <div>
                        <p>
                            <strong>Last Seen:</strong>{" "}
                            {selectedCase.last_seen_location}
                        </p>

                        <p>
                            <strong>Recorded At:</strong>{" "}
                            {new Date(
                                selectedCase.last_seen_at
                            ).toLocaleString()}
                        </p>
                    </div>
                ) : (
                    <p>No tracking information.</p>
                )}

                <ModalFooter>
                    <Button
                        variant="secondary"
                        onClick={() =>
                            setTrackingOpen(false)
                        }
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default CasesPage;
