import PageHeader from "../../../components/common/PageHeader/PageHeader";
import SummaryCard from "../../../components/common/SummaryCard/SummaryCard";
import AnalyticsLineChart from "../../../components/analytics/AnalyticsLineChart";
import AnalyticsBarChart from "../../../components/analytics/AnalyticsBarChart";
import AnalyticsPieChart from "../../../components/analytics/AnalyticsPieChart";
import { PortalType } from "../../../config/portals";
import styles from "./AnalyticsPage.module.css";

interface SummaryCardData {
    title: string;
    value: string;
    trend: string;
    trendType: "up" | "down";
    subtitle: string;
}

interface LineChartData {
    month: string;
    value: number;
}

interface CategoryChartData {
    name: string;
    value: number;
}

interface AnalyticsPortalData {
    title: string;
    description: string;
    cards: SummaryCardData[];
    line: LineChartData[];
    bar: CategoryChartData[];
    pie: CategoryChartData[];
}

function AnalyticsPage() {
    const portal = PortalType.SUPER_ADMIN;

    const analyticsData: Record<PortalType, AnalyticsPortalData> = {

        [PortalType.SUPER_ADMIN]: {
            title: "Platform Analytics",
            description: "Monitor platform usage across all organizations.",

            cards: [
                {
                    title: "Organizations",
                    value: "12",
                    trend: "+2",
                    trendType: "up",
                    subtitle: "Active organizations",
                },
                {
                    title: "Users",
                    value: "1,284",
                    trend: "+8%",
                    trendType: "up",
                    subtitle: "Compared to last month",
                },
                {
                    title: "Cases",
                    value: "2,413",
                    trend: "+11%",
                    trendType: "up",
                    subtitle: "Platform-wide",
                },
                {
                    title: "Growth",
                    value: "+18%",
                    trend: "+4%",
                    trendType: "up",
                    subtitle: "Monthly growth",
                },
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
            description: "Operational performance across investigations.",

            cards: [
                {
                    title: "Cases",
                    value: "245",
                    trend: "+9%",
                    trendType: "up",
                    subtitle: "Opened this month",
                },
                {
                    title: "Recoveries",
                    value: "91",
                    trend: "+6%",
                    trendType: "up",
                    subtitle: "Successful recoveries",
                },
                {
                    title: "Tracking",
                    value: "37",
                    trend: "-3%",
                    trendType: "down",
                    subtitle: "Active operations",
                },
                {
                    title: "Recovery Rate",
                    value: "82%",
                    trend: "+4%",
                    trendType: "up",
                    subtitle: "Compared to last month",
                },
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
            description: "Claims and verification insights.",

            cards: [
                {
                    title: "Claims",
                    value: "514",
                    trend: "+12%",
                    trendType: "up",
                    subtitle: "Submitted this month",
                },
                {
                    title: "Approved",
                    value: "437",
                    trend: "+9%",
                    trendType: "up",
                    subtitle: "Approved claims",
                },
                {
                    title: "Pending",
                    value: "41",
                    trend: "-5%",
                    trendType: "down",
                    subtitle: "Awaiting review",
                },
                {
                    title: "Fraud",
                    value: "8",
                    trend: "-2",
                    trendType: "down",
                    subtitle: "Fraud investigations",
                },
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
            description: "Customer and platform growth.",

            cards: [
                {
                    title: "Customers",
                    value: "3,426",
                    trend: "+15%",
                    trendType: "up",
                    subtitle: "Active subscribers",
                },
                {
                    title: "Devices",
                    value: "8,902",
                    trend: "+11%",
                    trendType: "up",
                    subtitle: "Protected devices",
                },
                {
                    title: "Premium",
                    value: "2,184",
                    trend: "+7%",
                    trendType: "up",
                    subtitle: "Premium subscriptions",
                },
                {
                    title: "Revenue",
                    value: "₦24M",
                    trend: "+18%",
                    trendType: "up",
                    subtitle: "Monthly revenue",
                },
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
    };

    const data = analyticsData[portal];
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
                        trend={card.trend}
                        trendType={card.trendType}
                        subtitle={card.subtitle}
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