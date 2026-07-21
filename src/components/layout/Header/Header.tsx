import styles from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../utils/currentUser";
import NotificationMenu from "../NotificationMenu/NotificationMenu";

function Header() {
    const user = getCurrentUser();

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClick);

        return () =>
            document.removeEventListener(
                "mousedown",
                handleClick
            );
    }, []);

    const displayName =
        user?.full_name ||
        user?.email ||
        "User";

    const avatar =
        displayName.charAt(0).toUpperCase();

    const logout = () => {
        localStorage.removeItem("vitel-user");
        localStorage.removeItem("access_token");
        navigate("/");
    };

    return (
        <header className={styles.header}>

            <div>

                <h3 className={styles.title}>
                    Welcome back,
                </h3>

                <p className={styles.subtitle}>
                    {displayName}
                </p>
            </div>

            <div className={styles.rightSection}>

                <NotificationMenu />

                <div
                    className={styles.userMenu}
                    ref={menuRef}
                >

                    <button
                        className={styles.userButton}
                        onClick={() =>
                            setOpen(!open)
                        }
                    >

                        <div className={styles.avatar}>
                            {avatar}
                        </div>

                        <div className={styles.userInfo}>
                            <span>{displayName}</span>
                            <small>{user?.role ?? "Role"}</small>
                        </div>

                    </button>

                    {open && (

                        <div className={styles.dropdown}>

                            <button
                                onClick={() => {

                                    setOpen(false);

                                    navigate("/dashboard/profile");

                                }}
                            >

                                My Profile

                            </button>

                            <button
                                onClick={() =>
                                    navigate("/dashboard/settings")
                                }
                            >
                                Settings
                            </button>

                            <button
                                onClick={logout}
                                className={styles.logout}
                            >
                                Logout
                            </button>

                        </div>

                    )}

                </div>

            </div>

        </header>
    );
}

export default Header;