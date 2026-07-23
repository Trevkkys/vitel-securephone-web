import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import styles from "./SuperAdminDashboard.module.css";
import { getCurrentUser } from "../../../utils/auth";
import { PortalType } from "../../../config/portals";
import { useEffect, useState } from "react";
import { getDashboardSummary } from "../../../services/admin.service";
import {
    getActivityFeed,
    getSystemStatus,
    type ActivityFeedItem,
} from "../../../services/admin.service";

function SuperAdminDashboard() {
    const user = getCurrentUser();

    const name = user?.full_name ?? user?.email ?? "User";

    const role = user?.role ?? "Administrator";

    const organization = PortalType.SUPER_ADMIN;

    const [summary, setSummary] = useState({
        active_reports: 0,
        protected_devices: 0,
        pending_claims: 0,
        total_subscribers: 0,
    });

    const [activities, setActivities] = useState<ActivityFeedItem[]>([]);

    const [systemStatus, setSystemStatus] = useState({
        api_status: "Checking...",
        database_status: "Checking...",
    });

    useEffect(() => {
        loadSummary();
        loadActivityFeed();
        loadSystemStatus();
    }, []);


    async function loadSummary() {
        try {
            const data = await getDashboardSummary();

            setSummary({
                active_reports: data.active_reports,
                protected_devices: data.protected_devices,
                pending_claims: data.pending_claims,
                total_subscribers: data.total_subscribers,
            });
        } catch (error) {
            console.error(error);
        }
    }

    async function loadActivityFeed() {
        try {
            const data = await getActivityFeed();
            setActivities(data);
        } catch (error) {
            console.error(error);
        }
    }

    async function loadSystemStatus() {
        try {
            const data = await getSystemStatus();
            setSystemStatus(data);
        } catch (error) {
            console.error(error);

            setSystemStatus({
                api_status: "Offline",
                database_status: "Offline",
            });
        }
    }

    const portalTitle: Record<PortalType, string> = {
        [PortalType.SUPER_ADMIN]:
            "Welcome to the Vitel SecurePhone Admin Platform",

        [PortalType.POLICE]:
            "Welcome to the Police Operations Portal",

        [PortalType.INSURANCE]:
            "Welcome to the Insurance Operations Portal",

        [PortalType.VITEL]:
            "Welcome to the Vitel Operations Portal",
    };

    return (
        <>
            {/* Welcome Banner */}

            <div className={styles.welcomeCard}>
                <div>
                    <h1 className={styles.welcomeTitle}>
                        Good Morning, {name} 👋
                    </h1>

                    <p className={styles.welcomeSubtitle}>
                        {portalTitle[organization]}
                    </p>

                    <span className={styles.roleBadge}>
                        {role}
                    </span>
                </div>
            </div>

            {/* Statistics */}

            <div className={styles.grid}>

                <SummaryCard
                    title="Subscribers"
                    value={summary.total_subscribers.toLocaleString()}
                    trend=""
                    trendType="up"
                    subtitle="Registered subscribers"
                />

                <SummaryCard
                    title="Protected Devices"
                    value={summary.protected_devices.toLocaleString()}
                    trend="+18%"
                    trendType="up"
                    subtitle="Across all portals"
                />

                <SummaryCard
                    title="Active Cases"
                    value={summary.active_reports.toLocaleString()}
                    trend="+7%"
                    trendType="up"
                    subtitle="Currently under investigation"
                />

                <SummaryCard
                    title="Pending Claims"
                    value={summary.pending_claims.toLocaleString()}
                    trend="-4"
                    trendType="down"
                    subtitle="Awaiting verification"
                />

            </div>

            {/* Recent Activity */}

            <div className={styles.operationsGrid}>

                <div className={styles.panel}>
                    <h2 className={styles.panelTitle}>Recent Activity</h2>

                    <table className={styles.activityTable}>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>User</th>
                                <th>Activity</th>
                            </tr>
                        </thead>

                        <tbody>
                            {activities.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className={styles.emptyState}>
                                        No recent activity found.
                                    </td>
                                </tr>
                            ) : (
                                activities.map((activity) => (
                                    <tr key={activity.id}>
                                        <td>
                                            {new Date(
                                                activity.created_at
                                            ).toLocaleString()}
                                        </td>

                                        <td>{activity.actor_role}</td>

                                        <td>{activity.description}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className={styles.panel}>
                    <h2 className={styles.panelTitle}>
                        System Health
                    </h2>
                    <div className={styles.healthItem}>
                        <span>API Service</span>

                        <span>
                            {systemStatus.api_status.toLowerCase() === "online"
                                ? "🟢 Online"
                                : "🔴 Offline"}
                        </span>
                    </div>

                    <div className={styles.healthItem}>
                        <span>Tracking Service</span>
                        <span>🟢 Online</span>
                    </div>

                    <div className={styles.healthItem}>
                        <span>Notification Service</span>
                        <span>🟢 Online</span>
                    </div>

                    <div className={styles.healthItem}>
                        <span>Database</span>

                        <span>
                            {systemStatus.database_status.toLowerCase() === "online"
                                ? "🟢 Online"
                                : "🔴 Offline"}
                        </span>
                    </div>
                </div>

            </div >
        </>
    );
}

export default SuperAdminDashboard;