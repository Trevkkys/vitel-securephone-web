import styles from "./ReportTimelineDrawer.module.css";
import Button from "../../../components/ui/Button/Button";

interface Props {
    open: boolean;
    timeline: any[];
    onClose: () => void;
}

function ReportTimelineDrawer({
    open,
    timeline,
    onClose,
}: Props) {

    if (!open) return null;

    return (

        <div
            className={styles.overlay}
            onClick={onClose}
        >

            <div
                className={styles.drawer}
                onClick={(e) => e.stopPropagation()}
            >

                <div className={styles.header}>

                    <div>

                        <h2>
                            Report Timeline
                        </h2>

                        <p>
                            Investigation progress
                        </p>

                    </div>

                    <Button onClick={onClose}>
                        ✕
                    </Button>

                </div>

                <div className={styles.body}>

                    {timeline.length === 0 ? (

                        <div className={styles.empty}>

                            No timeline available.

                        </div>

                    ) : (

                        timeline.map((item, index) => (

                            <div
                                key={index}
                                className={styles.timelineItem}
                            >

                                <div className={styles.left}>

                                    <span
                                        className={`${styles.dot} ${item.is_completed
                                                ? styles.completed
                                                : styles.pending
                                            }`}
                                    />

                                    {index !==
                                        timeline.length - 1 && (
                                            <span
                                                className={styles.line}
                                            />
                                        )}

                                </div>

                                <div className={styles.right}>

                                    <div
                                        className={styles.titleRow}
                                    >

                                        <h3>

                                            {item.title}

                                        </h3>

                                        <span
                                            className={`${styles.badge} ${item.is_completed
                                                    ? styles.success
                                                    : styles.waiting
                                                }`}
                                        >

                                            {item.is_completed
                                                ? "Completed"
                                                : "Pending"}

                                        </span>

                                    </div>

                                    <p>

                                        {item.description}

                                    </p>

                                    <small>

                                        {new Date(
                                            item.created_at
                                        ).toLocaleString()}

                                    </small>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>

    );

}

export default ReportTimelineDrawer;