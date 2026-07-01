import styles from "./SuperAdminCases.module.css";
import { useNavigate } from "react-router-dom";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";
import { useState } from "react";
import Modal, { ModalFooter, } from "../../../components/ui/Modal/Modal";
import Button from "../../../components/ui/Button/Button";

function CasesPage() {
    const navigate = useNavigate();

    const [assignOfficerOpen, setAssignOfficerOpen] =
        useState(false);

    const [timelineOpen, setTimelineOpen] =
        useState(false);

    const [trackingOpen, setTrackingOpen] =
        useState(false);

    const [evidenceOpen, setEvidenceOpen] =
        useState(false);

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
                    placeholder="Search by Case Number, IMEI or Subscriber..."
                    className={styles.search}
                />

                <select className={styles.select}>
                    <option>All Status</option>
                    <option>Open</option>
                    <option>Investigating</option>
                    <option>Recovered</option>
                    <option>Closed</option>
                </select>

                <select className={styles.select}>
                    <option>All Priority</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </div>

            <div className={styles.summary}>

                <div className={styles.summaryCard}>
                    <h3>Open</h3>
                    <span>245</span>
                </div>

                <div className={styles.summaryCard}>
                    <h3>Investigating</h3>
                    <span>128</span>
                </div>

                <div className={styles.summaryCard}>
                    <h3>Recovered</h3>
                    <span>58</span>
                </div>

                <div className={styles.summaryCard}>
                    <h3>Closed</h3>
                    <span>763</span>
                </div>

            </div>

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>
                            <th>Case No</th>
                            <th>Subscriber</th>
                            <th>Device</th>
                            <th>Assigned Officer</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>SP-1001</td>
                            <td>John Doe</td>
                            <td>iPhone 15 Pro</td>
                            <td>Inspector Ahmed</td>
                            <td>High</td>
                            <td>Investigating</td>
                            <td className={styles.actions}>
                                <ActionMenu
                                    items={[
                                        {
                                            label: "Assign Officer",
                                            onClick: () => setAssignOfficerOpen(true)
                                        },
                                        {
                                            label: "View Timeline",
                                            onClick: () => setTimelineOpen(true)
                                        },
                                        {
                                            label: "Tracking History",
                                            onClick: () => setTrackingOpen(true)
                                        },
                                        {
                                            label: "Evidence",
                                            onClick: () => setEvidenceOpen(true)
                                        },
                                        {
                                            label: "Export Case",
                                            onClick: () =>
                                                alert("Export Case"),
                                        },
                                        {
                                            label: "Close Case",
                                            onClick: () =>
                                                alert("Close Case"),
                                        },
                                    ]}
                                />

                                <button
                                    className={styles.viewButton}
                                    onClick={() =>
                                        navigate("/dashboard/cases/SP-1001")
                                    }
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>SP-1002</td>
                            <td>Mary Johnson</td>
                            <td>Samsung S24 Ultra</td>
                            <td>Officer Bello</td>
                            <td>Medium</td>
                            <td>Open</td>
                            <td className={styles.actions}>
                                <ActionMenu
                                    items={[
                                        {
                                            label: "Assign Officer",
                                            onClick: () => setAssignOfficerOpen(true)
                                        },
                                        {
                                            label: "View Timeline",
                                            onClick: () => setTimelineOpen(true)
                                        },
                                        {
                                            label: "Tracking History",
                                            onClick: () => setTrackingOpen(true)
                                        },
                                        {
                                            label: "Evidence",
                                            onClick: () => setEvidenceOpen(true)
                                        },
                                        {
                                            label: "Export Case",
                                            onClick: () =>
                                                alert("Export Case"),
                                        },
                                        {
                                            label: "Close Case",
                                            onClick: () =>
                                                alert("Close Case"),
                                        },
                                    ]}
                                />

                                <button
                                    className={styles.viewButton}
                                    onClick={() =>
                                        navigate("/dashboard/cases/SP-1002")
                                    }
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>SP-1003</td>
                            <td>David Smith</td>
                            <td>Google Pixel 9</td>
                            <td>Inspector Musa</td>
                            <td>Low</td>
                            <td>Recovered</td>
                            <td className={styles.actions}>
                                <ActionMenu
                                    items={[
                                        {
                                            label: "Assign Officer",
                                            onClick: () => setAssignOfficerOpen(true)
                                        },
                                        {
                                            label: "View Timeline",
                                            onClick: () => setTimelineOpen(true)
                                        },
                                        {
                                            label: "Tracking History",
                                            onClick: () => setTrackingOpen(true)
                                        },
                                        {
                                            label: "Evidence",
                                            onClick: () => setEvidenceOpen(true)
                                        },
                                        {
                                            label: "Export Case",
                                            onClick: () =>
                                                alert("Export Case"),
                                        },
                                        {
                                            label: "Close Case",
                                            onClick: () =>
                                                alert("Close Case"),
                                        },
                                    ]}
                                />

                                <button
                                    className={styles.viewButton}
                                    onClick={() =>
                                        navigate("/dashboard/cases/SP-1003")
                                    }
                                >
                                    View Details
                                </button>
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>

            <Modal
                open={assignOfficerOpen}
                title="Assign Officer"
                onClose={() =>
                    setAssignOfficerOpen(false)
                }
            >
                <p>
                    Select an officer that will
                    handle this investigation.
                </p>

                <select
                    style={{
                        width: "100%",
                        padding: "12px",
                        marginTop: "20px",
                    }}
                >
                    <option>
                        Inspector Ahmed
                    </option>

                    <option>
                        Officer Bello
                    </option>

                    <option>
                        Inspector Musa
                    </option>
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
                open={timelineOpen}
                title="Case Timeline"
                onClose={() =>
                    setTimelineOpen(false)
                }
            >
                <ul
                    style={{
                        lineHeight: "2",
                        paddingLeft: "20px",
                    }}
                >
                    <li>
                        05 Jun 2026 — Theft reported
                    </li>

                    <li>
                        05 Jun 2026 — Case assigned
                    </li>

                    <li>
                        06 Jun 2026 — Device detected in Lagos
                    </li>

                    <li>
                        07 Jun 2026 — Investigation ongoing
                    </li>
                </ul>

                <ModalFooter>

                    <Button
                        variant="secondary"
                        onClick={() =>
                            setTimelineOpen(false)
                        }
                    >
                        Close
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
                    Upload or record evidence related to
                    this investigation.
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

                <table className={styles.trackingTable}>

                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Network</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>05 Jun 2026</td>
                            <td>Lagos</td>
                            <td>MTN</td>
                            <td>Detected</td>
                        </tr>

                        <tr>
                            <td>06 Jun 2026</td>
                            <td>Ikeja</td>
                            <td>Airtel</td>
                            <td>Detected</td>
                        </tr>

                        <tr>
                            <td>07 Jun 2026</td>
                            <td>Yaba</td>
                            <td>Glo</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>08 Jun 2026</td>
                            <td>Victoria Island</td>
                            <td>9mobile</td>
                            <td>Last Seen</td>
                        </tr>

                    </tbody>

                </table>

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