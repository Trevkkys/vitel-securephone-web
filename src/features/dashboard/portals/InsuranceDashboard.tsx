import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import styles from "./InsuranceDashboard.module.css";

function InsuranceDashboard() {
    return (
        <>
            <PageHeader
                title="Insurance Operations Centre"
                description="Manage insurance claims, device verification, approvals and recoveries."
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Claims"
                    value="2,341"
                />

                <SummaryCard
                    title="Pending Verification"
                    value="126"
                />

                <SummaryCard
                    title="Approved Claims"
                    value="1,882"
                />

                <SummaryCard
                    title="Recovered Devices"
                    value="533"
                />

            </div>

            <div className={styles.grid}>

                <div className={styles.panel}>

                    <h2>Recent Claims Activity</h2>

                    <ul>

                        <li>Claim CL-1023 submitted</li>

                        <li>Police verified device ownership</li>

                        <li>Claim CL-1019 approved</li>

                        <li>Compensation processing initiated</li>

                        <li>Recovered device linked to active claim</li>

                    </ul>

                </div>

                <div className={styles.panel}>

                    <h2>Recent Claims</h2>

                    <table className={styles.table}>

                        <thead>

                            <tr>
                                <th>Claim</th>
                                <th>Subscriber</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td>CL-1001</td>
                                <td>John Doe</td>
                                <td>Pending</td>
                            </tr>

                            <tr>
                                <td>CL-1002</td>
                                <td>Mary Johnson</td>
                                <td>Approved</td>
                            </tr>

                            <tr>
                                <td>CL-1003</td>
                                <td>David Smith</td>
                                <td>Verified</td>
                            </tr>

                            <tr>
                                <td>CL-1004</td>
                                <td>Grace Wilson</td>
                                <td>Rejected</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </>
    );
}

export default InsuranceDashboard;