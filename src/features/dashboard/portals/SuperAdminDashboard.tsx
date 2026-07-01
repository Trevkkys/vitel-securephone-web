import StatCard from "../components/StatCard/StatCard";
import styles from "./SuperAdminDashboard.module.css";
import { getCurrentUser } from "../../../utils/auth";
import { PortalType } from "../../../config/portals";

function SuperAdminDashboard() {
    const user = getCurrentUser();

    const name = user?.name ?? "User";

    const role = user?.role ?? "Administrator";

    const organization =
        user?.organization ?? PortalType.SUPER_ADMIN;

    const portalTitle = {
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
                <StatCard
                    title="Organizations"
                    value="12"
                />

                <StatCard
                    title="Protected Devices"
                    value="15,432"
                />

                <StatCard
                    title="Active Cases"
                    value="1,245"
                />

                <StatCard
                    title="Pending Claims"
                    value="39"
                />
            </div>

            {/* Operations */}

            <div className={styles.operationsGrid}>

                <div className={styles.panel}>
                    <h2 className={styles.panelTitle}>
                        Operations Feed
                    </h2>

                    <ul className={styles.feed}>
                        <li>
                            🟢 Police Lagos opened Case #4932
                        </li>

                        <li>
                            🔵 Insurance approved Claim #2291
                        </li>

                        <li>
                            🟠 Device detected in Kano
                        </li>

                        <li>
                            🟢 Police Abuja recovered iPhone 15 Pro
                        </li>

                        <li>
                            🟣 New insurance organization onboarded
                        </li>
                    </ul>
                </div>

                <div className={styles.panel}>
                    <h2 className={styles.panelTitle}>
                        System Health
                    </h2>

                    <div className={styles.healthItem}>
                        <span>API Service</span>
                        <span>🟢 Online</span>
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
                        <span>🟢 Healthy</span>
                    </div>
                </div>

            </div>

            {/* Existing Table */}

            <div className={styles.tableWrapper}>
                <h2 className={styles.tableTitle}>
                    Recent Case Activity
                </h2>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Case No</th>
                            <th>Subscriber</th>
                            <th>Phone</th>
                            <th>IMEI</th>
                            <th>Date Reported</th>
                            <th>Last Location</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>SP-1001</td>
                            <td>John Doe</td>
                            <td>iPhone 15 Pro</td>
                            <td>352987654123456</td>
                            <td>05 Jun 2026</td>
                            <td>Lagos</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>SP-1002</td>
                            <td>Mary Johnson</td>
                            <td>Samsung S24 Ultra</td>
                            <td>357891234567890</td>
                            <td>06 Jun 2026</td>
                            <td>Abuja</td>
                            <td>Investigating</td>
                        </tr>

                        <tr>
                            <td>SP-1003</td>
                            <td>David Smith</td>
                            <td>Tecno Phantom X2</td>
                            <td>353456789012345</td>
                            <td>06 Jun 2026</td>
                            <td>Port Harcourt</td>
                            <td>Recovered</td>
                        </tr>

                        <tr>
                            <td>SP-1004</td>
                            <td>Grace Wilson</td>
                            <td>iPhone 14 Pro</td>
                            <td>356789012345678</td>
                            <td>07 Jun 2026</td>
                            <td>Kano</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>SP-1005</td>
                            <td>Michael Adams</td>
                            <td>Google Pixel 9</td>
                            <td>351234567890123</td>
                            <td>07 Jun 2026</td>
                            <td>Enugu</td>
                            <td>Detected</td>
                        </tr>

                        <tr>
                            <td>SP-1006</td>
                            <td>Sarah Bello</td>
                            <td>iPhone 13 Pro</td>
                            <td>352222333444555</td>
                            <td>08 Jun 2026</td>
                            <td>Ibadan</td>
                            <td>Active</td>
                        </tr>

                        <tr>
                            <td>SP-1007</td>
                            <td>Daniel Okafor</td>
                            <td>Samsung Z Fold 6</td>
                            <td>356666777888999</td>
                            <td>08 Jun 2026</td>
                            <td>Benin City</td>
                            <td>Investigating</td>
                        </tr>

                        <tr>
                            <td>SP-1008</td>
                            <td>Aisha Musa</td>
                            <td>Redmi Note 14</td>
                            <td>353333444555666</td>
                            <td>09 Jun 2026</td>
                            <td>Lagos</td>
                            <td>Recovered</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SuperAdminDashboard;