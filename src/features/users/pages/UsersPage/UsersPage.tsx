import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../../components/ui/ActionMenu/ActionMenu";
import UserDetailsModal from "../../components/UserDetailsModal";
import styles from "./UsersPage.module.css";
import { getCurrentUser } from "../../../../utils/auth";
import { PortalType } from "../../../../config/portals";
import { portalContent } from "../../../../config/portalContent";
import { getPortalFromRole } from "../../../../utils/getPortalFromRole";
import Button from "../../../../components/ui/Button/Button";
import {
    getUsers,
    getUser,
    deactivateUser,
    reactivateUser,
} from "../../../../services/user.service";
import toast from "react-hot-toast";

function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const user = getCurrentUser();

    const navigate = useNavigate();

    const [selectedUser, setSelectedUser] = useState<any>(null);

    const portal = getPortalFromRole(user?.role);

    const content =
        portal === PortalType.SUPER_ADMIN
            ? {
                users: {
                    title: "Platform Users",
                    description:
                        "Manage administrators, Vitel staff, police and insurance users.",
                    roles: [
                        "admin",
                        "vitel_staff",
                        "police",
                        "insurance",
                    ],
                },
            }
            : portalContent[portal];

    const title = content.users.title;

    const description = content.users.description;

    const filteredUsers = useMemo(() => {

        if (portal === PortalType.SUPER_ADMIN) {
            return users;
        }

        if (portal === PortalType.POLICE) {

            return users.filter(
                (user) =>
                    user.role?.toLowerCase() === "police"
            );

        }

        if (portal === PortalType.INSURANCE) {

            return users.filter(
                (user) =>
                    user.role?.toLowerCase() === "insurance"
            );

        }

        if (portal === PortalType.VITEL) {

            return users.filter(
                (user) =>
                    user.role?.toLowerCase() === "vitel_staff"
            );

        }

        return users;

    }, [users, portal]);

    const roleOptions = content.users.roles;

    async function loadUsers() {
        try {
            setLoading(true);

            const response = await getUsers();

            setUsers(response);

        } catch (error) {

            console.error(error);

            toast.error("Failed to load users.");

        } finally {

            setLoading(false);

        }
    }

    useEffect(() => {
        loadUsers();
    }, []);

    async function handleViewUser(id: number) {

        try {

            const data = await getUser(id);

            setSelectedUser(data);

        } catch {

            toast.error("Unable to load user.");

        }

    }

    async function handleDisableUser(id: number) {

        try {

            await deactivateUser(id);

            toast.success("User disabled.");

            loadUsers();

        } catch {

            toast.error("Unable to disable user.");

        }

    }

    async function handleReactivateUser(id: number) {

        try {

            await reactivateUser(id);

            toast.success("User reactivated.");

            loadUsers();

        } catch {

            toast.error("Unable to reactivate user.");

        }

    }

    if (loading) {
        return (
            <>
                <PageHeader
                    title={title}
                    description={description}
                />

                <div className={styles.tableWrapper}>
                    <p>Loading users...</p>
                </div>
            </>
        );
    }

    return (
        <>
            <PageHeader
                title={title}
                description={description}
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Users"
                    value={users.length.toString()}
                />

                <SummaryCard
                    title="Administrators"
                    value={
                        users.filter((u) => u.is_admin).length.toString()
                    }
                />

                <SummaryCard
                    title="Active Users"
                    value={
                        users
                            .filter((u) => u.is_active)
                            .length
                            .toString()
                    }
                />

                <SummaryCard
                    title="Disabled Users"
                    value={
                        users
                            .filter((u) => !u.is_active)
                            .length
                            .toString()
                    }
                />

            </div>

            <div className={styles.filters}>

                <input
                    className={styles.search}
                    placeholder="Search users..."
                />

                <Button
                    onClick={() => navigate("/dashboard/users/create")}
                >
                    + User
                </Button>

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

                        {filteredUsers.map((user) => (

                            <tr key={user.id}>

                                <td>{user.full_name}</td>

                                <td>{user.email}</td>

                                <td>{user.role}</td>

                                <td>

                                    <span
                                        className={
                                            user.is_active
                                                ? styles.active
                                                : styles.disabled
                                        }
                                    >
                                        {user.is_active ? "Active" : "Disabled"}
                                    </span>

                                </td>

                                <td>-</td>

                                <td>

                                    <ActionMenu
                                        items={[
                                            {
                                                label: "View User",
                                                onClick: () => handleViewUser(user.id),
                                            },
                                            {
                                                label: "Assign Role",
                                                onClick: () =>
                                                    navigate("/dashboard/roles"),
                                            },
                                            user.is_active
                                                ? {
                                                    label: "Disable User",
                                                    onClick: () =>
                                                        handleDisableUser(user.id),
                                                }
                                                : {
                                                    label: "Reactivate User",
                                                    onClick: () =>
                                                        handleReactivateUser(user.id),
                                                },
                                        ]}
                                    />

                                </td>

                            </tr>

                        ))}

                    </tbody>
                </table>

            </div>

            <UserDetailsModal
                open={!!selectedUser}
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
            />

        </>
    );
}

export default UsersPage;