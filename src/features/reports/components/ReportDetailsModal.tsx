import styles from "./ReportDetailsModal.module.css";
import Button from "../../../components/ui/Button/Button";
import toast from "react-hot-toast";

import {
    verifyReport,
    assignOfficer,
    updateSimLockStatus,
    escalateReport,
    updateBlacklistStatus,
} from "../../../services/report.service";
import { getCurrentUser } from "../../../utils/currentUser";

import { getUsers } from "../../../services/user.service";
import { useEffect, useState } from "react";

interface Props {
    open: boolean;
    report: any;
    onClose: () => void;
    onAssigned: () => void;
}

function ReportDetailsModal({
    open,
    report,
    onClose,
    onAssigned,
}: Props) {

    const [officers, setOfficers] = useState<any[]>([]);
    const [selectedOfficer, setSelectedOfficer] = useState<number | "">("");

    useEffect(() => {
        if (open) {
            loadOfficers();
        }
    }, [open]);

    if (!open || !report) return null;

    const currentUser = getCurrentUser();

    console.log("Current User Object:", currentUser);

    async function loadOfficers() {
        try {
            const users = await getUsers();

            const policeUsers = users.filter(
                (user: any) =>
                    user.role === "police" &&
                    user.is_active
            );

            setOfficers(policeUsers);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleApproveSimLock() {
        try {
            await updateSimLockStatus(
                report.id,
                "Approved"
            );

            toast.success(
                "SIM Lock request approved."
            );
        } catch (error) {
            console.error(error);

            toast.error(
                "Unable to approve SIM Lock."
            );
        }
    }

    async function handleRejectSimLock() {
        try {
            await updateSimLockStatus(
                report.id,
                "Rejected"
            );

            toast.success(
                "SIM Lock request rejected."
            );
        } catch (error) {
            console.error(error);

            toast.error(
                "Unable to reject SIM Lock."
            );
        }
    }

    async function handleApproveBlacklist() {
        try {
            await updateBlacklistStatus(
                report.id,
                "Approved"
            );

            toast.success(
                "Blacklist request approved."
            );
        } catch (error) {
            console.error(error);

            toast.error(
                "Unable to approve blacklist."
            );
        }
    }

    async function handleRejectBlacklist() {
        try {
            await updateBlacklistStatus(
                report.id,
                "Rejected"
            );

            toast.success(
                "Blacklist request rejected."
            );
        } catch (error) {
            console.error(error);

            toast.error(
                "Unable to reject blacklist."
            );
        }
    }

    async function handleVerify() {

        try {

            await verifyReport(report.id);

            toast.success(
                "Police report verified."
            );

        } catch (error) {

            console.error(error);

            toast.error(
                "Unable to verify report."
            );

        }

    }

    async function handleAssignOfficer() {
        try {
            if (!selectedOfficer) {
                toast.error("Please select a police officer.");
                return;
            }

            console.log("Assigning report:", report.id);
            console.log("Officer ID:", selectedOfficer);

            await assignOfficer(
                report.id,
                Number(selectedOfficer)
            );

            toast.success("Officer assigned.");

            await onAssigned();

            onClose();

        } catch (error) {
            console.error("Assign officer error:", error);
            toast.error("Unable to assign officer.");
        }
    }

    async function handleEscalate() {

        try {

            await escalateReport(report.id);

            toast.success(
                "Report escalated."
            );

        } catch (error) {

            console.error(error);

            toast.error(
                "Unable to escalate report."
            );

        }

    }

    return (

        <div
            className={styles.overlay}
            onClick={onClose}
        >

            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.header}>

                    <div>

                        <h2>
                            Report Details
                        </h2>

                        <p>
                            {report.report_number}
                        </p>

                    </div>

                    <Button onClick={onClose}>
                        ✕
                    </Button>

                </div>

                <div className={styles.body}>

                    <div className={styles.section}>

                        <h3>
                            Report Information
                        </h3>

                        <div className={styles.grid}>

                            <div>

                                <span>Report Number</span>

                                <strong>
                                    {report.report_number}
                                </strong>

                            </div>

                            <div>

                                <span>Status</span>

                                <strong>
                                    {report.status}
                                </strong>

                            </div>

                            <div>

                                <span>Incident Location</span>

                                <strong>
                                    {report.incident_location}
                                </strong>

                            </div>

                            <div>

                                <span>Police Station</span>

                                <strong>
                                    {report.police_station}
                                </strong>

                            </div>

                            <div>

                                <span>Contact Phone</span>

                                <strong>
                                    {report.contact_phone}
                                </strong>

                            </div>

                            <div>

                                <span>Created</span>

                                <strong>

                                    {new Date(
                                        report.created_at
                                    ).toLocaleString()}

                                </strong>

                            </div>

                        </div>

                    </div>

                    <div className={styles.section}>

                        <h3>
                            Subscriber
                        </h3>

                        <div className={styles.grid}>

                            <div>

                                <span>Name</span>

                                <strong>
                                    {report.subscriber_name}
                                </strong>

                            </div>

                            <div>

                                <span>Phone</span>

                                <strong>
                                    {report.subscriber_phone}
                                </strong>

                            </div>

                            <div>

                                <span>Subscriber ID</span>

                                <strong>
                                    {report.subscriber_id}
                                </strong>

                            </div>

                        </div>

                    </div>

                    <div className={styles.section}>

                        <h3>
                            Device
                        </h3>

                        <div className={styles.grid}>

                            <div>

                                <span>Brand</span>

                                <strong>
                                    {report.device_brand}
                                </strong>

                            </div>

                            <div>

                                <span>Model</span>

                                <strong>
                                    {report.device_model}
                                </strong>

                            </div>

                            <div>

                                <span>Device ID</span>

                                <strong>
                                    {report.device_id}
                                </strong>

                            </div>

                        </div>

                    </div>

                    <div className={styles.section}>

                        <h3>
                            Investigation
                        </h3>

                        <div className={styles.grid}>

                            <div>

                                <span>Assigned Officer</span>

                                <strong>
                                    {report.assigned_officer_name}
                                </strong>

                                <select
                                    className={styles.select}
                                    value={selectedOfficer}
                                    onChange={(e) =>
                                        setSelectedOfficer(Number(e.target.value))
                                    }
                                >

                                    <option value="">
                                        -- Select Police Officer --
                                    </option>

                                    {officers.map((officer) => (

                                        <option
                                            key={officer.id}
                                            value={officer.id}
                                        >
                                            {officer.full_name || officer.email}
                                        </option>

                                    ))}

                                </select>

                                <Button
                                    onClick={handleAssignOfficer}
                                >
                                    Assign
                                </Button>

                            </div>

                            <div>

                                <span>Officer ID</span>

                                <strong>
                                    {report.assigned_officer_id}
                                </strong>

                            </div>

                            <div>

                                <span>Last Seen</span>

                                <strong>
                                    {report.last_seen_location}
                                </strong>

                            </div>

                            <div>

                                <span>Last Seen At</span>

                                <strong>
                                    {report.last_seen_at
                                        ? new Date(report.last_seen_at).toLocaleString()
                                        : "-"}
                                </strong>

                            </div>

                        </div>

                    </div>

                    <div className={styles.section}>

                        <h3>
                            Security Actions
                        </h3>

                        <div className={styles.actionCard}>

                            <div>

                                <h4>SIM Lock Status</h4>

                                <p>{report.sim_lock_status}</p>

                            </div>

                            <div className={styles.actionButtons}>

                                <Button
                                    onClick={handleApproveSimLock}
                                >
                                    Approve
                                </Button>

                                <Button
                                    variant="secondary"
                                    onClick={handleRejectSimLock}
                                >
                                    Reject
                                </Button>

                            </div>

                        </div>

                        <div className={styles.actionCard}>

                            <div>

                                <h4>Blacklist Status</h4>

                                <p>{report.blacklist_status}</p>

                            </div>

                            <div className={styles.actionButtons}>

                                <Button
                                    onClick={handleApproveBlacklist}
                                >
                                    Approve
                                </Button>

                                <Button
                                    variant="secondary"
                                    onClick={handleRejectBlacklist}
                                >
                                    Reject
                                </Button>

                            </div>

                        </div>

                        <div className={styles.actionCard}>

                            <div>

                                <h4>Police Report Verification</h4>

                                <p>
                                    {report.is_police_report_verified
                                        ? "Verified"
                                        : "Pending Verification"}
                                </p>

                            </div>

                            {!report.is_police_report_verified && (

                                <Button
                                    onClick={handleVerify}
                                >
                                    Verify Report
                                </Button>

                            )}

                        </div>

                        <div className={styles.actionCard}>

                            <div>

                                <h4>Insurance</h4>

                                <p>
                                    Escalate this report for claim processing.
                                </p>

                            </div>

                            <Button
                                onClick={handleEscalate}
                            >
                                Escalate
                            </Button>

                        </div>

                        <div className={styles.section}>

                            <h3>
                                Description
                            </h3>

                            <p className={styles.description}>
                                {report.description}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default ReportDetailsModal;