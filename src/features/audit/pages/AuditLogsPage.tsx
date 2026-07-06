import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import Button from "../../../components/ui/Button/Button";
import styles from "./AuditLogsPage.module.css";

const logs = [
    {
        time: "09:14 AM",
        user: "John Ibrahim",
        organization: "Nigeria Police",
        action: "Created Case",
        module: "Case Management",
        ip: "102.89.xx.xx",
        status: "Success",
    },
    {
        time: "09:28 AM",
        user: "Mary Okafor",
        organization: "Leadway Insurance",
        action: "Approved Claim",
        module: "Claims",
        ip: "102.41.xx.xx",
        status: "Success",
    },
    {
        time: "10:06 AM",
        user: "System",
        organization: "Vitel",
        action: "Database Backup",
        module: "System",
        ip: "--",
        status: "Success",
    },
    {
        time: "10:41 AM",
        user: "Admin",
        organization: "Nigeria Police",
        action: "Deleted User",
        module: "Users",
        ip: "102.61.xx.xx",
        status: "Failed",
    },
    {
        time: "11:15 AM",
        user: "Samuel David",
        organization: "Leadway Insurance",
        action: "Password Reset",
        module: "Users",
        ip: "102.17.xx.xx",
        status: "Success",
    },
];

function AuditLogsPage() {
    return (
        <>
            <PageHeader
                title="Audit Logs"
                description="Track activities across every organization and module."
                action={<Button>Export CSV</Button>}
            />

           <div className={styles.summary}>

    <SummaryCard
        title="Total Logs"
        value="18,542"
    />

    <SummaryCard
        title="Today's Activities"
        value="328"
    />

    <SummaryCard
        title="Failed Actions"
        value="17"
    />

    <SummaryCard
        title="Active Users"
        value="231"
    />

</div>

            <div className={styles.panel}>

                <div className={styles.filters}>

                    <select>
                        <option>All Organizations</option>
                    </select>

                    <select>
                        <option>All Users</option>
                    </select>

                    <select>
                        <option>All Actions</option>
                    </select>

                    <select>
                        <option>All Statuses</option>
                    </select>

                    <select>
                        <option>Today</option>
                    </select>

                </div>

                <table className={styles.table}>

                    <thead>

                        <tr>
                            <th>Time</th>
                            <th>User</th>
                            <th>Organization</th>
                            <th>Action</th>
                            <th>Module</th>
                            <th>IP Address</th>
                            <th>Status</th>
                        </tr>

                    </thead>

                    <tbody>

                        {logs.map((log, index) => (

                            <tr key={index}>

                                <td>{log.time}</td>

                                <td>{log.user}</td>

                                <td>{log.organization}</td>

                                <td>{log.action}</td>

                                <td>{log.module}</td>

                                <td>{log.ip}</td>

                                <td>

                                    <span
                                        className={`${styles.badge} ${
                                            log.status === "Success"
                                                ? styles.success
                                                : styles.failed
                                        }`}
                                    >
                                        {log.status}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>
        </>
    );
}

export default AuditLogsPage;