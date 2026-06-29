import styles from "./StatCard.module.css";

interface StatCardProps {
    title: string;
    value: string;
}

function StatCard({
    title,
    value,
}: StatCardProps) {
    return (
        <div className={styles.card}>
            <h2>{value}</h2>
            <p>{title}</p>
        </div>
    );
}

export default StatCard;