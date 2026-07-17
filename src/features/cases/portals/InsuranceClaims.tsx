import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";

import {
    getClaims,
    getClaim,
    approveClaim,
    rejectClaim,
    payClaim,
} from "../../../services/insurance.service";

import styles from "./InsuranceClaims.module.css";

function InsuranceClaims() {
    const [selectedClaim, setSelectedClaim] =
        useState<any>(null);

    const [claims, setClaims] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadClaims();
    }, []);

    async function loadClaims() {
        try {
            const data = await getClaims();

            setClaims(data);
        } catch (error) {
            console.error(error);

            toast.error("Unable to load claims.");
        } finally {
            setLoading(false);
        }
    }

    async function handleView(id: number) {
        try {
            const data = await getClaim(id);

            setSelectedClaim(data);

            console.log(data);

            toast.success("Claim loaded.");
        } catch (error) {
            console.error(error);

            toast.error("Unable to load claim.");
        }
    }

    async function handleApprove(id: number) {
        try {
            await approveClaim(id);

            toast.success("Claim approved.");

            loadClaims();
        } catch (error) {
            console.error(error);

            toast.error("Unable to approve claim.");
        }
    }

    async function handleReject(id: number) {
        try {
            await rejectClaim(id);

            toast.success("Claim rejected.");

            loadClaims();
        } catch (error) {
            console.error(error);

            toast.error("Unable to reject claim.");
        }
    }

    async function handlePay(id: number) {
        try {
            await payClaim(id);

            toast.success("Payment completed.");

            loadClaims();
        } catch (error) {
            console.error(error);

            toast.error("Unable to process payment.");
        }
    }

    const pending = claims.filter(
        (c) => c.status === "Pending"
    ).length;

    const approved = claims.filter(
        (c) => c.status === "Approved"
    ).length;

    const rejected = claims.filter(
        (c) => c.status === "Rejected"
    ).length;

    return (
        <>
            <PageHeader
                title="Insurance Claims"
                description="Review, verify and manage subscriber insurance claims."
            />

            <div className={styles.summary}>
                <SummaryCard
                    title="Total Claims"
                    value={String(claims.length)}
                />

                <SummaryCard
                    title="Pending"
                    value={String(pending)}
                />

                <SummaryCard
                    title="Approved"
                    value={String(approved)}
                />

                <SummaryCard
                    title="Rejected"
                    value={String(rejected)}
                />
            </div>

            <div className={styles.filters}>
                <input
                    className={styles.search}
                    placeholder="Search claim number, subscriber or policy..."
                />

                <select className={styles.select}>
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Verified</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                    <option>Paid</option>
                </select>

                <select className={styles.select}>
                    <option>All Providers</option>
                    <option>Leadway</option>
                    <option>AIICO</option>
                    <option>AXA Mansard</option>
                    <option>Cornerstone</option>
                </select>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Case No.</th>
                            <th>Subscriber</th>
                            <th>Phone</th>
                            <th>Depreciated Value</th>
                            <th>Approved Amount</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>

                        {loading ? (

                            <tr>
                                <td colSpan={6}>Loading...</td>
                            </tr>

                        ) : claims.length === 0 ? (

                            <tr>
                                <td colSpan={6}>No claims found.</td>
                            </tr>

                        ) : (

                            claims.map((claim) => {

                                const actionItems = [
                                    {
                                        label: "View Claim",
                                        onClick: () => handleView(claim.id),
                                    },
                                    {
                                        label: "Approve Claim",
                                        onClick: () => handleApprove(claim.id),
                                    },
                                    {
                                        label: "Reject Claim",
                                        onClick: () => handleReject(claim.id),
                                    },
                                    {
                                        label: "Process Payment",
                                        onClick: () => handlePay(claim.id),
                                    },
                                ];

                                return (
                                    <tr key={claim.id}>

                                        <td>{claim.case_number}</td>

                                        <td>{claim.subscriber_name}</td>

                                        <td>{claim.subscriber_phone}</td>

                                        <td>₦{claim.depreciated_value?.toLocaleString()}</td>

                                        <td>₦{claim.approved_amount?.toLocaleString()}</td>

                                        <td>
                                            <span
                                                className={
                                                    claim.status === "Pending"
                                                        ? styles.pending
                                                        : claim.status === "Approved"
                                                            ? styles.approved
                                                            : claim.status === "Rejected"
                                                                ? styles.rejected
                                                                : styles.verified
                                                }
                                            >
                                                {claim.status}
                                            </span>
                                        </td>

                                        <td>
                                            <ActionMenu items={actionItems} />
                                        </td>

                                    </tr>
                                );

                            })

                        )}

                    </tbody>

                </table>
            </div>

            {selectedClaim && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        border: "1px solid var(--border-color)",
                        borderRadius: "12px",
                        background:
                            "var(--surface)",
                    }}
                >
                    <h3>
                        Claim Details
                    </h3>

                    <p>
                        <strong>Case Number:</strong>{" "}
                        {selectedClaim.case_number}
                    </p>

                    <p>
                        <strong>Subscriber:</strong>{" "}
                        {selectedClaim.subscriber_name}
                    </p>

                    <p>
                        <strong>Phone:</strong>{" "}
                        {selectedClaim.subscriber_phone}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        {selectedClaim.status}
                    </p>

                    <p>
                        <strong>Depreciated Value:</strong>{" "}
                        ₦{selectedClaim.depreciated_value?.toLocaleString()}
                    </p>

                    <p>
                        <strong>Approved Amount:</strong>{" "}
                        ₦{selectedClaim.approved_amount?.toLocaleString()}
                    </p>

                    <p>
                        <strong>Reason:</strong>{" "}
                        {selectedClaim.rejection_reason || "-"}
                    </p>
                </div>
            )}
        </>
    );
}

export default InsuranceClaims;