import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
    const getNavClass = ({
        isActive,
    }: {
        isActive: boolean;
    }) =>
        isActive
            ? `${styles.item} ${styles.active}`
            : styles.item;

    return (
        <div className={styles.sidebar}>
            <h2 className={styles.logo}>
                VITEL
            </h2>

            <nav className={styles.nav}>
                <NavLink
                    to="/dashboard"
                    end
                    className={getNavClass}
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/dashboard/devices"
                    className={getNavClass}
                >
                    Devices
                </NavLink>

                <NavLink
                    to="/dashboard/cases"
                    className={getNavClass}
                >
                    Cases
                </NavLink>

                <NavLink
                    to="/dashboard/detection"
                    className={getNavClass}
                >
                    Detection
                </NavLink>

                <NavLink
                    to="/dashboard/insurance"
                    className={getNavClass}
                >
                    Insurance
                </NavLink>

                <NavLink
                    to="/dashboard/analytics"
                    className={getNavClass}
                >
                    Analytics
                </NavLink>

                <NavLink
                    to="/dashboard/audit-logs"
                    className={getNavClass}
                >
                    Audit Logs
                </NavLink>
            </nav>
        </div>
    );
}

export default Sidebar;