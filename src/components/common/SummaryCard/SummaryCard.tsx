import styles from "./SummaryCard.module.css";

interface SummaryCardProps {
    title: string;
    value: string | number;
    trend?: string;
    trendType?: "up" | "down";
    subtitle?: string;
}

function SummaryCard({
    title,
    value,
    trend,
    trendType,
    subtitle,
}: SummaryCardProps) {
    return (
        <div className={styles.card}>

            <h3>{title}</h3>

            <span className={styles.value}>
                {value}
            </span>

            {trend && (

                <div className={styles.footer}>

                    <span
                        className={`${styles.trend} ${trendType === "down"
                                ? styles.down
                                : styles.up
                            }`}
                    >
                        {trendType === "down" ? "▼" : "▲"} {trend}
                    </span>

                    {subtitle && (
                        <small className={styles.subtitle}>
                            {subtitle}
                        </small>
                    )}

                </div>

            )}

        </div>
    );
}

export default SummaryCard;