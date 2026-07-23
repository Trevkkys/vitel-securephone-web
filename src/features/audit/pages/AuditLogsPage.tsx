import { useEffect, useState } from "react";
import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import Button from "../../../components/ui/Button/Button";
import styles from "./AuditLogsPage.module.css";

import {
    getAuditLogs,
    type AuditLogItem,
} from "../../../services/admin.service";

function AuditLogsPage() {

    const [logs, setLogs] = useState<AuditLogItem[]>([]);
    const [page, setPage] = useState(1);

    const [action, setAction] = useState("");
    const [entityType, setEntityType] = useState("");

    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadLogs();
    }, [page, action, entityType]);

    async function loadLogs() {
        try {

            const response = await getAuditLogs({
                page,
                action: action || undefined,
                entity_type: entityType || undefined,
            });

            setLogs(response.items);
            setTotal(response.total);

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <PageHeader
                title="Audit Logs"
                description="Track every administrative activity across the platform."
                action={<Button>Export CSV</Button>}
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Logs"
                    value={total.toLocaleString()}
                    trend=""
                    trendType="up"
                    subtitle="All recorded activities"
                />

                <SummaryCard
                    title="Current Page"
                    value={page.toString()}
                    trend=""
                    trendType="up"
                    subtitle="Pagination"
                />

            </div>

            <div className={styles.panel}>

                <div className={styles.filters}>

                    <select
                        value={action}
                        onChange={(e) => setAction(e.target.value)}
                    >
                        <option value="">All Actions</option>
                        <option value="CREATE">Create</option>
                        <option value="UPDATE">Update</option>
                        <option value="DELETE">Delete</option>
                        <option value="LOGIN">Login</option>
                    </select>

                    <input
                        placeholder="Entity Type"
                        value={entityType}
                        onChange={(e) => setEntityType(e.target.value)}
                    />

                </div>

                <table className={styles.table}>

                    <thead>

                        <tr>
                            <th>Date</th>
                            <th>Role</th>
                            <th>Entity</th>
                            <th>Action</th>
                            <th>Description</th>
                        </tr>

                    </thead>

                    <tbody>

                        {logs.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={5}
                                    className={styles.empty}
                                >
                                    No audit logs found.
                                </td>

                            </tr>

                        ) : (

                            logs.map((log) => (

                                <tr key={log.id}>

                                    <td>
                                        {new Date(
                                            log.created_at
                                        ).toLocaleString()}
                                    </td>

                                    <td>{log.actor_role}</td>

                                    <td>{log.entity_type}</td>

                                    <td>{log.action}</td>

                                    <td>{log.description}</td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

                <div className={styles.pagination}>

                    <Button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                        Previous
                    </Button>

                    <span>
                        Page {page}
                    </span>

                    <Button
                        onClick={() => setPage((p) => p + 1)}
                    >
                        Next
                    </Button>

                </div>

            </div>

        </>
    );
}

export default AuditLogsPage;