import StatCard from "../components/StatCard/StatCard";
import styles from "./DashboardPage.module.css";

function DashboardPage() {
    return (
        <>
            <div className={styles.grid}>
                <StatCard
                    title="Protected Devices"
                    value="15,432"
                />

                <StatCard
                    title="Active Cases"
                    value="1,245"
                />

                <StatCard
                    title="Devices Detected"
                    value="58"
                />

                <StatCard
                    title="Insurance Claims"
                    value="17"
                />
            </div>

            <div className={styles.tableWrapper}>
                <h2 className={styles.tableTitle}>
                    Recent Theft Cases
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

export default DashboardPage;