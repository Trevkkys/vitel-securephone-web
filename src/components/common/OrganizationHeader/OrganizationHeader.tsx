import { NavLink } from "react-router-dom";
import styles from "./OrganizationHeader.module.css";

interface Props {
    title: string;
    subtitle: string;
}

function OrganizationHeader({
    title,
    subtitle,
}: Props) {
    return (
        <>

            <div className={styles.header}>

                <div>

                    <h1>{title}</h1>

                    <p>{subtitle}</p>

                </div>

            </div>

            <div className={styles.tabs}>

                <NavLink
                    end
                    to="/dashboard/organizations/1"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Overview
                </NavLink>

                <NavLink
                    to="/dashboard/organizations/1/modules"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Modules
                </NavLink>

                <NavLink
                    to="/dashboard/organizations/1/administrator"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Administrator
                </NavLink>

                <NavLink
                    to="/dashboard/organizations/1/activity"
                    className={({ isActive }) =>
                        isActive ? styles.active : ""
                    }
                >
                    Activity
                </NavLink>

            </div>

        </>
    );
}

export default OrganizationHeader;