import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import AnalyticsLineChart from "../../../components/analytics/AnalyticsLineChart";
import AnalyticsBarChart from "../../../components/analytics/AnalyticsBarChart";
import AnalyticsPieChart from "../../../components/analytics/AnalyticsPieChart";
import { getCurrentUser } from "../../../utils/auth";
import { PortalType } from "../../../config/portals";
import styles from "./AnalyticsPage.module.css";

function AnalyticsPage() {
    const user = getCurrentUser();

    const portal =
        user?.organization ?? PortalType.POLICE;

    const data = {

        [PortalType.SUPER_ADMIN]: {

            title: "Platform Analytics",

            description:
                "Monitor platform usage across all organizations.",

            cards: [
                { title: "Organizations", value: "12" },
                { title: "Users", value: "1,284" },
                { title: "Cases", value: "2,413" },
                { title: "Growth", value: "+18%" },
            ],

            line: [
                { month: "Jan", value: 240 },
                { month: "Feb", value: 310 },
                { month: "Mar", value: 420 },
                { month: "Apr", value: 520 },
                { month: "May", value: 630 },
                { month: "Jun", value: 780 },
            ],

            bar: [
                { name: "Police", value: 57 },
                { name: "Insurance", value: 34 },
                { name: "Vitel", value: 19 },
            ],

            pie: [
                { name: "Police", value: 48 },
                { name: "Insurance", value: 30 },
                { name: "Vitel", value: 22 },
            ],

        },

        [PortalType.POLICE]: {

            title: "Police Analytics",

            description:
                "Operational performance across investigations.",

            cards: [
                { title: "Cases", value: "245" },
                { title: "Recoveries", value: "91" },
                { title: "Tracking", value: "37" },
                { title: "Recovery Rate", value: "82%" },
            ],

            line: [
                { month: "Jan", value: 35 },
                { month: "Feb", value: 49 },
                { month: "Mar", value: 57 },
                { month: "Apr", value: 61 },
                { month: "May", value: 73 },
                { month: "Jun", value: 91 },
            ],

            bar: [
                { name: "GPS", value: 52 },
                { name: "X-TRAC", value: 38 },
                { name: "MSISDN", value: 29 },
            ],

            pie: [
                { name: "Recovered", value: 60 },
                { name: "Open", value: 25 },
                { name: "Pending", value: 15 },
            ],

        },

        [PortalType.INSURANCE]: {

            title: "Insurance Analytics",

            description:
                "Claims and verification insights.",

            cards: [
                { title: "Claims", value: "514" },
                { title: "Approved", value: "437" },
                { title: "Pending", value: "41" },
                { title: "Fraud", value: "8" },
            ],

            line: [
                { month: "Jan", value: 120 },
                { month: "Feb", value: 180 },
                { month: "Mar", value: 250 },
                { month: "Apr", value: 330 },
                { month: "May", value: 420 },
                { month: "Jun", value: 514 },
            ],

            bar: [
                { name: "Theft", value: 180 },
                { name: "Damage", value: 140 },
                { name: "Fire", value: 80 },
            ],

            pie: [
                { name: "Approved", value: 85 },
                { name: "Pending", value: 10 },
                { name: "Rejected", value: 5 },
            ],

        },

        [PortalType.VITEL]: {

            title: "Business Analytics",

            description:
                "Customer and platform growth.",

            cards: [
                { title: "Customers", value: "3,426" },
                { title: "Devices", value: "8,902" },
                { title: "Premium", value: "2,184" },
                { title: "Revenue", value: "₦24M" },
            ],

            line: [
                { month: "Jan", value: 480 },
                { month: "Feb", value: 720 },
                { month: "Mar", value: 980 },
                { month: "Apr", value: 1280 },
                { month: "May", value: 1620 },
                { month: "Jun", value: 1920 },
            ],

            bar: [
                { name: "Android", value: 68 },
                { name: "iPhone", value: 27 },
                { name: "Others", value: 5 },
            ],

            pie: [
                { name: "Premium", value: 64 },
                { name: "Basic", value: 28 },
                { name: "Trial", value: 8 },
            ],

        },

    }[portal];

    return (
        <>
            <PageHeader
                title={data.title}
                description={data.description}
            />

            <div className={styles.summary}>
                {data.cards.map((card) => (
                    <SummaryCard
                        key={card.title}
                        title={card.title}
                        value={card.value}
                    />
                ))}
            </div>

            <AnalyticsLineChart
                title="Monthly Growth"
                data={data.line}
            />

            <div className={styles.chartGrid}>

                <AnalyticsBarChart
                    title="Performance Breakdown"
                    data={data.bar}
                />

                <AnalyticsPieChart
                    title="Distribution"
                    data={data.pie}
                />

            </div>

            <div className={styles.insights}>

                <h2>AI Insights</h2>

                <ul>

                    <li>📈 Growth has increased steadily over the last six months.</li>

                    <li>⚡ Best performing category exceeded expectations this month.</li>

                    <li>🎯 Performance remains above the quarterly target.</li>

                    <li>💡 Recommendation: Continue focusing on high-performing channels.</li>

                </ul>

            </div>

        </>
    );
}

export default AnalyticsPage;