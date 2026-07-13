import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";

import {
    getPoliceCases,
    getPoliceCase,
    updatePoliceCaseStatus,
    updateLastSeenLocation,
} from "../../../services/case.service";

import styles from "./PoliceCases.module.css";

interface PoliceCase {
    id: number;
    case_number: string;
    device_id: number;
    status: string;
    incident_location: string;
    police_station: string;
    is_police_report_verified: boolean;
    assigned_officer_id: number;
    last_seen_location: string;
    last_seen_at: string;
    created_at: string;
}

function PoliceCases() {
    const [cases, setCases] = useState<PoliceCase[]>([]);
    const [filteredCases, setFilteredCases] = useState<PoliceCase[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All Status");

    async function loadCases() {
        try {
            setLoading(true);

            const data = await getPoliceCases();

            setCases(data);
            setFilteredCases(data);
        } catch (error) {
            console.error(error);
            toast.error("Unable to load police cases.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadCases();
    }, []);

    useEffect(() => {
        let data = [...cases];

        if (search.trim()) {
            data = data.filter(
                (item) =>
                    item.case_number
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                    item.incident_location
                        ?.toLowerCase()
                        .includes(search.toLowerCase()) ||
                    item.police_station
                        ?.toLowerCase()
                        .includes(search.toLowerCase())
            );
        }

        if (statusFilter !== "All Status") {
            data = data.filter(
                (item) =>
                    item.status?.toLowerCase() ===
                    statusFilter.toLowerCase()
            );
        }

        setFilteredCases(data);
    }, [cases, search, statusFilter]);

    const openCases = useMemo(
        () =>
            cases.filter(
                (x) =>
                    x.status?.toLowerCase() === "open"
            ).length,
        [cases]
    );

    const trackingCases = useMemo(
        () =>
            cases.filter(
                (x) =>
                    x.status?.toLowerCase() ===
                    "tracking"
            ).length,
        [cases]
    );

    const recoveredCases = useMemo(
        () =>
            cases.filter(
                (x) =>
                    x.status?.toLowerCase() ===
                    "recovered"
            ).length,
        [cases]
    );

    async function handleView(caseId: number) {
        try {
            const data = await getPoliceCase(caseId);

            console.log(data);

            toast.success("Case loaded.");
        } catch (error) {
            console.error(error);
            toast.error("Unable to load case.");
        }
    }

    async function handleStatus(
        caseId: number,
        status: string
    ) {
        try {
            await updatePoliceCaseStatus(caseId, {
                status,
            });

            toast.success("Status updated.");

            loadCases();
        } catch (error) {
            console.error(error);
            toast.error("Unable to update status.");
        }
    }

    async function handleLastSeen(caseId: number) {
        try {
            await updateLastSeenLocation(caseId, {
                last_seen_location:
                    "Updated from dashboard",
            });

            toast.success(
                "Last seen location updated."
            );

            loadCases();
        } catch (error) {
            console.error(error);
            toast.error(
                "Unable to update location."
            );
        }
    }

    return (
        <>
            <PageHeader
                title="Police Case Management"
                description="Manage theft investigations, device tracking and recoveries."
            />

            <div className={styles.summary}>
                <SummaryCard
                    title="Open Cases"
                    value={openCases.toString()}
                />

                <SummaryCard
                    title="Tracking"
                    value={trackingCases.toString()}
                />

                <SummaryCard
                    title="Recovered"
                    value={recoveredCases.toString()}
                />

                <SummaryCard
                    title="Total Cases"
                    value={cases.length.toString()}
                />
            </div>

            <div className={styles.filters}>
                <input
                    className={styles.search}
                    placeholder="Search case..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                <select
                    className={styles.select}
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(e.target.value)
                    }
                >
                    <option>All Status</option>
                    <option>Open</option>
                    <option>Tracking</option>
                    <option>Recovered</option>
                    <option>Closed</option>
                </select>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Case No</th>
                            <th>Location</th>
                            <th>Police Station</th>
                            <th>Status</th>
                            <th>Verified</th>
                            <th>Last Seen</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td
                                    colSpan={7}
                                    style={{
                                        textAlign:
                                            "center",
                                        padding:
                                            "40px",
                                    }}
                                >
                                    Loading cases...
                                </td>
                            </tr>
                        ) : (filteredCases.map((item) => (
                            <tr key={item.id}>
                                <td>{item.case_number}</td>

                                <td>
                                    {item.incident_location}
                                </td>

                                <td>
                                    {item.police_station}
                                </td>

                                <td>
                                    <span
                                        className={
                                            styles.active
                                        }
                                    >
                                        {item.status}
                                    </span>
                                </td>

                                <td>
                                    {item.is_police_report_verified
                                        ? "Yes"
                                        : "No"}
                                </td>

                                <td>
                                    {item.last_seen_location ??
                                        "-"}
                                </td>

                                <td>
                                    <ActionMenu
                                        items={[
                                            {
                                                label: "View Case",
                                                onClick: () =>
                                                    handleView(
                                                        item.id
                                                    ),
                                            },
                                            {
                                                label: "Mark Tracking",
                                                onClick: () =>
                                                    handleStatus(
                                                        item.id,
                                                        "tracking"
                                                    ),
                                            },
                                            {
                                                label: "Mark Recovered",
                                                onClick: () =>
                                                    handleStatus(
                                                        item.id,
                                                        "recovered"
                                                    ),
                                            },
                                            {
                                                label: "Close Case",
                                                onClick: () =>
                                                    handleStatus(
                                                        item.id,
                                                        "closed"
                                                    ),
                                            },
                                            {
                                                label: "Update Last Seen",
                                                onClick: () =>
                                                    handleLastSeen(
                                                        item.id
                                                    ),
                                            },
                                        ]}
                                    />
                                </td>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default PoliceCases;