import styles from "./PageHeader.module.css";
import type { ReactNode } from "react";

interface PageHeaderProps {
    title: string;
    description: string;
    action?: ReactNode;
}

function PageHeader({
    title,
    description,
    action,
}: PageHeaderProps) {
    return (
        <div className={styles.header}>

            <div className={styles.titleSection}>

                <div className={styles.accent}></div>

                <div>

                    <h1>{title}</h1>

                    <p>{description}</p>

                </div>

            </div>

            {action}

        </div>
    );
}

export default PageHeader;