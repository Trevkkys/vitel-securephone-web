import styles from "./OrganizationsPage.module.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
    getUsers,
    deactivateUser,
    reactivateUser,
} from "../../../../services/user.service";
import ActionMenu from "../../../../components/ui/ActionMenu/ActionMenu";
import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import Button from "../../../../components/ui/Button/Button";
import SummaryCard from "../../../../components/common/SummaryCard/SummaryCard";

import { useNavigate } from "react-router-dom";

function OrganizationsPage() {

    const navigate = useNavigate();

    const [organizations, setOrganizations] = useState<any[]>([]);

    const [loading, setLoading] = useState(true);

    async function loadOrganizations() {
        try {
            const users = await getUsers();

            console.log("Users from API:", users);

            const organizations = users.filter(
                (user: any) =>
                    user.is_active &&
                    (
                        user.role === "police" ||
                        user.role === "insurance" ||
                        user.role === "vitel_staff"
                    )
            );

            setOrganizations(organizations);
        } catch (error) {
            console.error(error);
            toast.error("Unable to load organizations.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadOrganizations();
    }, []);

    async function handleDeactivate(id: number) {
        if (!confirm("Deactivate this organization?")) return;

        try {
            await deactivateUser(id);

            toast.success("Organization deactivated.");

            loadOrganizations();
        } catch (error) {
            console.error(error);

            toast.error("Unable to deactivate organization.");
        }
    }

    async function handleReactivate(id: number) {
        try {
            await reactivateUser(id);

            toast.success("Organization reactivated.");

            loadOrganizations();
        } catch (error) {
            console.error(error);

            toast.error("Unable to reactivate organization.");
        }
    }

    return (
        <>
            {/* Header */}

            <PageHeader
                title="Organization Management"
                description="Manage partner organizations, portal access and enabled modules."
                action={
                    <div className={styles.headerButton}>
                        <Button
                            onClick={() =>
                                navigate("/dashboard/organizations/create")
                            }
                        >
                            + Add Organization
                        </Button>
                    </div>
                }
            />

            {/* Summary */}

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Organizations"
                    value={organizations.length.toString()}
                />

                <SummaryCard
                    title="Police Agencies"
                    value="1"
                />

                <SummaryCard
                    title="Insurance Companies"
                    value="1"
                />

                <SummaryCard
                    title="Internal Teams"
                    value="1"
                />

            </div>

            {/* Filters */}

            <div className={styles.filters}>

                <input
                    placeholder="Search organization..."
                    className={styles.search}
                />

                <select className={styles.select}>
                    <option>All Types</option>
                    <option>Police</option>
                    <option>Insurance</option>
                    <option>Internal</option>
                </select>

                <select className={styles.select}>
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Suspended</option>
                </select>

            </div>

            {/* Table */}

            <div className={styles.tableWrapper}>

                <table className={styles.table}>

                    <thead>

                        <tr>
                            <th>Organization</th>
                            <th>Type</th>
                            <th>Users</th>
                            <th>Portal</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>

                    </thead>

                    <tbody>

                        {loading ? (

                            <tr>
                                <td colSpan={7}>Loading...</td>
                            </tr>

                        ) : organizations.length === 0 ? (

                            <tr>
                                <td colSpan={7}>No organizations found.</td>
                            </tr>

                        ) : (

                            organizations.map((organization) => (

                                <tr key={organization.id}>

                                    <td>{organization.full_name || organization.email}</td>

                                    <td>{organization.role}</td>

                                    <td>—</td>

                                    <td>{organization.email}</td>

                                    <td>
                                        {organization.is_active !== false ? "Active" : "Inactive"}
                                    </td>

                                    <td>

                                        <ActionMenu
                                            items={[
                                                {
                                                    label: "Enable Modules",
                                                    onClick: () => alert("Modules"),
                                                },
                                                {
                                                    label: "Administrator",
                                                    onClick: () => alert("Administrator"),
                                                },
                                                organization.is_active
                                                    ? {
                                                        label: "Deactivate",
                                                        onClick: () =>
                                                            handleDeactivate(organization.id),
                                                    }
                                                    : {
                                                        label: "Reactivate",
                                                        onClick: () =>
                                                            handleReactivate(organization.id),
                                                    },
                                            ]}
                                        />

                                    </td>

                                    <td>

                                        <button
                                            className={styles.viewButton}
                                            onClick={() =>
                                                navigate(
                                                    `/dashboard/organizations/${organization.id}`
                                                )
                                            }
                                        >
                                            View
                                        </button>

                                    </td>

                                </tr>

                            )))}

                    </tbody>

                </table>

            </div>

        </>
    );
}

export default OrganizationsPage;