import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";
import styles from "./CustomersPage.module.css";

function CustomersPage() {

    const actionItems = [
        {
            label: "View Customer",
            onClick: () => { },
        },
        {
            label: "Registered Devices",
            onClick: () => { },
        },
        {
            label: "Subscription Details",
            onClick: () => { },
        },
        {
            label: "Disable Account",
            onClick: () => { },
        },
    ];

    return (
        <>

            <PageHeader
                title="Customers"
                description="Manage Vitel SecurePhone customers and subscriptions."
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Customers"
                    value="12,458"
                />

                <SummaryCard
                    title="Active Customers"
                    value="11,932"
                />

                <SummaryCard
                    title="Premium Plans"
                    value="8,245"
                />

                <SummaryCard
                    title="Registered Devices"
                    value="19,874"
                />

            </div>

            <div className={styles.filters}>

                <input
                    className={styles.search}
                    placeholder="Search customer..."
                />

                <select className={styles.select}>
                    <option>All Plans</option>
                    <option>Premium</option>
                    <option>Standard</option>
                    <option>Expired</option>
                </select>

            </div>

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>
                            <th>Customer</th>
                            <th>Registered Devices</th>
                            <th>Subscription</th>
                            <th>Last Activity</th>
                            <th>Status</th>
                            <th></th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>John Ibrahim</td>
                            <td>3</td>
                            <td>Premium</td>
                            <td>Today</td>
                            <td><span className={styles.active}>Active</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>Mary Johnson</td>
                            <td>2</td>
                            <td>Premium</td>
                            <td>Yesterday</td>
                            <td><span className={styles.active}>Active</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>Daniel Bello</td>
                            <td>1</td>
                            <td>Standard</td>
                            <td>Today</td>
                            <td><span className={styles.active}>Active</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>Grace Okafor</td>
                            <td>4</td>
                            <td>Premium</td>
                            <td>2 hrs ago</td>
                            <td><span className={styles.active}>Active</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>Samuel Wilson</td>
                            <td>2</td>
                            <td>Expired</td>
                            <td>5 days ago</td>
                            <td><span className={styles.inactive}>Inactive</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                        <tr>
                            <td>Fatima Yusuf</td>
                            <td>5</td>
                            <td>Premium</td>
                            <td>Today</td>
                            <td><span className={styles.active}>Active</span></td>
                            <td><ActionMenu items={actionItems} /></td>
                        </tr>

                    </tbody>

                </table>

            </div>

        </>
    );
}

export default CustomersPage;