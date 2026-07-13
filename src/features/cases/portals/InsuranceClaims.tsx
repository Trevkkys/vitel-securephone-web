import { useState } from "react";
import toast from "react-hot-toast";

import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import ActionMenu from "../../../components/ui/ActionMenu/ActionMenu";

import {
    approveClaim,
    rejectClaim,
    payClaim,
    getClaim,
} from "../../../services/case.service";

import styles from "./InsuranceClaims.module.css";

function InsuranceClaims() {
    const [selectedClaim, setSelectedClaim] =
        useState<any>(null);

    const claims = [
        {
            id: 1,
            claimNo: "CL-1001",
            subscriber: "John Doe",
            device: "iPhone 15 Pro",
            policy: "INS-44581",
            status: "Pending",
        },
        {
            id: 2,
            claimNo: "CL-1002",
            subscriber: "Mary Johnson",
            device: "Samsung S24 Ultra",
            policy: "INS-66210",
            status: "Verified",
        },
        {
            id: 3,
            claimNo: "CL-1003",
            subscriber: "David Smith",
            device: "Google Pixel 9",
            policy: "INS-77291",
            status: "Approved",
        },
        {
            id: 4,
            claimNo: "CL-1004",
            subscriber: "Grace Wilson",
            device: "iPhone 14 Pro",
            policy: "INS-55891",
            status: "Rejected",
        },
        {
            id: 5,
            claimNo: "CL-1005",
            subscriber: "Michael Adams",
            device: "Tecno Phantom X2",
            policy: "INS-89220",
            status: "Pending",
        },
        {
            id: 6,
            claimNo: "CL-1006",
            subscriber: "Sarah Bello",
            device: "iPhone 13 Pro",
            policy: "INS-99120",
            status: "Approved",
        },
        {
            id: 7,
            claimNo: "CL-1007",
            subscriber: "Aisha Musa",
            device: "Redmi Note 14",
            policy: "INS-11991",
            status: "Verified",
        },
        {
            id: 8,
            claimNo: "CL-1008",
            subscriber: "Daniel Okafor",
            device: "Samsung Z Fold 6",
            policy: "INS-33772",
            status: "Pending",
        },
    ];

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
        } catch (error) {
            console.error(error);

            toast.error("Unable to approve claim.");
        }
    }

    async function handleReject(id: number) {
        try {
            await rejectClaim(id);

            toast.success("Claim rejected.");
        } catch (error) {
            console.error(error);

            toast.error("Unable to reject claim.");
        }
    }

    async function handlePay(id: number) {
        try {
            await payClaim(id);

            toast.success("Payment completed.");
        } catch (error) {
            console.error(error);

            toast.error("Unable to process payment.");
        }
    }

    return (
        <>
            <PageHeader
                title="Insurance Claims"
                description="Review, verify and manage subscriber insurance claims."
            />

            <div className={styles.summary}>
                <SummaryCard title="Total Claims" value="2,341" />
                <SummaryCard title="Pending" value="126" />
                <SummaryCard title="Approved" value="1,882" />
                <SummaryCard title="Rejected" value="333" />
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
                            <th>Claim No.</th>
                            <th>Subscriber</th>
                            <th>Device</th>
                            <th>Policy No.</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {claims.map((claim) => {
                            const actionItems = [
                                {
                                    label: "View Claim",
                                    onClick: () => handleView(claim.id),
                                },
                                {
                                    label: "Approve Claim",
                                    onClick: () =>
                                        handleApprove(claim.id),
                                },
                                {
                                    label: "Reject Claim",
                                    onClick: () =>
                                        handleReject(claim.id),
                                },
                                {
                                    label: "Process Payment",
                                    onClick: () =>
                                        handlePay(claim.id),
                                },
                                {
                                    label: "View Documents",
                                    onClick: () =>
                                        console.log(
                                            "Documents",
                                            claim.id
                                        ),
                                },
                            ];

                            return (
                                <tr key={claim.id}>
                                    <td>{claim.claimNo}</td>

                                    <td>{claim.subscriber}</td>

                                    <td>{claim.device}</td>

                                    <td>{claim.policy}</td>

                                    <td>
                                        <span
                                            className={
                                                claim.status ===
                                                    "Pending"
                                                    ? styles.pending
                                                    : claim.status ===
                                                        "Verified"
                                                        ? styles.verified
                                                        : claim.status ===
                                                            "Approved"
                                                            ? styles.approved
                                                            : styles.rejected
                                            }
                                        >
                                            {claim.status}
                                        </span>
                                    </td>

                                    <td>
                                        <ActionMenu
                                            items={
                                                actionItems
                                            }
                                        />
                                    </td>
                                </tr>
                            );
                        })}
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
                        <strong>ID:</strong>{" "}
                        {selectedClaim.id}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        {selectedClaim.status}
                    </p>

                    <p>
                        <strong>Case ID:</strong>{" "}
                        {selectedClaim.case_id ??
                            "-"}
                    </p>

                    <p>
                        <strong>Amount:</strong>{" "}
                        {selectedClaim.amount ??
                            "-"}
                    </p>
                </div>
            )}
        </>
    );
}

export default InsuranceClaims;