import styles from "./SummaryCard.module.css";

interface SummaryCardProps {
    title: string;
    value: string | number;
}

function SummaryCard({
    title,
    value,
}: SummaryCardProps) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>

            <span>{value}</span>
        </div>
    );
}

export default SummaryCard;