import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import styles from "./AnalyticsCharts.module.css";

interface Props {
    title: string;
    data: {
        month: string;
        value: number;
    }[];
}

function AnalyticsLineChart({
    title,
    data,
}: Props) {
    return (
        <div className={styles.chartCard}>

            <h3>{title}</h3>

            <ResponsiveContainer
                width="100%"
                height={320}
            >
                <LineChart data={data}>

                    <CartesianGrid
                        strokeDasharray="4 4"
                    />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="var(--primary)"
                        strokeWidth={4}
                        dot={{
                            r: 5,
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>
    );
}

export default AnalyticsLineChart;
