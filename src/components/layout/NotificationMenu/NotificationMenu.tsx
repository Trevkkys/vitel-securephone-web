import { useEffect, useRef, useState } from "react";
import { FiBell } from "react-icons/fi";
import toast from "react-hot-toast";

import {
    getNotifications,
    markNotificationRead,
    markAllNotificationsRead,
} from "../../../services/notification.service";

import type {
    Notification,
} from "../../../services/notification.service";

import styles from "./NotificationMenu.module.css";

function NotificationMenu() {
    const [open, setOpen] = useState(false);

    const [notifications, setNotifications] = useState<Notification[]>([]);

    const menuRef = useRef<HTMLDivElement>(null);

    async function loadNotifications() {
        try {
            const data = await getNotifications();
            setNotifications(data);
        } catch (error) {
            console.error(error);
            toast.error("Unable to load notifications.");
        }
    }

    useEffect(() => {
        loadNotifications();
    }, []);

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

    async function handleRead(id: number) {
        try {
            await markNotificationRead(id);

            setNotifications((prev) =>
                prev.map((notification) =>
                    notification.id === id
                        ? {
                            ...notification,
                            is_read: true,
                        }
                        : notification
                )
            );
        } catch (error) {
            console.error(error);
            toast.error("Unable to update notification.");
        }
    }

    async function handleReadAll() {
        try {
            await markAllNotificationsRead();

            setNotifications((prev) =>
                prev.map((notification) => ({
                    ...notification,
                    is_read: true,
                }))
            );

            toast.success("All notifications marked as read.");
        } catch (error) {
            console.error(error);
            toast.error("Unable to update notifications.");
        }
    }

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

                {notifications.some(
                    (notification) => !notification.is_read
                ) && <span className={styles.badge}></span>}
            </button>

            {open && (
                <div className={styles.dropdown}>

                    <div className={styles.header}>

                        <h4>Notifications</h4>

                        {notifications.length > 0 && (
                            <button
                                className={styles.markAll}
                                onClick={handleReadAll}
                            >
                                Mark all read
                            </button>
                        )}

                    </div>

                    {notifications.length === 0 ? (

                        <div className={styles.empty}>
                            No notifications available.
                        </div>

                    ) : (

                        notifications.map((item) => (

                            <div
                                key={item.id}
                                className={`${styles.item} ${!item.is_read
                                    ? styles.unread
                                    : ""
                                    }`}
                                onClick={() =>
                                    handleRead(item.id)
                                }
                            >
                                <strong>{item.title}</strong>

                                <p>{item.body}</p>

                                <small>
                                    {new Date(
                                        item.created_at
                                    ).toLocaleString()}
                                </small>

                            </div>

                        ))

                    )}

                    <button className={styles.viewAll}>
                        View all notifications
                    </button>

                </div>
            )}
        </div>
    );
}

export default NotificationMenu;