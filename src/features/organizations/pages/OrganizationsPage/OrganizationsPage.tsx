import styles from "./OrganizationsPage.module.css";
import { organizations } from "../../../../config/organizations";
import ActionMenu from "../../../../components/ui/ActionMenu/ActionMenu";
import PageHeader from "../../../../components/common/PageHeader/PageHeader";
import Button from "../../../../components/ui/Button/Button";
import SummaryCard from "../../../../components/common/SummaryCard/SummaryCard";

import { useNavigate } from "react-router-dom";

function OrganizationsPage() {

    const navigate = useNavigate();

    return (
        <>
            {/* Header */}

            <PageHeader
                title="Organization Management"
                description="Manage partner organizations, portal access and enabled modules."
                action={
                    <div className={styles.headerButton}>
                        <Button>
                            + Add Organization
                        </Button>
                    </div>
                }
            />

            {/* Summary */}

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Organizations"
                    value="12"
                />

                <SummaryCard
                    title="Police Agencies"
                    value="4"
                />

                <SummaryCard
                    title="Insurance Companies"
                    value="5"
                />

                <SummaryCard
                    title="Internal Teams"
                    value="3"
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

                        {organizations.map((organization) => (

                            <tr key={organization.id}>

                                <td>{organization.name}</td>

                                <td>{organization.type}</td>

                                <td>{organization.users}</td>

                                <td>{organization.portal}</td>

                                <td>{organization.status}</td>

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
                                            {
                                                label: "Suspend",
                                                onClick: () => alert("Suspend"),
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

                        ))}

                    </tbody>

                </table>

            </div>

        </>
    );
}

export default OrganizationsPage;