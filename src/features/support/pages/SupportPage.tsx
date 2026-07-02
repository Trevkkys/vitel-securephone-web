import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";
import styles from "./SupportPage.module.css";

function SupportPage() {

    const actions = [
        { label: "View Ticket", onClick: () => { } },
        { label: "Assign Engineer", onClick: () => { } },
        { label: "Resolve Ticket", onClick: () => { } },
        { label: "Close Ticket", onClick: () => { } },
    ];

    return (
        <>
            <PageHeader
                title="Support Centre"
                description="Manage customer enquiries, technical issues and support tickets."
            />

            <div className={styles.summary}>

                <SummaryCard title="Open Tickets" value="84" />

                <SummaryCard title="Resolved Today" value="31" />

                <SummaryCard title="Pending Response" value="18" />

                <SummaryCard title="Average Resolution" value="2.4 hrs" />

            </div>

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>

                            <th>Ticket</th>

                            <th>Customer</th>

                            <th>Issue</th>

                            <th>Priority</th>

                            <th>Assigned</th>

                            <th>Status</th>

                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>

                            <td>SUP-1024</td>

                            <td>John Ibrahim</td>

                            <td>Unable to activate device</td>

                            <td><span className={styles.high}>High</span></td>

                            <td>David Williams</td>

                            <td><span className={styles.open}>Open</span></td>

                            <td><ActionMenu items={actions} /></td>

                        </tr>

                        <tr>

                            <td>SUP-1025</td>

                            <td>Mary Johnson</td>

                            <td>Tracking delay</td>

                            <td><span className={styles.medium}>Medium</span></td>

                            <td>Sarah Johnson</td>

                            <td><span className={styles.progress}>In Progress</span></td>

                            <td><ActionMenu items={actions} /></td>

                        </tr>

                        <tr>

                            <td>SUP-1026</td>

                            <td>Peter Okafor</td>

                            <td>Password reset</td>

                            <td><span className={styles.low}>Low</span></td>

                            <td>Grace Adams</td>

                            <td><span className={styles.closed}>Resolved</span></td>

                            <td><ActionMenu items={actions} /></td>

                        </tr>

                        <tr>

                            <td>SUP-1027</td>

                            <td>Emmanuel Bello</td>

                            <td>Phone not syncing</td>

                            <td><span className={styles.high}>High</span></td>

                            <td>Michael Peters</td>

                            <td><span className={styles.progress}>In Progress</span></td>

                            <td><ActionMenu items={actions} /></td>

                        </tr>

                        <tr>

                            <td>SUP-1028</td>

                            <td>Linda James</td>

                            <td>Subscription enquiry</td>

                            <td><span className={styles.low}>Low</span></td>

                            <td>Joy Okafor</td>

                            <td><span className={styles.open}>Open</span></td>

                            <td><ActionMenu items={actions} /></td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </>
    );
}

export default SupportPage;