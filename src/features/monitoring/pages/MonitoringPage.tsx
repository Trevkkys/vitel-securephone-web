import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import styles from "./MonitoringPage.module.css";

function MonitoringPage() {
    return (
        <>
            <PageHeader
                title="Platform Monitoring"
                description="Monitor platform health, device connectivity and live services."
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Online Devices"
                    value="12,458"
                />

                <SummaryCard
                    title="Tracking Sessions"
                    value="428"
                />

                <SummaryCard
                    title="API Uptime"
                    value="99.98%"
                />

                <SummaryCard
                    title="Server Load"
                    value="42%"
                />

            </div>

            <div className={styles.grid}>

                <div className={styles.panel}>

                    <h2>System Health</h2>

                    <ul>
                        <li>🟢 Authentication Service</li>
                        <li>🟢 Tracking Engine</li>
                        <li>🟢 Notification Service</li>
                        <li>🟢 Device Registry</li>
                        <li>🟢 Database Cluster</li>
                    </ul>

                </div>

                <div className={styles.panel}>

                    <h2>Recent Platform Events</h2>

                    <ul>
                        <li>New device activated</li>
                        <li>Tracking request processed</li>
                        <li>Insurance verification completed</li>
                        <li>Police recovery synchronized</li>
                        <li>Nightly backup completed</li>
                    </ul>

                </div>

            </div>

            <div className={styles.tablePanel}>

                <h2>Live Infrastructure Status</h2>

                <table className={styles.table}>

                    <thead>

                        <tr>
                            <th>Service</th>
                            <th>Status</th>
                            <th>Latency</th>
                            <th>Requests</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Authentication API</td>
                            <td><span className={styles.online}>Online</span></td>
                            <td>18 ms</td>
                            <td>24,502</td>
                        </tr>

                        <tr>
                            <td>Tracking API</td>
                            <td><span className={styles.online}>Online</span></td>
                            <td>22 ms</td>
                            <td>51,221</td>
                        </tr>

                        <tr>
                            <td>SMS Gateway</td>
                            <td><span className={styles.warning}>Delayed</span></td>
                            <td>125 ms</td>
                            <td>5,442</td>
                        </tr>

                        <tr>
                            <td>Notification Server</td>
                            <td><span className={styles.online}>Online</span></td>
                            <td>20 ms</td>
                            <td>13,770</td>
                        </tr>

                        <tr>
                            <td>Reporting Engine</td>
                            <td><span className={styles.online}>Online</span></td>
                            <td>16 ms</td>
                            <td>8,145</td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </>
    );
}

export default MonitoringPage;