import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { getPortalFromRole } from "../../../utils/getPortalFromRole";
import styles from "./Sidebar.module.css";
import { navigation } from "../../../config/navigation";
import { getCurrentUser } from "../../../utils/currentUser";
import Modal, {
    ModalFooter,
} from "../../ui/Modal/Modal";

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

    const user = getCurrentUser();

    const navigate = useNavigate();

    const [showLogoutModal, setShowLogoutModal] =
        useState(false);

    const handleLogout = () => {
        localStorage.removeItem("vitel-user");
        navigate("/");
    };

    const portal = getPortalFromRole(user?.role);

    const menu = navigation[portal];

    const [openGroups, setOpenGroups] = useState<
        Record<string, boolean>
    >({
        Tracking: true,
    });


    return (
        <div className={styles.sidebar}>
            <h2 className={styles.logo}>
                <span className={styles.vitel}>
                    Vitel
                </span>

                <span className={styles.secure}>
                    SecurePhone
                </span>
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

                                    <span className={styles.groupTitle}>

                                        {item.icon && <item.icon className={styles.icon} />}

                                        <span>{item.label}</span>

                                    </span>

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

                            {item.icon && (
                                <item.icon className={styles.icon} />
                            )}

                            <span>{item.label}</span>

                        </NavLink>

                    );

                })}
            </nav>

            <div className={styles.footer}>

                <button
                    className={styles.logout}
                    onClick={() => setShowLogoutModal(true)}
                >
                    🚪 Logout
                </button>

            </div>

            <Modal
                open={showLogoutModal}
                title="Logout"
                onClose={() => setShowLogoutModal(false)}
            >

                <p className={styles.logoutText}>
                    Are you sure you want to logout?
                </p>

                <ModalFooter>

                    <button
                        className={styles.cancelButton}
                        onClick={() =>
                            setShowLogoutModal(false)
                        }
                    >
                        Cancel
                    </button>

                    <button
                        className={styles.confirmButton}
                        onClick={handleLogout}
                    >
                        Logout
                    </button>

                </ModalFooter>

            </Modal>

        </div>
    );
}

export default Sidebar;