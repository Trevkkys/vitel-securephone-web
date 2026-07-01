import { useParams } from "react-router-dom";
import styles from "./CaseDetailsPage.module.css";

function CaseDetailsPage() {
    const { caseId } = useParams();
    return (
        <>
            <div className={styles.header}>
                <div>
                    <h1>Case {caseId}</h1>
                    <p>
                        Reported on 05 Jun 2026 • Investigating
                    </p>
                </div>

                <button className={styles.export}>
                    Export Case
                </button>
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
                            <strong>Case Number</strong>
                            <span>{caseId}</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Status</strong>
                            <span>Investigating</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Priority</strong>
                            <span>High</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Assigned Officer</strong>
                            <span>Inspector Ahmed</span>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h2>Device Information</h2>

                        <div className={styles.row}>
                            <strong>Device</strong>
                            <span>iPhone 15 Pro</span>
                        </div>

                        <div className={styles.row}>
                            <strong>IMEI</strong>
                            <span>352987654123456</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Color</strong>
                            <span>Black Titanium</span>
                        </div>

                        <div className={styles.row}>
                            <strong>Last Location</strong>
                            <span>Lagos</span>
                        </div>
                    </div>

                </div>

                <div className={styles.right}>

                    <div className={styles.card}>

                        <h2>Investigation Progress</h2>

                        <ul className={styles.timeline}>

                            <li>✅ Device Registered</li>

                            <li>✅ Theft Reported</li>

                            <li>✅ Police Assigned</li>

                            <li>✅ Tracking Started</li>

                            <li>🟡 Device Detected</li>

                            <li>⚪ Recovery Pending</li>

                            <li>⚪ Case Closed</li>

                        </ul>

                    </div>

                </div>

            </div>
        </>
    );
}

export default CaseDetailsPage;