import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";

import styles from "./PoliceCases.module.css";

function PoliceCases() {
    return (
        <>
            <PageHeader
                title="Police Case Management"
                description="Manage theft investigations, device tracking and recoveries."
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
                    title="Devices Detected"
                    value="26"
                />

                <SummaryCard
                    title="Recovered Today"
                    value="9"
                />

            </div>

            <div className={styles.filters}>

                <input
                    placeholder="Search case..."
                    className={styles.search}
                />

                <select className={styles.select}>
                    <option>All Status</option>
                    <option>Open</option>
                    <option>Tracking</option>
                    <option>Recovered</option>
                </select>

                <select className={styles.select}>
                    <option>All Priority</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <select className={styles.select}>
                    <option>All Officers</option>
                </select>

            </div>

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>

                            <th>Case</th>

                            <th>Subscriber</th>

                            <th>Device</th>

                            <th>Priority</th>

                            <th>Status</th>

                            <th>Officer</th>

                            <th></th>

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
                                            label: "Open Investigation",
                                            onClick: () => alert("Investigation"),
                                        },
                                        {
                                            label: "Start Tracking",
                                            onClick: () => alert("Tracking"),
                                        },
                                        {
                                            label: "View Timeline",
                                            onClick: () => alert("Timeline"),
                                        },
                                        {
                                            label: "Evidence",
                                            onClick: () => alert("Evidence"),
                                        },
                                        {
                                            label: "Mark Recovered",
                                            onClick: () => alert("Recovered"),
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
                                            label: "Open Investigation",
                                            onClick: () => alert("Investigation"),
                                        },
                                        {
                                            label: "Start Tracking",
                                            onClick: () => alert("Tracking"),
                                        },
                                        {
                                            label: "View Timeline",
                                            onClick: () => alert("Timeline"),
                                        },
                                        {
                                            label: "Evidence",
                                            onClick: () => alert("Evidence"),
                                        },
                                        {
                                            label: "Mark Recovered",
                                            onClick: () => alert("Recovered"),
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

export default PoliceCases;