import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import styles from "./PoliceDashboard.module.css";

function PoliceDashboard() {
    return (
        <>
            <PageHeader
                title="Police Operations Centre"
                description="Monitor investigations, active tracking operations and recovered devices."
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Open Cases"
                    value="245"
                />

                <SummaryCard
                    title="Active Tracking"
                    value="83"
                />

                <SummaryCard
                    title="Recovered Devices"
                    value="41"
                />

                <SummaryCard
                    title="Recovery Rate"
                    value="87%"
                />

            </div>

            <div className={styles.grid}>

                <div className={styles.panel}>

                    <h2>Recent Activity</h2>

                    <ul>

                        <li>Officer Bello assigned Case SP-1008</li>

                        <li>Tracking request approved</li>

                        <li>Device detected in Kano</li>

                        <li>Recovery completed in Abuja</li>

                        <li>New theft case reported</li>

                    </ul>

                </div>

                <div className={styles.panel}>

                    <h2>Active Tracking Operations</h2>

                    <table className={styles.table}>

                        <thead>

                            <tr>
                                <th>Case</th>
                                <th>Device</th>
                                <th>Last Location</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td>SP-1002</td>
                                <td>iPhone 15 Pro</td>
                                <td>Ikeja, Lagos</td>
                            </tr>

                            <tr>
                                <td>SP-1015</td>
                                <td>Samsung S24 Ultra</td>
                                <td>Wuse, Abuja</td>
                            </tr>

                            <tr>
                                <td>SP-1032</td>
                                <td>Google Pixel 9</td>
                                <td>Port Harcourt</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </>
    );
}

export default PoliceDashboard;