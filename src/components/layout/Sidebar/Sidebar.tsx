import styles from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { navigation } from "../../../config/navigation";
import { DEV_PORTAL } from "../../../config/devPortal";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

function Sidebar() {
    const getNavClass = ({
        isActive,
    }: {
        isActive: boolean;
    }) =>
        isActive
            ? `${styles.item} ${styles.active}`
            : styles.item;

    // const user = getCurrentUser();

    const currentPortal = DEV_PORTAL;

    const menu = navigation[currentPortal];

    const [openGroups, setOpenGroups] = useState<
        Record<string, boolean>
    >({
        Tracking: true,
    });

    return (
        <div className={styles.sidebar}>
            <h2 className={styles.logo}>
                VITEL
            </h2>

            <nav className={styles.nav}>
                {menu.map((item) => {

                    if (item.children) {

                        return (

                            <div
                                key={item.label}
                                className={styles.group}
                            >

                                <button
                                    className={styles.groupButton}
                                    onClick={() =>
                                        setOpenGroups((prev) => ({
                                            ...prev,
                                            [item.label]: !prev[item.label],
                                        }))
                                    }
                                >

                                    <span>{item.label}</span>

                                    <span>
                                        {openGroups[item.label]
                                            ? <FiChevronDown />
                                            : <FiChevronRight />
                                        }
                                    </span>

                                </button>

                                {openGroups[item.label] && (

                                    <div className={styles.groupItems}>

                                        {item.children.map((child) => (

                                            <NavLink
                                                key={child.path}
                                                to={child.path!}
                                                className={getNavClass}
                                            >
                                                {child.label}
                                            </NavLink>

                                        ))}

                                    </div>

                                )}
                            </div>

                        );

                    }

                    return (

                        <NavLink
                            key={item.path}
                            to={item.path!}
                            end={item.path === "/dashboard"}
                            className={getNavClass}
                        >
                            {item.label}
                        </NavLink>

                    );

                })}
            </nav>
        </div>
    );
}

export default Sidebar;