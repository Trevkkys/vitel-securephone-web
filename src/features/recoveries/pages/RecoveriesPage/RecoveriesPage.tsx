import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../../components/ui/ActionMenu/ActionMenu";

import styles from "./RecoveriesPage.module.css";

function RecoveriesPage() {
    return (
        <>
            <PageHeader
                title="Recoveries"
                description="Recovered devices and completed recovery operations."
            />

            <div className={styles.summary}>

                <SummaryCard title="Recovered Today" value="12" />

                <SummaryCard title="Recovered This Week" value="58" />

                <SummaryCard title="Recovery Rate" value="87%" />

                <SummaryCard title="Pending Release" value="9" />

            </div>

            <div className={styles.filters}>

                <input
                    placeholder="Search case..."
                    className={styles.search}
                />

                <select className={styles.select}>
                    <option>Search Devices</option>
                    <option>Open</option>
                    <option>Tracking</option>
                    <option>Recovered</option>
                </select>

                <select className={styles.select}>
                    <option>Officer</option>
                </select>

                <select className={styles.select}>
                    <option>Recovery Status</option>
                    <option>Open</option>
                    <option>Tracking</option>
                    <option>Recovered</option>
                </select>

            </div>

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>

                            <th>Case</th>

                            <th>Device</th>

                            <th>Owner</th>

                            <th>Recovered by</th>

                            <th>Recovery Date</th>

                            <th>Release Status</th>

                            <th>Actions</th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>SP-1001</td>

                            <td>John Doe</td>

                            <td>iPhone 15 Pro</td>

                            <td>
                                <span className={styles.high}>
                                    HIGH
                                </span>
                            </td>

                            <td>
                                <span className={styles.active}>
                                    TRACKING
                                </span>
                            </td>

                            <td>Inspector Bello</td>

                            <td>

                                <ActionMenu
                                    items={[
                                        {
                                            label: "View Recovery",
                                            onClick: () => alert("Recovery"),
                                        },
                                        {
                                            label: "Release Device",
                                            onClick: () => alert("Release"),
                                        },
                                        {
                                            label: "Generate Report",
                                            onClick: () => alert("Report"),
                                        },
                                        {
                                            label: "Print Recovery Form",
                                            onClick: () => alert("Print"),
                                        },
                                    ]}
                                />

                            </td>

                        </tr>

                        <tr>

                            <td>SP-1002</td>

                            <td>Mary Johnson</td>

                            <td>Samsung S24</td>

                            <td>
                                <span className={styles.medium}>
                                    MEDIUM
                                </span>
                            </td>

                            <td>
                                <span className={styles.detected}>
                                    DETECTED
                                </span>
                            </td>

                            <td>Inspector Musa</td>

                            <td>

                                <ActionMenu
                                    items={[
                                        {
                                            label: "View Recovery",
                                            onClick: () => alert("Recovery"),
                                        },
                                        {
                                            label: "Release Device",
                                            onClick: () => alert("Release"),
                                        },
                                        {
                                            label: "Generate Report",
                                            onClick: () => alert("Report"),
                                        },
                                        {
                                            label: "Print Recovery Form",
                                            onClick: () => alert("Print"),
                                        },
                                    ]}
                                />

                            </td>

                        </tr>

                        <tr>

                            <td>SP-1003</td>

                            <td>Oga Chidi</td>

                            <td>Samsung S30</td>

                            <td>
                                <span className={styles.medium}>
                                    MEDIUM
                                </span>
                            </td>

                            <td>
                                <span className={styles.detected}>
                                    DETECTED
                                </span>
                            </td>

                            <td>Inspector Kc</td>

                            <td>

                                <ActionMenu
                                    items={[
                                        {
                                            label: "View Recovery",
                                            onClick: () => alert("Recovery"),
                                        },
                                        {
                                            label: "Release Device",
                                            onClick: () => alert("Release"),
                                        },
                                        {
                                            label: "Generate Report",
                                            onClick: () => alert("Report"),
                                        },
                                        {
                                            label: "Print Recovery Form",
                                            onClick: () => alert("Print"),
                                        },
                                    ]}
                                />

                            </td>

                        </tr>

                        <tr>

                            <td>SP-1004</td>

                            <td>Oga Joe</td>

                            <td>iPhone 12</td>

                            <td>
                                <span className={styles.medium}>
                                    MEDIUM
                                </span>
                            </td>

                            <td>
                                <span className={styles.detected}>
                                    DETECTED
                                </span>
                            </td>

                            <td>Inspector Oge</td>

                            <td>

                                <ActionMenu
                                    items={[
                                        {
                                            label: "View Recovery",
                                            onClick: () => alert("Recovery"),
                                        },
                                        {
                                            label: "Release Device",
                                            onClick: () => alert("Release"),
                                        },
                                        {
                                            label: "Generate Report",
                                            onClick: () => alert("Report"),
                                        },
                                        {
                                            label: "Print Recovery Form",
                                            onClick: () => alert("Print"),
                                        },
                                    ]}
                                />

                            </td>

                        </tr>

                        <tr>

                            <td>SP-1005</td>

                            <td>Oga Sunny</td>

                            <td>Samsung S55</td>

                            <td>
                                <span className={styles.medium}>
                                    MEDIUM
                                </span>
                            </td>

                            <td>
                                <span className={styles.detected}>
                                    DETECTED
                                </span>
                            </td>

                            <td>Inspector Ahmed</td>

                            <td>

                                <ActionMenu
                                    items={[
                                        {
                                            label: "View Recovery",
                                            onClick: () => alert("Recovery"),
                                        },
                                        {
                                            label: "Release Device",
                                            onClick: () => alert("Release"),
                                        },
                                        {
                                            label: "Generate Report",
                                            onClick: () => alert("Report"),
                                        },
                                        {
                                            label: "Print Recovery Form",
                                            onClick: () => alert("Print"),
                                        },
                                    ]}
                                />

                            </td>

                        </tr>

                    </tbody>

                </table>

            </div>
        </>
    );
}

export default RecoveriesPage;