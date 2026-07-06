import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";
import styles from "./AnalyticsCharts.module.css";

interface Props {
    title: string;
    data: {
        name: string;
        value: number;
    }[];
}

function AnalyticsBarChart({
    title,
    data,
}: Props) {
    return (
        <div className={styles.chartCard}>

            <h3>{title}</h3>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart data={data}>

                    <CartesianGrid
                        strokeDasharray="4 4"
                    />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="value"
                        fill="var(--primary)"
                        radius={[8, 8, 0, 0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>
    );
}

export default AnalyticsBarChart;
