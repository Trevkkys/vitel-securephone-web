import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import Button from "../../../components/ui/Button/Button";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";

import {
    getReports,
    getReport,
    getReportTimeline,
    verifyReport,
    escalateReport,
    closeReport,
    updateSimLockStatus,
    updateBlacklistStatus,
} from "../../../services/report.service";

import { getCurrentUser } from "../../../utils/auth";
import { getPortalFromRole } from "../../../utils/getPortalFromRole";
import { PortalType } from "../../../config/portals";

import ReportDetailsModal from "../components/ReportDetailsModal";
import ReportTimelineDrawer from "../components/ReportTimelineDrawer";

import styles from "./ReportsPage.module.css";

interface Report {
    id: number;
    report_number: string;
    status: string;
    incident_location: string;
    subscriber_name: string;
    subscriber_phone: string;
    device_brand: string;
    device_model: string;
    assigned_officer_id: number;
    assigned_officer_name: string;
    created_at: string;
}

function ReportsPage() {

    const user = getCurrentUser();

    const portal = getPortalFromRole(user?.role);

    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] =
        useState("All");

    const [selectedReport, setSelectedReport] =
        useState<any>(null);

    const [timeline, setTimeline] =
        useState<any[]>([]);

    const [openDetails, setOpenDetails] =
        useState(false);

    const [openTimeline, setOpenTimeline] =
        useState(false);

    useEffect(() => {
        loadReports();
    }, []);

    async function loadReports() {

        try {

            setLoading(true);

            const data = await getReports();

            setReports(data);

        } catch (error) {

            console.error(error);

            toast.error("Unable to load reports.");

        } finally {

            setLoading(false);

        }

    }

    async function handleView(id: number) {

        try {

            const data = await getReport(id);

            setSelectedReport(data);

            setOpenDetails(true);

        } catch {

            toast.error("Unable to load report.");

        }

    }

    async function handleTimeline(id: number) {

        try {

            const data =
                await getReportTimeline(id);

            setTimeline(data);

            setOpenTimeline(true);

        } catch {

            toast.error("Unable to load timeline.");

        }

    }

    async function handleVerify(id: number) {

        try {

            await verifyReport(id);

            toast.success("Police report verified.");

            loadReports();

        } catch {

            toast.error("Verification failed.");

        }

    }


    async function handleEscalate(id: number) {

        try {

            await escalateReport(id);

            toast.success(
                "Escalated to Insurance."
            );

            loadReports();

        } catch {

            toast.error("Unable to escalate.");

        }

    }

    async function handleClose(id: number) {

        try {

            await closeReport(id);

            toast.success("Report closed.");

            loadReports();

        } catch {

            toast.error("Unable to close report.");

        }

    }

    async function handleSimLock(id: number) {

        try {

            await updateSimLockStatus(id, "Locked");

            toast.success("SIM lock updated.");

            loadReports();

        } catch {

            toast.error("Update failed.");

        }

    }

    async function handleBlacklist(id: number) {

        try {

            await updateBlacklistStatus(id, "Blacklisted");

            toast.success(
                "Blacklist updated."
            );

            loadReports();

        } catch {

            toast.error("Update failed.");

        }

    }

    const filteredReports = useMemo(() => {

        return reports.filter((report) => {

            const matchesSearch =
                report.report_number
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                report.subscriber_name
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                report.device_brand
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                statusFilter === "All" ||

                report.status === statusFilter;

            return matchesSearch && matchesStatus;

        });

    }, [reports, search, statusFilter]);

    const totalReports = reports.length;

    const verifiedReports =
        reports.filter(
            (r) =>
                r.status === "Verified"
        ).length;

    const activeReports =
        reports.filter(
            (r) =>
                r.status !== "Closed"
        ).length;

    const closedReports =
        reports.filter(
            (r) =>
                r.status === "Closed"
        ).length;

    return (

        <>

            <PageHeader
                title={
                    portal === PortalType.SUPER_ADMIN
                        ? "Platform Reports"
                        : "Operational Reports"
                }
                description="Monitor and manage incident reports across the platform."
            />

            <div className={styles.summary}>

                <SummaryCard
                    title="Total Reports"
                    value={totalReports.toString()}
                />

                <SummaryCard
                    title="Verified"
                    value={verifiedReports.toString()}
                />

                <SummaryCard
                    title="Active"
                    value={activeReports.toString()}
                />

                <SummaryCard
                    title="Closed"
                    value={closedReports.toString()}
                />

            </div>

            <div className={styles.toolbar}>

                <input
                    className={styles.search}
                    placeholder="Search reports..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                />

                <select
                    className={styles.select}
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(
                            e.target.value
                        )
                    }
                >

                    <option>All</option>

                    <option>Pending</option>

                    <option>Verified</option>

                    <option>Assigned</option>

                    <option>Escalated</option>

                    <option>Closed</option>

                </select>

                <Button>

                    Generate Report

                </Button>

                <Button>

                    Export PDF

                </Button>

                <Button>

                    Export Excel

                </Button>

            </div>

            <div className={styles.tableCard}>

                <table className={styles.table}>

                    <thead>

                        <tr>

                            <th>Report No.</th>

                            <th>Subscriber</th>

                            <th>Device</th>

                            <th>Location</th>

                            <th>Status</th>

                            <th>Officer</th>

                            <th>Date</th>

                            <th></th>

                        </tr>

                    </thead>

                    <tbody>

                        {loading ? (
                            <tr>
                                <td
                                    colSpan={8}
                                    style={{
                                        textAlign: "center",
                                        padding: "40px",
                                    }}
                                >
                                    Loading reports...
                                </td>
                            </tr>
                        ) : filteredReports.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={8}
                                    style={{
                                        textAlign: "center",
                                        padding: "40px",
                                    }}
                                >
                                    No reports found.
                                </td>
                            </tr>
                        ) : (
                            filteredReports.map((report) => {

                                const actionItems = [

                                    {
                                        label: "View Details",
                                        onClick: () =>
                                            handleView(report.id),
                                    },

                                    {
                                        label: "View Timeline",
                                        onClick: () =>
                                            handleTimeline(report.id),
                                    },

                                    {
                                        label: "Verify Report",
                                        onClick: () =>
                                            handleVerify(report.id),
                                    },

                                    {
                                        label: "Assign Officer",
                                        onClick: () => handleView(report.id),
                                    },

                                    {
                                        label:
                                            "Escalate to Insurance",
                                        onClick: () =>
                                            handleEscalate(report.id),
                                    },

                                    {
                                        label: "Update SIM Lock",
                                        onClick: () =>
                                            handleSimLock(report.id),
                                    },

                                    {
                                        label:
                                            "Update Blacklist",
                                        onClick: () =>
                                            handleBlacklist(report.id),
                                    },

                                    {
                                        label: "Close Report",
                                        onClick: () =>
                                            handleClose(report.id),
                                    },

                                ];

                                return (

                                    <tr key={report.id}>

                                        <td>
                                            {report.report_number}
                                        </td>

                                        <td>
                                            {report.subscriber_name}
                                        </td>

                                        <td>

                                            {report.device_brand}

                                            {" "}

                                            {report.device_model}

                                        </td>

                                        <td>
                                            {report.incident_location}
                                        </td>

                                        <td>

                                            <span
                                                className={`${styles.status} ${styles[
                                                    report.status
                                                        .toLowerCase()
                                                        .replace(
                                                            /\s+/g,
                                                            ""
                                                        )
                                                ] || ""}`}
                                            >
                                                {report.status}
                                            </span>

                                        </td>

                                        <td>

                                            {report.assigned_officer_name ??
                                                "-"}

                                        </td>

                                        <td>

                                            {new Date(
                                                report.created_at
                                            ).toLocaleDateString()}

                                        </td>

                                        <td>

                                            <ActionMenu
                                                items={actionItems}
                                            />

                                        </td>

                                    </tr>

                                );

                            })
                        )}

                    </tbody>

                </table>

            </div>

            <div className={styles.bottomGrid}>

                <div className={styles.panel}>

                    <h2>
                        Generate Report
                    </h2>

                    <div className={styles.generateGrid}>

                        <select
                            className={styles.select}
                        >
                            <option>
                                Incident Report
                            </option>

                            <option>
                                Recovery Report
                            </option>

                            <option>
                                Monthly Summary
                            </option>

                            <option>
                                Officer Performance
                            </option>

                            <option>
                                Device Statistics
                            </option>

                        </select>

                        <input
                            type="date"
                            className={styles.date}
                        />

                        <input
                            type="date"
                            className={styles.date}
                        />

                    </div>

                    <div
                        className={styles.exportButtons}
                    >

                        <Button>
                            Export PDF
                        </Button>

                        <Button>
                            Export Excel
                        </Button>

                        <Button>
                            Export CSV
                        </Button>

                    </div>

                </div>

                <div className={styles.panel}>

                    <h2>
                        Recent Activity
                    </h2>

                    <ul className={styles.activity}>

                        <li>
                            Police report verified
                        </li>

                        <li>
                            Insurance escalation completed
                        </li>

                        <li>
                            SIM lock activated
                        </li>

                        <li>
                            Device blacklisted
                        </li>

                        <li>
                            Investigation closed
                        </li>

                    </ul>

                </div>

            </div>

            <ReportDetailsModal
                open={openDetails}
                report={selectedReport}
                onClose={() => setOpenDetails(false)}
                onAssigned={loadReports}
            />

            <ReportTimelineDrawer
                open={openTimeline}
                timeline={timeline}
                onClose={() =>
                    setOpenTimeline(false)
                }
            />

        </>

    );

}

export default ReportsPage;