import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import Button from "../../../components/ui/Button/Button";
import { getCurrentUser } from "../../../utils/auth";
import { PortalType } from "../../../config/portals";
import styles from "./ReportsPage.module.css";

function ReportsPage() {
    const user = getCurrentUser();

    const portal =
        user?.organization ?? PortalType.POLICE;

    const reportData = {
        [PortalType.SUPER_ADMIN]: {
            title: "Platform Reports",
            description: "Generate system-wide reports across all organizations.",
            reports: [
                "Organization Report",
                "Audit Report",
                "Platform Analytics",
                "System Usage",
                "Administrator Activity",
            ],
        },

        [PortalType.POLICE]: {
            title: "Police Reports",
            description: "Generate operational and investigation reports.",
            reports: [
                "Case Report",
                "Recovery Report",
                "Tracking Report",
                "Officer Activity",
                "Device Report",
            ],
        },

        [PortalType.INSURANCE]: {
            title: "Insurance Reports",
            description: "Generate insurance claims and verification reports.",
            reports: [
                "Claims Report",
                "Verification Report",
                "Recovery Report",
                "User Activity",
                "Monthly Claims",
            ],
        },

        [PortalType.VITEL]: {
            title: "Vitel Reports",
            description: "Generate operational and customer reports.",
            reports: [
                "Customer Report",
                "Subscription Report",
                "Device Inventory",
                "Support Tickets",
                "Monitoring Report",
            ],
        },
    };

    const current = reportData[portal] ?? reportData[PortalType.POLICE];

    return (
        <>
            <PageHeader
                title={current.title}
                description={current.description}
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Reports Generated"
                    value="286"
                    trend="+12%"
                    trendType="up"
                    subtitle="vs last week"
                />

                <SummaryCard
                    title="Scheduled Reports"
                    value="12"
                    trend="+2"
                    trendType="up"
                    subtitle="Active schedules"
                />

                <SummaryCard
                    title="Exports Today"
                    value="41"
                    trend="+8"
                    trendType="up"
                    subtitle="Generated today"
                />

                <SummaryCard
                    title="Success Rate"
                    value="99%"
                    trend="1%"
                    trendType="up"
                    subtitle="Successful exports"
                />

            </div>

            <div className={styles.grid}>

                <div className={styles.panel}>

                    <h2>Generate Report</h2>

                    <select className={styles.select}>
                        {current.reports.map((report) => (
                            <option key={report}>
                                {report}
                            </option>
                        ))}
                    </select>

                    <input
                        type="date"
                        className={styles.input}
                    />

                    <input
                        type="date"
                        className={styles.input}
                    />

                    <div className={styles.actions}>

                        <Button>Export PDF</Button>

                        <Button>Export Excel</Button>

                        <Button>Export CSV</Button>

                    </div>

                </div>

                <div className={styles.panel}>

                    <h2>Recent Reports</h2>

                    <table className={styles.table}>

                        <thead>

                            <tr>
                                <th>Report</th>
                                <th>Format</th>
                                <th>Date</th>
                            </tr>

                        </thead>

                        <tbody>

                            <tr>
                                <td>Monthly Report</td>
                                <td>PDF</td>
                                <td>Today</td>
                            </tr>

                            <tr>
                                <td>User Activity</td>
                                <td>Excel</td>
                                <td>Yesterday</td>
                            </tr>

                            <tr>
                                <td>Recovery Report</td>
                                <td>CSV</td>
                                <td>3 Days Ago</td>
                            </tr>

                            <tr>
                                <td>Audit Report</td>
                                <td>PDF</td>
                                <td>Last Week</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>
        </>
    );
}

export default ReportsPage;