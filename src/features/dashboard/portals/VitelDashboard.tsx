import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import styles from "./VitelDashboard.module.css";

function VitelDashboard() {
    return (
        <>
            <PageHeader
                title="Vitel SecurePhone Platform"
                description="Monitor platform performance, customer growth and live operations."
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Active Customers"
                    value="8,426"
                />

                <SummaryCard
                    title="Protected Devices"
                    value="21,583"
                />

                <SummaryCard
                    title="Monthly Revenue"
                    value="₦84.6M"
                />

                <SummaryCard
                    title="Live Tracking"
                    value="428"
                />

            </div>

            <div className={styles.grid}>

                <div className={styles.panel}>

                    <h2>Platform Overview</h2>

                    <table className={styles.table}>

                        <tbody>

                            <tr>

                                <td>Total Organisations</td>

                                <td>56</td>

                            </tr>

                            <tr>

                                <td>Police Agencies</td>

                                <td>18</td>

                            </tr>

                            <tr>

                                <td>Insurance Companies</td>

                                <td>38</td>

                            </tr>

                            <tr>

                                <td>Devices Activated Today</td>

                                <td>164</td>

                            </tr>

                            <tr>

                                <td>Pending Activations</td>

                                <td>23</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

                <div className={styles.panel}>

                    <h2>Recent Activity</h2>

                    <ul>

                        <li>✅ Leadway Insurance onboarded 48 new devices</li>

                        <li>📱 164 devices activated today</li>

                        <li>🚔 Lagos Police completed 9 recoveries</li>

                        <li>🛰️ 428 tracking sessions currently active</li>

                        <li>💳 18 subscription renewals completed</li>

                        <li>⚡ Nightly backup completed successfully</li>

                    </ul>

                </div>

            </div>

            <div className={styles.bottomGrid}>

                <div className={styles.panel}>

                    <h2>Platform Health</h2>

                    <table className={styles.table}>

                        <tbody>

                            <tr>

                                <td>Authentication</td>

                                <td><span className={styles.online}>Online</span></td>

                            </tr>

                            <tr>

                                <td>Tracking Engine</td>

                                <td><span className={styles.online}>Online</span></td>

                            </tr>

                            <tr>

                                <td>SMS Gateway</td>

                                <td><span className={styles.warning}>Slow</span></td>

                            </tr>

                            <tr>

                                <td>Database</td>

                                <td><span className={styles.online}>Online</span></td>

                            </tr>

                            <tr>

                                <td>API Response</td>

                                <td>18 ms</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

                <div className={styles.panel}>

                    <h2>Subscriptions</h2>

                    <table className={styles.table}>

                        <thead>

                            <tr>

                                <th>Plan</th>

                                <th>Customers</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Enterprise</td>

                                <td>12</td>

                            </tr>

                            <tr>

                                <td>Business</td>

                                <td>31</td>

                            </tr>

                            <tr>

                                <td>Professional</td>

                                <td>13</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </>
    );
}

export default VitelDashboard;