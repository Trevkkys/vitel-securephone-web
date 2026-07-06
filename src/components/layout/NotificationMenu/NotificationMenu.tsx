import { useEffect, useRef, useState } from "react";
import { FiBell } from "react-icons/fi";
import styles from "./NotificationMenu.module.css";

const notifications = [
    {
        title: "Case SP-1008 assigned",
        time: "2 mins ago",
    },
    {
        title: "Claim CL-1032 approved",
        time: "15 mins ago",
    },
    {
        title: "Database backup completed",
        time: "1 hour ago",
    },
];

function NotificationMenu() {
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

    return (
        <div
            className={styles.wrapper}
            ref={menuRef}
        >
            <button
                className={styles.notification}
                onClick={() => setOpen(!open)}
            >
                <FiBell />
            </button>

            {open && (
                <div className={styles.dropdown}>

                    <h4>Notifications</h4>

                    {notifications.map((item) => (
                        <div
                            key={item.title}
                            className={styles.item}
                        >
                            <strong>{item.title}</strong>

                            <small>{item.time}</small>
                        </div>
                    ))}

                    <button className={styles.viewAll}>
                        View all notifications
                    </button>

                </div>
            )}
        </div>
    );
}

export default NotificationMenu;