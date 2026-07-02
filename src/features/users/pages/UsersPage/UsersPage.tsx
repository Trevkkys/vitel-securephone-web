import { useNavigate } from "react-router-dom";
import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../../components/ui/ActionMenu/ActionMenu";
import styles from "./UsersPage.module.css";
import { getCurrentUser } from "../../../../utils/auth";
import { PortalType } from "../../../../config/portals";
import { portalContent } from "../../../../config/portalContent";

function UsersPage() {
    const user = getCurrentUser();

    const navigate = useNavigate();

    const portal =
        user?.organization ?? PortalType.POLICE;

    const content =
        portalContent[
        portal === PortalType.SUPER_ADMIN
            ? PortalType.POLICE
            : portal
        ];

    const title = content.users.title;

    const description = content.users.description;

    const policeUsers = [
        {
            name: "Ibrahim Musa",
            email: "ibrahim@lagospolice.gov.ng",
            role: "Administrator",
            status: "Active",
            login: "Today, 09:15 AM",
        },
        {
            name: "Grace Okafor",
            email: "grace@lagospolice.gov.ng",
            role: "Investigator",
            status: "Active",
            login: "Today, 08:42 AM",
        },
        {
            name: "Daniel Bello",
            email: "daniel@lagospolice.gov.ng",
            role: "Tracking Officer",
            status: "Active",
            login: "Yesterday",
        },
        {
            name: "Aisha Mohammed",
            email: "aisha@lagospolice.gov.ng",
            role: "Investigator",
            status: "Active",
            login: "Today, 10:04 AM",
        },
        {
            name: "Kelvin James",
            email: "kelvin@lagospolice.gov.ng",
            role: "Recovery Officer",
            status: "Active",
            login: "Today, 07:51 AM",
        },
        {
            name: "Fatima Usman",
            email: "fatima@lagospolice.gov.ng",
            role: "Tracking Officer",
            status: "Active",
            login: "Yesterday",
        },
        {
            name: "Michael Adams",
            email: "michael@lagospolice.gov.ng",
            role: "Administrator",
            status: "Active",
            login: "Today, 11:18 AM",
        },
        {
            name: "Esther Nwosu",
            email: "esther@lagospolice.gov.ng",
            role: "Recovery Officer",
            status: "Disabled",
            login: "5 Days Ago",
        },
    ];

    const insuranceUsers = [
        {
            name: "Linda Okoye",
            email: "linda@leadway.ng",
            role: "Insurance Administrator",
            status: "Active",
            login: "Today, 09:10 AM",
        },
        {
            name: "James Peters",
            email: "james@leadway.ng",
            role: "Claims Supervisor",
            status: "Active",
            login: "Today, 08:45 AM",
        },
        {
            name: "Mercy Adebayo",
            email: "mercy@leadway.ng",
            role: "Claims Officer",
            status: "Active",
            login: "Yesterday",
        },
        {
            name: "Victor Obi",
            email: "victor@leadway.ng",
            role: "Verification Officer",
            status: "Active",
            login: "Today, 11:20 AM",
        },
        {
            name: "Jennifer Musa",
            email: "jennifer@leadway.ng",
            role: "Claims Officer",
            status: "Disabled",
            login: "4 Days Ago",
        },
        {
            name: "Samuel Yusuf",
            email: "samuel@leadway.ng",
            role: "Claims Supervisor",
            status: "Active",
            login: "Today, 07:58 AM",
        },
        {
            name: "Chioma Eze",
            email: "chioma@leadway.ng",
            role: "Verification Officer",
            status: "Active",
            login: "Yesterday",
        },
        {
            name: "Paul Johnson",
            email: "paul@leadway.ng",
            role: "Claims Officer",
            status: "Active",
            login: "Today, 09:55 AM",
        },
    ];

    const vitelUsers = [
        {
            name: "David Williams",
            email: "david@vitelsecurephone.com",
            role: "Platform Administrator",
            status: "Active",
            login: "Today, 09:15 AM",
        },
        {
            name: "Sarah Johnson",
            email: "sarah@vitelsecurephone.com",
            role: "Operations Manager",
            status: "Active",
            login: "Today, 08:41 AM",
        },
        {
            name: "Michael Peters",
            email: "michael@vitelsecurephone.com",
            role: "Support Engineer",
            status: "Active",
            login: "Yesterday",
        },
        {
            name: "Grace Adams",
            email: "grace@vitelsecurephone.com",
            role: "Device Operations",
            status: "Active",
            login: "Today, 10:22 AM",
        },
        {
            name: "Daniel Musa",
            email: "daniel@vitelsecurephone.com",
            role: "Support Engineer",
            status: "Disabled",
            login: "4 Days Ago",
        },
        {
            name: "Joy Okafor",
            email: "joy@vitelsecurephone.com",
            role: "Operations Manager",
            status: "Active",
            login: "Today",
        },
    ];

    const users =
        portal === PortalType.POLICE
            ? policeUsers
            : portal === PortalType.INSURANCE
                ? insuranceUsers
                : vitelUsers;
    const roleOptions = content.users.roles;

    const actionItems = [
        {
            label: "View User",
            onClick: () => { },
        },
        {
            label: "Edit User",
            onClick: () => { },
        },
        {
            label: "Assign Role",
            onClick: () => navigate("/dashboard/roles"),
        },
        {
            label: "Reset Password",
            onClick: () => { },
        },
        {
            label: "Disable User",
            onClick: () => { },
        },
    ];

    return (
        <>
            <PageHeader
                title={title}
                description={description}
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Users"
                    value="154"
                />

                <SummaryCard
                    title="Administrators"
                    value="6"
                />

                <SummaryCard
                    title="Active Users"
                    value="142"
                />

                <SummaryCard
                    title="Disabled Users"
                    value="12"
                />

            </div>

            <div className={styles.filters}>

                <input
                    className={styles.search}
                    placeholder="Search users..."
                />

                <select className={styles.select}>

                    <option>All Roles</option>

                    {roleOptions.map((role) => (
                        <option key={role}>
                            {role}
                        </option>
                    ))}

                </select>

            </div>

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Last Login</th>
                            <th></th>
                        </tr>

                    </thead>

                    <tbody>

                        {users.map((user) => (

                            <tr key={user.email}>

                                <td>{user.name}</td>

                                <td>{user.email}</td>

                                <td>{user.role}</td>

                                <td>

                                    <span
                                        className={
                                            user.status === "Active"
                                                ? styles.active
                                                : styles.disabled
                                        }
                                    >
                                        {user.status}
                                    </span>

                                </td>

                                <td>{user.login}</td>

                                <td>

                                    <ActionMenu
                                        items={actionItems}
                                    />

                                </td>

                            </tr>

                        ))}

                    </tbody>
                </table>

            </div>
        </>
    );
}

export default UsersPage;