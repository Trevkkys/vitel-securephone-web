import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    Cell,
    Legend,
} from "recharts";
import styles from "./AnalyticsCharts.module.css";

interface Props {
    title: string;
    data: {
        name: string;
        value: number;
    }[];
}

const COLORS = [
    "var(--primary)",
    "var(--primary-soft)",
    "var(--primary-softer)",
    "var(--primary-softest)",
];

function AnalyticsPieChart({
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

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={95}
                    >

                        {data.map((_, index) => (

                            <Cell
                                key={index}
                                fill={
                                    COLORS[
                                    index %
                                    COLORS.length
                                    ]
                                }
                            />

                        ))}

                    </Pie>

                    <Legend />

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>
    );
}

export default AnalyticsPieChart;
