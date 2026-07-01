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
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            {action}
        </div>
    );
}

export default PageHeader;