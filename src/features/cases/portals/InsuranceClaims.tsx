import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";

import styles from "./InsuranceClaims.module.css";

function InsuranceClaims() {
    const actionItems = [
        {
            label: "View Claim",
            onClick: () => console.log("View Claim"),
        },
        {
            label: "Verify Ownership",
            onClick: () => console.log("Verify Ownership"),
        },
        {
            label: "Approve Claim",
            onClick: () => console.log("Approve Claim"),
        },
        {
            label: "Process Payment",
            onClick: () => console.log("Process Payment"),
        },
        {
            label: "View Documents",
            onClick: () => console.log("View Documents"),
        },
        {
            label: "Reject Claim",
            onClick: () => console.log("Reject Claim"),
        },
    ];

    return (
        <>
            <PageHeader
                title="Insurance Claims"
                description="Review, verify and manage subscriber insurance claims."
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Claims"
                    value="2,341"
                />

                <SummaryCard
                    title="Pending"
                    value="126"
                />

                <SummaryCard
                    title="Approved"
                    value="1,882"
                />

                <SummaryCard
                    title="Rejected"
                    value="333"
                />

            </div>

            <div className={styles.filters}>

                <input
                    className={styles.search}
                    placeholder="Search claim number, subscriber or policy..."
                />

                <select className={styles.select}>
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Verified</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                    <option>Paid</option>
                </select>

                <select className={styles.select}>
                    <option>All Providers</option>
                    <option>Leadway</option>
                    <option>AIICO</option>
                    <option>AXA Mansard</option>
                    <option>Cornerstone</option>
                </select>

            </div>

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>

                            <th>Claim No.</th>

                            <th>Subscriber</th>

                            <th>Device</th>

                            <th>Policy No.</th>

                            <th>Status</th>

                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>CL-1001</td>
                            <td>John Doe</td>
                            <td>iPhone 15 Pro</td>
                            <td>INS-44581</td>
                            <td><span className={styles.pending}>Pending</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>CL-1002</td>
                            <td>Mary Johnson</td>
                            <td>Samsung S24 Ultra</td>
                            <td>INS-66210</td>
                            <td><span className={styles.verified}>Verified</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>CL-1003</td>
                            <td>David Smith</td>
                            <td>Google Pixel 9</td>
                            <td>INS-77291</td>
                            <td><span className={styles.approved}>Approved</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>CL-1004</td>
                            <td>Grace Wilson</td>
                            <td>iPhone 14 Pro</td>
                            <td>INS-55891</td>
                            <td><span className={styles.rejected}>Rejected</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>CL-1005</td>
                            <td>Michael Adams</td>
                            <td>Tecno Phantom X2</td>
                            <td>INS-89220</td>
                            <td><span className={styles.pending}>Pending</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>CL-1006</td>
                            <td>Sarah Bello</td>
                            <td>iPhone 13 Pro</td>
                            <td>INS-99120</td>
                            <td><span className={styles.approved}>Approved</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>CL-1007</td>
                            <td>Aisha Musa</td>
                            <td>Redmi Note 14</td>
                            <td>INS-11991</td>
                            <td><span className={styles.verified}>Verified</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>CL-1008</td>
                            <td>Daniel Okafor</td>
                            <td>Samsung Z Fold 6</td>
                            <td>INS-33772</td>
                            <td><span className={styles.pending}>Pending</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                    </tbody>

                </table>

            </div>
        </>
    );
}

export default InsuranceClaims;